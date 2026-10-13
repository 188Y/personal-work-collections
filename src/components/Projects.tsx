import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  projectCategories,
  projects,
  projectsSection,
  type Project,
  type ProjectCategory,
} from "../data/projects"
import { useLanguage } from "../i18n/LanguageContext"
import { ui } from "../i18n/ui"
import type { Localized } from "../i18n/config"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"
import { SectionHeading, SectionShell } from "./SectionHeading"

type FilterOption = "All" | ProjectCategory

const formatCount = (count: number) => String(count).padStart(2, "0")

/** Map each category key to its localized label, derived from project data */
const categoryLabelMap: Record<ProjectCategory, Localized<string>> = {
  "Web Development": { zh: "Web 开发", en: "Web Development" },
  "AI Application": { zh: "AI 应用", en: "AI Application" },
}

/** Filter options: "All" plus every project category */
const filterOptions: FilterOption[] = ["All", ...projectCategories]

/** Project showcase with category filter, card grid, and detail modal */
const Projects = () => {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categoryCounts = useMemo(() => {
    const counts: Record<ProjectCategory, number> = {
      "Web Development": 0,
      "AI Application": 0,
    }

    for (const project of projects) {
      counts[project.category] += 1
    }

    return counts
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  const getCount = (option: FilterOption) =>
    option === "All" ? projects.length : categoryCounts[option]

  return (
    <section
      id="projects"
      className="bg-canvas py-20 sm:py-24"
      aria-labelledby="projects-title"
    >
      <SectionShell>
        <SectionHeading
          id="projects-title"
          heading={t(projectsSection.heading)}
          description={t(projectsSection.description)}
        />

        {/* Filter pills — the active one is the only filled control on the page */}
        <motion.div
          className="mt-8 flex flex-wrap items-center gap-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          role="group"
          aria-label={t(ui.filterProjects)}
        >
          {filterOptions.map((option) => {
            const isActive = activeFilter === option
            const label =
              option === "All" ? t(ui.filterAll) : t(categoryLabelMap[option])

            return (
              <button
                key={option}
                type="button"
                onClick={() => setActiveFilter(option)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ink-3 focus-visible:outline-none ${
                  isActive
                    ? "border-transparent bg-ink font-semibold text-canvas"
                    : "border-line text-ink-3 hover:border-line-strong hover:text-ink"
                }`}
              >
                {label}
                <span
                  className={`font-mono text-[11px] ${
                    isActive ? "text-canvas/65" : "text-ink-4"
                  }`}
                >
                  {formatCount(getCount(option))}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Card grid */}
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project, index) => (
              <motion.li
                key={project.id}
                layout
                className="h-full"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: 0.05 * Math.min(index, 3) }}
              >
                <ProjectCard project={project} onOpen={setSelectedProject} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {filteredProjects.length === 0 ? (
          <p className="mt-10 text-center text-sm text-ink-3">
            {t(ui.emptyProjects)}
          </p>
        ) : null}
      </SectionShell>

      {/* Detail modal */}
      <AnimatePresence>
        {selectedProject ? (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  )
}

export default Projects
