/** About section content, kept in data for easy editing */

import type { Localized } from "../i18n/config"

export const about = {
  tagline: { zh: "通常我什么样", en: "Get to know me" } as Localized<string>,
  heading: { zh: "关于我", en: "About Me" } as Localized<string>,
  paragraphs: [
    {
      zh: "我构建可访问、响应式的界面，享受把想法打磨成精致产品。我重视清晰的结构、可复用的组件和考究的动效。",
      en: "I build accessible, responsive interfaces and enjoy turning ideas into polished products. I focus on clear structure, reusable components, and thoughtful motion.",
    },
    {
      zh: "除了交付功能，我也关注性能、代码质量，以及让界面感觉恰到好处的那些小细节。",
      en: "Beyond shipping features, I care about performance, code quality, and the small details that make an interface feel right.",
    },
  ].map((item) => item as Localized<string>),
  highlights: [
    {
      zh: "可访问、响应式界面",
      en: "Accessible & responsive interfaces",
    },
    {
      zh: "可复用的组件架构",
      en: "Reusable component architecture",
    },
    {
      zh: "考究的动效与交互",
      en: "Thoughtful motion & interaction",
    },
  ].map((item) => item as Localized<string>),
}
