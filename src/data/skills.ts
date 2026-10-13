/** Skill categories and related technologies for the About section */

import type { Localized } from "../i18n/config"

export type SkillCategory = {
  /** Localized group label shown above the list */
  name: Localized<string>
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    name: { zh: "前端", en: "Frontend" },
    items: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    name: { zh: "工具链", en: "Tooling" },
    items: ["Git", "VS Code / Cursor", "npm"],
  },
]
