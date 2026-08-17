import { createContext, useContext } from "react"
import { DEFAULT_LANGUAGE, type Language, type Localized } from "./config"

export type LanguageContextValue = {
  /** Currently active language */
  language: Language
  /** Switch the whole site to another language */
  setLanguage: (next: Language) => void
  /** Pick the current-language variant out of a localized value */
  t: <T>(value: Localized<T>) => T
}

/** Language context with a safe fallback so components never crash */
export const LanguageContext = createContext<LanguageContextValue>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  t: (value) => value[DEFAULT_LANGUAGE],
})

/** Read the active language and the `t` translator helper */
export const useLanguage = () => useContext(LanguageContext)
