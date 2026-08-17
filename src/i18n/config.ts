/** Supported languages and shared localization types */

/** Language codes supported by the site */
export type Language = "zh" | "en"

/** A value that carries one variant per supported language */
export type Localized<T> = Record<Language, T>

/** Toggle options, ordered exactly as rendered in the UI */
export const languageOptions: { value: Language; label: string }[] = [
  { value: "zh", label: "中文" },
  { value: "en", label: "EN" },
]

/** Language used before the visitor picks one */
export const DEFAULT_LANGUAGE: Language = "zh"

/** localStorage key holding the visitor's language choice */
export const LANGUAGE_STORAGE_KEY = "portfolio-language"

/** Value written to the <html lang> attribute for each language */
export const htmlLangMap: Localized<string> = {
  zh: "zh-CN",
  en: "en",
}

/** Narrow an unknown value (e.g. from storage) to a supported language */
export const isLanguage = (value: unknown): value is Language =>
  value === "zh" || value === "en"
