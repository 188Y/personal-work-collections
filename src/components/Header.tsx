/** Site navigation header with anchor links */
const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="text-lg font-semibold gradient-text"
          aria-label="Go to home"
        >
          Portfolio
        </a>
        <ul className="flex flex-wrap items-center gap-4 text-sm text-white/80">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
