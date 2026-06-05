# 🌰 Kernel — AI 零食产品全链路助手（落地页）

AI Agent 驱动的零食产品全链路助手落地页：**选品洞察、配方灵感、营销内容**，为零食品牌和创业者而造。

设计语言参考 [Moxt](https://moxt.ai)（AI 原生工作空间）的视觉骨架，内容替换为 Kernel 零食平台的产品定位。

## 技术栈

- **Next.js 16**（App Router，静态预渲染）
- **Tailwind CSS v4**
- **TypeScript**
- 字体：Lora（标题）+ Inter（正文），经 `next/font` 自托管
- 滚动动效：自写 `IntersectionObserver` 组件 + CSS keyframes，零动画库依赖

## 本地开发

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

## 构建

```bash
pnpm build    # 静态产物，输出到 .next
pnpm start    # 本地预览生产构建
```

## 目录结构

```
app/
  layout.tsx        字体、metadata
  globals.css       设计令牌（颜色/字体）+ 动画
  page.tsx          按顺序装配各板块
components/         13 个板块组件 + Reveal / Mascot / Icons / Logo
lib/
  content.ts        所有文案集中在此 —— 改字只动这一个文件
```

> 想换文案？只改 `lib/content.ts`。想换品牌色？改 `app/globals.css` 里的 `--color-grass-*`。

## 板块

Hero → 你的（能力环）→ 每个品牌的 → 一个空间（工作流节点环）→ 认识 Kernel（对话演示）→ 看看 Kernel 能做什么（能力卡）→ 一条流水线 → 用 Kernel 上新一款零食（时间线）→ 为零食品牌原生设计 → 它们都能用但…（竞品对比）→ 集成 → 终版 CTA → Footer
