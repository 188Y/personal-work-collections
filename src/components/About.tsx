import { motion, type Variants } from "framer-motion"
import { about } from "../data/about"
import { skills } from "../data/skills"
import { useLanguage } from "../i18n/LanguageContext"
import { CheckIcon } from "./icons"
import { MetaList, SectionHeading, SectionShell } from "./SectionHeading"

/** Parent container: stagger children in one after another */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

/** Shared child animation: fade up into place */
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

/** About section: bio, highlights, and the skill index */
const About = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className="bg-canvas py-20 sm:py-24" aria-labelledby="about-title">
      <SectionShell>
        <SectionHeading id="about-title" heading={t(about.heading)} />

        <div className="mt-10 grid gap-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-16">
          {/* Bio + highlights, set as running text rather than a card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="space-y-5">
              {about.paragraphs.map((paragraph) => (
                <motion.p
                  key={t(paragraph)}
                  variants={itemVariants}
                  className="max-w-[62ch] text-pretty text-base leading-relaxed text-ink-2"
                >
                  {t(paragraph)}
                </motion.p>
              ))}
            </div>

            <motion.ul variants={itemVariants} className="mt-8 space-y-3.5">
              {about.highlights.map((highlight) => (
                <li
                  key={t(highlight)}
                  className="flex items-start gap-3 text-sm text-ink-2 sm:text-base"
                >
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-ink-2" />
                  {t(highlight)}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Skills as a definition index — no nested cards */}
          <motion.dl
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-7 md:pt-1"
          >
            {skills.map((category) => (
              <motion.div
                key={t(category.name)}
                variants={itemVariants}
                className="border-t border-line pt-4"
              >
                <dt className="font-mono text-xs tracking-[0.14em] text-ink-3">
                  {t(category.name)}
                </dt>
                <dd className="mt-3">
                  <MetaList items={category.items} />
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </SectionShell>
    </section>
  )
}

export default About
