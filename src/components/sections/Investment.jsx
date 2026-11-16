import { useI18n } from '../../i18n'
import { Eyebrow, Lines, SectionTitle } from '../ui'

// Titles and texts come from t.investment.models (same order).
// Illustrative monthly income index (0–100 of chart height), traced from the design.
const models = [
  {
    values: [40, 70, 90, 55, 22, 15, 21, 46, 62, 37, 57, 37],
    card: 'border border-sand',
    bar: 'bg-chart-muted hover:bg-[#c9c4ae]',
  },
  {
    values: [12, 17, 26, 31, 36, 40, 46, 51, 60, 68, 81, 92],
    card: 'bg-parchment',
    bar: 'bg-gold hover:bg-[#a9a083]',
  },
]

// Gridlines as % from the top, as drawn in the design.
const GRID = [0, 29.5, 54.6, 77.6]

function IncomeChart({ model }) {
  const { t } = useI18n()
  const MONTHS = t.investment.months
  return (
    <figure className="mt-[30px]">
      <div
        className="relative h-[183px] border-b border-l border-chart-axis"
        role="img"
        aria-label={`${model.title}: ${t.investment.chartLabel}`}
      >
        {GRID.map((top) => (
          <div key={top} className="absolute inset-x-0 h-px bg-chart-grid" style={{ top: `${top}%` }} />
        ))}
        <div className="absolute inset-0 flex items-end justify-between gap-1 px-2 sm:gap-2 lg:px-3">
          {model.values.map((v, i) => (
            <div key={MONTHS[i]} className="group relative flex h-full max-w-[26px] min-w-0 flex-1 items-end">
              <div
                className={`w-full rounded-t-[2px] transition-colors ${model.bar}`}
                style={{ height: `${v}%` }}
              />
              <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 -translate-x-1/2 rounded-sm bg-ink px-2 py-1 font-sans text-xs whitespace-nowrap text-ivory opacity-0 transition-opacity group-hover:opacity-100">
                {MONTHS[i]} · {v}
              </span>
            </div>
          ))}
        </div>
      </div>
      <table className="sr-only">
        <caption>
          {model.title} — {t.investment.tableCaption}
        </caption>
        <tbody>
          {model.values.map((v, i) => (
            <tr key={MONTHS[i]}>
              <th scope="row">{MONTHS[i]}</th>
              <td>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="mt-[30px] text-base leading-[1.375] opacity-85">{model.text}</figcaption>
    </figure>
  )
}

export default function Investment() {
  const { t } = useI18n()
  const localized = models.map((model, i) => ({ ...model, ...t.investment.models[i] }))

  return (
    <section id="investment" className="container-page pt-16 pb-16 lg:pb-[66px]">
      <Eyebrow>{t.investment.eyebrow}</Eyebrow>
      <SectionTitle className="mt-2.5">
        <Lines lines={t.investment.title} brClassName="hidden md:block" />
      </SectionTitle>

      <div className="mt-[38px] grid gap-[23px] md:grid-cols-2 lg:max-w-[1261px]">
        {localized.map((model) => (
          <div key={model.title} className={`rounded-[5px] px-[25px] pt-[30px] pb-[28px] lg:pr-[50px] ${model.card}`}>
            <h3 className="font-serif text-lg font-medium uppercase md:text-xl">{model.title}</h3>
            <IncomeChart model={model} />
          </div>
        ))}
      </div>

      <p className="mt-[37px] font-serif text-lg font-medium uppercase md:px-5 md:text-xl">
        {t.investment.closing}
      </p>
    </section>
  )
}
