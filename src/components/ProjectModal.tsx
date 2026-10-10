import { useEffect } from "react"
import { motion } from "framer-motion"
import type { Project } from "../data/projects"
import { useLanguage } from "../i18n/LanguageContext"
import { ui } from "../i18n/ui"
import { ArrowUpRightIcon, CheckIcon, CloseIcon, GitHubIcon } from "./icons"

type ProjectModalProps = {
  project: Project
  onClose: () => void
}

/** Modal dialog with full project details; closes on Escape, backdrop, or button */
const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { t } = useLanguage()
  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  // Lock body scroll while the modal is open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <motion.div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-white/10 bg-[#151515]"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.96 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <button
          type="button"
          onClick={onClose}
          autoFocus
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#0f0f0f]/80 text-white/70 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
          aria-label={t(ui.closeProject)}
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <img
          src={project.image}
          alt={`${t(project.name)} ${t(ui.projectScreenshotAlt)}`}
          className="aspect-[16/9] w-full object-cover"
        />

        <div className="p-6 sm:p-8">
          <p className="text-sm font-medium tracking-wider text-white/40 uppercase">
            {t(project.categoryLabel)}
          </p>
          <h3
            id="project-modal-title"
            className="mt-2 text-2xl font-bold text-white"
          >
            {t(project.name)}
          </h3>
          <p className="mt-4 leading-relaxed text-white/70">
            {t(project.longDescription)}
          </p>

          {/* Highlights */}
          <h4 className="mt-6 text-sm font-semibold text-white/80">
            {t(ui.highlights)}
          </h4>
          <ul className="mt-3 space-y-2">
            {project.highlights.map((highlight) => (
              <li
                key={t(highlight)}
                className="flex items-start gap-3 text-sm text-white/70"
              >
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/45" />
                {t(highlight)}
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <h4 className="mt-6 text-sm font-semibold text-white/80">
            {t(ui.techStack)}
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-white/60"
              >
                {tech}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[#0f0f0f] transition-colors hover:bg-white/85 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
              >
                <GitHubIcon className="h-4 w-4" />
                {t(ui.repository)}
              </a>
            ) : null}
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/45 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
              >
                {t(ui.liveDemo)}
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectModal
