/** Personal profile content shared across the site */

import type { Localized } from "../i18n/config"

/** Core hero identity */
export const profile = {
  /** The greeting placed before the name, e.g. "Hi, I'm" / "你好，我是" */
  greeting: { zh: "你好，我是", en: "Hi, I'm" } satisfies Localized<string>,
  name: "Yly",
  role: { zh: "前端开发工程师", en: "Frontend Developer" } satisfies Localized<string>,
  intro: {
    zh: "专注于用 React 和 TypeScript 打造干净、现代且好用的 Web 体验。我重视清晰的结构、可复用的组件和恰到好处的交互。",
    en: "Focused on crafting clean, modern, and usable web experiences with React and TypeScript. I care about clear structure, reusable components, and thoughtful interaction.",
  } satisfies Localized<string>,
  avatarAlt: { zh: "个人头像", en: "Profile avatar" } satisfies Localized<string>,
}
