import { SectionTitle } from '../ui'

const phases = [
  { title: 'Phase 1', text: 'Dominate premium boutique segments in Western Ukraine.' },
  { title: 'Phase 2', text: 'Consolidate tech infrastructure (Investor CRM & Guest Apps).' },
  { title: 'Phase 3', text: 'Launch in high-yield European tourist hubs.' },
]

// Positions in the map artwork's own coordinate space (1051 × 788).
const MAP_W = 1051
const MAP_H = 788
const cities = [
  { name: 'Madrid', x: 191.3, y: 672.5, labelX: 161, labelY: 688 },
  { name: 'Lviv', x: 724.3, y: 385.5, labelX: 739, labelY: 391 },
]
const pct = (v, total) => `${(v / total) * 100}%`

function EuropeMap({ className = '' }) {
  return (
    <div
      className={`relative aspect-[1051/788] ${className}`}
      style={{
        maskImage:
          'linear-gradient(to right, transparent 0, #000 12%, #000 88%, transparent 100%), linear-gradient(to bottom, transparent 0, #000 10%, #000 90%, transparent 100%)',
        maskComposite: 'intersect',
      }}
    >
      <img
        src="/images/europe-map.webp"
        alt=""
        className="absolute inset-0 h-full w-full"
        loading="lazy"
      />
      <svg
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Expansion route from Lviv to Madrid"
      >
        <path
          d="M194 664C260 543 322 468 401 426C481 384 578 375 714 385"
          fill="none"
          stroke="#b5b3a7"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {cities.map((c) => (
          <g key={c.name}>
            <circle cx={c.x} cy={c.y} r="10.5" fill="#3c3535" />
            <circle cx={c.x} cy={c.y} r="5.5" fill="#bcb69c" />
          </g>
        ))}
      </svg>
      {cities.map((c) => (
        <span
          key={c.name}
          className="absolute font-sans text-xs font-normal text-ivory md:text-base"
          style={{ left: pct(c.labelX, MAP_W), top: pct(c.labelY, MAP_H) }}
        >
          {c.name}
        </span>
      ))}
    </div>
  )
}

export default function Strategy() {
  return (
    <section className="overflow-hidden bg-ink text-ivory">
      <div className="relative mx-auto max-w-[1440px] lg:min-h-[791px]">
        <div className="container-page relative z-10 pt-16 pb-10 lg:pt-[69px] lg:pb-[69px]">
          <div className="max-w-[392px]">
            <SectionTitle>
              The strategy for
              <br />
              European scale
            </SectionTitle>
            <p className="mt-[27px] text-base leading-[1.375] font-light">
              Our model was stress-tested and perfected in a highly complex and competitive market.
              We now possess the operational blueprint, the brand architecture, and the tech stack
              required to scale internationally.
            </p>

            <ol className="mt-12 lg:mt-[99px]">
              {phases.map((phase, i) => (
                <li key={phase.title} className={i > 0 ? 'border-t border-line pt-[33px]' : ''}>
                  <h3 className="font-serif text-xl font-medium text-parchment uppercase">{phase.title}</h3>
                  <p className={`mt-3.5 text-base leading-[1.375] ${i < phases.length - 1 ? 'pb-[31px]' : ''}`}>
                    {phase.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <EuropeMap className="w-[115%] -translate-x-[8%] lg:absolute lg:top-[3px] lg:left-[29%] lg:w-[73%] lg:translate-x-0" />
      </div>
    </section>
  )
}
