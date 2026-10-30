import { useState } from 'react'
import AwertonMark from '../brand/AwertonMark'
import AwertonWordmark from '../brand/AwertonWordmark'
import { ArrowRightIcon, FacebookIcon, InstagramIcon, XIcon } from '../icons'
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from '../../siteConfig'

const columns = [
  { title: 'Info', links: ['Terms & Conditions', 'Privacy Policy', 'Cookies Info'] },
  { title: 'Main', links: ['Apartments', 'Our services', 'Jardin Restaurant', 'SPA Space'] },
  { title: 'Other', links: ['Contacts', 'Rules', 'Blog'] },
]

const socials = [
  { label: 'Facebook', icon: FacebookIcon, href: '#' },
  { label: 'Instagram', icon: InstagramIcon, href: '#' },
  { label: 'X', icon: XIcon, href: '#' },
]

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    // No backend yet — wire this to your provider (Mailchimp, Resend, etc.).
    setSubmitted(true)
  }

  return (
    <div className="max-w-[372px]">
      <h3 className="font-serif text-lg font-medium uppercase">Subscribe our newsletters</h3>
      <p className="mt-6 text-base leading-[1.3] text-graphite/70">
        Join our newsletter to receive 10% off your first purchase while gaining access to insights
        on the latest launches, deals, and seasonal updates.
      </p>
      {submitted ? (
        <p role="status" className="mt-9 border-b border-graphite/40 pb-4 font-serif text-base text-stone">
          Thank you — you're on the list.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-9 flex items-center border-b border-graphite/40 pb-4 transition-colors focus-within:border-stone">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            className="min-w-0 flex-1 bg-transparent font-sans text-base font-light text-graphite outline-none placeholder:text-graphite/60"
          />
          <button
            type="submit"
            className="group flex items-center gap-2.5 font-serif text-base font-medium uppercase transition hover:text-stone"
          >
            Join
            <ArrowRightIcon className="h-3.5 w-[18px] transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      )}
    </div>
  )
}

export default function Footer() {
  return (
    <footer id="contacts" className="relative overflow-hidden bg-parchment text-graphite">
      {/* Same city sketch as the dark version, inked dark for the light ground. */}
      <div
        className="pointer-events-none absolute inset-0 bg-no-repeat opacity-[0.08] brightness-0"
        style={{
          backgroundImage: 'url(/images/footer-sketch.webp)',
          backgroundSize: 'max(1500px, 104%) auto',
          backgroundPosition: '40% 0',
        }}
        aria-hidden="true"
      />

      <div className="container-page relative pt-12 pb-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <AwertonWordmark className="h-auto w-[176px] text-graphite" />
            <p className="mt-5 font-serif text-base text-graphite/80">
              Management you can trust. Results you can feel.
            </p>
          </div>
          <ul className="flex gap-[11px]">
            {socials.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex h-[41px] w-[41px] items-center justify-center rounded-full border border-graphite/70 text-graphite transition hover:border-stone hover:bg-stone hover:text-cream"
                >
                  <Icon className="h-6 w-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-[51px] grid grid-cols-2 gap-10 md:grid-cols-[260px_260px_1fr] lg:grid-cols-[260px_260px_1fr_372px]">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-serif text-lg font-medium uppercase">{col.title}</h3>
              <ul className="mt-[22px] space-y-[9px]">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-sans text-base font-light text-graphite/80 transition hover:text-stone">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Newsletter />
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-[70px]">
          <AwertonMark className="h-[75px] w-auto text-gold" />
        </div>

        <div className="mt-[70px] grid gap-6 border-t border-graphite/15 pt-6 text-center sm:grid-cols-3 sm:items-end sm:text-left">
          <div>
            <p className="font-sans text-sm font-normal">Email</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-1 block font-sans text-base font-light text-graphite/70 transition hover:text-stone"
            >
              {EMAIL}
            </a>
          </div>
          <p className="order-last font-sans text-sm font-light text-graphite/60 sm:order-none sm:pb-1 sm:text-center">
            Awerton {new Date().getFullYear()}. All Rights Reserved
          </p>
          <div className="sm:text-right">
            <p className="font-sans text-sm font-normal">Phone Number</p>
            <a
              href={PHONE_HREF}
              className="mt-1 block font-sans text-base font-light text-graphite/70 transition hover:text-stone"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
