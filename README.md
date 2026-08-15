# Personal Work Collections

基于 **React + TypeScript + Vite** 构建的个人作品集网站，使用 **Tailwind CSS + Framer Motion** 实现深色主题与平滑滚动动画，并针对移动端做了适配。

## 功能特性

- 深色主题设计（背景 `#0a0a0a`，文字 `#ffffff`），渐变强调色
- 首页大标题 + 简介 + 头像
- 关于我：个人介绍 + 技能分类列表
- 工作经历：时间线与职责描述
- 项目展示：卡片列表 + 详情弹窗（技术栈、仓库链接、亮点、截图）
- 联系方式：邮箱、GitHub 等社交链接
- 平滑的滚动动画与移动端响应式适配

## 技术栈

| 分类     | 技术                                          |
| -------- | --------------------------------------------- |
| 框架     | React 19 + TypeScript                          |
| 构建工具 | Vite 8                                        |
| 样式     | Tailwind CSS 4（`@tailwindcss/vite`）          |
| 动画     | Framer Motion                                 |
| 代码规范 | Oxlint（React / TypeScript / Oxc 插件）        |

## 项目结构

```
personalWorkCollections/
├── public/                  # 静态资源
│   ├── avatar.svg           # 头像
│   ├── favicon.svg          # 站点图标
│   ├── icons.svg            # 图标集合
│   └── projects/            # 项目截图（SVG）
├── src/
│   ├── components/          # 可复用组件（函数式组件 + Hooks）
│   │   ├── Header.tsx       # 顶部导航
│   │   ├── Hero.tsx         # 首页首屏
│   │   ├── About.tsx        # 关于我
│   │   ├── Experience.tsx   # 工作经历
│   │   ├── Projects.tsx     # 项目展示列表
│   │   ├── ProjectCard.tsx  # 项目卡片
│   │   ├── ProjectModal.tsx # 项目详情弹窗
│   │   ├── Contact.tsx      # 联系方式
│   │   ├── Footer.tsx       # 页脚
│   │   ├── AvatarUpload.tsx # 头像上传（可选）
│   │   ├── icons.tsx        # 图标组件
│   │   └── socialIcons.ts   # 社交图标
│   ├── data/                # 数据层（TS 文件集中管理）
│   │   ├── profile.ts       # 个人信息
│   │   ├── about.ts         # 关于我内容
│   │   ├── skills.ts        # 技能列表
│   │   ├── experience.ts    # 工作经历
│   │   ├── projects.ts      # 项目数据
│   │   └── contact.ts       # 联系方式
│   ├── App.tsx              # 根组件（页面布局）
│   ├── main.tsx             # 入口文件
│   └── index.css            # 全局样式（Tailwind）
├── index.html               # HTML 模板
├── vite.config.ts           # Vite 配置
├── tsconfig.json            # TypeScript 配置
├── tsconfig.app.json        # 应用代码 TS 配置
├── tsconfig.node.json       # Node 侧（vite.config）配置
├── .oxlintrc.json           # Oxlint 配置
└── package.json
```

## 快速开始

环境要求：Node.js 18+ / 20+，npm

```bash
# 安装依赖
npm install

# 启动开发服务器（支持 HMR）
npm run dev

# 构建生产版本（tsc 类型检查 + vite build）
npm run build

# 预览构建产物
npm run preview

# 运行代码检查（Oxlint）
npm run lint
```

## 数据管理

站点内容集中在 `src/data/` 目录的 TypeScript 文件中，使用类型定义 + 数组存储。新增项目或技能时，只需修改对应的数据文件即可，无需改动组件。

## 相关文档

- [PRD.md](./PRD.md) —— 产品需求文档
- [TECH_DESIGN.md](./TECH_DESIGN.md) —— 技术设计文档
- [AGENTS.md](./AGENTS.md) —— 开发规范与设计要求

## 代码规范

- 函数式组件 + Hooks
- 组件可复用，代码带注释
- 样式统一使用 Tailwind CSS
- 图片使用懒加载；确保所有链接可点击
