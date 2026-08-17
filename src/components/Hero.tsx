import { motion, type Variants } from "framer-motion"
import AvatarUpload from "./AvatarUpload"
import { profile } from "../data/profile"
import { socialLinks } from "../data/contact"
import { useLanguage } from "../i18n/LanguageContext"
import { ui } from "../i18n/ui"
import { ChevronDownIcon, MailIcon } from "./icons"
import { socialIconMap } from "./socialIcons"

/** Parent container: stagger children in one after another */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

/** Shared child animation: fade up into place */
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

/** Landing hero: large title, intro, CTAs, social links, and avatar */
const Hero = () => {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0a] px-4 pt-24 pb-24 text-white"
      aria-labelledby="hero-title"
    >
      {/* Soft gradient atmosphere — keeps the dark canvas from feeling flat */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl sm:h-96 sm:w-96"
          animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-violet-400/15 blur-3xl sm:h-80 sm:w-80"
          animate={{ opacity: [0.4, 0.75, 0.4], scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between md:gap-16">
        {/* Copy: role + title + intro + CTAs + socials */}
        <motion.div
          className="max-w-xl text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="mb-3 text-sm font-medium tracking-wider text-cyan-300/80 uppercase"
          >
            {t(profile.role)}
          </motion.p>

          <motion.h1
            id="hero-title"
            variants={itemVariants}
            className="text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {t(profile.greeting)}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {t(profile.intro)}
          </motion.p>

          {/* Primary calls to action */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-400 to-violet-400 px-6 py-3 text-sm font-semibold text-[#0a0a0a] shadow-lg shadow-cyan-400/20 transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
              aria-label={t(ui.viewProjects)}
            >
              {t(ui.viewProjects)}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:outline-none"
              aria-label={t(ui.contactMe)}
            >
              {t(ui.contactMe)}
            </a>
          </motion.div>

          {/* Social / contact links as compact icon buttons */}
          <motion.ul
            variants={itemVariants}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.label] ?? MailIcon
              const isExternal = link.href.startsWith("http")

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={link.label}
                    title={link.value}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors hover:border-white/40 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              )
            })}
          </motion.ul>
        </motion.div>

        {/* Avatar upload with gradient ring */}
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
        >
          <AvatarUpload alt={t(profile.avatarAlt)} />
        </motion.div>
      </div>

      {/* Scroll hint to the next section */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-wider text-white/50 uppercase transition-colors hover:text-white sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        aria-label={t(ui.scrollToAbout)}
      >
        <span>{t(ui.scroll)}</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDownIcon className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}

export default Hero
