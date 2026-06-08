"use client";

import { useRef } from "react";
import Reveal from "./Reveal";
import { aDay } from "@/lib/content";

export default function ADay() {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, left: 0, moved: false });

  const onDown = (e: React.PointerEvent) => {
    const el = track.current;
    if (!el) return;
    drag.current = {
      down: true,
      startX: e.pageX,
      left: el.scrollLeft,
      moved: false,
    };
    el.setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    const el = track.current;
    if (!el || !drag.current.down) return;
    const dx = e.pageX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.left - dx;
  };
  const onUp = (e: React.PointerEvent) => {
    drag.current.down = false;
    track.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <section className="[overflow-x:clip] py-24 md:py-32">
      <Reveal className="mx-auto mb-14 max-w-6xl px-6 text-center">
        <h2 className="font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {aDay.heading}
        </h2>
        <p className="mt-3 text-sm text-ink-faint">← 拖动 / 滑动查看一整天 →</p>
      </Reveal>

      <div
        ref={track}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        className="flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-6 px-6 pb-4 pt-2 select-none active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:[scroll-padding-left:max(1.5rem,calc((100vw-72rem)/2))] md:[padding-left:max(1.5rem,calc((100vw-72rem)/2))]"
      >
        {aDay.cards.map((c) => {
          const dark = "dark" in c && c.dark;
          return (
            <div
              key={c.time}
              className={`w-[78vw] shrink-0 snap-start overflow-hidden rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.09)] sm:w-[340px] ${
                dark
                  ? "border-ink bg-ink hover:border-grass-400"
                  : "border-line bg-paper hover:border-grass-300"
              }`}
            >
              <img
                src={c.img}
                alt={c.title}
                width={640}
                height={640}
                draggable={false}
                loading="lazy"
                className="pointer-events-none aspect-square w-full object-cover object-top"
              />
              <div className="p-5">
                <p className="flex items-center gap-2 text-sm font-medium text-grass-500">
                  <span className="h-2 w-2 rounded-full bg-grass-500" />
                  {c.time}
                </p>
                <h3 className={`mt-2 text-lg font-semibold ${dark ? "text-paper" : "text-ink"}`}>
                  {c.title}
                </h3>
                <div className={`mt-3 space-y-2 text-sm leading-relaxed ${dark ? "text-paper/70" : "text-ink-soft"}`}>
                  <p>
                    <span className={`font-semibold ${dark ? "text-paper/50" : "text-ink-faint"}`}>
                      {c.agent}
                    </span>{" "}
                    {c.agentText}
                  </p>
                  <p>
                    <span className={`font-semibold ${dark ? "text-paper/50" : "text-ink-faint"}`}>
                      {c.you}
                    </span>{" "}
                    {c.youText}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* 循环继续 —— 一天的收尾,对应 Moxt 的 loop 卡 */}
        <div className="flex w-[78vw] shrink-0 snap-start flex-col justify-center rounded-2xl border border-dashed border-grass-200 bg-grass-50/40 p-8 sm:w-[300px]">
          <span className="font-serif text-3xl text-grass-500">→</span>
          <p className="mt-6 font-serif text-3xl font-semibold text-ink">
            {aDay.loop.time}
          </p>
          <p className="mt-1 text-ink-soft">{aDay.loop.title}</p>
        </div>

        {/* 末尾留白,最后一张能滑到中部 */}
        <div className="w-6 shrink-0 sm:w-[30vw]" aria-hidden />
      </div>
    </section>
  );
}
