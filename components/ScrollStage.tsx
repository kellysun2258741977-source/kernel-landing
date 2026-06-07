"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import {
  hero,
  capability,
  personal,
  oneSpace,
  mascots,
  mascot,
} from "@/lib/content";

const dotColor: Record<string, string> = {
  grass: "bg-grass-500",
  sky: "bg-sky",
  tangerine: "bg-tangerine",
  grape: "bg-grape",
  rose: "bg-rose",
};

// 场景4 hub-and-spoke：绿色主角居中，6 个角色辐射(放大半径与尺寸)
const cluster = [
  { name: "green",  size: 130, top: "50%", left: "50%", user: "王", bg: "#4ade80", fg: "#166534" },
  { name: "teal",   size: 74,  top: "8%",  left: "50%", user: "刘", bg: "#2dd4bf", fg: "#134e4a" },
  { name: "orange", size: 88,  top: "22%", left: "88%", user: "张", bg: "#fb923c", fg: "#7c2d12" },
  { name: "red",    size: 80,  top: "78%", left: "86%", user: "赵", bg: "#f87171", fg: "#7f1d1d" },
  { name: "yellow", size: 68,  top: "92%", left: "50%", user: "吴", bg: "#facc15", fg: "#713f12" },
  { name: "blue",   size: 76,  top: "78%", left: "14%", user: "陈", bg: "#60a5fa", fg: "#1e3a8a" },
  { name: "purple", size: 86,  top: "22%", left: "12%", user: "李", bg: "#a78bfa", fg: "#4c1d95" },
];

// 场景4 辐射连线：中心(50,50)→6 个角色
const svgLines = [
  [50, 50, 50, 8],
  [50, 50, 88, 22],
  [50, 50, 86, 78],
  [50, 50, 50, 92],
  [50, 50, 14, 78],
  [50, 50, 12, 22],
];

// 全局星星点缀(复刻 moxt 的散落 ✦/+ 氛围,覆盖所有场景背景)
const sparkles = [
  { x: "7%",  y: "16%", s: 18, c: "✦" }, { x: "90%", y: "13%", s: 13, c: "+" },
  { x: "4%",  y: "52%", s: 12, c: "+" }, { x: "94%", y: "46%", s: 20, c: "✦" },
  { x: "17%", y: "80%", s: 14, c: "✦" }, { x: "82%", y: "76%", s: 16, c: "+" },
  { x: "50%", y: "6%",  s: 12, c: "+" }, { x: "44%", y: "90%", s: 15, c: "✦" },
  { x: "67%", y: "28%", s: 12, c: "+" }, { x: "30%", y: "38%", s: 15, c: "✦" },
  { x: "73%", y: "60%", s: 12, c: "+" }, { x: "13%", y: "32%", s: 17, c: "✦" },
  { x: "60%", y: "84%", s: 13, c: "+" }, { x: "86%", y: "34%", s: 12, c: "+" },
  { x: "24%", y: "62%", s: 14, c: "✦" }, { x: "38%", y: "22%", s: 12, c: "+" },
  { x: "78%", y: "50%", s: 14, c: "✦" }, { x: "20%", y: "48%", s: 12, c: "+" },
  { x: "55%", y: "42%", s: 11, c: "+" }, { x: "92%", y: "64%", s: 14, c: "✦" },
];

function Sparkles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparkles.map((s, i) => (
        <span
          key={i}
          className="absolute select-none font-light text-grass-400/70"
          style={{ left: s.x, top: s.y, fontSize: s.s }}
        >
          {s.c}
        </span>
      ))}
    </div>
  );
}

function Layer({
  opacity,
  children,
}: {
  opacity: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute inset-0"
    >
      {children}
    </motion.div>
  );
}

function RightStage({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl">
      {children}
    </div>
  );
}

