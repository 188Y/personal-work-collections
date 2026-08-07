import type { Project } from "../data/projects"

type ProjectCardProps = {
  project: Project
}

/** Single project card: screenshot, title, description, and tech tags */
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-cyan-400/30 hover:bg-white/[0.05]">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} 项目截图`}
          loading="lazy"
          width={800}
          height={450}
          className="aspect-[16/9] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-80"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold tracking-tight text-white">
          {project.name}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">
          {project.description}
        </p>

        <ul
          className="mt-4 flex flex-wrap gap-2"
          aria-label={`${project.name} 技术栈`}
        >
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-white/10 bg-gradient-to-r from-cyan-400/10 to-violet-400/10 px-2.5 py-1 text-xs font-medium text-cyan-100/90"
            >
              {tech}
            </li>
          ))}
        </ul>

        <a
          href={project.link}
          target={project.link.startsWith("http") ? "_blank" : undefined}
          rel={
            project.link.startsWith("http") ? "noopener noreferrer" : undefined
          }
          className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-medium bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent transition-opacity hover:opacity-80 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
          aria-label={`查看项目 ${project.name}`}
        >
          查看项目
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
