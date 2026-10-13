import { useEffect } from "react"
import { motion } from "framer-motion"
import type { Project } from "../data/projects"
import { useLanguage } from "../i18n/LanguageContext"
import { ui } from "../i18n/ui"
import { ArrowUpRightIcon, CheckIcon, CloseIcon, GitHubIcon } from "./icons"
import { MetaList } from "./SectionHeading"

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
        className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <motion.div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-line bg-surface"
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97, transition: { duration: 0.16 } }}
        transition={{ duration: 0.24, ease: "easeOut" }}
      >
        <button
          type="button"
          onClick={onClose}
          autoFocus
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-canvas/70 text-ink-2 backdrop-blur-md transition-colors hover:border-line-strong hover:text-ink focus-visible:ring-2 focus-visible:ring-ink-3 focus-visible:outline-none"
          aria-label={t(ui.closeProject)}
        >
          <CloseIcon className="h-4 w-4" />
        </button>

        <img
          src={project.image}
          alt={`${t(project.name)} ${t(ui.projectScreenshotAlt)}`}
          className="aspect-[16/9] w-full border-b border-line object-cover"
        />

        <div className="p-6 sm:p-8">
          <p className="font-mono text-xs tracking-wide text-ink-3">
            {t(project.categoryLabel)}
          </p>
          <h3
            id="project-modal-title"
            className="mt-2.5 text-2xl font-semibold tracking-tight text-ink"
          >
            {t(project.name)}
          </h3>
          <p className="mt-4 max-w-[62ch] text-pretty leading-relaxed text-ink-2">
            {t(project.longDescription)}
          </p>

          {/* Highlights */}
          <h4 className="mt-7 font-mono text-xs tracking-[0.14em] text-ink-3">
            {t(ui.highlights)}
          </h4>
          <ul className="mt-3 space-y-2.5">
            {project.highlights.map((highlight) => (
              <li
                key={t(highlight)}
                className="flex items-start gap-3 text-sm text-ink-2"
              >
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink-2" />
                {t(highlight)}
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <h4 className="mt-7 font-mono text-xs tracking-[0.14em] text-ink-3">
            {t(ui.techStack)}
          </h4>
          <MetaList items={project.techStack} className="mt-3" />

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition-colors hover:bg-ink-2 focus-visible:ring-2 focus-visible:ring-ink-3 focus-visible:outline-none active:scale-[0.98]"
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
                className="inline-flex items-center gap-2 rounded-md border border-line-strong px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink-3 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-ink-3 focus-visible:outline-none active:scale-[0.98]"
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
