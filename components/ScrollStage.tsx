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

// 场景4 团队成员：吉祥物 + 用户头像
const cluster = [
  { name: "green",  size: 92, top: "30%", left: "50%", user: "王", bg: "#4ade80", fg: "#166534" },
  { name: "purple", size: 64, top: "12%", left: "24%", user: "李", bg: "#a78bfa", fg: "#4c1d95" },
  { name: "orange", size: 70, top: "16%", left: "76%", user: "张", bg: "#fb923c", fg: "#7c2d12" },
  { name: "blue",   size: 56, top: "62%", left: "26%", user: "陈", bg: "#60a5fa", fg: "#1e3a8a" },
  { name: "red",    size: 60, top: "66%", left: "74%", user: "赵", bg: "#f87171", fg: "#7f1d1d" },
  { name: "teal",   size: 50, top: "8%",  left: "52%", user: "刘", bg: "#2dd4bf", fg: "#134e4a" },
  { name: "yellow", size: 46, top: "74%", left: "50%", user: "吴", bg: "#facc15", fg: "#713f12" },
];

// SVG 连线：从绿色吉祥物(50,30)到其余6个，坐标 = cluster % 值
const svgLines = [
  [50, 30, 24, 12],
  [50, 30, 76, 16],
  [50, 30, 52,  8],
  [50, 30, 26, 62],
  [50, 30, 74, 66],
  [50, 30, 50, 74],
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
    <div className="relative mx-auto aspect-square w-full max-w-md">
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

  // 场景4连线：随进度 0.62→0.76 从隐到显 (strokeDashoffset 50→0)
  const lineOffset = useTransform(scrollYProgress, [0.62, 0.76], [50, 0]);

  return (
    <section ref={ref} className="relative h-[400vh] bg-paper">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="absolute top-0 left-0 z-50 h-1 w-full origin-left bg-grass-500"
        />

        {/* 场景 1 · 登场 */}
        <Layer opacity={o1}>
          <div className="flex h-full flex-col items-center justify-center px-6 text-center">
            <h1 className="font-serif text-4xl leading-tight font-semibold tracking-tight text-ink sm:text-6xl">
              {hero.titleLead}
              <span className="text-grass-500">{hero.titleAccent}</span>
              {hero.titleTail}
              {hero.titleBrand}
              {hero.titleEnd}
            </h1>
            <p className="mt-5 max-w-md text-ink-soft">{hero.subtitle}</p>
            <div className="mt-7 flex gap-3">
              <span className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper">
                {hero.primaryCta}
              </span>
              <span className="rounded-full border border-grass-200 px-6 py-3 text-sm font-medium text-grass-700">
                {hero.secondaryCta}
              </span>
            </div>
            <img
              src={mascot("green")}
              alt=""
              width={150}
              height={150}
              className="mt-8 h-[150px] w-[150px] drop-shadow-sm animate-float"
            />
          </div>
        </Layer>

        {/* 场景 2 · 聚焦 */}
        <Layer opacity={o2}>
          <div className="grid h-full place-items-center">
            <img
              src={mascot("green")}
              alt=""
              width={340}
              height={340}
              className="h-[340px] w-[340px] drop-shadow-md animate-float"
            />
          </div>
        </Layer>

        {/* 场景 3 · 能力 */}
        <Layer opacity={o3}>
          <div className="mx-auto grid h-full max-w-6xl items-center gap-8 px-6 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-5xl font-semibold text-ink sm:text-6xl">
                {capability.heading}
              </h2>
              <p className="mt-4 max-w-sm text-lg text-ink-soft">
                {capability.sub}
              </p>
            </div>
            <RightStage>
              {/* 主吉祥物 */}
              <div className="absolute inset-0 grid place-items-center">
                <img
                  src={mascot("green")}
                  alt=""
                  width={150}
                  height={150}
                  className="h-[150px] w-[150px] animate-float"
                />
              </div>
              {/* 用户头像 badge（复刻 moxt "Ethan's momo" 样式）*/}
              <div className="absolute right-[4%] top-[18%] flex items-center gap-2 rounded-full border border-line/60 bg-paper px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
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
              <h2 className="font-serif text-5xl font-semibold text-ink sm:text-6xl">
                {personal.heading}
              </h2>
              <p className="mt-4 max-w-sm text-lg text-ink-soft">
                {personal.sub}
              </p>
            </div>
            <RightStage>
              {/* SVG 虚线连接（随场景进入生长）*/}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                aria-hidden
              >
                {svgLines.map(([x1, y1, x2, y2], i) => (
                  <motion.line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="var(--color-line, #d1d5db)"
                    strokeWidth="0.6"
                    strokeDasharray="50"
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
                    {/* 用户头像圆形，压在吉祥物上方 */}
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
              <h2 className="font-serif text-5xl font-semibold text-ink sm:text-6xl">
                {oneSpace.heading}
              </h2>
              <p className="mt-4 max-w-sm text-lg text-ink-soft">
                {oneSpace.sub}
              </p>
            </div>
            <RightStage>
              <div className="absolute inset-[9%] rounded-full border border-dashed border-line" />
              <div className="absolute top-1/2 left-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-paper shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden>
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
                      width={36}
                      height={36}
                      className="h-9 w-9"
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
