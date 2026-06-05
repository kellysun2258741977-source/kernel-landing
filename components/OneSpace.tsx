import Mascot from "./Mascot";
import Reveal from "./Reveal";
import { oneSpace } from "@/lib/content";

const palette = [
  "var(--color-grass-500)",
  "var(--color-grape)",
  "var(--color-tangerine)",
  "var(--color-sky)",
  "var(--color-rose)",
  "var(--color-grass-400)",
];

export default function OneSpace() {
  const n = oneSpace.nodes.length;
  return (
    <section
      id="workflows"
      className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32"
    >
      <Reveal>
        <h2 className="font-serif text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
          {oneSpace.heading}
        </h2>
        <p className="mt-5 max-w-sm text-lg text-ink-soft">{oneSpace.sub}</p>
      </Reveal>

      <Reveal delay={120}>
        <div className="relative mx-auto aspect-square w-full max-w-lg">
          {/* 虚线轨道 */}
          <div className="absolute inset-[9%] rounded-full border border-dashed border-line" />
          {/* 中心枢纽 */}
          <div className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-paper shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden>
              <path
                d="M16 2 27.3 8.5v13L16 28 4.7 21.5v-13L16 2Z"
                fill="var(--color-grass-500)"
              />
            </svg>
          </div>
          {/* 节点 */}
          {oneSpace.nodes.map((label, i) => {
            const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
            const x = 50 + 41 * Math.cos(angle);
            const y = 50 + 41 * Math.sin(angle);
            return (
              <div
                key={label}
                className="absolute flex w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
                style={{ top: `${y}%`, left: `${x}%` }}
              >
                <Mascot
                  size={40}
                  color={palette[i % palette.length]}
                  animate={false}
                  className="animate-float"
                />
                <span className="text-center text-xs font-medium text-ink-soft">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
