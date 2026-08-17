import { motion } from "framer-motion"
import { languageOptions } from "../i18n/config"
import { useLanguage } from "../i18n/LanguageContext"
import { ui } from "../i18n/ui"

/** Pill-style language switch with a sliding highlight for the active option */
const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t(ui.languageToggle)}
      className="flex items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm"
    >
      {languageOptions.map((option) => {
        const isActive = language === option.value

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLanguage(option.value)}
            aria-pressed={isActive}
            aria-label={option.label}
            className="relative rounded-full px-3 py-1 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
          >
            {isActive ? (
              <motion.span
                layoutId="language-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 shadow-lg shadow-cyan-400/20"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                aria-hidden="true"
              />
            ) : null}
            <span
              className={`relative ${isActive ? "text-[#0a0a0a]" : "text-white/70 hover:text-white"}`}
            >
              {option.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default LanguageToggle