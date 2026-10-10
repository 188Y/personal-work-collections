/** Site footer with copyright */
import { useLanguage } from "../i18n/LanguageContext"
import { ui } from "../i18n/ui"

const Footer = () => {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#0f0f0f] px-4 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 text-sm text-white/45 sm:flex-row">
        <p>
          © {year} Yly. {t(ui.rightsReserved)}
        </p>
        <a href="#hero" className="transition-colors hover:text-white" aria-label={t(ui.backToTop)}>
          {t(ui.backToTop)}
        </a>
      </div>
    </footer>
  )
}

export default Footer
