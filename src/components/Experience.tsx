import { motion, type Variants } from "framer-motion"
import { experienceSection, experiences } from "../data/experience"
import { useLanguage } from "../i18n/LanguageContext"

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

/** Vertical timeline of work and education history */
const Experience = () => {
  const { t } = useLanguage()

  return (
    <section
      id="experience"
      className="bg-[#0a0a0a] px-4 py-24 text-white"
      aria-labelledby="experience-title"
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
            {t(experienceSection.tagline)}
          </p>
          <h2
            id="experience-title"
            className="mt-2 text-3xl font-bold text-white sm:text-4xl"
          >
            {t(experienceSection.heading)}
          </h2>
          <p className="mt-4 text-white/60">
            {t(experienceSection.description)}
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative mt-12 space-y-10 border-l border-white/10 pl-8"
        >
          {experiences.map((entry) => (
            <motion.li
              key={`${entry.role}-${entry.period}`}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline dot */}
              <span
                className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-cyan-400 to-violet-400 ring-4 ring-[#0a0a0a]"
                aria-hidden="true"
              />

              {/* Entry card */}
              <div className="rounded-xl border border-white/10 bg-[#161616] p-6">
                <span className="text-sm font-medium text-cyan-300/80">
                  {entry.period}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {t(entry.role)}
                </h3>
                <p className="text-sm text-white/50">{t(entry.organization)}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
                  {t(entry.description)}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/60"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}

export default Experience
