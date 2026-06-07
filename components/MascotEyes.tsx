"use client";

import { Fragment, useEffect, useRef, useState } from "react";

// 眼睛中心在 green.png 的位置(扫描暗像素定位,占容器百分比)
const EYES = [
  { cx: 40.8, cy: 61 },
  { cx: 56.2, cy: 61 },
];

// 眼区脸色(PIL 采样),用作盖块把 PNG 原黑点抹掉
const FACE = "#73d785";

/**
 * 豆子吉祥物 + 跟随鼠标的极简眼睛(复刻 moxt 手法)。
 * moxt 的眼睛是深色 SVG,整组随鼠标 translate、无白眼眶。
 * 这里 PNG 上先用同色羽化块盖掉原黑点,再叠一对深色极简眼珠,
 * 眼珠随鼠标方向整体平移。容器尺寸由 className 决定。
 */
export default function MascotEyes({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState({ dx: 0, dy: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const ang = Math.atan2(
        e.clientY - (r.top + r.height / 2),
        e.clientX - (r.left + r.width / 2),
      );
      const max = r.width * 0.022;
      setP({ dx: Math.cos(ang) * max, dy: Math.sin(ang) * max });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={ref} className={`relative animate-float ${className}`}>
      <img src={src} alt="" className="h-full w-full drop-shadow-lg" />
      {EYES.map((e, i) => (
        <Fragment key={i}>
          {/* 同色羽化盖块:抹掉 PNG 原黑点 */}
          <div
            className="pointer-events-none absolute rounded-full"
            style={{
              left: `${e.cx}%`,
              top: `${e.cy}%`,
              width: "13%",
              height: "13%",
              transform: "translate(-50%, -50%)",
              background: FACE,
              filter: "blur(2px)",
            }}
          />
          {/* 极简深色眼珠:整体随鼠标平移 */}
          <div
            className="pointer-events-none absolute rounded-full bg-[#1c2a1c]"
            style={{
              left: `${e.cx}%`,
              top: `${e.cy}%`,
              width: "5%",
              height: "6.4%",
              transform: `translate(calc(-50% + ${p.dx}px), calc(-50% + ${p.dy}px))`,
              transition: "transform 0.12s ease-out",
            }}
          />
        </Fragment>
      ))}
    </div>
  );
}
