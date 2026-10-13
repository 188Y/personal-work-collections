import { motion, type Variants } from "framer-motion"
import { contactSection, socialLinks } from "../data/contact"
import { useLanguage } from "../i18n/LanguageContext"
import { MailIcon } from "./icons"
import { socialIconMap } from "./socialIcons"
import { SectionHeading, SectionShell } from "./SectionHeading"

/** Parent container: stagger children in one after another */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

/** Shared child animation: fade up into place */
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
}

/** Contact section: one reachable channel per hairline row */
const Contact = () => {
  const { t } = useLanguage()

  return (
    <section
      id="contact"
      className="bg-canvas py-20 sm:py-24"
      aria-labelledby="contact-title"
    >
      <SectionShell>
        <SectionHeading id="contact-title" heading={t(contactSection.heading)} />

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 border-t border-line"
        >
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.label] ?? MailIcon
            const isExternal = link.href.startsWith("http")

            return (
              <motion.li key={link.label} variants={itemVariants}>
                <a
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 border-b border-line py-5 transition-colors duration-200 hover:border-line-strong focus-visible:ring-2 focus-visible:ring-ink-3 focus-visible:outline-none sm:gap-6"
                  aria-label={`${link.label}: ${link.value}`}
                >
                  <Icon className="h-4 w-4 shrink-0 text-ink-3 transition-colors duration-200 group-hover:text-ink" />
                  <span className="font-mono text-xs tracking-[0.14em] text-ink-3 transition-colors duration-200 group-hover:text-ink">
                    {link.label}
                  </span>
                  <span className="ml-auto flex min-w-0 items-center gap-2 text-base font-medium text-ink sm:text-lg">
                    <span className="truncate underline-offset-4 group-hover:underline">
                      {link.value}
                    </span>
                    {isExternal ? (
                      <span
                        aria-hidden="true"
                        className="text-sm text-ink-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        ↗
                      </span>
                    ) : null}
                  </span>
                </a>
              </motion.li>
            )
          })}
        </motion.ul>
      </SectionShell>
    </section>
  )
}

export default Contact
