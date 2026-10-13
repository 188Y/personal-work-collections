import { motion, type Variants } from "framer-motion"
import AvatarUpload from "./AvatarUpload"
import { profile } from "../data/profile"
import { socialLinks } from "../data/contact"
import { useLanguage } from "../i18n/LanguageContext"
import { ui } from "../i18n/ui"
import { ChevronDownIcon } from "./icons"
import { socialIconMap } from "./socialIcons"

/** Parent container: stagger children in one after another */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
}

/** Shared child animation: fade up into place */
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

/** The name leads the first screen and travels a little further than the rest */
const titleVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

/** Landing hero: status line, name, intro, primary actions, and avatar */
const Hero = () => {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative flex min-h-[92svh] flex-col overflow-hidden bg-canvas px-5 pt-28 pb-10 text-ink sm:px-6 sm:pb-8"
      aria-labelledby="hero-title"
    >
      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col">
        <div className="flex flex-1 flex-col-reverse items-center justify-center gap-12 md:flex-row md:items-center md:justify-between md:gap-16">
          {/* Copy: status + name + intro + actions */}
          <motion.div
            className="max-w-2xl text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="flex items-center justify-center gap-2.5 font-mono text-xs tracking-[0.14em] text-ink-3 md:justify-start"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink-2"
              />
              {t(profile.role)}
            </motion.p>

            <motion.h1
              id="hero-title"
              variants={titleVariants}
              className="mt-5 text-[2.5rem] leading-[1.15] font-semibold tracking-tight text-balance sm:text-[3.25rem] lg:text-[3.75rem]"
            >
              <span className="text-ink-2">{t(profile.greeting)}</span>{" "}
              <span className="text-ink">{profile.name}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-[42ch] text-pretty text-base leading-relaxed text-ink-2 md:mx-0 sm:text-lg"
            >
              {t(profile.intro)}
            </motion.p>

            {/* Primary calls to action */}
            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-wrap items-center justify-center gap-3 md:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center rounded-md bg-ink px-6 py-3 text-sm font-semibold text-canvas transition-colors duration-200 hover:bg-ink-2 focus-visible:ring-2 focus-visible:ring-ink-3 focus-visible:outline-none active:scale-[0.98]"
                aria-label={t(ui.viewProjects)}
              >
                {t(ui.viewProjects)}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-md border border-line-strong px-6 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:border-ink-3 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-ink-3 focus-visible:outline-none active:scale-[0.98]"
                aria-label={t(ui.contactMe)}
              >
                {t(ui.contactMe)}
              </a>
            </motion.div>
          </motion.div>

          {/* Avatar, with the page's single light source sitting behind it */}
          <motion.div
            className="relative shrink-0"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          >
            <AvatarUpload alt={t(profile.avatarAlt)} />
          </motion.div>
        </div>

        {/* Foot of the first screen: scroll cue on one side, real links on the other */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-line pt-5 sm:mt-20 md:justify-between"
        >
          <a
            href="#about"
            className="hidden items-center gap-2 font-mono text-xs tracking-[0.14em] text-ink-3 transition-colors hover:text-ink sm:flex"
            aria-label={t(ui.scrollToAbout)}
          >
            {t(ui.scroll)}
            <motion.span
              aria-hidden="true"
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ChevronDownIcon className="h-3.5 w-3.5" />
            </motion.span>
          </a>

          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.label]
              const isExternal = link.href.startsWith("http")

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-2 font-mono text-xs tracking-wide text-ink-3 transition-colors hover:text-ink focus-visible:ring-2 focus-visible:ring-ink-3 focus-visible:outline-none"
                    aria-label={`${link.label}: ${link.value}`}
                  >
                    {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
                    {link.value}
                    {isExternal ? (
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        ↗
                      </span>
                    ) : null}
                  </a>
                </li>
              )
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
