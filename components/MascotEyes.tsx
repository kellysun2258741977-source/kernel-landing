"use client";

import { useEffect, useRef, useState } from "react";

// 眼睛在 green.png 中的位置(占容器百分比) —— 截图校准
const EYES = [
  { cx: 43, cy: 59 },
  { cx: 59, cy: 58 },
];

/**
 * 豆子吉祥物 + 跟随鼠标的眼珠。
 * 在 PNG 原眼睛位置叠加白眼眶,黑瞳孔随鼠标方向在眶内移动。
 * 容器尺寸由 className(h-/w-) 决定;float 呼吸动效在容器上,眼睛随之同步。
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
      const max = r.width * 0.018;
      setP({ dx: Math.cos(ang) * max, dy: Math.sin(ang) * max });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={ref} className={`relative animate-float ${className}`}>
      <img src={src} alt="" className="h-full w-full drop-shadow-lg" />
      {EYES.map((e, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: "8.5%",
            height: "8.5%",
            left: `${e.cx}%`,
            top: `${e.cy}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="absolute rounded-full bg-[#1c1c1c]"
            style={{
              width: "58%",
              height: "58%",
              left: "50%",
              top: "50%",
              transform: `translate(calc(-50% + ${p.dx}px), calc(-50% + ${p.dy}px))`,
              transition: "transform 0.1s ease-out",
            }}
          />
        </div>
      ))}
    </div>
  );
}
