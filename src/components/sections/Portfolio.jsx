import { PillButton, SectionTitle } from '../ui'

const properties = [
  {
    name: 'Aristo Boutique Hotel',
    category: 'Boutique stay',
    image: '/images/portfolio-aristo.webp',
    logo: '/images/logo-aristo.webp',
    logoWidth: 'w-[184px]',
    tint: 'bg-[#373127]/30',
  },
  {
    name: 'Prime Rest',
    category: 'City retreat',
    image: '/images/portfolio-prime-rest.webp',
    logo: '/images/logo-prime-rest.webp',
    logoWidth: 'w-[174px]',
    tint: 'bg-[#363128]/20',
  },
  {
    name: 'Royal Apart',
    category: 'Private residence',
    image: '/images/portfolio-royal-apart.webp',
    logo: '/images/logo-royal-apart.webp',
    logoWidth: 'w-[201px]',
    tint: 'bg-[#363128]/20',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-16 pb-16 lg:pt-[69px] lg:pb-[90px]">
      <div className="container-page flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-[870px]">
          <SectionTitle>Our portfolio</SectionTitle>
          <p className="mt-[35px] text-base leading-[1.375] opacity-85">
            A collection of hotels shaped by thoughtful design, strong management and a distinctive
            sense of place. Each property reflects our approach to hospitality — creating memorable
            experiences while building long-term value.
          </p>
        </div>
        <PillButton href="#portfolio" className="self-start md:self-center">
          View more details
        </PillButton>
      </div>

      <div className="mx-auto mt-[35px] grid max-w-[1440px] gap-4 px-5 sm:grid-cols-3 sm:gap-6 sm:px-0">
        {properties.map((p) => (
          <a
            key={p.name}
            href="#portfolio"
            className="group relative block aspect-[464/639] overflow-hidden rounded-md"
          >
            <img
              src={p.image}
              alt={`${p.name} interior`}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className={`absolute inset-0 ${p.tint} transition group-hover:bg-ink/40`} />
            <img
              src={p.logo}
              alt={p.name}
              className={`absolute top-[41%] left-1/2 h-auto max-w-[70%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] ${p.logoWidth}`}
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-[31px] flex items-center justify-center gap-2 text-ivory">
              <span className="h-px w-[43px] bg-ivory/80" />
              <span className="font-sans text-sm font-light uppercase">{p.category}</span>
              <span className="h-px w-[43px] bg-ivory/80" />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
