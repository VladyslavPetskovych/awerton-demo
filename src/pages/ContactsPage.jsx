import { useEffect, useRef, useState } from 'react'
import {
  ClockIcon,
  GlobeLineIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  SparkleShape,
} from '../components/icons'
import { PillButton } from '../components/ui'
import { useDocumentTitle, useI18n } from '../i18n'
import {
  EMAIL,
  OFFICE_MAP_QUERY,
  PHONE_DISPLAY,
  PHONE_HREF,
  REQUEST_ENDPOINT,
  SITE_URL,
} from '../siteConfig'

/*
 * Contacts page — built to the "Awerton design (4)" PDF (page 8, 1440px frame).
 * Desktop sizes are the frame's own measurements; below `lg` the sections stack.
 */

const eyebrow = 'font-sans text-base leading-none font-light uppercase lg:text-lg'
const body = 'font-sans text-base leading-[22px] font-light'

const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_MAP_QUERY)}`

function ContactHero() {
  const { t } = useI18n()
  const copy = t.contacts.hero
  const info = t.contacts.info

  const items = [
    { label: info.email, value: EMAIL, href: `mailto:${EMAIL}`, icon: MailIcon },
    { label: info.phone, value: PHONE_DISPLAY, href: PHONE_HREF, icon: PhoneIcon },
    { label: info.website, value: SITE_URL.replace('https://', ''), href: SITE_URL, icon: GlobeLineIcon },
    { label: info.hours, value: info.hoursValue, icon: ClockIcon },
    { label: info.address, value: info.addressValue, href: mapsLink, external: true, icon: PinIcon },
  ]

  return (
    <section id="top" className="relative overflow-hidden bg-[#161515] text-ivory">
      {/* Full-width rule under the header nav (desktop only — the mobile header has its own). */}
      <div className="absolute inset-x-0 top-[123px] hidden h-px bg-ivory/40 md:block" aria-hidden="true" />

      <SparkleShape className="pointer-events-none absolute top-[116px] right-[-14px] w-[78px] text-stone/25 lg:top-[405px] lg:right-auto lg:left-[calc(50%-183px)] lg:w-[175px]" />

      <div className="relative pt-[108px] md:pt-[155px] lg:grid lg:grid-cols-[712fr_728fr] lg:pt-[123px]">
        <div className="px-[25px] md:px-10 lg:pt-[63px] lg:pr-10 lg:pb-[61px] xl:pl-[60px]">
          <p className={`${eyebrow} text-white/85`}>{copy.eyebrow}</p>
          <h1 className="mt-2 font-serif text-[36px] lg:mt-[10px] leading-[45px] font-normal uppercase lg:text-[40px] lg:leading-[44px]">
            {copy.title}
          </h1>
          <p className={`${body} mt-5 max-w-[540px] text-ivory/85 lg:mt-[18px]`}>{copy.text}</p>

          <ul className="mt-10 grid gap-[33px] lg:mt-[60px]">
            {items.map(({ label, value, href, external, icon: Icon }) => {
              const content = (
                <>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-ivory/25 transition-colors duration-300 group-hover:border-gold group-hover:text-gold">
                    <Icon className="size-[22px]" />
                  </span>
                  <span className="-mt-[3px] min-w-0">
                    <span className="block font-sans text-sm leading-4 font-light uppercase text-ivory/85">
                      {label}
                    </span>
                    <span className="mt-px block font-serif text-lg leading-[22px] font-normal transition-colors duration-300 group-hover:text-gold">
                      {value}
                    </span>
                  </span>
                </>
              )
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="group flex items-start gap-3"
                      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-start gap-3">{content}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="relative mt-[46px] aspect-[430/455] overflow-hidden md:aspect-[16/11] lg:mt-0 lg:aspect-auto">
          <img
            src="/images/contact-hero.webp"
            data-parallax="60"
            alt={copy.imageAlt}
            className="absolute inset-0 h-full w-full animate-fade-in object-cover object-center"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}

/** Mouse drag-to-scroll for a horizontal rail (touch and trackpads scroll natively). */
function useDragScroll() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let startX = 0
    let startLeft = 0
    let pointer = null
    let dragging = false

    const onDown = (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return
      pointer = e.pointerId
      startX = e.clientX
      startLeft = el.scrollLeft
    }
    const onMove = (e) => {
      if (e.pointerId !== pointer) return
      const dx = e.clientX - startX
      if (!dragging && Math.abs(dx) > 4) {
        dragging = true
        el.setPointerCapture(pointer)
        el.dataset.dragging = ''
      }
      if (dragging) el.scrollLeft = startLeft - dx
    }
    const onUp = () => {
      pointer = null
      dragging = false
      delete el.dataset.dragging
    }

    el.addEventListener('pointerdown', onDown)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerup', onUp)
    el.addEventListener('pointercancel', onUp)
    return () => {
      el.removeEventListener('pointerdown', onDown)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerup', onUp)
      el.removeEventListener('pointercancel', onUp)
    }
  }, [])

  return ref
}

function Team() {
  const { t } = useI18n()
  const copy = t.contacts.team
  const railRef = useDragScroll()

  return (
    <section id="team" className="relative overflow-hidden bg-cream text-charcoal">
      <SparkleShape className="pointer-events-none absolute top-[24px] right-[-18px] w-[80px] text-sparkle/35 lg:top-[21px] lg:right-[-9px] lg:w-[140px]" />

      <div className="container-page relative pt-[43px] lg:pt-[62px]">
        <p className={`${eyebrow} text-charcoal/85`}>{copy.eyebrow}</p>
        <h2 className="mt-2 font-serif text-[36px] leading-[45px] font-medium lg:mt-[10px] uppercase lg:text-[40px] lg:leading-[44px]">
          {copy.title}
        </h2>
        <p className={`${body} mt-[18px] max-w-[540px] text-charcoal/85 lg:mt-6`}>{copy.text}</p>
      </div>

      {/* The row runs past the right edge, as in the design: scroll or drag for the rest. */}
      <ul
        ref={railRef}
        className="no-scrollbar relative mt-10 flex snap-x snap-mandatory gap-[22px] overflow-x-auto overscroll-x-contain px-[25px] pb-[60px] md:px-10 lg:mt-[59px] lg:cursor-grab lg:pb-[99px] xl:px-[max(60px,calc((100%-1440px)/2+60px))] data-dragging:cursor-grabbing data-dragging:snap-none data-dragging:select-none"
      >
        {copy.members.map(({ name, role }, i) => (
          <li
            key={name}
            className="w-[230px] shrink-0 snap-start scroll-ml-[25px] md:w-[262px] md:scroll-ml-10 xl:scroll-ml-[60px]"
          >
            <div className="aspect-[262/318] overflow-hidden bg-parchment">
              <img
                src={`/images/team-${i + 1}.webp`}
                alt={`${name}, ${role}`}
                width="524"
                height="636"
                draggable="false"
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
              />
            </div>
            <h3 className="mt-[23px] font-serif text-xl leading-[25px] font-medium uppercase">{name}</h3>
            <p className={`${body} mt-[6px] text-charcoal/85`}>{role}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

const fieldClass =
  'block w-full border-b border-ivory/95 bg-transparent pt-[21px] pb-4 font-sans text-sm leading-4 font-light text-ivory outline-none transition-colors placeholder:text-ivory/90 focus:border-gold'

function JoinForm() {
  const { t } = useI18n()
  const copy = t.contacts.join
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
          surname: data.surname,
          phone: data.phone,
          email: data.email,
          message: data.comment,
          _replyto: data.email,
          _subject: 'New team application — awerton.com',
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
      <div role="status" className="mt-[55px] flex min-h-[260px] flex-col justify-center lg:min-h-[364px]">
        <SparkleShape className="h-14 w-auto self-start text-gold" />
        <p className="mt-6 font-serif text-2xl font-medium uppercase">{copy.thanksTitle}</p>
        <p className={`${body} mt-3 max-w-[360px] text-ivory/70`}>{copy.thanksText}</p>
      </div>
    )
  }

  const field = (name, label, props = {}) => (
    <div>
      <label htmlFor={`join-${name}`} className="sr-only">
        {label}
      </label>
      <input id={`join-${name}`} name={name} placeholder={label} className={fieldClass} {...props} />
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="mt-10 lg:mt-[53px]">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-x-[22px] sm:grid-cols-2">
        {field('name', copy.name, { type: 'text', autoComplete: 'given-name', required: true })}
        {field('surname', copy.surname, { type: 'text', autoComplete: 'family-name' })}
        {field('phone', copy.phone, {
          type: 'tel',
          inputMode: 'tel',
          autoComplete: 'tel',
          required: true,
          pattern: '[+]?[0-9\\s()\\-]{9,20}',
        })}
        {field('email', copy.email, { type: 'email', autoComplete: 'email' })}
      </div>

      <label htmlFor="join-comment" className="sr-only">
        {copy.comment}
      </label>
      <textarea
        id="join-comment"
        name="comment"
        rows={4}
        placeholder={copy.comment}
        className={`${fieldClass} h-[116px] resize-none`}
      />

      <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between lg:mt-[74px]">
        <PillButton
          type="submit"
          tone="ivory"
          disabled={status === 'sending'}
          className="self-start disabled:cursor-wait disabled:opacity-60 sm:self-auto"
        >
          {status === 'sending' ? copy.sending : copy.submit}
        </PillButton>
        <p className="w-full max-w-[327px] font-sans text-sm leading-4 font-light text-ivory/50">
          {copy.consent}
        </p>
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-6 text-sm text-[#e0b4a4]">
          {copy.errorCall}{' '}
          <a href={PHONE_HREF} className="underline underline-offset-2">
            {PHONE_DISPLAY}
          </a>{' '}
          {copy.errorOr}{' '}
          <a href={`mailto:${EMAIL}`} className="underline underline-offset-2">
            {EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  )
}

function JoinTeam() {
  const { t, lang } = useI18n()
  const copy = t.contacts.join
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(OFFICE_MAP_QUERY)}&t=k&z=14&hl=${lang}&output=embed`

  return (
    <section id="careers" className="relative overflow-hidden bg-[#0f1111] text-ivory">
      {/* Faint city sketch, as behind the request form on the home page. */}
      <div
        className="pointer-events-none absolute inset-0 bg-no-repeat opacity-[0.07]"
        style={{
          backgroundImage: 'url(/images/footer-sketch.webp)',
          backgroundSize: 'max(1600px, 110%) auto',
          backgroundPosition: '35% 30%',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-10 px-[25px] py-[43px] md:px-10 lg:grid lg:grid-cols-[602fr_576fr] lg:items-start lg:gap-x-[60px] lg:py-[27px] xl:gap-x-[110px] xl:pr-[92px] xl:pl-[60px]">
        <div className="order-2 aspect-[380/420] overflow-hidden bg-ink md:aspect-[16/11] lg:order-none lg:aspect-[602/707]">
          <iframe
            title={copy.mapTitle}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
          />
        </div>

        <div className="order-1 rounded-[10px] border border-ivory/[0.07] bg-[#141414] px-6 pt-8 pb-10 md:px-[33px] lg:order-none lg:mt-8 lg:pt-[47px] lg:pb-[44px]">
          <p className={`${eyebrow} text-ivory/85`}>{copy.eyebrow}</p>
          <h2 className="mt-3 font-serif text-[28px] leading-[36px] font-normal uppercase lg:text-[32px] lg:leading-10">
            {copy.title}
          </h2>
          <p className={`${body} mt-[18px] max-w-[495px] text-ivory/85`}>{copy.text}</p>
          <JoinForm />
        </div>
      </div>
    </section>
  )
}

export default function ContactsPage() {
  const { t } = useI18n()
  useDocumentTitle(t.meta.contacts)

  return (
    <>
      <ContactHero />
      <Team />
      <JoinTeam />
    </>
  )
}
