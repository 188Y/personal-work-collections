import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react"
import {
  DEFAULT_LANGUAGE,
  htmlLangMap,
  isLanguage,
  LANGUAGE_STORAGE_KEY,
  type Language,
  type Localized,
} from "./config"
import { LanguageContext, type LanguageContextValue } from "./LanguageContext"

type LanguageProviderProps = {
  children: ReactNode
}

/** Read the saved language once, falling back to the default */
const readStoredLanguage = (): Language => {
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    return isLanguage(saved) ? saved : DEFAULT_LANGUAGE
  } catch {
    // Storage can be blocked (private mode); the default is good enough
    return DEFAULT_LANGUAGE
  }
}

/** Provides the active language plus a `t` helper to the whole app */
const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE)

  // Restore the visitor's previous choice after mount (SSR/hydration safe)
  useEffect(() => {
    setLanguageState(readStoredLanguage())
  }, [])

  // Keep <html lang> in sync for a11y and search engines
  useEffect(() => {
    document.documentElement.lang = htmlLangMap[language]
  }, [language])

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next)
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, next)
    } catch {
      // Ignore storage failures — switching still works for this session
    }
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: <T,>(localized: Localized<T>) => localized[language],
    }),
    [language, setLanguage]
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export default LanguageProvider
