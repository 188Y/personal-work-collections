/** Static UI strings (labels, buttons, aria text) in both languages */

import type { Localized } from "./config"

export const ui = {
  /** Header / navigation */
  brand: { zh: "作品集", en: "Portfolio" } as Localized<string>,
  mainNavigation: { zh: "主导航", en: "Main navigation" } as Localized<string>,
  goToHome: { zh: "回到首页", en: "Go to home" } as Localized<string>,
  openMenu: { zh: "打开菜单", en: "Open menu" } as Localized<string>,
  closeMenu: { zh: "关闭菜单", en: "Close menu" } as Localized<string>,
  languageToggle: { zh: "切换语言", en: "Switch language" } as Localized<string>,

  /** Nav item labels, keyed by section id */
  nav: {
    hero: { zh: "首页", en: "Home" } as Localized<string>,
    about: { zh: "关于", en: "About" } as Localized<string>,
    experience: { zh: "经历", en: "Experience" } as Localized<string>,
    projects: { zh: "项目", en: "Projects" } as Localized<string>,
    contact: { zh: "联系", en: "Contact" } as Localized<string>,
  },

  /** Hero */
  heroGreeting: { zh: "你好，我是", en: "Hi, I'm" } as Localized<string>,
  viewProjects: { zh: "查看项目", en: "View Projects" } as Localized<string>,
  contactMe: { zh: "联系我", en: "Contact Me" } as Localized<string>,
  scroll: { zh: "向下滚动", en: "Scroll" } as Localized<string>,
  scrollToAbout: {
    zh: "滚动到关于我",
    en: "Scroll to about section",
  } as Localized<string>,

  /** Avatar upload */
  uploadAvatar: { zh: "上传头像", en: "Upload Avatar" } as Localized<string>,
  uploading: { zh: "上传中…", en: "Uploading…" } as Localized<string>,
  changeAvatar: {
    zh: "上传或更换头像",
    en: "Upload or change avatar",
  } as Localized<string>,
  chooseAvatarImage: {
    zh: "选择头像图片",
    en: "Choose avatar image",
  } as Localized<string>,
  avatarLoadError: {
    zh: "无法读取已保存的头像，已使用默认头像。",
    en: "Could not load saved avatar. Using the default instead.",
  } as Localized<string>,
  avatarTypeError: {
    zh: "请选择图片文件（JPG、PNG、WebP 等）",
    en: "Please choose an image file (JPG, PNG, WebP, etc.)",
  } as Localized<string>,
  avatarSizeError: {
    zh: "图片大小需不超过 2MB",
    en: "Image must be 2MB or smaller",
  } as Localized<string>,
  avatarUploadError: {
    zh: "上传失败，请重试。",
    en: "Upload failed. Please try again.",
  } as Localized<string>,

  /** Projects */
  filterAll: { zh: "全部", en: "All" } as Localized<string>,
  filterProjects: {
    zh: "按分类筛选项目",
    en: "Filter projects by category",
  } as Localized<string>,
  emptyProjects: {
    zh: "该分类下暂时还没有项目。",
    en: "No projects in this category yet.",
  } as Localized<string>,
  highlights: { zh: "项目亮点", en: "Highlights" } as Localized<string>,
  techStack: { zh: "技术栈", en: "Tech stack" } as Localized<string>,
  repository: { zh: "源码仓库", en: "Repository" } as Localized<string>,
  liveDemo: { zh: "在线演示", en: "Live Demo" } as Localized<string>,
  closeProject: {
    zh: "关闭项目详情",
    en: "Close project details",
  } as Localized<string>,
  projectScreenshotAlt: {
    zh: "项目截图",
    en: "project screenshot",
  } as Localized<string>,

  /** Footer */
  rightsReserved: {
    zh: "保留所有权利。",
    en: "All rights reserved.",
  } as Localized<string>,
  backToTop: { zh: "回到顶部", en: "Back to top" } as Localized<string>,
} as const
