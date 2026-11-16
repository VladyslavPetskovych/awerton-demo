import { useCallback, useEffect, useRef, useState } from 'react'
import Portfolio from '../components/sections/Portfolio'
import Request from '../components/sections/Request'
import { ArrowRightIcon, SparkleShape } from '../components/icons'
import { PillButton } from '../components/ui'
import { hd, propertyText } from '../content/portfolio'
import { useDocumentTitle, useI18n } from '../i18n'

/*
 * One page per portfolio property: /portfolio/aristo, /portfolio/prime-rest,
 * /portfolio/royal-apart. There is no frame for this page in the design, so it uses the
 * brand's type, colours and gutters (25px mobile, 40px tablet, 60px from xl) in its own
 * editorial layout: a full-screen photo hero carrying the property's logo and key facts,
 * a two-column story with offset photos, a photo band over the numbered "our role"
 * columns, then the gallery.
 */

const pageX = 'px-[25px] md:px-10 xl:px-[60px]'
const container = `mx-auto w-full max-w-[1440px] ${pageX}`
const eyebrow = 'font-sans text-base leading-none font-light uppercase lg:text-lg'
const h2 =
  'font-serif text-[36px] leading-[45px] font-normal uppercase lg:text-[40px] lg:leading-[44px]'
const body = 'font-sans text-base leading-[22px] font-light'
const label = 'font-sans text-xs leading-none font-normal tracking-[0.18em] uppercase'
const EASE = 'ease-[cubic-bezier(0.22,1,0.36,1)]'

/* ------------------------------------------------------------------ hero */

