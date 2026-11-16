import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Portfolio from '../components/sections/Portfolio'
import Request from '../components/sections/Request'
import { SparkleShape } from '../components/icons'
import { Lines, PillButton } from '../components/ui'
import { DEFAULT_OPEN, guideText, guideTopics, guides, readingMinutes } from '../content/guides'
import { useDocumentTitle, useI18n } from '../i18n'
import { EMAIL, REQUEST_ENDPOINT } from '../siteConfig'

/*
 * Guides & tips page — built to the "Guides & tips v2" frame of "Awerton design (3)".
 * Desktop measurements come from the 1440px frame. There is no mobile frame for this
 * page, so below `lg` it stacks the same way as the services page.
 *
 * Article texts live in src/content/guides (one file per language). Each guide can be
 * opened directly with /guides#<slug>, e.g. /guides#pricing.
 */

const eyebrow = 'font-sans text-base leading-none font-light uppercase lg:text-lg'
const body = 'font-sans text-base leading-[22px] font-light'
const EASE = 'ease-[cubic-bezier(0.22,1,0.36,1)]'

/*
 * Side margins shared by every section of this page, so hero, list and newsletter all
 * start on the same line: 25px on mobile (mobile frames), 40px on tablets and 60px from
 * xl (1440 frame: content runs x=60…1380). Above 1440px the content stays centred.
 */
const pageX = 'px-[25px] md:px-10 xl:px-[60px]'
const container = `mx-auto w-full max-w-[1440px] ${pageX}`

