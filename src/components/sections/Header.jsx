import { useEffect, useState } from 'react'
import AwertonMark from '../brand/AwertonMark'
import AwertonWordmark from '../brand/AwertonWordmark'
import { ChevronDownIcon, GlobeIcon, MenuIcon } from '../icons'
import { PillButton } from '../ui'

export const navLinks = [
  { href: '/services', label: 'Our services' },
  { href: '/#portfolio', label: 'Cases and objects' },
  { href: '/#guides', label: 'Guides & tips' },
  { href: '#contacts', label: 'Contacts' },
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

export default function Header() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(COLLAPSE_AT)

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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-30 animate-fade-in text-ivory">
      <div className="container-page">
        {/* 3-column grid keeps the logo centred while guaranteeing it never overlaps the side controls. */}
        <div className="grid h-[76px] grid-cols-[1fr_auto_1fr] items-center gap-2">
          {/* Corner dock — the burger always lives here; on scroll it gains a glass pill and the crystal mark. */}
          <div
            className={`pointer-events-auto -ml-3 flex h-12 items-center justify-self-start rounded-full border px-3 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-700 md:-ml-4 md:px-4 ${EASE} ${
              scrolled
                ? 'border-ivory/10 bg-ink/70 shadow-[0_12px_32px_-14px_rgba(0,0,0,0.6)] backdrop-blur-md'
                : 'border-transparent bg-transparent shadow-none backdrop-blur-none'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex items-center font-sans text-base uppercase transition-colors hover:text-gold"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label="Open menu"
            >
              <MenuIcon className="h-[17px] w-5 shrink-0" />
              <span
                aria-hidden="true"
                className={`hidden overflow-hidden whitespace-nowrap transition-[max-width,opacity,margin] duration-500 sm:inline-block ${EASE} ${
                  scrolled ? 'ml-0 max-w-0 opacity-0' : 'ml-3.5 max-w-16 opacity-100 delay-150'
                }`}
              >
                Menu
              </span>
            </button>

            <a
              href="/"
              aria-label="AWERTON — home"
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

          <a href="/" aria-label="AWERTON — home" inert={scrolled} className={fade('delay-150', 'delay-0')}>
            <AwertonWordmark className="h-auto w-[96px] text-ivory min-[400px]:w-[112px] sm:w-[150px]" />
          </a>

          <div
            inert={scrolled}
            className={`flex items-center gap-4 justify-self-end sm:gap-9 ${fade('delay-150', 'delay-0')}`}
          >
            <button
              type="button"
              className="hidden items-center gap-2 font-sans text-base uppercase transition hover:text-gold sm:flex"
              aria-label="Language: English"
            >
              <GlobeIcon className="h-[21px] w-[21px]" />
              EN
              <ChevronDownIcon className="h-[9px] w-[17px]" />
            </button>
            <PillButton href="#request" tone="ivory" className="h-10 px-2.5 text-[13px] min-[400px]:px-3 min-[400px]:text-sm sm:h-[46px] sm:px-4 sm:text-base">
              Contact<span className="hidden min-[400px]:inline">&nbsp;us</span>
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
          aria-label="Primary"
          inert={scrolled}
          className={`hidden justify-center gap-[33px] pt-[15px] md:flex ${fade('delay-0', 'delay-150')}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-base font-light uppercase transition hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Full-screen menu */}
      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
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
            Close
          </button>
          <AwertonMark className="h-[52px] w-auto text-gold" />
          <span className="w-12" />
        </div>
        <nav aria-label="Menu" className="flex flex-1 flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-serif text-3xl uppercase text-ivory transition hover:text-gold md:text-5xl"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="pb-10 text-center font-serif text-sm italic text-ivory/55">
          Management you can trust. Results you can feel.
        </p>
      </div>
    </header>
  )
}
