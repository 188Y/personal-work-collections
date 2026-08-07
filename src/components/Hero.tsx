import { motion } from "framer-motion"
import AvatarUpload from "./AvatarUpload"

/** Editable profile content for the hero section */
const profile = {
  name: "Yly",
  role: "Frontend Developer",
  intro:
    "专注于用 React 与 TypeScript 打造简洁、现代且易用的 Web 体验。热爱清晰的结构、可复用组件与细腻的交互动效。",
  avatarAlt: "个人头像",
} as const

/** Landing hero: large title, intro, and avatar with dark theme gradients */
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0a] px-4 pt-24 pb-16 text-white"
      aria-labelledby="hero-title"
    >
      {/* Soft gradient atmosphere — keeps the dark canvas from feeling flat */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-violet-400/15 blur-3xl sm:h-80 sm:w-80" />
      </div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-12 md:flex-row md:justify-between md:gap-16">
        {/* Copy: title + intro + CTAs */}
        <motion.div
          className="max-w-xl text-center md:text-left"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-3 text-sm font-medium tracking-wider text-cyan-300/80 uppercase">
            {profile.role}
          </p>

          <h1
            id="hero-title"
            className="text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-400 to-violet-400 px-6 py-3 text-sm font-semibold text-[#0a0a0a] shadow-lg shadow-cyan-400/20 transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
              aria-label="查看项目作品"
            >
              查看项目
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:outline-none"
              aria-label="前往联系方式"
            >
              联系我
            </a>
          </div>
        </motion.div>

        {/* Avatar upload with gradient ring */}
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
        >
          <AvatarUpload alt={profile.avatarAlt} />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
