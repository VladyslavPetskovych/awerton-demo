import { useState } from 'react'
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, REQUEST_ENDPOINT, SITE_URL } from '../../siteConfig'
import { GlobeLineIcon, MailIcon, PhoneIcon, SparkleShape } from '../icons'
import { Eyebrow, PillButton, SectionTitle } from '../ui'

const contacts = [
  { label: 'Phone', value: PHONE_DISPLAY, href: PHONE_HREF, icon: PhoneIcon },
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, icon: MailIcon },
  { label: 'Website', value: SITE_URL.replace('https://', ''), href: SITE_URL, icon: GlobeLineIcon },
]

const fieldClass =
  'w-full border-b border-ivory/30 bg-transparent pt-3 pb-4 font-sans text-base font-light md:text-lg text-ivory outline-none transition-colors placeholder:text-ivory/35 focus:border-gold'
const labelClass = 'font-sans text-xs font-normal tracking-[0.18em] text-ivory/60 uppercase'

function RequestForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    if (data._honey) return // bot filled the hidden field
    setStatus('sending')
    try {
      const res = await fetch(REQUEST_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          message: data.message,
          _subject: 'New callback request — awerton.com',
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const json = await res.json().catch(() => ({}))
      setStatus(res.ok && String(json.success) !== 'false' ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="flex h-full flex-col justify-center">
        <SparkleShape className="h-14 w-auto self-start text-gold" />
        <p className="mt-6 font-serif text-2xl font-medium uppercase">Thank you</p>
        <p className="mt-3 max-w-[360px] text-base leading-[1.375] text-ivory/70">
          Your request has been received. Our manager will call you back shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-9 md:gap-10">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div>
        <label htmlFor="request-name" className={labelClass}>
          Your name
        </label>
        <input
          id="request-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="request-phone" className={labelClass}>
          Phone number <span className="text-gold">*</span>
        </label>
        <input
          id="request-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          pattern="[+]?[0-9\s()\-]{9,20}"
          title="Enter a phone number, e.g. +380 77 697 00 00"
          placeholder="+380 __ ___ __ __"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="request-message" className={labelClass}>
          Comment
        </label>
        <textarea
          id="request-message"
          name="message"
          rows={3}
          placeholder="What would you like to discuss?"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <PillButton
          type="submit"
          tone="ivory"
          disabled={status === 'sending'}
          className="px-7 disabled:cursor-wait disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Request a call'}
        </PillButton>
        <p className="max-w-[260px] text-xs leading-[1.4] text-ivory/45">
          By submitting, you agree to be contacted about your request.
        </p>
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm text-[#e0b4a4]">
          Something went wrong. Please call us at{' '}
          <a href={PHONE_HREF} className="underline underline-offset-2">
            {PHONE_DISPLAY}
          </a>{' '}
          or write to{' '}
          <a href={`mailto:${EMAIL}`} className="underline underline-offset-2">
            {EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  )
}

export default function Request() {
  return (
    <section id="request" className="relative overflow-hidden bg-charcoal text-ivory">
      <div
        className="pointer-events-none absolute inset-0 bg-no-repeat opacity-[0.09]"
        style={{
          backgroundImage: 'url(/images/footer-sketch.webp)',
          backgroundSize: 'max(1600px, 110%) auto',
          backgroundPosition: '35% 30%',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-64 -left-48 h-[720px] w-[720px] rounded-full bg-gold/10 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-56 -right-40 h-[560px] w-[560px] rounded-full bg-gold/[0.07] blur-[150px]"
        aria-hidden="true"
      />
      <SparkleShape className="pointer-events-none absolute top-1/2 left-[47%] hidden h-[620px] w-auto -translate-y-1/2 text-gold/[0.06] lg:block" />

      <div className="container-page relative grid gap-16 py-20 md:py-28 lg:min-h-[900px] lg:grid-cols-[1fr_minmax(0,580px)] lg:items-center lg:gap-x-20 lg:py-[130px]">
        <div className="flex flex-col lg:h-full lg:justify-between lg:py-4">
          <div>
            <Eyebrow className="text-gold opacity-100">Contact</Eyebrow>
            <SectionTitle className="mt-3 lg:text-[40px] xl:text-[46px]">
              Leave a request —
              <br className="hidden sm:block" /> we will call you back
            </SectionTitle>
            <p className="mt-8 max-w-[480px] text-base leading-[1.45] text-ivory/70 md:text-lg">
              Share your phone number and our manager will contact you to discuss your goals,
              available properties and the AWERTON management model.
            </p>
          </div>

          <ul className="mt-14 grid gap-7 border-t border-ivory/12 pt-10 lg:mt-20">
            {contacts.map(({ label, value, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} className="group flex items-center gap-6">
                  <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block font-sans text-xs tracking-[0.18em] text-ivory/55 uppercase">
                      {label}
                    </span>
                    <span className="mt-1 block font-serif text-xl transition-colors group-hover:text-gold md:text-2xl">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-md border border-ivory/12 bg-ink/70 p-7 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] backdrop-blur-sm md:p-12 lg:px-14 lg:py-16">
          <p className="mb-10 font-serif text-xl font-medium uppercase md:text-2xl">Your details</p>
          <RequestForm />
        </div>
      </div>

      <div
        className="h-px bg-linear-to-r from-transparent via-gold/35 to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}
