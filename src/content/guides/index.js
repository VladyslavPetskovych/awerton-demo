import en from './en'
import uk from './uk'

/*
 * Guides shared across languages: slug (used in the URL hash, e.g. /guides#pricing),
 * cover photo and topics. The text for each slug lives in ./en.js and ./uk.js.
 */

// Filter order follows the design: all · hospitality · interior · strategy · advice.
export const guideTopics = ['all', 'hospitality', 'interior', 'strategy', 'advice']

export const guides = [
  { slug: 'stand-out', cover: '/images/guide-royal-four-poster.webp', topics: ['interior', 'strategy'] },
  { slug: 'professional-management', cover: '/images/guide-prime-courtyard.webp', topics: ['advice', 'strategy'] },
  { slug: 'small-details', cover: '/images/guide-aristo-bedside.webp', topics: ['interior', 'hospitality'] },
  {
    slug: 'pricing',
    cover: '/images/guide-lviv-opera.webp',
    coverPosition: '50% 30%',
    topics: ['strategy', 'advice'],
  },
  { slug: 'guest-expectations', cover: '/images/guide-aristo-breakfast.webp', topics: ['hospitality'] },
  { slug: 'maintenance', cover: '/images/guide-prime-bathroom.webp', topics: ['advice'] },
  { slug: 'cleaning-standards', cover: '/images/guide-aristo-suite-bed.webp', topics: ['hospitality', 'advice'] },
  { slug: 'short-vs-long-term', cover: '/images/guide-prime-studio.webp', topics: ['strategy', 'advice'] },
  { slug: 'durable-interiors', cover: '/images/guide-royal-neutral-living.webp', topics: ['interior'] },
]

// The design shows the third guide open on arrival.
export const DEFAULT_OPEN = 'small-details'

const content = { en, uk }

/** Text for one guide in the given language. */
export function guideText(lang, slug) {
  return content[lang][slug]
}

/** Rough reading time from every string in the article (≈160 words a minute, rounded up). */
export function readingMinutes(text) {
  const words = JSON.stringify([text.excerpt, text.body]).split(/\s+/).length
  return Math.max(2, Math.ceil(words / 160))
}
