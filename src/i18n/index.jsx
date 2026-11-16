import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import en from './en'
import uk from './uk'

/*
 * Lightweight i18n: every visible string lives in ./en.js and ./uk.js (same shape).
 * Components call `useI18n()` and read `t.section.key`.
 *
 * Language is chosen in this order: `?lang=uk|en` in the URL → the visitor's saved choice
 * → the browser language (Ukrainian browsers get Ukrainian) → English.
 */

export const LANGUAGES = [
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'uk', short: 'UA', label: 'Українська' },
]

const dictionaries = { en, uk }
const STORAGE_KEY = 'awerton-lang'
const isSupported = (code) => Object.hasOwn(dictionaries, code ?? '')

function saveLanguage(code) {
  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch {
    // Not persisted — the choice still applies for this visit.
  }
}

function detectLanguage() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isSupported(fromUrl)) {
    // Remember it, so internal links (which carry no ?lang) keep the same language.
    saveLanguage(fromUrl)
    return fromUrl
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isSupported(saved)) return saved
  } catch {
    // Storage can be blocked (private mode) — fall through to the browser language.
  }
  return navigator.language?.toLowerCase().startsWith('uk') ? 'uk' : 'en'
}

const I18nContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLanguage)

  const setLang = useCallback((code) => {
    if (!isSupported(code)) return
    setLangState(code)
    saveLanguage(code)
    // A ?lang= in the address would override this choice on reload — keep it in sync.
    const url = new URL(window.location.href)
    if (url.searchParams.has('lang')) {
      url.searchParams.set('lang', code)
      history.replaceState(history.state, '', url)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: dictionaries[lang] }), [lang, setLang])

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
