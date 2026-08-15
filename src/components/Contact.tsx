import { motion, type Variants } from "framer-motion"
import { contactSection, socialLinks } from "../data/contact"
import { MailIcon } from "./icons"
import { socialIconMap } from "./socialIcons"

/** Parent container: stagger children in one after another */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

/** Shared child animation: fade up into place */
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

/** Contact section: reach-out copy plus link cards for each channel */
const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] px-4 py-24 text-white"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium tracking-wider text-cyan-300/80 uppercase">
            {contactSection.tagline}
          </p>
          <h2
            id="contact-title"
            className="mt-2 text-3xl font-bold text-white sm:text-4xl"
          >
            {contactSection.heading}
          </h2>
          <p className="mt-4 text-white/60">{contactSection.description}</p>
        </motion.div>

        {/* Contact channel cards */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-4 sm:grid-cols-2"
        >
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.label] ?? MailIcon
            const isExternal = link.href.startsWith("http")

            return (
              <motion.li key={link.label} variants={itemVariants} className="h-full">
                <a
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex h-full items-center gap-4 rounded-xl border border-white/10 bg-[#161616] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
                  aria-label={`${link.label}: ${link.value}`}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-400 text-[#0a0a0a]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-white/50">
                      {link.label}
                    </span>
                    <span className="mt-0.5 block truncate text-base font-medium text-white transition-colors group-hover:text-cyan-300 sm:text-lg">
                      {link.value}
                    </span>
                  </span>
                </a>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}

export default Contact