export default function ScrollStage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const n = oneSpace.nodes.length;

  const o1 = useTransform(scrollYProgress, [0, 0.14, 0.22, 1.0], [1, 1, 0, 0]);
  const o2 = useTransform(scrollYProgress, [0.18, 0.26, 0.38, 0.46], [0, 1, 1, 0]);
  const o3 = useTransform(scrollYProgress, [0.42, 0.5, 0.58, 0.66], [0, 1, 1, 0]);
  const o4 = useTransform(scrollYProgress, [0.62, 0.7, 0.78, 0.86], [0, 1, 1, 0]);
  const o5 = useTransform(scrollYProgress, [0.82, 0.9, 1], [0, 1, 1]);

  // 场景4连线生长
  const lineOffset = useTransform(scrollYProgress, [0.62, 0.76], [60, 0]);
  // 场景5辐射线生长
  const ringOffset = useTransform(scrollYProgress, [0.82, 0.96], [80, 0]);

  return (
    <section ref={ref} className="relative h-[400vh] bg-mist">
      <div className="sticky top-0 h-screen overflow-hidden">
        <Sparkles />

        {/* 场景 1 · 登场 */}
        <Layer opacity={o1}>
          <div className="mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
            <h1 className="font-serif text-4xl leading-[1.15] font-semibold tracking-tight text-ink sm:text-7xl">
              {hero.titleLead}
              <span className="text-grass-500">{hero.titleAccent}</span>,
              <br />
              就在 {hero.titleBrand}
              {hero.titleEnd}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">{hero.subtitle}</p>
            <div className="pointer-events-auto mt-8 flex gap-3">
              <a
                href="#pricing"
                className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-transform hover:scale-[1.03] active:scale-95"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#capabilities"
                className="flex items-center gap-1 rounded-full border border-grass-200 px-7 py-3.5 text-sm font-medium text-grass-700 transition-colors hover:bg-grass-50"
              >
                {hero.secondaryCta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            {/* CTA 之后的吉祥物在 Layer 内,保持 pointer-events-none 由父级控制 */}
            <img
              src={mascot("green")}
              alt=""
              width={340}
              height={340}
              className="mt-12 h-[340px] w-[340px] drop-shadow-md animate-float"
            />
          </div>
        </Layer>

        {/* 场景 2 · 聚焦 */}
        <Layer opacity={o2}>
          <div className="grid h-full place-items-center">
            <img
              src={mascot("green")}
              alt=""
              width={440}
              height={440}
              className="h-[320px] w-[320px] drop-shadow-lg animate-float sm:h-[440px] sm:w-[440px]"
            />
          </div>
        </Layer>

        {/* 场景 3 · 能力 */}
        <Layer opacity={o3}>
          <div className="mx-auto grid h-full max-w-7xl items-center gap-10 px-6 md:grid-cols-2">
            <div className="flex flex-col justify-center md:h-full md:justify-end md:pb-24">
              <h2 className="font-serif text-6xl font-semibold text-ink sm:text-7xl">
                {capability.heading}
              </h2>
              <p className="mt-3 max-w-sm text-lg text-ink-soft">
                {capability.sub}
              </p>
            </div>
            <RightStage>
              {/* 主吉祥物 */}
              <div className="absolute inset-0 grid place-items-center">
                <img
                  src={mascot("green")}
                  alt=""
                  width={280}
                  height={280}
                  className="h-[200px] w-[200px] animate-float sm:h-[280px] sm:w-[280px]"
                />
              </div>
              {/* 能力标签(6 个均匀环绕) */}
              {capability.bubbles.map((b) => (
                <div
                  key={b.label}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-line/70 bg-paper px-3.5 py-2 whitespace-nowrap shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
                  style={{ top: b.pos.top, left: b.pos.left }}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${dotColor[b.color] ?? "bg-grass-500"}`}
                  />
                  <span className="text-sm font-medium text-ink">{b.label}</span>
                </div>
              ))}
            </RightStage>
          </div>
        </Layer>

        {/* 场景 4 · 团队 */}
        <Layer opacity={o4}>
          <div className="mx-auto grid h-full max-w-7xl items-center gap-10 px-6 md:grid-cols-2">
            <div className="md:order-2">
              <h2 className="font-serif text-6xl font-semibold text-ink sm:text-7xl">
                {personal.heading}
              </h2>
              <p className="mt-4 max-w-sm text-lg text-ink-soft">
                {personal.sub}
              </p>
            </div>
            <RightStage>
              {/* 辐射连线 */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden>
                {svgLines.map(([x1, y1, x2, y2], i) => (
                  <motion.line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="#4ade80"
                    strokeWidth="0.5"
                    strokeDasharray="60"
                    strokeOpacity="0.5"
                    style={{ strokeDashoffset: lineOffset }}
                  />
                ))}
              </svg>
              {/* 吉祥物 + 用户头像 */}
              {cluster.map((c) => {
                const avatarSize = Math.round(c.size * 0.42);
                return (
                  <div
                    key={c.name}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ top: c.top, left: c.left }}
                  >
                    <div
                      className="relative z-10 mx-auto -mb-2 grid place-items-center rounded-full border-2 border-paper font-bold shadow-sm"
                      style={{
                        width: avatarSize,
                        height: avatarSize,
                        fontSize: avatarSize * 0.44,
                        background: c.bg,
                        color: c.fg,
                      }}
                    >
                      {c.user}
                    </div>
                    <img
                      src={mascot(c.name)}
                      alt=""
                      width={c.size}
                      height={c.size}
                      className="relative drop-shadow-sm"
                      style={{ width: c.size, height: c.size }}
                    />
                  </div>
                );
              })}
            </RightStage>
          </div>
        </Layer>

        {/* 场景 5 · 星座 */}
        <Layer opacity={o5}>
          <div className="mx-auto grid h-full max-w-7xl items-center gap-10 px-6 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-6xl font-semibold text-ink sm:text-7xl">
                {oneSpace.heading}
              </h2>
              <p className="mt-4 max-w-sm text-lg text-ink-soft">
                {oneSpace.sub}
              </p>
            </div>
            <RightStage>
              {/* 圆环 + 中心辐射连线(建立节点与中枢的联系) */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden>
                <circle cx="50" cy="50" r="41" fill="none" stroke="var(--color-line)" strokeWidth="0.4" strokeDasharray="2 2" />
                {oneSpace.nodes.map((_, i) => {
                  const a = (i / n) * 2 * Math.PI - Math.PI / 2;
                  const x = 50 + 41 * Math.cos(a);
                  const y = 50 + 41 * Math.sin(a);
                  return (
                    <motion.line
                      key={i}
                      x1="50" y1="50" x2={x} y2={y}
                      stroke="#4ade80"
                      strokeWidth="0.4"
                      strokeDasharray="50"
                      strokeOpacity="0.4"
                      style={{ strokeDashoffset: ringOffset }}
                    />
                  );
                })}
              </svg>
              {/* 中枢 logo */}
              <div className="absolute top-1/2 left-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-paper shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <svg width="34" height="34" viewBox="0 0 32 32" aria-hidden>
                  <path d="M16 2 27.3 8.5v13L16 28 4.7 21.5v-13L16 2Z" fill="var(--color-grass-500)" />
                </svg>
              </div>
              {/* 节点 */}
              {oneSpace.nodes.map((label, i) => {
                const a = (i / n) * 2 * Math.PI - Math.PI / 2;
                const x = 50 + 41 * Math.cos(a);
                const y = 50 + 41 * Math.sin(a);
                return (
                  <div
                    key={label}
                    className="absolute flex w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                    style={{ top: `${y}%`, left: `${x}%` }}
                  >
                    <img
                      src={mascot(mascots[i % mascots.length])}
                      alt=""
                      width={44}
                      height={44}
                      className="h-11 w-11"
                    />
                    <span className="text-center text-xs font-medium text-ink-soft">
                      {label}
                    </span>
                  </div>
                );
              })}
            </RightStage>
          </div>
        </Layer>
      </div>
    </section>
  );
}
