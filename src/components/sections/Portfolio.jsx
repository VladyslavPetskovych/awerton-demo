import { hd, properties, propertyHref } from '../../content/portfolio'
import { useI18n } from '../../i18n'
import { PillButton, SectionTitle } from '../ui'

/**
 * Portfolio cards — each opens that property's page (/portfolio/<slug>).
 * On a property page pass `exclude` (its slug) to show only the other properties.
 */
export default function Portfolio({ exclude }) {
  const { t, href } = useI18n()
  const items = exclude ? properties.filter((p) => p.slug !== exclude) : properties
  const two = items.length === 2

  return (
    <section id="portfolio" className="pt-16 pb-16 lg:pt-[69px] lg:pb-[90px]">
      <div className="container-page flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-[870px]">
          <SectionTitle>{exclude ? t.portfolio.moreTitle : t.portfolio.title}</SectionTitle>
          <p className="mt-[35px] text-base leading-[1.375] opacity-85">
            {t.portfolio.text}
          </p>
        </div>
        <PillButton
          href={href(exclude ? '/#portfolio' : propertyHref(items[0].slug))}
          className="self-start md:self-center"
        >
          {t.portfolio.button}
        </PillButton>
      </div>

      <div
        className={`mx-auto mt-[35px] grid max-w-[1440px] gap-4 px-[25px] sm:gap-6 sm:px-0 ${
          two ? 'sm:grid-cols-2' : 'sm:grid-cols-3'
        }`}
      >
        {items.map((p) => (
          <a
            key={p.slug}
            href={href(propertyHref(p.slug))}
            aria-label={`${p.name} — ${t.portfolio.open}`}
            className={`group relative block overflow-hidden rounded-md ${
              two ? 'aspect-[464/639] sm:aspect-[708/560]' : 'aspect-[464/639]'
            }`}
          >
            <img
              {...hd(p.card)}
              sizes={two ? '(min-width: 640px) 50vw, 100vw' : '(min-width: 640px) 34vw, 100vw'}
              alt={`${p.name} — ${t.portfolio.interior}`}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className={`absolute inset-0 ${p.tint} transition group-hover:bg-ink/40`} />
            <img
              src={p.logo}
              alt=""
              className={`absolute top-[41%] left-1/2 h-auto max-w-[70%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] ${p.logoWidth}`}
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-[31px] flex items-center justify-center gap-2 text-ivory">
              <span className="h-px w-[43px] bg-ivory/80" />
              <span className="font-sans text-sm font-light uppercase">{t.portfolio.categories[p.key]}</span>
              <span className="h-px w-[43px] bg-ivory/80" />
            </div>
            {/* Hover cue: the card opens a page. */}
            <span className="absolute bottom-[70px] left-1/2 -translate-x-1/2 translate-y-2 font-serif text-sm font-medium tracking-wide whitespace-nowrap text-ivory uppercase opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {t.portfolio.open} →
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
