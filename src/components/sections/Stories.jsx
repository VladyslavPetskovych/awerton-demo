import { SparkleShape } from '../icons'
import { Eyebrow, ReadMore, SectionTitle } from '../ui'

const stories = [
  {
    title: 'Beyond the stay: what makes a hotel worth returning to',
    text: 'The details, atmosphere and service that turn a property into a memorable destination.',
    image: '/images/story-stay.webp',
    alt: 'A softly lit hotel bedroom with a made bed and armchair',
    aspect: 'aspect-[347/479]',
    offset: 'lg:mt-[104px]',
  },
  {
    title: 'From vision to value: how we shape hospitality projects',
    text: 'A look at how strategy, design and thoughtful management come together to create long-term value.',
    image: '/images/story-vision.webp',
    alt: 'Breakfast tray with croissants and fruit on white hotel bed linen',
    aspect: 'aspect-[479/726]',
    offset: '',
  },
  {
    title: 'Where experience meets great investment',
    text: 'Why successful hospitality projects are built around both guest experience and strong business fundamentals.',
    image: '/images/story-experience.webp',
    alt: 'A bright restaurant with copper pendant lamps, seen through leaves',
    aspect: 'aspect-[458/587]',
    offset: 'lg:mt-[272px]',
  },
]

export default function Stories() {
  return (
    <section id="guides" className="relative overflow-hidden">
      <SparkleShape className="pointer-events-none absolute top-[35px] left-[86%] hidden h-[465px] w-auto text-sparkle/35 lg:block" />
      <SparkleShape className="pointer-events-none absolute top-[1044px] -left-[55px] hidden h-[329px] w-auto text-sparkle/35 lg:block" />

      <div className="container-page relative pt-16 pb-16 lg:pb-[67px]">
        <header className="mx-auto max-w-[1100px] text-center">
          <Eyebrow>Guides &amp; tips</Eyebrow>
          <SectionTitle className="mt-2">Stories that shape the way we create.</SectionTitle>
          <p className="mx-auto mt-[35px] max-w-[765px] text-base leading-[1.375] opacity-85">
            We believe successful projects begin with a clear strategy and continue with attention to
            every detail. AWERTON combines market insight, operational expertise and a strong
            understanding of hospitality to build businesses designed for sustainable growth.
          </p>
        </header>

        <div className="mt-12 grid items-start gap-12 md:grid-cols-3 md:gap-[18px] lg:mt-[47px] lg:grid-cols-[347fr_479fr_458fr]">
          {stories.map((story) => (
            <article key={story.title} className={story.offset}>
              <a href="#" className="group block overflow-hidden rounded-md">
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
              <ReadMore className="mt-6" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