function PropertyHero({ property, text }) {
  const { t, href } = useI18n()
  const labels = t.property.facts
  const facts = [
    [labels.location, t.property.city],
    [labels.character, text.facts.character],
    [labels.idealFor, text.facts.idealFor],
    [labels.management, t.property.managedBy],
  ]

  return (
    <section id="top" className="relative flex min-h-[min(100svh,1000px)] flex-col overflow-hidden bg-ink text-ivory">
      <img
        {...hd(property.hero)}
        sizes="100vw"
        alt={text.hero.imageAlt}
        data-parallax="90"
        className="absolute inset-0 h-full w-full animate-slow-zoom object-cover object-center"
        fetchPriority="high"
      />
      {/* Darker at the top (header) and bottom (facts), lighter where the photo shows. */}
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-ink/75 via-ink/30 to-ink/90 max-md:via-ink/50" />

      <div className={`${container} relative flex flex-1 flex-col pt-[100px] md:pt-[150px] lg:pt-[160px]`}>
        <nav aria-label={t.property.breadcrumb} className="font-sans text-sm leading-none font-light text-ivory/70 uppercase">
          <a href={href('/#portfolio')} className="transition-colors hover:text-gold">
            {t.property.breadcrumb}
          </a>
          <span aria-hidden="true" className="mx-2.5">/</span>
          <span aria-current="page" className="text-ivory">{property.name}</span>
        </nav>

        <div className="flex flex-1 animate-fade-up flex-col items-center justify-center py-14 text-center lg:py-16">
          <p className={`${eyebrow} text-ivory/85 max-md:text-sm`}>
            {t.portfolio.categories[property.key]} · {t.property.city}
          </p>
          <h1 className="mt-7 lg:mt-9">
            <img
              src={property.logo}
              alt={property.name}
              className="mx-auto h-auto w-[230px] drop-shadow-[0_2px_30px_rgba(0,0,0,0.5)] md:w-[320px] lg:w-[380px]"
            />
          </h1>
          <p className={`${body} mt-7 max-w-[560px] text-ivory/90 lg:mt-9`}>{text.hero.paragraphs[0]}</p>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ivory/25 pt-6 pb-8 lg:grid-cols-4 lg:gap-x-10 lg:pt-7 lg:pb-10">
          {facts.map(([name, value]) => (
            <div key={name}>
              <dt className={`${label} text-ivory/60`}>{name}</dt>
              <dd className="mt-2 font-serif text-[15px] leading-5 font-medium uppercase md:mt-2.5 md:text-base md:leading-[22px] lg:text-lg lg:leading-6">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ story */

function Story({ property, text }) {
  const { t } = useI18n()
  const copy = text.intro
  const cta = <PillButton href="#request">{t.property.cta}</PillButton>

  return (
    <section className="relative overflow-hidden bg-cream text-charcoal">
      <SparkleShape className="pointer-events-none absolute top-[60px] right-[-30px] w-[96px] text-sparkle/40 lg:top-[90px] lg:right-[-46px] lg:w-[200px]" />

      <div className={`${container} relative pt-[52px] pb-[56px] lg:pt-[100px] lg:pb-[110px]`}>
        <div className="lg:grid lg:grid-cols-[5fr_7fr] lg:gap-x-[100px]">
          <div>
            <p className={`${eyebrow} text-charcoal/85`}>{copy.eyebrow}</p>
            <h2 className="mt-[7px] font-serif text-[30px] leading-[38px] font-normal uppercase md:text-[36px] md:leading-[44px] lg:mt-3 lg:text-[48px] lg:leading-[56px]">
              {copy.title}
            </h2>
            <div className="mt-9 hidden lg:block">{cta}</div>
          </div>

          <div className="mt-6 lg:mt-[34px]">
            <p className="font-serif text-lg leading-[27px] text-[#1a1717] md:text-xl md:leading-[30px] lg:text-2xl lg:leading-[36px]">
              {text.hero.paragraphs[1]}
            </p>
            <div className={`${body} mt-6 space-y-4 text-charcoal/85 lg:mt-8 lg:max-w-[620px]`}>
              {copy.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-8 lg:hidden">{cta}</div>
          </div>
        </div>

        {/* Offset pair: a wide photo and a taller one stepped down beside it. */}
        <div className="mt-[44px] grid grid-cols-[7fr_5fr] items-start gap-3 md:gap-6 lg:mt-[80px]">
          <img
            {...hd(property.intro[0])}
            sizes="(min-width: 1024px) 55vw, 58vw"
            alt={copy.alts[0]}
            className="aspect-[4/3] w-full rounded-[3px] object-cover object-center"
            loading="lazy"
          />
          <img
            {...hd(property.intro[1])}
            sizes="(min-width: 1024px) 40vw, 42vw"
            alt={copy.alts[1]}
            className="mt-[36px] aspect-[4/5] w-full rounded-[3px] object-cover object-center lg:mt-[120px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ our role */

function Approach({ property, text }) {
  const copy = text.approach

  return (
    <section className="bg-[#0f1111] text-parchment">
      {/* Photo band fading into the dark section below. */}
      <div className="relative h-[min(48vh,440px)] min-h-[300px] overflow-hidden lg:h-[min(62vh,640px)]">
        <img
          {...hd(property.approach)}
          data-parallax="70"
          sizes="100vw"
          alt={copy.imageAlt}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-b from-transparent to-[#0f1111]" />
      </div>

      <div className={`${container} pt-[28px] pb-[56px] lg:pt-[40px] lg:pb-[96px]`}>
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-10">
          <div>
            <p className={`${eyebrow} text-parchment/85`}>{copy.eyebrow}</p>
            <h2 className={`${h2} mt-[7px] lg:mt-2`}>{copy.title}</h2>
          </div>
          <p className={`${body} mt-[18px] max-w-[420px] text-parchment/75 lg:mt-0 lg:text-right`}>{copy.text}</p>
        </div>

        {/* Phones: the number sits beside the title to keep the list compact. From sm: stacked columns. */}
        <ol className="mt-[30px] grid gap-x-8 gap-y-6 sm:mt-[36px] sm:grid-cols-2 sm:gap-y-9 lg:mt-[56px] lg:grid-cols-4 lg:gap-x-10">
          {copy.items.map(({ title, text: itemText }, i) => (
            <li
              key={title}
              className="grid grid-cols-[44px_minmax(0,1fr)] gap-x-3 border-t border-[#434343] pt-5 transition-colors duration-500 hover:border-gold sm:block sm:pt-6"
            >
              <span className="row-span-2 font-serif text-[32px] leading-none text-gold sm:text-[40px] lg:text-[48px]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-0.5 font-serif text-lg leading-[25px] font-medium uppercase sm:mt-5 lg:text-xl lg:leading-7">
                {title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-5 font-light text-parchment/60">{itemText}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ videos */

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.5 2.8v10.4a.6.6 0 0 0 .9.5l8.2-5.2a.6.6 0 0 0 0-1L5.4 2.3a.6.6 0 0 0-.9.5Z" />
    </svg>
  )
}

function PauseIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" {...props}>
      <rect x="3.5" y="2.5" width="3" height="11" rx="0.6" />
      <rect x="9.5" y="2.5" width="3" height="11" rx="0.6" />
    </svg>
  )
}

/** A silent looping clip that plays while it is on screen (never for reduced motion). */
function MomentVideo({ video, label }) {
  const { t } = useI18n()
  const ref = useRef(null)
  const userPaused = useRef(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) el.play().catch(() => {})
        else el.pause()
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  function toggle() {
    const el = ref.current
    if (!el) return
    if (el.paused) {
      userPaused.current = false
      el.play().catch(() => {})
    } else {
      userPaused.current = true
      el.pause()
    }
  }

  return (
    <figure className="relative aspect-[9/16] overflow-hidden rounded-md bg-ink">
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="none"
        poster={video.poster}
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={video.src} type="video/mp4" />
      </video>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-b from-transparent to-ink/75" />
      <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-4 text-ivory lg:p-5">
        <span className="font-serif text-base leading-5 font-medium uppercase lg:text-lg">{label}</span>
        <button
          type="button"
          onClick={toggle}
          aria-label={`${playing ? t.property.pauseVideo : t.property.playVideo}: ${label}`}
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-ivory/40 bg-ink/20 backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
        >
          {playing ? <PauseIcon className="size-3.5" /> : <PlayIcon className="ml-0.5 size-3.5" />}
        </button>
      </figcaption>
    </figure>
  )
}

function Moments({ property, text }) {
  const { t } = useI18n()
  const rowRef = useRef(null)
  const [edges, setEdges] = useState({ start: true, end: false })

  // Greys out the arrow on the side the row can no longer scroll to.
  const updateEdges = useCallback(() => {
    const el = rowRef.current
    if (!el) return
    const start = el.scrollLeft <= 4
    const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
    setEdges((prev) => (prev.start === start && prev.end === end ? prev : { start, end }))
  }, [])

  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => window.removeEventListener('resize', updateEdges)
  }, [updateEdges])

  if (!property.videos?.length || !text.videos) return null
  const copy = text.videos

  // Moves by one screenful of cards.
  function scroll(dir) {
    const el = rowRef.current
    const card = el?.querySelector('li')
    if (!el || !card) return
    const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || '0')
    const perView = Math.max(1, Math.floor((el.clientWidth + 1) / step))
    el.scrollBy({ left: dir * perView * step, behavior: 'smooth' })
  }

  const arrow =
    'flex size-12 items-center justify-center rounded-full border border-charcoal/25 text-charcoal transition-[color,border-color,opacity] hover:border-stone hover:text-stone disabled:pointer-events-none disabled:opacity-30'

  return (
    <section className="overflow-hidden bg-parchment pt-[44px] pb-[48px] text-charcoal lg:pt-[70px] lg:pb-[80px]">
      <div className={container}>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <div>
            <p className={`${eyebrow} text-charcoal/85`}>{copy.eyebrow}</p>
            <h2 className={`${h2} mt-[7px] lg:mt-2`}>{copy.title}</h2>
            <p className={`${body} mt-[18px] max-w-[460px] text-charcoal/85`}>{copy.text}</p>
          </div>
          <div className="hidden shrink-0 gap-3 md:flex">
            <button type="button" onClick={() => scroll(-1)} disabled={edges.start} aria-label={t.property.previousVideos} className={arrow}>
              <ArrowRightIcon className="h-3.5 w-[18px] rotate-180" />
            </button>
            <button type="button" onClick={() => scroll(1)} disabled={edges.end} aria-label={t.property.nextVideos} className={arrow}>
              <ArrowRightIcon className="h-3.5 w-[18px]" />
            </button>
          </div>
        </div>

        {/* Swipeable row: 1⅓ cards on phones (running to the screen edge), 3 on tablets, 4 on desktop. */}
        <ul
          ref={rowRef}
          onScroll={updateEdges}
          className="-mx-[25px] mt-[31px] flex snap-x snap-mandatory scroll-px-[25px] gap-3 overflow-x-auto px-[25px] pb-1 [scrollbar-width:none] md:mx-0 md:scroll-px-0 md:gap-4 md:px-0 lg:mt-[40px] lg:gap-6"
        >
          {property.videos.map((video, i) => (
            <li
              key={video.src}
              className="w-[68%] shrink-0 snap-start md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-4.5rem)/4)]"
            >
              <MomentVideo video={video} label={copy.labels[i]} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ gallery */

function Lightbox({ photos, alts, index, onChange, onClose }) {
  const { t } = useI18n()
  const closeRef = useRef(null)
  const touchX = useRef(null)
  const count = photos.length
  const go = useCallback((step) => onChange((index + step + count) % count), [index, count, onChange])

  useEffect(() => {
    const previousFocus = document.activeElement
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
      previousFocus?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, onClose])

  const navButton =
    'flex size-12 shrink-0 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-gold hover:text-gold'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alts[index]}
      className="fixed inset-0 z-50 flex animate-[fade-in_0.3s_ease-out_both] flex-col bg-ink/95 text-ivory backdrop-blur-sm"
      onClick={onClose}
    >
      <div className={`${container} flex h-[76px] shrink-0 items-center justify-between`} onClick={(e) => e.stopPropagation()}>
        <p className="font-sans text-sm font-light tracking-[0.18em] text-ivory/70 uppercase" aria-live="polite">
          {index + 1} {t.property.of} {count}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="font-sans text-base font-light uppercase transition-colors hover:text-gold"
        >
          {t.common.close} ✕
        </button>
      </div>

      <div className={`${pageX} flex min-h-0 flex-1 items-center gap-4 pb-6 md:gap-6`}>
        <button
          type="button"
          aria-label={t.property.previous}
          onClick={(e) => {
            e.stopPropagation()
            go(-1)
          }}
          className={`${navButton} hidden md:flex`}
        >
          <ArrowRightIcon className="h-3.5 w-[18px] rotate-180" />
        </button>

        {/* Touch: swipe left/right to change photo. */}
        <figure
          className="flex h-full min-w-0 flex-1 touch-pan-y flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return
            const dx = e.changedTouches[0].clientX - touchX.current
            touchX.current = null
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
          }}
        >
          <img
            key={photos[index]}
            {...hd(photos[index])}
            sizes="100vw"
            alt={alts[index]}
            className="max-h-[calc(100%-44px)] max-w-full animate-[fade-in_0.4s_ease-out_both] rounded-[3px] object-contain"
          />
          <figcaption className="mt-4 text-center font-serif text-sm leading-5 text-ivory/70 italic">
            {alts[index]}
          </figcaption>
        </figure>

        <button
          type="button"
          aria-label={t.property.next}
          onClick={(e) => {
            e.stopPropagation()
            go(1)
          }}
          className={`${navButton} hidden md:flex`}
        >
          <ArrowRightIcon className="h-3.5 w-[18px]" />
        </button>
      </div>

      {/* Mobile: arrows under the photo, where the thumb reaches them. */}
      <div className="flex justify-center gap-4 pb-8 md:hidden" onClick={(e) => e.stopPropagation()}>
        <button type="button" aria-label={t.property.previous} onClick={() => go(-1)} className={navButton}>
          <ArrowRightIcon className="h-3.5 w-[18px] rotate-180" />
        </button>
        <button type="button" aria-label={t.property.next} onClick={() => go(1)} className={navButton}>
          <ArrowRightIcon className="h-3.5 w-[18px]" />
        </button>
      </div>
    </div>
  )
}

function Gallery({ property, text }) {
  const { t } = useI18n()
  const [open, setOpen] = useState(null)
  const photos = property.gallery
  const alts = text.gallery.alts
  // Mobile grid: the first photo spans both columns; if that leaves an odd one out, the
  // last photo spans both columns too.
  const lastWideOnMobile = (photos.length - 1) % 2 === 1

  return (
    <section id="gallery" className="bg-cream pt-[44px] pb-[48px] text-charcoal lg:pt-[70px] lg:pb-[80px]">
      <div className={container}>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={`${eyebrow} text-charcoal/85`}>{t.property.galleryEyebrow}</p>
            <h2 className={`${h2} mt-[7px] lg:mt-2`}>{text.gallery.title}</h2>
          </div>
          <p className="font-sans text-sm font-light tracking-[0.18em] text-charcoal/60 uppercase">
            {photos.length} {t.property.photos}
          </p>
        </div>

        <ul className="mt-[31px] grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:mt-[40px] lg:gap-4">
          {photos.map((src, i) => {
            const first = i === 0
            const last = i === photos.length - 1
            return (
              <li
                key={src}
                className={
                  first
                    ? 'col-span-2 md:row-span-2'
                    : last && lastWideOnMobile
                      ? 'col-span-2 md:col-span-1'
                      : ''
                }
              >
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={`${t.property.openPhoto}: ${alts[i]}`}
                  className="group/photo relative block h-full w-full overflow-hidden rounded-[3px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone"
                >
                  <img
                    {...hd(src)}
                    sizes={first ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 50vw'}
                    alt=""
                    loading="lazy"
                    className={`w-full object-cover object-center transition-transform duration-[900ms] will-change-transform group-hover/photo:scale-[1.04] motion-reduce:transition-none ${EASE} ${
                      first ? 'aspect-[3/2] md:aspect-auto md:h-full' : 'aspect-[3/2]'
                    } ${last && lastWideOnMobile ? 'max-md:aspect-[2/1]' : ''}`}
                  />
                  <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover/photo:bg-ink/15" />
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {open !== null && (
        <Lightbox photos={photos} alts={alts} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
      )}
    </section>
  )
}

/* ------------------------------------------------------------------ page */

export default function PropertyPage({ property }) {
  const { lang } = useI18n()
  const text = propertyText(lang, property.slug)
  useDocumentTitle(`${property.name} — AWERTON`)

  return (
    <>
      <PropertyHero property={property} text={text} />
      <Story property={property} text={text} />
      <Approach property={property} text={text} />
      <Moments property={property} text={text} />
      <Gallery property={property} text={text} />
      <Portfolio exclude={property.slug} />
      <Request />
    </>
  )
}