function GuidesHero() {
  const { t } = useI18n()
  const copy = t.guides.hero

  return (
    // @container: lets the text column line up with the centred 1440 container on wide
    // screens while the photo still runs to the right edge.
    <section id="top" className="@container relative overflow-hidden bg-ink text-ivory">
      <SparkleShape className="pointer-events-none absolute top-[116px] right-[-14px] w-[78px] text-stone/25 lg:top-[168px] lg:right-auto lg:left-[calc(50%-139px)] lg:w-[166px]" />

      <div className="relative pt-[108px] md:pt-[155px] lg:grid lg:grid-cols-[722fr_718fr] lg:pt-[123.5px]">
        <div className={`${pageX} lg:min-h-[650px] lg:pt-[204px] lg:pr-10 xl:pl-[max(60px,calc(50cqw_-_660px))]`}>
          <div className="max-w-[526px]">
            <p className={`${eyebrow} text-white/85`}>{copy.eyebrow}</p>
            <h1 className="mt-[7px] font-serif text-[42px] leading-[55px] font-normal uppercase lg:mt-[13.5px] lg:text-[52px]">
              {copy.title}
            </h1>
            <div className={`${body} mt-[18px] space-y-[22px] text-ivory/90 lg:mt-[24.5px]`}>
              {copy.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-[46px] aspect-[430/389] overflow-hidden md:aspect-[16/11] lg:mt-0 lg:aspect-auto">
          <img
            src="/images/guides-hero.webp"
            alt={copy.imageAlt}
            className="absolute inset-0 h-full w-full animate-fade-in object-cover object-center"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ article body */

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" {...props}>
      <path d="M2.5 6.2 4.8 8.5 9.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** A list item: plain text, or a [lead, text] pair with the lead in bold. */
function Rich({ item }) {
  if (!Array.isArray(item)) return item
  return (
    <>
      <strong className="font-medium text-[#1a1717]">{item[0]}</strong> {item[1]}
    </>
  )
}

const blockLabel = 'font-sans text-xs leading-none font-normal tracking-[0.18em] uppercase'

function Block({ block, labels, properties }) {
  switch (block.type) {
    case 'h':
      return (
        <h4 className="mt-10 font-serif text-base leading-6 font-medium text-[#1a1717] uppercase first:mt-0 lg:text-lg">
          {block.text}
        </h4>
      )

    case 'p':
      return <p className={`${body} mt-4 first:mt-0`}>{block.text}</p>

    case 'list':
      return (
        <ul className={`${body} mt-4 space-y-3`}>
          {block.items.map((item) => (
            <li key={String(item)} className="flex gap-3">
              <span aria-hidden="true" className="mt-[8px] size-[6px] shrink-0 rotate-45 bg-gold" />
              <span>
                <Rich item={item} />
              </span>
            </li>
          ))}
        </ul>
      )

    case 'checklist':
      return (
        <div className="mt-6 rounded-md border border-[#e4e0d2] bg-parchment/70 p-5 lg:p-6">
          <p className={`${blockLabel} text-stone`}>{labels.checklist}</p>
          <ul className={`${body} mt-4 space-y-3`}>
            {block.items.map((item) => (
              <li key={String(item)} className="flex gap-3">
                <span className="mt-px flex size-5 shrink-0 items-center justify-center rounded-full border border-stone/45 text-stone">
                  <CheckIcon className="size-3" />
                </span>
                <span>
                  <Rich item={item} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      )

    case 'steps':
      return (
        <ol className={`${body} mt-5`}>
          {block.items.map((item, i) => (
            <li
              key={String(item)}
              className="grid grid-cols-[40px_minmax(0,1fr)] gap-3 border-t border-[#e4e0d2] py-3.5 first:border-t-0 first:pt-0 last:pb-0"
            >
              <span className="font-serif text-xl leading-[22px] text-stone">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>
                <Rich item={item} />
              </span>
            </li>
          ))}
        </ol>
      )

    case 'tip':
      return (
        <aside className="mt-7 flex gap-4 border-l-2 border-gold bg-parchment px-5 py-4 lg:px-6 lg:py-5">
          <SparkleShape className="mt-0.5 h-6 w-auto shrink-0 text-gold" />
          <div>
            <p className={`${blockLabel} text-stone`}>{labels.tip}</p>
            <p className={`${body} mt-2.5`}>{block.text}</p>
          </div>
        </aside>
      )

    case 'takeaways':
      return (
        <div className="mt-10 rounded-md bg-[#1a1717] p-6 text-ivory lg:p-7">
          <p className={`${blockLabel} text-gold`}>{labels.takeaways}</p>
          <ul className={`${body} mt-4 space-y-2.5 text-ivory/90`}>
            {block.items.map((item) => (
              <li key={String(item)} className="flex gap-3">
                <CheckIcon className="mt-[5px] size-3 shrink-0 text-gold" />
                <span>
                  <Rich item={item} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      )

    case 'figure':
      return (
        <figure className="mt-7">
          <div className={`grid gap-2 ${block.photos.length > 1 ? 'sm:grid-cols-2' : ''}`}>
            {block.photos.map((photo) => (
              <div key={photo.src}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="aspect-[3/2] w-full rounded-[3px] object-cover"
                />
                <p className="mt-1.5 font-sans text-[11px] leading-4 font-normal tracking-[0.12em] text-charcoal/55 uppercase">
                  {properties[photo.property]}
                </p>
              </div>
            ))}
          </div>
          {block.caption && (
            <figcaption className="mt-2.5 font-serif text-[13px] leading-5 text-charcoal/60 italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )

    case 'table':
      return (
        // Scrolls inside its own box on narrow screens, never the page.
        <div className="mt-6 overflow-x-auto rounded-md border border-[#e4e0d2]">
          <table
            className={`w-full border-collapse text-left font-sans text-sm leading-5 font-light ${
              block.head.length > 3 ? 'min-w-[640px]' : 'min-w-[440px]'
            }`}
          >
            <thead className="bg-parchment">
              <tr>
                {block.head.map((cell, i) => (
                  <th
                    key={cell || i}
                    scope="col"
                    className="px-4 py-3 font-serif text-xs font-medium text-[#1a1717] uppercase"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map(([label, ...cells]) => (
                <tr key={label} className="border-t border-[#e4e0d2]">
                  <th scope="row" className="px-4 py-3 align-top font-normal text-[#1a1717]">
                    {label}
                  </th>
                  {cells.map((cell, i) => (
                    <td key={i} className="px-4 py-3 align-top text-charcoal/80">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    default:
      return null
  }
}

function ArticleFooter({ slug }) {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/guides#${slug}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard blocked — the address bar already shows the link.
    }
  }

  return (
    <div className="mt-10 flex flex-col gap-6 border-t border-[#d9d6cb] pt-7">
      <div className="max-w-[560px]">
        <p className="font-serif text-lg leading-6 font-medium text-[#1a1717] uppercase">
          {t.guides.cta.title}
        </p>
        <p className={`${body} mt-2.5`}>{t.guides.cta.text}</p>
      </div>
      <div className="flex shrink-0 flex-wrap items-center gap-5">
        <PillButton href="#request">{t.guides.cta.button}</PillButton>
        <button
          type="button"
          onClick={copyLink}
          className="font-sans text-sm font-light text-charcoal/70 underline underline-offset-4 transition-colors hover:text-stone"
        >
          <span aria-live="polite">{copied ? t.guides.linkCopied : t.guides.copyLink}</span>
        </button>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ article list */

function ToggleIcon({ open }) {
  return (
    <span className="relative block size-4" aria-hidden="true">
      <span className="absolute inset-x-0 top-[7px] h-0.5 bg-[#1a1717]" />
      <span
        className={`absolute inset-y-0 left-[7px] w-0.5 bg-[#1a1717] transition-transform duration-500 ${EASE} ${
          open ? 'scale-y-0' : 'scale-y-100'
        }`}
      />
    </span>
  )
}

// Opening is a touch slower than closing so long articles unfold calmly.
const OPEN_MS = 'duration-[650ms]'
const CLOSE_MS = 'duration-[450ms]'

function ArticleRow({ guide, open, instant, onToggle }) {
  const { lang, t } = useI18n()
  const text = guideText(lang, guide.slug)
  const bodyId = `guide-body-${guide.slug}`
  // `instant` collapses without animation — used when the row is out of view, so the page
  // below it doesn't drift while it shrinks.
  const rowsTransition = instant
    ? ''
    : `transition-[grid-template-rows] ${open ? OPEN_MS : CLOSE_MS} ${EASE} motion-reduce:transition-none`

  return (
    // Mobile: picture, then title + toggle, then the article across the full width.
    // Desktop: picture | title | toggle, with the article under the title and the picture
    // pinned beside it while reading.
    <li
      id={guide.slug}
      className="relative grid scroll-mt-[150px] grid-cols-[1fr_auto] gap-x-4 pt-[18.5px] pb-[17.5px] before:absolute before:inset-x-0 before:top-0 before:h-px before:origin-top before:scale-y-50 before:bg-[#939393] first:pt-0 first:before:hidden last:pb-0 md:grid-cols-[260px_minmax(0,1fr)_51px] md:grid-rows-[minmax(212px,auto)_auto] md:gap-x-8 lg:grid-cols-[330px_minmax(0,1fr)_51px]"
    >
      {/* Clicking the picture toggles too; keyboard users use the title or the round button. */}
      {/* The picture keeps one fixed size in every state (it never follows the row height, which
          changes while an article opens or closes) and stays pinned beside the text while reading. */}
      <div
        onClick={onToggle}
        className="group/cover relative col-span-2 mb-5 aspect-[330/212] cursor-pointer overflow-hidden md:sticky md:top-[140px] md:col-span-1 md:col-start-1 md:row-span-2 md:row-start-1 md:mb-0 md:aspect-auto md:h-[212px] md:self-start"
      >
        <img
          src={guide.cover}
          alt={text.alt}
          loading="lazy"
          style={guide.coverPosition ? { objectPosition: guide.coverPosition } : undefined}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[900ms] will-change-transform group-hover/cover:scale-[1.03] motion-reduce:transition-none ${EASE}`}
        />
      </div>

      <div className="col-start-1 row-start-2 translate-y-[2px] self-center md:col-start-2 md:row-start-1 md:max-w-[700px]">
        <p className="font-serif text-xs leading-[14px] font-normal text-[#1a1717]/85 uppercase">
          {t.guides.topics[guide.topics[0]]}
        </p>
        <h3 className="mt-2 font-serif text-lg leading-6 font-medium text-[#1a1717] uppercase lg:text-xl">
          <button
            type="button"
            onClick={onToggle}
            className="text-left uppercase transition-colors hover:text-stone"
            aria-expanded={open}
            aria-controls={bodyId}
          >
            {text.title}
          </button>
        </h3>
        <p className={`${body} mt-[25px] text-charcoal/85`}>{text.excerpt}</p>
        <p className="mt-[22px] font-sans text-xs leading-[18px] font-light text-[#a3a3a3] uppercase">
          {t.guides.by} {text.author} · {readingMinutes(text)} {t.guides.minRead}
        </p>
      </div>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={bodyId}
        aria-label={`${open ? t.guides.collapse : t.guides.expand}: ${text.title}`}
        className="col-start-2 row-start-2 flex size-[44px] items-center justify-center self-start justify-self-end rounded-full bg-[#efede4] transition-colors hover:bg-sparkle md:col-start-3 md:row-start-1 md:size-[51px]"
      >
        <ToggleIcon open={open} />
      </button>

      <div
        id={bodyId}
        className={`col-span-2 row-start-3 grid md:col-span-1 md:col-start-2 md:row-start-2 ${rowsTransition} ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0 overflow-hidden" inert={!open}>
          {/* Content fades and rises in slightly after the space starts opening. */}
          <article
            lang={lang}
            className={`pt-8 pb-2 text-charcoal/85 transition-[opacity,translate] motion-reduce:transition-none md:max-w-[700px] lg:pt-9 ${EASE} ${
              open
                ? 'translate-y-0 opacity-100 delay-100 duration-[700ms]'
                : 'translate-y-3 opacity-0 delay-0 duration-200'
            }`}
          >
            {text.body.map((block, i) => (
              <Block key={i} block={block} labels={t.guides.blocks} properties={t.guides.properties} />
            ))}
            <ArticleFooter slug={guide.slug} />
          </article>
        </div>
      </div>
    </li>
  )
}

function slugFromHash() {
  const hash = decodeURIComponent(window.location.hash.slice(1))
  return guides.some((g) => g.slug === hash) ? hash : null
}

function Articles() {
  const { t } = useI18n()
  const copy = t.guides.list
  const [filter, setFilter] = useState('all')
  const [openSlug, setOpenSlug] = useState(() => slugFromHash() ?? DEFAULT_OPEN)
  const firstRender = useRef(true)

  // Arriving with /guides#<slug>: bring that guide into view once it has rendered.
  useEffect(() => {
    const slug = slugFromHash()
    if (slug) requestAnimationFrame(() => document.getElementById(slug)?.scrollIntoView())
  }, [])

  // Keep the address shareable: the open guide is reflected in the hash.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    const { pathname, search } = window.location
    history.replaceState(null, '', openSlug ? `#${openSlug}` : pathname + search)
  }, [openSlug])

  // Rows that should collapse without animation on the next render (see ArticleRow).
  const [instantSlug, setInstantSlug] = useState(null)
  // Viewport position of the clicked row, restored after the layout changes.
  const anchor = useRef(null)

  function toggle(slug) {
    const el = document.getElementById(slug)
    const top = el?.getBoundingClientRect().top ?? 0
    const opening = openSlug !== slug

    if (opening) {
      // The previously open guide collapses in one step when it sits above the clicked one;
      // animating it would drag the clicked guide upwards (often off screen) for half a second.
      const prev = openSlug && document.getElementById(openSlug)
      const prevAbove = prev && el && prev.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING
      setInstantSlug(prevAbove ? openSlug : null)
      anchor.current = { slug, top }
    } else if (top < 0) {
      // Closing a guide whose title has scrolled away: collapse at once and return to the title.
      setInstantSlug(slug)
      anchor.current = { slug, top: 150 }
    } else {
      setInstantSlug(null)
      anchor.current = null
    }
    setOpenSlug(opening ? slug : null)
  }

  // Before paint: keep the clicked guide exactly where it was on screen.
  useLayoutEffect(() => {
    const a = anchor.current
    anchor.current = null
    if (!a) return
    const el = document.getElementById(a.slug)
    if (!el) return
    const shift = el.getBoundingClientRect().top - a.top
    if (Math.abs(shift) > 1) window.scrollBy({ top: shift, behavior: 'instant' })
    // Later toggles animate normally again.
    requestAnimationFrame(() => setInstantSlug(null))
  }, [openSlug])

  const visible = filter === 'all' ? guides : guides.filter((g) => g.topics.includes(filter))

  return (
    <section id="guides" className="bg-cream pt-[44px] pb-[48px] text-charcoal lg:pt-[61px] lg:pb-[59.5px]">
      <div className={container}>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className={`${eyebrow} text-charcoal/85`}>{copy.eyebrow}</p>
            <h2 className="mt-[7px] font-serif text-[32px] leading-[40px] font-normal uppercase lg:mt-[9.5px] lg:text-[40px] lg:leading-[45px]">
              <Lines lines={copy.title} brClassName="hidden sm:block" />
            </h2>
          </div>
          <p className={`${body} max-w-[470px] text-charcoal/85 lg:text-right`}>{copy.text}</p>
        </div>

        <div role="group" aria-label={copy.filterLabel} className="mt-7 flex flex-wrap gap-1.5 lg:mt-[31.5px]">
          {guideTopics.map((topic) => {
            const active = topic === filter
            return (
              <button
                key={topic}
                type="button"
                onClick={() => setFilter(topic)}
                aria-pressed={active}
                className={`h-11 rounded-full border px-[13px] font-sans text-sm leading-none font-normal transition-colors ${
                  active
                    ? 'border-[#1a1717] bg-[#1a1717] text-white'
                    : 'border-[#cacaca] text-charcoal/85 hover:border-charcoal/60'
                }`}
              >
                {t.guides.topics[topic]}
              </button>
            )
          })}
        </div>

        {visible.length ? (
          <ul className="mt-[31px]">
            {visible.map((guide) => (
              <ArticleRow
                key={guide.slug}
                guide={guide}
                open={openSlug === guide.slug}
                instant={instantSlug === guide.slug}
                onToggle={() => toggle(guide.slug)}
              />
            ))}
          </ul>
        ) : (
          <p className={`${body} mt-[31px] text-charcoal/70`}>{copy.empty}</p>
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ newsletter */

function Newsletter() {
  const { t } = useI18n()
  const copy = t.guides.newsletter
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    try {
      const res = await fetch(REQUEST_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email,
          _subject: 'Guides & tips newsletter signup — awerton.com',
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

  return (
    <section className="relative overflow-hidden bg-[#0f1111] text-ivory">
      <SparkleShape className="pointer-events-none absolute top-[47px] left-[calc(50%+26px)] hidden w-[83px] text-stone/25 lg:block" />

      <div className={`${container} relative flex flex-col gap-8 pt-[48px] pb-[52px] lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:pt-[62px] lg:pb-[60px]`}>
        <div>
          <p className={`${eyebrow} text-white/85`}>{copy.eyebrow}</p>
          <h2 className="mt-3 font-serif text-[30px] leading-[36px] font-normal uppercase lg:text-[36px] lg:leading-[40px]">
            {copy.title}
          </h2>
          <p className={`${body} mt-[18px]`}>{copy.text}</p>
        </div>

        <div className="w-full lg:mr-[-1px] lg:w-[483px] lg:shrink-0">
          {status === 'sent' ? (
            <p role="status" className="flex h-[58px] items-center font-serif text-base text-ivory/85">
              {copy.thanks}
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex h-[58px] items-center rounded-full border border-[#616161] transition-colors focus-within:border-ivory/70"
            >
              <label htmlFor="guides-email" className="sr-only">
                {t.common.emailLabel}
              </label>
              <input
                id="guides-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.common.emailPlaceholder}
                className="h-full min-w-0 flex-1 bg-transparent pl-[17px] font-sans text-sm font-light text-ivory outline-none placeholder:text-white"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex h-[56px] min-w-[138px] shrink-0 items-center justify-center rounded-full bg-ivory px-5 font-serif text-base font-medium text-charcoal uppercase transition hover:bg-white active:scale-[0.98] disabled:opacity-60"
              >
                {status === 'sending' ? t.common.sending : copy.button}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p role="alert" className="mt-3 pl-[17px] text-sm text-ivory/70">
              {t.common.errorRetry}{' '}
              <a href={`mailto:${EMAIL}`} className="underline underline-offset-2">
                {EMAIL}
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default function GuidesPage() {
  const { t } = useI18n()
  useDocumentTitle(t.meta.guides)

  return (
    <>
      <GuidesHero />
      <Articles />
      <Newsletter />
      <Portfolio />
      <Request />
    </>
  )
}
