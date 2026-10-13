import { languageOptions } from "../i18n/config"
import { useLanguage } from "../i18n/LanguageContext"
import { ui } from "../i18n/ui"

/**
 * Language switch kept as two labels separated by a slash. It carries no pill
 * and no moving highlight, so the header keeps a single "you are here" grammar
 * (the marker on the active nav item).
 */
const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t(ui.languageToggle)}
      className="flex items-center"
    >
      {languageOptions.map((option, index) => {
        const isActive = language === option.value

        return (
          <span key={option.value} className="flex items-center">
            {index > 0 ? (
              <span aria-hidden="true" className="text-xs text-line-strong">
                /
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => setLanguage(option.value)}
              aria-pressed={isActive}
              aria-label={option.label}
              className={`rounded px-1.5 py-1 text-xs font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ink-3 focus-visible:outline-none ${
                isActive ? "text-ink" : "text-ink-3 hover:text-ink"
              }`}
            >
              {option.label}
            </button>
          </span>
        )
      })}
    </div>
  )
}

export default LanguageToggle
