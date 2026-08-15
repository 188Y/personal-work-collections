import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  projectCategories,
  projects,
  projectsSection,
  type Project,
  type ProjectCategory,
} from "../data/projects"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"

type FilterOption = "All" | ProjectCategory

const formatCount = (count: number) => String(count).padStart(2, "0")

/** Filter options: "All" plus every project category */
const filterOptions: FilterOption[] = ["All", ...projectCategories]

/** Project showcase with category filter, card grid, and detail modal */
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categoryCounts = useMemo(() => {
    const counts: Record<ProjectCategory, number> = {
      "Web Development": 0,
      "Data Visualization": 0,
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
      className="bg-[#0a0a0a] px-4 py-24 text-white"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium tracking-wider text-cyan-300/80 uppercase">
            {projectsSection.tagline}
          </p>
          <h2
            id="projects-title"
            className="mt-2 text-3xl font-bold text-white sm:text-4xl"
          >
            {projectsSection.heading}
          </h2>
          <p className="mt-4 text-white/60">{projectsSection.description}</p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          className="mt-8 flex flex-wrap items-center gap-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          role="group"
          aria-label="Filter projects by category"
        >
          {filterOptions.map((option) => {
            const isActive = activeFilter === option

            return (
              <button
                key={option}
                type="button"
                onClick={() => setActiveFilter(option)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none ${
                  isActive
                    ? "border-transparent bg-gradient-to-r from-cyan-400 to-violet-400 font-medium text-[#0a0a0a]"
                    : "border-white/15 bg-white/5 text-white/60 hover:border-white/30 hover:text-white"
                }`}
              >
                {option}{" "}
                <span className={isActive ? "opacity-70" : "opacity-50"}>
                  {formatCount(getCount(option))}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Card grid */}
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              className="h-full"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: 0.05 * index }}
            >
              <ProjectCard project={project} onOpen={setSelectedProject} />
            </motion.li>
          ))}
        </ul>

        {filteredProjects.length === 0 ? (
          <p className="mt-10 text-center text-sm text-white/45">
            No projects in this category yet.
          </p>
        ) : null}
      </div>

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
