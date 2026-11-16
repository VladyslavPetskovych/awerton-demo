import {
  ConsultIcon,
  EvaluationIcon,
  ManagementIcon,
  PropertyIcon,
  SparkleShape,
  TransactionIcon,
} from '../icons'
import { useI18n } from '../../i18n'
import { Eyebrow, SectionTitle } from '../ui'

// Icons in step order; titles and texts come from t.howWeWork.steps.
const stepIcons = [ConsultIcon, PropertyIcon, EvaluationIcon, TransactionIcon, ManagementIcon]

export default function HowWeWork() {
  const { t } = useI18n()
  const steps = t.howWeWork.steps.map((step, i) => ({ ...step, icon: stepIcons[i] }))

  return (
    <section id="how-we-work" className="relative overflow-hidden bg-charcoal text-ivory">
      {/* Warm glow + brand sparkle, kept very quiet on the dark ground. */}
      <div
        className="pointer-events-none absolute -top-48 -right-40 h-[620px] w-[620px] rounded-full bg-gold/10 blur-[140px]"
        aria-hidden="true"
      />
      <SparkleShape className="pointer-events-none absolute -top-24 right-[5%] hidden h-[504px] w-auto text-gold/[0.06] lg:block" />

      <div className="container-page relative py-20 lg:pt-24 lg:pb-[104px]">
        <div className="grid gap-14 lg:grid-cols-[504fr_629fr] lg:gap-x-[109px] lg:pr-[78px]">
          <div>
            <Eyebrow className="text-gold opacity-100">{t.howWeWork.eyebrow}</Eyebrow>
            <SectionTitle className="mt-2.5">{t.howWeWork.title}</SectionTitle>
            <p className="mt-[34px] max-w-[400px] text-base leading-[1.375] text-ivory/70">
              {t.howWeWork.text}
            </p>

            <div className="group relative mt-[35px] mr-3 mb-3">
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 border border-gold/35"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden">
                <img
                  src="/images/how-we-work.webp"
                  alt={t.howWeWork.imageAlt}
                  className="aspect-[504/620] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-charcoal/45 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <ol className="lg:pt-[117px]">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className={`group flex gap-[23px] ${i > 0 ? 'border-t border-ivory/12 pt-8' : ''} ${
                  i < steps.length - 1 ? 'pb-[34px]' : ''
                }`}
              >
                <span className="flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-charcoal">
                  <Icon className="h-7 w-7" />
                </span>
                <div className="pt-0.5">
                  <span className="font-serif text-sm tracking-[0.2em] text-gold/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-1 font-serif text-lg leading-tight font-medium uppercase transition-colors duration-300 group-hover:text-gold md:text-xl">
                    {title}
                  </h3>
                  <p className="mt-3 text-base leading-[1.375] text-ivory/65">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
