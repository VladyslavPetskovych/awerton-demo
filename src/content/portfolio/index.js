import en from './en'
import uk from './uk'

/*
 * Portfolio properties shared across languages. Each one has its own page at
 * /portfolio/<slug>. Pictures and layout data live here; the words for each slug live in
 * ./en.js and ./uk.js (same shape).
 *
 * Photo keys are short names of files in /public/images, e.g. 'aristo-jacuzzi' →
 * /images/guide-aristo-jacuzzi.webp. Galleries hold a multiple of three photos so the
 * desktop grid (one large tile + singles, three columns) always ends on a full row.
 */

const img = (key) => `/images/guide-${key}.webp`

// Vertical clips from each property's Instagram (sound removed, max 20 s):
// /videos/<prefix>-<name>.mp4 with a /images/<prefix>-<name>-poster.webp still.
// Their captions are text.videos.labels, in the same order.
const clips = (prefix, names) =>
  names.map((name) => ({
    src: `/videos/${prefix}-${name}.mp4`,
    poster: `/images/${prefix}-${name}-poster.webp`,
  }))

export const properties = [
  {
    slug: 'aristo',
    key: 'aristo', // key into t.portfolio.categories
    name: 'Aristo Boutique Hotel',
    card: '/images/portfolio-aristo.webp',
    logo: '/images/logo-aristo.webp',
    logoWidth: 'w-[184px]',
    tint: 'bg-[#373127]/30',
    hero: '/images/portfolio-aristo.webp',
    intro: [img('aristo-bedside'), img('aristo-tea-tray')],
    approach: img('aristo-jacuzzi'),
    gallery: [
      '/images/portfolio-aristo.webp',
      img('aristo-suite-bed'),
      img('aristo-jacuzzi'),
      img('aristo-breakfast'),
      img('aristo-bedside'),
      img('aristo-amenities'),
      img('aristo-bathroom-top'),
      img('aristo-tea-tray'),
      img('aristo-luggage'),
    ],
    videos: clips('aristo', ['suite', 'arrival', 'ritual', 'dinner', 'jacuzzi', 'courtyard', 'evening']),
  },
  {
    slug: 'prime-rest',
    key: 'primeRest',
    name: 'Prime Rest',
    card: '/images/portfolio-prime-rest.webp',
    logo: '/images/logo-prime-rest.webp',
    logoWidth: 'w-[174px]',
    tint: 'bg-[#363128]/20',
    hero: img('prime-courtyard'),
    intro: [img('prime-studio'), img('prime-kitchen')],
    approach: '/images/portfolio-prime-rest.webp',
    gallery: [
      img('prime-studio'),
      '/images/portfolio-prime-rest.webp',
      img('prime-living'),
      img('prime-dining'),
      img('prime-kitchen'),
      img('prime-bathroom'),
    ],
    videos: clips('prime', ['apartment', 'interiors', 'morning', 'coffee', 'breakfast', 'home', 'rest']),
  },
  {
    slug: 'royal-apart',
    key: 'royalApart',
    name: 'Royal Apart',
    card: '/images/portfolio-royal-apart.webp',
    logo: '/images/logo-royal-apart.webp',
    logoWidth: 'w-[201px]',
    tint: 'bg-[#363128]/20',
    hero: img('royal-four-poster'),
    intro: [img('royal-dining-green'), img('royal-petal-bath')],
    approach: img('royal-morning-coffee'),
    gallery: [
      img('royal-family-living'),
      img('royal-four-poster'),
      img('royal-fireplace'),
      img('royal-mustard-sofa'),
      img('royal-dining-green'),
      img('royal-bed-pillows'),
      img('royal-spa-bath'),
      img('royal-flowers-living'),
      img('royal-light-bedroom'),
      img('royal-marble-bath'),
      img('royal-open-living'),
      img('royal-bed-roses'),
      img('royal-petal-bath'),
      img('royal-wood-kitchen'),
      img('royal-neutral-living'),
      img('royal-bath-window'),
      img('royal-dark-bathroom'),
      img('royal-balcony'),
    ],
    videos: clips('royal', ['burgundy', 'details', 'lviv', 'day', 'bath', 'tour', 'city', 'stay']),
  },
]

export const propertyHref = (slug) => `/portfolio/${slug}`

/**
 * AI-upscaled copies of a photo (Real-ESRGAN, in /images/hd at 2400 and 1200 px wide) as
 * <img> props. Pair with a `sizes` attribute so phones load the 1200 px file.
 * e.g. '/images/guide-aristo-jacuzzi.webp' → /images/hd/guide-aristo-jacuzzi(-1200).webp
 */
export function hd(src) {
  const name = src.replace(/^\/images\//, '').replace(/\.webp$/, '')
  return {
    src: `/images/hd/${name}.webp`,
    srcSet: `/images/hd/${name}-1200.webp 1200w, /images/hd/${name}.webp 2400w`,
  }
}

export function propertyBySlug(slug) {
  return properties.find((p) => p.slug === slug) ?? null
}

const content = { en, uk }

/** Words for one property in the given language. */
export function propertyText(lang, slug) {
  return content[lang][slug]
}
