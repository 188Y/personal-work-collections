import type { Project } from "../data/projects"
import { useLanguage } from "../i18n/LanguageContext"
import { ui } from "../i18n/ui"

type ProjectCardProps = {
  project: Project
  onOpen: (project: Project) => void
}

/** Project card: opens a detail modal when clicked */
const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  const { t } = useLanguage()

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      aria-haspopup="dialog"
      className="group flex h-full w-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#151515] text-left transition-colors duration-300 hover:border-white/30 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
    >
      {/* Screenshot with category overlay */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={`${t(project.name)} ${t(ui.projectScreenshotAlt)}`}
          loading="lazy"
          width={800}
          height={560}
          className="aspect-[4/3] h-auto w-full object-cover"
        />
        <span className="absolute top-3 left-3 rounded-full bg-[#0f0f0f]/80 px-3 py-1 text-xs text-white/70">
          {t(project.categoryLabel)}
        </span>
      </div>

      {/* Copy: name, description, tech stack */}
      <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
        <h3 className="text-base font-semibold text-white sm:text-lg">
          {t(project.name)}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/50">
          {t(project.description)}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-white/10 px-2 py-0.5 text-xs text-white/55"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </button>
  )
}

export default ProjectCard
