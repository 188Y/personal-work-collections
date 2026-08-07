import { motion } from "framer-motion"
import { skills } from "../data/skills"

/** About section with bio and skill list */
const About = () => {
  return (
    <section
      id="about"
      className="px-4 py-24"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-5xl">
        <motion.h2
          id="about-title"
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="mt-4 max-w-3xl text-white/70"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I build accessible, responsive interfaces and enjoy turning ideas into
          polished products. I focus on clear structure, reusable components,
          and thoughtful motion.
        </motion.p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {skills.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <h3 className="text-lg font-semibold gradient-text">
                {category.name}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-white/10 px-3 py-1 text-sm text-white/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
