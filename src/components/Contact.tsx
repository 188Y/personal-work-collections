import { motion } from "framer-motion"

const contactLinks = [
  {
    label: "Email",
    href: "mailto:1695192364@qq.com",
    value: "1695192364@qq.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    value: "github.com",
  }
] as const

/** Contact section with email and social links */
const Contact = () => {
  return (
    <section
      id="contact"
      className="px-4 py-24"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-5xl">
        <motion.h2
          id="contact-title"
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h2>
        <p className="mt-2 text-white/60">
          Feel free to reach out for collaboration or just to say hi.
        </p>

        <ul className="mt-8 space-y-4">
          {contactLinks.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * index }}
            >
              <a
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  item.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
                aria-label={`${item.label}: ${item.value}`}
              >
                <span className="w-28 text-sm text-white/50">{item.label}</span>
                <span className="text-lg font-medium transition-opacity group-hover:opacity-80 gradient-text">
                  {item.value}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact
