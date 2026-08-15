import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CloseIcon, MenuIcon } from "./icons"

/** Site navigation items — href targets the matching section id */
const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const

/** Fixed header with anchor links, active-section highlight, and mobile menu */
const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("#hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const navLinkClass = (itemHref: string) =>
    activeSection === itemHref ? "text-cyan-300" : "hover:text-white"

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
      <nav
        className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="text-lg font-semibold gradient-text"
          aria-label="Go to home"
        >
          Portfolio
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-4 text-sm text-white/80 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={activeSection === item.href ? "true" : undefined}
                className={`transition-colors ${navLinkClass(item.href)}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/80 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.ul
            id="mobile-nav"
            className="border-t border-white/10 bg-[#0a0a0a]/95 px-4 py-3 backdrop-blur-md md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={activeSection === item.href ? "true" : undefined}
                  className={`block rounded-md px-3 py-3 text-sm transition-colors ${
                    activeSection === item.href
                      ? "text-cyan-300"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Header
