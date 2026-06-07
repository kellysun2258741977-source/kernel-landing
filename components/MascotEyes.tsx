"use client";

import { Fragment, useEffect, useRef, useState } from "react";

// 眼睛中心在 green.png 的位置(扫描暗像素定位,占容器百分比)
const EYES = [
  { cx: 41, cy: 61 },
  { cx: 54, cy: 61 },
];

// 眼区脸色(PIL 采样),用作盖块把 PNG 原黑点抹掉
const FACE = "#73d785";

/**
 * 豆子吉祥物 + 跟随鼠标(复刻 moxt 双层视差手法)。
 * - 外层(ref)只用于测量,不加 transform,避免反馈抖动
 * - 视差层:整个吉祥物朝鼠标方向轻微平移(身体探向鼠标)
 * - float 层:CSS 呼吸浮动
 * - 眼珠:在脸上大幅跟随鼠标(同色块先抹掉 PNG 原黑点)
 */
export default function MascotEyes({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [eye, setEye] = useState({ dx: 0, dy: 0 });
  const [par, setPar] = useState({ dx: 0, dy: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const ang = Math.atan2(e.clientY - cy, e.clientX - cx);
      const dist = Math.min(1, Math.hypot(e.clientX - cx, e.clientY - cy) / 650);
      setEye({ dx: Math.cos(ang) * r.width * 0.022, dy: Math.sin(ang) * r.width * 0.022 });
      setPar({ dx: Math.cos(ang) * r.width * 0.022 * dist, dy: Math.sin(ang) * r.width * 0.022 * dist });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div
        className="h-full w-full"
        style={{
          transform: `translate(${par.dx}px, ${par.dy}px)`,
          transition: "transform 0.35s ease-out",
        }}
      >
        <div className="relative h-full w-full animate-float">
          <img src={src} alt="" className="h-full w-full drop-shadow-lg" />
          {EYES.map((e, i) => (
            <Fragment key={i}>
              {/* 同色羽化盖块:抹掉 PNG 原黑点 */}
              <div
                className="pointer-events-none absolute rounded-full"
                style={{
                  left: `${e.cx}%`,
                  top: `${e.cy}%`,
                  width: "14.5%",
                  height: "14.5%",
                  transform: "translate(-50%, -50%)",
                  background: FACE,
                  filter: "blur(2px)",
                }}
              />
              {/* 极简深色眼珠:外层随鼠标平移,内层做眨眼(压扁) */}
              <div
                className="pointer-events-none absolute"
                style={{
                  left: `${e.cx}%`,
                  top: `${e.cy}%`,
                  width: "5%",
                  height: "6.4%",
                  transform: `translate(calc(-50% + ${eye.dx}px), calc(-50% + ${eye.dy}px))`,
                  transition: "transform 0.12s ease-out",
                }}
              >
                <div className="animate-blink h-full w-full rounded-full bg-[#1a1a1a]" />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
