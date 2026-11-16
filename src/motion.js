import { useLayoutEffect } from 'react'

/*
 * Site-wide "organic" motion, set up once from <App>:
 *
 * 1. Scroll reveal — headings, text, list items, buttons and photos in <main> and the footer
 *    ease in as they enter the viewport, staggered in reading order. Elements are picked up
 *    automatically (also ones React adds later); the outermost match wins so a card or list
 *    item reveals as one piece. Opt out with data-no-reveal on any ancestor; anything that
 *    already has its own `animate-*` entrance (heroes, dialogs) is left alone.
 * 2. Parallax — elements with data-parallax drift slightly slower than the page.
 * 3. Page transitions — internal links fade the page out before navigating; pages fade in.
 *
 * All of it is skipped when the visitor prefers reduced motion (the `motion` class on <html>
 * is only set otherwise, in main.jsx).
 */

const TARGETS =
  'h1, h2, h3, h4, p, li, dt, dd, blockquote, figure, form, img, video, [data-reveal]'
const SCOPE = 'main, footer'
const STAGGER_MS = 90
const MAX_STAGGER = 6

export const motionEnabled = () => document.documentElement.classList.contains('motion')

function variantOf(el) {
  const tag = el.tagName
  if (tag === 'IMG' || tag === 'VIDEO') return 'media'
  if (tag === 'H1' || tag === 'H2') return 'heading'
  if (el.hasAttribute('data-reveal')) return 'lift'
  // A card or list item that is only a picture reveals like a picture.
  if (el.querySelector('img, video') && !el.textContent.trim()) return 'media'
  return 'text'
}

function isCandidate(el, scopeRoot) {
  if (!scopeRoot.contains(el) || el.dataset.rv) return false
  if (el.closest('[data-no-reveal]')) return false
  if (el.closest('[class*="animate-"]')) return false // already has its own entrance
  // Outermost wins: skip anything inside another (pending or done) reveal target.
  const parent = el.parentElement?.closest(TARGETS)
  return !(parent && el.closest(SCOPE)?.contains(parent))
}

function setupReveal() {
  const pending = new Set()

  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .map((e) => e.target)
        .sort((a, b) => {
          const ra = a.getBoundingClientRect()
          const rb = b.getBoundingClientRect()
          return ra.top - rb.top || ra.left - rb.left
        })
      visible.forEach((el, i) => {
        io.unobserve(el)
        pending.delete(el)
        el.style.setProperty('--rv-delay', `${Math.min(i, MAX_STAGGER) * STAGGER_MS}ms`)
        el.classList.add('rv-in')
        // Hand the element back to its own styles (hover transitions etc.) once it has landed.
        el.addEventListener(
          'animationend',
          () => {
            el.classList.remove('rv', 'rv-in')
            el.style.removeProperty('--rv-delay')
            el.dataset.rv = 'done'
          },
          { once: true },
        )
      })
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0 },
  )

  const scan = (root) => {
    for (const scopeRoot of document.querySelectorAll(SCOPE)) {
      if (!root.contains(scopeRoot) && !scopeRoot.contains(root)) continue
      const base = scopeRoot.contains(root) ? root : scopeRoot
      const els = base.matches?.(TARGETS) ? [base, ...base.querySelectorAll(TARGETS)] : base.querySelectorAll(TARGETS)
      for (const el of els) {
        if (!isCandidate(el, scopeRoot)) continue
        el.dataset.rv = variantOf(el)
        el.classList.add('rv')
        pending.add(el)
        io.observe(el)
      }
    }
  }

  scan(document.body)

  // React renders more later (filters, accordions, language switch): pick those up too.
  const mo = new MutationObserver((records) => {
    for (const r of records) for (const n of r.addedNodes) if (n.nodeType === 1) scan(n)
  })
  mo.observe(document.body, { childList: true, subtree: true })

  return () => {
    io.disconnect()
    mo.disconnect()
    for (const el of pending) {
      el.classList.remove('rv', 'rv-in')
      delete el.dataset.rv
    }
  }
}

function setupParallax() {
  let frame = 0
  const update = () => {
    frame = 0
    const vh = window.innerHeight
    for (const el of document.querySelectorAll('[data-parallax]')) {
      const box = (el.parentElement ?? el).getBoundingClientRect()
      if (box.bottom < -100 || box.top > vh + 100) continue
      const strength = Number(el.dataset.parallax) || 60
      // -1 when the box is entering from below, +1 when leaving at the top.
      const progress = (vh / 2 - (box.top + box.height / 2)) / (vh / 2 + box.height / 2)
      el.style.setProperty('--parallax', `${(progress * strength).toFixed(1)}px`)
    }
  }
  const onScroll = () => {
    if (!frame) frame = requestAnimationFrame(update)
  }
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  return () => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
    cancelAnimationFrame(frame)
  }
}

function setupPageTransitions() {
  const root = document.documentElement
  const onClick = (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    const a = e.target.closest?.('a[href]')
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return
    const url = new URL(a.href, window.location.href)
    if (url.origin !== window.location.origin) return
    // Same page (anchors like #request): let the browser scroll smoothly.
    if (url.pathname === window.location.pathname) return
    e.preventDefault()
    root.classList.add('is-leaving')
    setTimeout(() => window.location.assign(url.href), 320)
  }
  // Coming back via the back button restores the page from cache — undo the fade.
  const onShow = () => root.classList.remove('is-leaving')
  document.addEventListener('click', onClick)
  window.addEventListener('pageshow', onShow)
  return () => {
    document.removeEventListener('click', onClick)
    window.removeEventListener('pageshow', onShow)
  }
}

/** Runs before the first paint so nothing flashes before it starts hidden. */
export function useOrganicMotion() {
  useLayoutEffect(() => {
    if (!motionEnabled()) return
    const cleanups = [setupReveal(), setupParallax(), setupPageTransitions()]
    return () => cleanups.forEach((fn) => fn())
  }, [])
}
