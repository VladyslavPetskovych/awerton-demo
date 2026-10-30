import { useEffect, useState } from 'react'
import AwertonMark from '../brand/AwertonMark'
import AwertonWordmark from '../brand/AwertonWordmark'
import { ChevronDownIcon, GlobeIcon, MenuIcon } from '../icons'
import { PillButton } from '../ui'

export const navLinks = [
  { href: '#how-we-work', label: 'Our services' },
  { href: '#portfolio', label: 'Cases and objects' },
  { href: '#stories', label: 'Moments' },
  { href: '#contacts', label: 'Contacts' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="absolute inset-x-0 top-0 z-30 animate-fade-in text-ivory">
      <div className="container-page">
        <div className="relative flex h-[76px] items-center justify-between">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex items-center gap-3.5 font-sans text-base uppercase transition hover:text-gold"
            aria-expanded={open}
            aria-controls="site-menu"
          >
            <MenuIcon className="h-[17px] w-5" />
            <span className="hidden sm:inline">Menu</span>
          </button>

          <a href="#top" className="absolute left-1/2 -translate-x-1/2" aria-label="AWERTON — home">
            <AwertonWordmark className="h-auto w-[112px] text-ivory sm:w-[150px]" />
          </a>

          <div className="flex items-center gap-4 sm:gap-9">
            <button
              type="button"
              className="hidden items-center gap-2 font-sans text-base uppercase transition hover:text-gold sm:flex"
              aria-label="Language: English"
            >
              <GlobeIcon className="h-[21px] w-[21px]" />
              EN
              <ChevronDownIcon className="h-[9px] w-[17px]" />
            </button>
            <PillButton href="#request" tone="ivory" className="h-10 px-3 text-sm sm:h-[46px] sm:px-4 sm:text-base">
              Contact us
            </PillButton>
          </div>
        </div>

        <div className="h-px bg-ivory/60" />

        <nav aria-label="Primary" className="hidden justify-center gap-[33px] pt-[15px] md:flex">
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
        className={`fixed inset-0 z-40 flex flex-col bg-ink transition-opacity duration-500 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
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
