/** Site footer with copyright */
import { useLanguage } from "../i18n/LanguageContext"
import { ui } from "../i18n/ui"

const Footer = () => {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-canvas py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-5 font-mono text-xs tracking-wide text-ink-3 sm:flex-row sm:px-6">
        <p>© {year} Yly</p>
        <a
          href="#hero"
          className="transition-colors hover:text-ink focus-visible:ring-2 focus-visible:ring-ink-3 focus-visible:outline-none"
          aria-label={t(ui.backToTop)}
        >
          {t(ui.backToTop)}
        </a>
      </div>
    </footer>
  )
}

export default Footer
