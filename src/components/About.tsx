import { motion, type Variants } from "framer-motion"
import { about } from "../data/about"
import { skills } from "../data/skills"
import { useLanguage } from "../i18n/LanguageContext"
import { CheckIcon } from "./icons"

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

/** About section: bio, highlights, and skill cards */
const About = () => {
  const { t } = useLanguage()

  return (
    <section
      id="about"
      className="bg-[#0f0f0f] px-4 py-24 text-white"
      aria-labelledby="about-title"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium tracking-wider text-white/40 uppercase">
            {t(about.tagline)}
          </p>
          <h2
            id="about-title"
            className="mt-2 text-3xl font-bold text-white sm:text-4xl"
          >
            {t(about.heading)}
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Bio + highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            {about.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-base leading-relaxed text-white/60 sm:text-lg"
              >
                {t(paragraph)}
              </motion.p>
            ))}

            <motion.ul variants={itemVariants} className="space-y-3">
              {about.highlights.map((highlight) => (
                <li
                  key={t(highlight)}
                  className="flex items-center gap-3 text-sm text-white/80 sm:text-base"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/80">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {t(highlight)}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Skill cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6"
          >
            {skills.map((category) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="rounded-lg border border-white/10 bg-[#151515] p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {category.name}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-white/10 px-3 py-1.5 text-sm text-white/70 transition-colors hover:border-white/25 hover:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
