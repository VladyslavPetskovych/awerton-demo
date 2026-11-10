import { useEffect } from 'react'
import Portfolio from '../components/sections/Portfolio'
import Request from '../components/sections/Request'
import { SparkleShape } from '../components/icons'

/*
 * Services page — built to the "Awerton design (2)" PDF.
 * Desktop measurements are from the 1440px frame, mobile from the 430px frame
 * (25px gutters). Below `lg` the page uses the stacked mobile layout.
 */

const eyebrow = 'font-sans text-base leading-none font-light uppercase lg:text-lg'
const h2 =
  'font-serif text-[36px] leading-[45px] font-normal uppercase lg:text-[40px] lg:leading-[44px]'
const body = 'font-sans text-base leading-[22px] font-light'

function ServicesHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#161515] text-ivory">
      {/* Full-width rule under the header nav (desktop only — the mobile header has its own). */}
      <div className="absolute inset-x-0 top-[123px] hidden h-px bg-ivory/25 md:block" aria-hidden="true" />

      <SparkleShape className="pointer-events-none absolute top-[116px] right-[-14px] w-[78px] text-stone/25 lg:top-[202px] lg:right-auto lg:left-[calc(50%-174px)] lg:w-[206px]" />

      <div className="relative pt-[108px] md:pt-[155px] lg:grid lg:grid-cols-[722fr_718fr] lg:pt-[123px]">
        <div className="px-[25px] md:px-10 lg:flex lg:min-h-[758px] lg:items-center lg:pr-10 xl:pl-[60px]">
          <div className="max-w-[526px]">
            <p className={`${eyebrow} text-white/85`}>Real estate management</p>
            <h1 className="mt-[7px] font-serif text-[42px] leading-[55px] font-normal uppercase lg:mt-[10px] lg:text-[52px]">
              Professional
              <br />
              management
            </h1>
            <div className={`${body} mt-[18px] space-y-[22px] text-ivory/90 lg:mt-[25px]`}>
              <p>
                We manage residential and hospitality real estate with the discipline of an
                investment firm. Every property in our care runs to clear standards — from
                tenants and guests to maintenance, compliance and reporting.
              </p>
              <p>
                Our team combines market expertise, hands-on operations and transparent
                financial control. You keep full ownership and visibility — we handle the
                day-to-day, so your asset performs and grows in value.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-[46px] aspect-[430/455] overflow-hidden md:aspect-[16/11] lg:mt-0 lg:aspect-auto">
          <img
            src="/images/services-hero.webp"
            alt="Lviv old-town rooftops with the Dominican Cathedral dome and Town Hall tower at dusk"
            className="absolute inset-0 h-full w-full animate-fade-in object-cover object-center"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}

function Investing() {
  return (
    <section className="relative overflow-hidden bg-cream text-charcoal">
      <SparkleShape className="pointer-events-none absolute top-[319px] right-[-19px] w-[88px] text-sparkle/35 lg:top-[47px] lg:right-[-46px] lg:w-[213px]" />
      <SparkleShape className="pointer-events-none absolute top-[519px] left-[-24px] hidden w-[142px] text-sparkle/35 lg:block" />

      <div className="relative mx-auto max-w-[1440px] px-[25px] pt-[36px] pb-[36px] md:px-10 lg:grid lg:min-h-[803px] lg:grid-cols-[365fr_616fr_365fr] lg:items-center lg:px-[47px] lg:py-[60px]">
        <img
          src="/images/invest-deal.webp"
          alt="Two business partners shaking hands over a table"
          className="aspect-[380/260] w-full object-cover object-center lg:aspect-[365/260] lg:self-start"
          loading="lazy"
        />

        <div className="mt-[43px] lg:mt-0 lg:max-w-[570px] lg:pl-[60px]">
          <p className={`${eyebrow} text-charcoal/85`}>Investing</p>
          <h2 className={`${h2} mt-[7px] lg:mt-2`}>Invest with AWERTON</h2>
          <div className={`${body} mt-[18px] space-y-4 text-charcoal/85 lg:mt-[26px]`}>
            <p>
              Real estate is a long-term commitment. We help investors choose the right
              properties, structure every acquisition carefully and build portfolios that deliver
              stable, predictable income.
            </p>
            <p>
              With regular reporting, professional asset management and a clear view of every
              figure, you always know how your investment is performing — and what we are doing
              to grow it.
            </p>
          </div>
        </div>

        <img
          src="/images/invest-facade.webp"
          alt="Modern residential building with balconies seen from below"
          className="mx-auto mt-[47px] aspect-[365/260] w-full max-w-[365px] object-cover object-center lg:mt-0 lg:max-w-none lg:self-end"
          loading="lazy"
        />
      </div>
    </section>
  )
}

const services = [
  'Investment Consultation',
  'Property Selection & Analysis',
  'Acquisition & Legal Support',
  'Property & Asset Management',
]

function OurServices() {
  return (
    <section id="services" className="bg-[#0f1111] text-parchment">
      <div className="mx-auto flex max-w-[1440px] flex-col lg:grid lg:grid-cols-[582fr_628fr] lg:gap-x-[110px] lg:px-10 lg:pt-[60px] lg:pb-[80px] xl:px-[60px]">
        <div className="order-2 mt-[43px] lg:order-none lg:mt-0">
          <img
            src="/images/services-tower.webp"
            alt="Curved high-rise residential tower with copper-toned balconies"
            className="aspect-[430/498] w-full object-cover object-center md:aspect-[16/11] lg:aspect-[582/673]"
            loading="lazy"
          />
        </div>

        <div className="order-1 flex flex-col justify-between px-[25px] pt-[31px] md:px-10 lg:order-none lg:px-0 lg:pt-0">
          <div>
            <p className={`${eyebrow} text-parchment/85`}>Services</p>
            <h2 className={`${h2} mt-[7px] text-parchment/85 lg:mt-2`}>Our services</h2>
            <p className={`${body} mt-[18px] max-w-[420px] text-parchment/85 lg:mt-[26px]`}>
              We guide investors through every stage — from the first consultation to
              acquisition and long-term management.
            </p>
          </div>

          <ol className="mt-[26px] divide-y divide-[#434343] lg:mt-12">
            {services.map((title, i) => (
              <li
                key={title}
                className="group flex items-center gap-6 py-[11px] first:pt-0 last:pb-0 lg:py-[15px]"
              >
                <span className="flex size-[66px] shrink-0 items-center justify-center rounded-full border border-line font-serif text-2xl text-parchment/85 transition-colors duration-300 group-hover:border-gold group-hover:text-gold lg:size-[78px] lg:text-[28px]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-lg leading-[25px] font-medium uppercase transition-colors duration-300 group-hover:text-gold lg:text-xl lg:leading-normal">
                  {title}
                </h3>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Our services — AWERTON'
  }, [])

  return (
    <>
      <ServicesHero />
      <Investing />
      <OurServices />
      <Portfolio />
      <Request />
    </>
  )
}
