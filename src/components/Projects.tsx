import { motion } from "framer-motion"
import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"

/** Project showcase grid with screenshot cards */
const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] px-4 py-24 text-white"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="projects-title"
            className="text-3xl font-bold text-white"
          >
            Projects
          </h2>
          <p className="mt-3 max-w-2xl text-white/60">
            精选项目一览，每张卡片包含截图、简介与技术栈。
          </p>
        </motion.div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.li
              key={project.id}
              className="h-full"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
