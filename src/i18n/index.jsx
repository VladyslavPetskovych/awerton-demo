import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { SITE_URL } from '../siteConfig'
import en from './en'
import uk from './uk'

/*
 * Lightweight i18n: every visible string lives in ./en.js and ./uk.js (same shape).
 * Components call `useI18n()` and read `t.section.key`.
 *
 * The address decides the language. Ukrainian pages live at the site root (/, /services,
 * /guides, /portfolio/aristo …) and English pages are their own URLs under /en (/en,
 * /en/services, /en/guides, /en/portfolio/aristo …). Internal links go through
 * `href(path)` from useI18n() so visitors stay in the language they are reading.
 */

export const LANGUAGES = [
  { code: 'en', short: 'EN', label: 'English', prefix: '/en' },
  { code: 'uk', short: 'UA', label: 'Українська', prefix: '' },
]

export const DEFAULT_LANG = 'uk'
const dictionaries = { en, uk }
const isSupported = (code) => Object.hasOwn(dictionaries, code ?? '')

/** '/en/services' → { lang: 'en', path: '/services' }; '/services' → { lang: 'uk', path: '/services' } */
export function parseLocation(pathname = window.location.pathname) {
  for (const { code, prefix } of LANGUAGES) {
    if (!prefix) continue
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) {
      return { lang: code, path: pathname.slice(prefix.length) || '/' }
    }
  }
  return { lang: DEFAULT_LANG, path: pathname || '/' }
}

/**
 * A site path in the given language. Only root-relative links ('/services', '/#portfolio')
 * change; in-page anchors ('#request'), mail/phone links and full URLs are returned as is.
 */
export function localizePath(href, lang) {
  if (typeof href !== 'string' || !href.startsWith('/') || href.startsWith('//')) return href
  const prefix = LANGUAGES.find((l) => l.code === lang)?.prefix ?? ''
  if (!prefix) return href
  return href === '/' ? prefix : `${prefix}${href}`
}

/** Old links with ?lang=en|uk: move to the matching URL and drop the parameter. */
function redirectLegacyQuery() {
  const url = new URL(window.location.href)
  const fromQuery = url.searchParams.get('lang')
  if (!isSupported(fromQuery)) return
  url.searchParams.delete('lang')
  url.pathname = localizePath(parseLocation(url.pathname).path, fromQuery)
  history.replaceState(history.state, '', url)
}

/** Keeps <html lang>, the canonical URL and the hreflang alternates in step with the page. */
function updateHead(lang) {
  document.documentElement.lang = lang
  const { path } = parseLocation()
  const setLink = (selector, attrs) => {
    let el = document.head.querySelector(selector)
    if (!el) {
      el = document.createElement('link')
      document.head.appendChild(el)
    }
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v)
  }
  setLink('link[rel="canonical"]', { rel: 'canonical', href: SITE_URL + localizePath(path, lang) })
  for (const l of LANGUAGES) {
    setLink(`link[rel="alternate"][hreflang="${l.code}"]`, {
      rel: 'alternate',
      hreflang: l.code,
      href: SITE_URL + localizePath(path, l.code),
    })
  }
  setLink('link[rel="alternate"][hreflang="x-default"]', {
    rel: 'alternate',
    hreflang: 'x-default',
    href: SITE_URL + localizePath(path, DEFAULT_LANG),
  })
}

const I18nContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    redirectLegacyQuery()
    return parseLocation().lang
  })

  // Switching language opens the same page under the other language's URL. The page itself
  // is the same component, so only the address and the texts change (scroll is kept).
  const setLang = useCallback((code) => {
    if (!isSupported(code)) return
    const { path } = parseLocation()
    const { search, hash } = window.location
    history.pushState(history.state, '', localizePath(path, code) + search + hash)
    setLangState(code)
  }, [])

  // Back/forward between the two language versions of a page.
  useEffect(() => {
    const onPop = () => setLangState(parseLocation().lang)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    updateHead(lang)
  }, [lang])

  const href = useCallback((path) => localizePath(path, lang), [lang])

  const value = useMemo(() => ({ lang, setLang, href, t: dictionaries[lang] }), [lang, setLang, href])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside <LanguageProvider>')
  return ctx
}

/** Sets the browser tab title whenever the page or language changes. */
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}
