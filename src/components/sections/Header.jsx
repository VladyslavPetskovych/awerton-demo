import { useEffect, useRef, useState } from 'react'
import { LANGUAGES, useI18n } from '../../i18n'
import AwertonMark from '../brand/AwertonMark'
import AwertonWordmark from '../brand/AwertonWordmark'
import { ChevronDownIcon, GlobeIcon, MenuIcon } from '../icons'
import { PillButton } from '../ui'

// Labels come from t.nav[key].
export const navLinks = [
  { href: '/services', key: 'services' },
  { href: '/#portfolio', key: 'portfolio' },
  { href: '/guides', key: 'guides' },
  { href: '#contacts', key: 'contacts' },
]

// Scroll distance (px) after which the full bar collapses into the corner dock.
const COLLAPSE_AT = 48

// Shared easing — a soft "expo out" that matches the site's fade-up animation.
const EASE = 'ease-[cubic-bezier(0.22,1,0.36,1)]'

function useScrolled(threshold) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setScrolled(window.scrollY > threshold)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [threshold])

  return scrolled
}

// Mobile & tablet only — matches Tailwind's `lg` breakpoint (desktop keeps the static header).
const COMPACT_QUERY = '(max-width: 1023.98px)'

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}

function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const current = LANGUAGES.find((l) => l.code === lang)

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return
    const onPointer = (e) => !rootRef.current?.contains(e.target) && setOpen(false)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onPointer)
    window.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={rootRef} className="relative hidden sm:block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 font-sans text-base uppercase transition hover:text-gold"
        aria-label={`${t.header.language}: ${current.label}`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <GlobeIcon className="h-[21px] w-[21px]" />
        {current.short}
        <ChevronDownIcon
          className={`h-[9px] w-[17px] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <ul
        inert={!open}
        className={`absolute top-full right-0 mt-3 min-w-[180px] overflow-hidden rounded-md border border-ivory/15 bg-ink/95 py-1.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur-md transition-[opacity,translate] duration-300 ${EASE} ${
          open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'
        }`}
      >
        {LANGUAGES.map((l) => (
          <li key={l.code}>
            <button
              type="button"
              lang={l.code}
              aria-current={l.code === lang ? 'true' : undefined}
              onClick={() => {
                setLang(l.code)
                setOpen(false)
              }}
              className={`flex w-full items-center gap-3 px-4 py-2.5 text-left font-sans text-sm transition-colors hover:bg-ivory/8 hover:text-gold ${
                l.code === lang ? 'text-gold' : 'text-ivory'
              }`}
            >
              <span className="w-6 font-medium">{l.short}</span>
              <span className="font-light">{l.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Header() {
  const { lang, setLang, t } = useI18n()
  const [open, setOpen] = useState(false)
  const isCompactViewport = useMediaQuery(COMPACT_QUERY)
  const pastTop = useScrolled(COLLAPSE_AT)
  // Mobile/tablet: collapse into the corner dock. Desktop: keep the full bar on a frosted backdrop.
  const scrolled = pastTop && isCompactViewport
  const frosted = pastTop && !isCompactViewport

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Staggered exit/entry: on collapse the nav leaves first and the top row last;
  // on expand the order reverses so the bar rebuilds from the top down.
  const fade = (outDelay, inDelay) =>
    `transition-[opacity,translate,filter] duration-500 ${EASE} ${
      scrolled
        ? `pointer-events-none -translate-y-3 opacity-0 blur-[2px] ${outDelay}`
        : `pointer-events-auto translate-y-0 opacity-100 blur-none ${inDelay}`
    }`

  return (
    // The header itself ignores pointer events so the empty, transparent area never blocks the page;
    // interactive children opt back in.
    // Always fixed. Mobile/tablet collapse into the corner dock; desktop gains a frosted backdrop.
    <header className="pointer-events-none fixed inset-x-0 top-0 z-30 animate-fade-in text-ivory">
      {/* Solid brand-black backdrop (desktop), shown once the page scrolls. Kept on its own layer
          so it can fade in without affecting the header's children. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 bg-ink transition-opacity duration-700 ${EASE} ${
          frosted ? 'pointer-events-auto opacity-100' : 'opacity-0'
        }`}
      />
      <div className="container-page">
        {/* 3-column grid keeps the logo centred while guaranteeing it never overlaps the side controls. */}
        <div className="grid h-[76px] grid-cols-[1fr_auto_1fr] items-center gap-2">
          {/* Corner dock — the burger always lives here; on scroll it gains a glass pill and the crystal mark. */}
          <div
            className={`pointer-events-auto -ml-3 flex h-12 items-center justify-self-start rounded-full border px-3 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-700 md:-ml-4 md:px-4 ${EASE} ${
              scrolled
                ? 'border-ivory/10 bg-ink shadow-[0_12px_32px_-14px_rgba(0,0,0,0.6)]'
                : 'border-transparent bg-transparent shadow-none backdrop-blur-none'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex items-center font-sans text-base uppercase transition-colors hover:text-gold"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={t.header.openMenu}
            >
              <MenuIcon className="h-[17px] w-5 shrink-0" />
              <span
                aria-hidden="true"
                className={`hidden overflow-hidden whitespace-nowrap transition-[max-width,opacity,margin] duration-500 sm:inline-block ${EASE} ${
                  scrolled ? 'ml-0 max-w-0 opacity-0' : 'ml-3.5 max-w-20 opacity-100 delay-150'
                }`}
              >
                {t.header.menu}
              </span>
            </button>

            <a
              href="/"
              aria-label={t.header.home}
              inert={!scrolled}
              className={`group flex items-center overflow-hidden transition-[width,margin,opacity] duration-700 ${EASE} ${
                scrolled ? 'ml-3.5 w-[22px] opacity-100 delay-100' : 'ml-0 w-0 opacity-0'
              }`}
            >
              <AwertonMark
                aria-hidden="true"
                className={`h-[30px] w-[22px] shrink-0 text-gold transition-transform duration-700 group-hover:scale-110 ${EASE} ${
                  scrolled ? 'rotate-0 scale-100 delay-150' : '-rotate-90 scale-50'
                }`}
              />
            </a>
          </div>

          <a href="/" aria-label={t.header.home} inert={scrolled} className={fade('delay-150', 'delay-0')}>
            <AwertonWordmark className="h-auto w-[96px] text-ivory min-[400px]:w-[112px] sm:w-[150px]" />
          </a>

          <div
            inert={scrolled}
            // z-20 keeps the language dropdown above the nav row it opens over (otherwise the
            // nav's box swallows clicks on the lower options).
            className={`relative z-20 flex items-center gap-4 justify-self-end sm:gap-9 ${fade('delay-150', 'delay-0')}`}
          >
            <LanguageSwitcher />
            <PillButton href="#request" tone="ivory" className="h-10 px-2.5 text-[13px] min-[400px]:px-3 min-[400px]:text-sm sm:h-[46px] sm:px-4 sm:text-base">
              <span className="min-[400px]:hidden">{t.header.contactShort}</span>
              <span className="hidden min-[400px]:inline">{t.header.contactLong}</span>
            </PillButton>
          </div>
        </div>

        {/* Divider retracts into / draws out from the centre. */}
        <div
          className={`h-px origin-center bg-ivory/60 transition-[scale,opacity] delay-75 duration-700 ${EASE} ${
            scrolled ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'
          }`}
        />

        <nav
          aria-label={t.header.primaryNav}
          inert={scrolled}
          className={`hidden justify-center gap-[33px] pt-[15px] pb-[15px] md:flex ${fade('delay-0', 'delay-150')}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-base font-light uppercase transition hover:text-gold"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>
      </div>

      {/* Full-screen menu */}
      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label={t.header.siteMenu}
        inert={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-ink transition-opacity duration-500 ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="container-page flex h-[76px] items-center justify-between">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="font-sans text-base uppercase transition hover:text-gold"
          >
            {t.header.close}
          </button>
          <AwertonMark className="h-[52px] w-auto text-gold" />
          <span className="w-12" />
        </div>
        <nav aria-label={t.header.menuNav} className="flex flex-1 flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-5 text-center font-serif text-3xl uppercase text-ivory transition hover:text-gold md:text-5xl"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>
        {/* Language switch for every screen size (the header globe is hidden on phones). */}
        <div role="group" aria-label={t.header.language} className="flex justify-center gap-2 pb-6">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              lang={l.code}
              aria-pressed={l.code === lang}
              aria-label={l.label}
              onClick={() => setLang(l.code)}
              className={`h-10 rounded-full border px-4 font-sans text-sm uppercase transition-colors ${
                l.code === lang
                  ? 'border-gold bg-gold text-ink'
                  : 'border-ivory/30 text-ivory hover:border-gold hover:text-gold'
              }`}
            >
              {l.short}
            </button>
          ))}
        </div>
        <p className="pb-10 text-center font-serif text-sm italic text-ivory/55">{t.tagline}</p>
      </div>
    </header>
  )
}
