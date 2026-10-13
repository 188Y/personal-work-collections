import type { Project } from "../data/projects"
import { useLanguage } from "../i18n/LanguageContext"
import { ui } from "../i18n/ui"
import { MetaList } from "./SectionHeading"

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
      className="group flex h-full w-full flex-col overflow-hidden rounded-lg border border-line bg-surface text-left transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:bg-surface-2 focus-visible:ring-2 focus-visible:ring-ink-3 focus-visible:outline-none"
    >
      {/* Screenshot */}
      <div className="relative overflow-hidden border-b border-line">
        <img
          src={project.image}
          alt={`${t(project.name)} ${t(ui.projectScreenshotAlt)}`}
          loading="lazy"
          width={800}
          height={560}
          className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Copy: category, name, description, tech stack, affordance */}
      <div className="flex flex-1 flex-col p-5">
        <span className="font-mono text-xs tracking-wide text-ink-3">
          {t(project.categoryLabel)}
        </span>
        <h3 className="mt-2.5 text-base font-semibold text-ink sm:text-lg">
          {t(project.name)}
        </h3>
        <p className="mt-2 line-clamp-2 text-pretty text-sm leading-relaxed text-ink-2">
          {t(project.description)}
        </p>
        <MetaList items={project.techStack} className="mt-4" />

        <span className="relative mt-auto inline-flex w-fit pt-5 font-mono text-xs tracking-wide text-ink-3 transition-colors duration-200 group-hover:text-ink">
          {t(ui.viewDetails)}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out group-hover:scale-x-100"
          />
        </span>
      </div>
    </button>
  )
}

export default ProjectCard
