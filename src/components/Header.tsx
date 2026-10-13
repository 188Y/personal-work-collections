import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CloseIcon, MenuIcon } from "./icons"
import LanguageToggle from "./LanguageToggle"
import { useLanguage } from "../i18n/LanguageContext"
import { ui } from "../i18n/ui"

/** Site navigation items — href targets the matching section id */
const navItems = [
  { href: "#hero", key: "hero" },
  { href: "#about", key: "about" },
  { href: "#experience", key: "experience" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
] as const

/** Fixed header with anchor links, active-section highlight, and mobile menu */
const Header = () => {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState<string>("#hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Highlight the nav item whose section currently crosses the viewport center
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // The bar only earns a surface once the page has moved under it
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "border-b border-line bg-canvas/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-3.5 sm:px-6"
        aria-label={t(ui.mainNavigation)}
      >
        <a
          href="#hero"
          className="group flex items-center gap-2.5 rounded-md text-sm font-semibold tracking-tight text-ink focus-visible:ring-2 focus-visible:ring-ink-3 focus-visible:outline-none"
          aria-label={t(ui.goToHome)}
        >
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 rounded-[3px] bg-ink transition-transform duration-300 group-hover:scale-110"
          />
          {t(ui.brand)}
        </a>

        <div className="flex items-center gap-2.5">
          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 text-sm md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative block rounded-md px-2.5 py-1.5 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ink-3 focus-visible:outline-none ${
                      isActive ? "text-ink" : "text-ink-3 hover:text-ink"
                    }`}
                  >
                    {t(ui.nav[item.key])}
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active-marker"
                        aria-hidden="true"
                        className="absolute inset-x-2.5 bottom-0.5 h-px bg-ink"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    ) : null}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Language switcher (desktop + mobile) */}
          <LanguageToggle />

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink-3 transition-colors hover:border-line-strong hover:text-ink focus-visible:ring-2 focus-visible:ring-ink-3 focus-visible:outline-none md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? t(ui.closeMenu) : t(ui.openMenu)}
          >
            {isMenuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.ul
            id="mobile-nav"
            className="border-t border-line bg-canvas/95 px-5 py-2 backdrop-blur-xl md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href

              return (
                <li key={item.href} className="border-b border-line last:border-b-0">
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`flex items-center gap-3 rounded-md py-3 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-ink-3 focus-visible:outline-none ${
                      isActive ? "text-ink" : "text-ink-3 hover:text-ink"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full ${
                        isActive ? "bg-ink" : "bg-line-strong"
                      }`}
                    />
                    {t(ui.nav[item.key])}
                  </a>
                </li>
              )
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Header
