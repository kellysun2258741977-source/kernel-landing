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

// 场景4 hub-and-spoke：绿色主角居中，6 个角色辐射分布
const cluster = [
  { name: "green",  size: 100, top: "50%", left: "50%", user: "王", bg: "#4ade80", fg: "#166534" }, // center hub
  { name: "teal",   size: 56,  top: "10%", left: "50%", user: "刘", bg: "#2dd4bf", fg: "#134e4a" }, // top
  { name: "orange", size: 68,  top: "24%", left: "84%", user: "张", bg: "#fb923c", fg: "#7c2d12" }, // top-right
  { name: "red",    size: 62,  top: "76%", left: "82%", user: "赵", bg: "#f87171", fg: "#7f1d1d" }, // bottom-right
  { name: "yellow", size: 52,  top: "90%", left: "50%", user: "吴", bg: "#facc15", fg: "#713f12" }, // bottom
  { name: "blue",   size: 58,  top: "76%", left: "18%", user: "陈", bg: "#60a5fa", fg: "#1e3a8a" }, // bottom-left
  { name: "purple", size: 66,  top: "24%", left: "16%", user: "李", bg: "#a78bfa", fg: "#4c1d95" }, // top-left
];

// SVG 连线从中心 (50,50) 辐射到 6 个节点
const svgLines = [
  [50, 50, 50, 10],
  [50, 50, 84, 24],
  [50, 50, 82, 76],
  [50, 50, 50, 90],
  [50, 50, 18, 76],
  [50, 50, 16, 24],
];

// 场景1 装饰性小 + 号，模仿 moxt 背景点缀
const sparkles = [
  { x: "10%", y: "20%" }, { x: "88%", y: "16%" },
  { x: "6%",  y: "60%" }, { x: "92%", y: "55%" },
  { x: "22%", y: "82%" }, { x: "78%", y: "80%" },
  { x: "52%", y: "8%"  }, { x: "45%", y: "92%" },
];

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
    <div className="relative mx-auto aspect-square w-full max-w-lg">
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

  // 场景4连线随进度生长
  const lineOffset = useTransform(scrollYProgress, [0.62, 0.76], [60, 0]);

  return (
    <section ref={ref} className="relative h-[400vh] bg-mist">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* 场景 1 · 登场 */}
        <Layer opacity={o1}>
          {/* 背景装饰 + 号 */}
          {sparkles.map((s, i) => (
            <span
              key={i}
              className="pointer-events-none absolute select-none text-sm font-light text-grass-300"
              style={{ left: s.x, top: s.y }}
            >
              +
            </span>
          ))}
          <div className="flex h-full flex-col items-center justify-center px-6 text-center">
            <h1 className="font-serif text-5xl leading-[1.1] font-semibold tracking-tight text-ink sm:text-7xl">
              {hero.titleLead}
              <span className="text-grass-500">{hero.titleAccent}</span>
              {hero.titleTail}
              {hero.titleBrand}
              {hero.titleEnd}
            </h1>
            <p className="mt-5 max-w-lg text-ink-soft">{hero.subtitle}</p>
            <div className="mt-7 flex gap-3">
              <span className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper">
                {hero.primaryCta}
              </span>
              <span className="flex items-center gap-1 rounded-full border border-grass-200 px-6 py-3 text-sm font-medium text-grass-700">
                {hero.secondaryCta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            <img
              src={mascot("green")}
              alt=""
              width={280}
              height={280}
              className="mt-10 h-[280px] w-[280px] drop-shadow-md animate-float"
            />
          </div>
        </Layer>

        {/* 场景 2 · 聚焦 */}
        <Layer opacity={o2}>
          <div className="grid h-full place-items-center">
            <img
              src={mascot("green")}
              alt=""
              width={420}
              height={420}
              className="h-[420px] w-[420px] drop-shadow-lg animate-float"
            />
          </div>
        </Layer>

        {/* 场景 3 · 能力 */}
        <Layer opacity={o3}>
          <div className="mx-auto grid h-full max-w-6xl gap-8 px-6 md:grid-cols-2" style={{ alignItems: "center" }}>
            {/* 文字靠下，模仿 moxt 「底部锚定」排版 */}
            <div className="flex flex-col justify-end pb-20 md:h-full">
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
                  width={220}
                  height={220}
                  className="h-[220px] w-[220px] animate-float"
                />
              </div>
              {/* 用户头像 badge */}
              <div className="absolute right-[2%] top-[16%] flex items-center gap-2 rounded-full border border-line/60 bg-paper px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                <div
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold"
                  style={{ background: "#4ade80", color: "#166534" }}
                >
                  王
                </div>
                <span className="whitespace-nowrap text-sm font-medium text-ink">
                  王总的 Kernel
                </span>
              </div>
              {/* 能力标签 */}
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
          <div className="mx-auto grid h-full max-w-6xl items-center gap-8 px-6 md:grid-cols-2">
            <div className="md:order-2">
              <h2 className="font-serif text-6xl font-semibold text-ink sm:text-7xl">
                {personal.heading}
              </h2>
              <p className="mt-4 max-w-sm text-lg text-ink-soft">
                {personal.sub}
              </p>
            </div>
            <RightStage>
              {/* SVG 辐射连线 */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                aria-hidden
              >
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
                const avatarSize = Math.round(c.size * 0.44);
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
          <div className="mx-auto grid h-full max-w-6xl items-center gap-8 px-6 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-6xl font-semibold text-ink sm:text-7xl">
                {oneSpace.heading}
              </h2>
              <p className="mt-4 max-w-sm text-lg text-ink-soft">
                {oneSpace.sub}
              </p>
            </div>
            <RightStage>
              <div className="absolute inset-[9%] rounded-full border border-dashed border-line" />
              <div className="absolute top-1/2 left-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-paper shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <svg width="34" height="34" viewBox="0 0 32 32" aria-hidden>
                  <path
                    d="M16 2 27.3 8.5v13L16 28 4.7 21.5v-13L16 2Z"
                    fill="var(--color-grass-500)"
                  />
                </svg>
              </div>
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
