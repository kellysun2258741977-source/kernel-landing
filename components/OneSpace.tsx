import Reveal from "./Reveal";
import { oneSpace } from "@/lib/content";

const ROW_Y = [22, 50, 78];
const NODE_X = [38, 51, 64];

export default function OneSpace() {
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
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden>
            {/* Kernel → 主干 */}
            <line x1="22" y1="50" x2="30" y2="50" stroke="#4ade80" strokeWidth="0.7" strokeLinecap="round" />
            {/* 竖干 */}
            <line x1="30" y1="22" x2="30" y2="78" stroke="var(--color-line)" strokeWidth="0.5" strokeLinecap="round" />
            {/* 三条横向分支 */}
            {oneSpace.workflows.map((wf, i) => (
              <line key={i}
                x1="30" y1={ROW_Y[i]} x2="72" y2={ROW_Y[i]}
                stroke={wf.color} strokeWidth="0.6" strokeLinecap="round" />
            ))}
            {/* 节点圆点 */}
            {oneSpace.workflows.map((wf, wi) =>
              NODE_X.map((x, ni) => (
                <circle key={`${wi}-${ni}`} cx={x} cy={ROW_Y[wi]} r="2" fill={wf.color} fillOpacity="0.85" />
              ))
            )}
          </svg>

          {/* Kernel hub */}
          <div className="absolute top-1/2 left-[19%] grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl bg-paper shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
            <svg width="18" height="18" viewBox="0 0 32 32" aria-hidden>
              <path d="M16 2 27.3 8.5v13L16 28 4.7 21.5v-13L16 2Z" fill="var(--color-grass-500)" />
            </svg>
          </div>

          {/* 节点文字标签 */}
          {oneSpace.workflows.map((wf, wi) =>
            NODE_X.map((x, ni) => (
              <div
                key={`lbl-${wi}-${ni}`}
                className="absolute"
                style={{ top: `${ROW_Y[wi]}%`, left: `${x}%`, transform: "translate(-50%, 6px)" }}
              >
                <span className="block whitespace-nowrap text-[9px] leading-tight text-ink-soft">
                  {wf.nodes[ni]}
                </span>
              </div>
            ))
          )}

          {/* 工作流标签 */}
          {oneSpace.workflows.map((wf, i) => (
            <div
              key={wf.label}
              className="absolute"
              style={{ top: `${ROW_Y[i]}%`, left: "74%", transform: "translateY(-50%)" }}
            >
              <span
                className="block whitespace-nowrap rounded-full px-2 py-0.5 text-[9px] font-semibold leading-tight"
                style={{ background: wf.color + "28", color: wf.color }}
              >
                {wf.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
