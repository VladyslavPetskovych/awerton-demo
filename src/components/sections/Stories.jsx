import { SparkleShape } from '../icons'
import { useI18n } from '../../i18n'
import { Eyebrow, ReadMore, SectionTitle } from '../ui'

// Layout per card; titles, texts and alts come from t.stories.items (same order).
const layout = [
  {
    image: '/images/story-stay.webp',
    aspect: 'aspect-[347/479]',
    offset: 'lg:mt-[104px]',
  },
  {
    image: '/images/story-vision.webp',
    aspect: 'aspect-[479/726]',
    offset: '',
  },
  {
    image: '/images/story-experience.webp',
    aspect: 'aspect-[458/587]',
    offset: 'lg:mt-[272px]',
  },
]

export default function Stories() {
  const { t, href } = useI18n()
  const stories = layout.map((card, i) => ({ ...card, ...t.stories.items[i] }))

  return (
    <section id="guides" className="relative overflow-hidden">
      <SparkleShape className="pointer-events-none absolute top-[35px] left-[86%] hidden h-[465px] w-auto text-sparkle/35 lg:block" />
      <SparkleShape className="pointer-events-none absolute top-[1044px] -left-[55px] hidden h-[329px] w-auto text-sparkle/35 lg:block" />

      <div className="container-page relative pt-16 pb-16 lg:pb-[67px]">
        <header className="mx-auto max-w-[1100px] text-center">
          <Eyebrow>{t.stories.eyebrow}</Eyebrow>
          <SectionTitle className="mt-2">{t.stories.title}</SectionTitle>
          <p className="mx-auto mt-[35px] max-w-[765px] text-base leading-[1.375] opacity-85">
            {t.stories.text}
          </p>
        </header>

        <div className="mt-12 grid items-start gap-12 md:grid-cols-3 md:gap-[18px] lg:mt-[47px] lg:grid-cols-[347fr_479fr_458fr]">
          {stories.map((story) => (
            <article key={story.image} className={story.offset}>
              <a href={href('/guides')} className="group block overflow-hidden rounded-md">
                <img
                  src={story.image}
                  alt={story.alt}
                  className={`${story.aspect} w-full object-cover transition duration-700 group-hover:scale-[1.03]`}
                  loading="lazy"
                />
              </a>
              <h3 className="mt-[30px] font-serif text-lg leading-[1.25] font-semibold uppercase text-[#0d0d0d]/90 md:text-xl">
                {story.title}
              </h3>
              <p className="mt-3 text-base leading-[1.375] opacity-85">{story.text}</p>
              <ReadMore href={href('/guides')} className="mt-6" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
