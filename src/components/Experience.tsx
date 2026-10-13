import { useRef } from "react"
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  type Variants,
} from "framer-motion"
import { experienceSection, experiences } from "../data/experience"
import { useLanguage } from "../i18n/LanguageContext"
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
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
}

/** Vertical timeline of work and education history */
const Experience = () => {
  const { t } = useLanguage()
  const railRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  // The rail draws itself as the section travels through the viewport,
  // so scrolling the history is what advances it.
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 85%", "end 65%"],
  })
  const railProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section
      id="experience"
      className="bg-canvas py-20 sm:py-24"
      aria-labelledby="experience-title"
    >
      <SectionShell>
        <SectionHeading
          id="experience-title"
          heading={t(experienceSection.heading)}
          description={t(experienceSection.description)}
        />

        {/* Timeline: one rail carries the order; each entry sits straight on it */}
        <div ref={railRef} className="relative mt-12">
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-[5px] w-px bg-line-strong"
          />
          <motion.span
            aria-hidden="true"
            className="absolute inset-y-0 left-[5px] w-px origin-top bg-ink-2"
            style={{ scaleY: prefersReducedMotion ? 1 : railProgress }}
          />

          <motion.ol
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-11"
          >
            {experiences.map((entry) => {
              const isOngoing = entry.period.includes("至今")

              return (
                <motion.li
                  key={`${entry.role.en}-${entry.period}`}
                  variants={itemVariants}
                  className="relative pl-9"
                >
                  {/* Timeline dot — the bright one marks what is still running */}
                  <span
                    aria-hidden="true"
                    className={`absolute top-1.5 left-0 h-2.5 w-2.5 rounded-full ring-4 ring-canvas ${
                      isOngoing ? "bg-ink" : "bg-line-strong"
                    }`}
                  />

                  <p className="font-mono text-xs tracking-wide text-ink-3">
                    {entry.period}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-ink">
                    {t(entry.role)}
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-3">{t(entry.organization)}</p>
                  <p className="mt-3 max-w-[62ch] text-pretty text-sm leading-relaxed text-ink-2 sm:text-base">
                    {t(entry.description)}
                  </p>
                  <MetaList items={entry.tags} className="mt-4" />
                </motion.li>
              )
            })}
          </motion.ol>
        </div>
      </SectionShell>
    </section>
  )
}

export default Experience
