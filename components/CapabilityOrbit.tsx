import Reveal from "./Reveal";
import { capability, mascot } from "@/lib/content";

const dotColor: Record<string, string> = {
  grass: "bg-grass-500",
  sky: "bg-sky",
  tangerine: "bg-tangerine",
  grape: "bg-grape",
  rose: "bg-rose",
};

export default function CapabilityOrbit() {
  return (
    <section
      id="capabilities"
      className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-24 md:grid-cols-2 md:py-32"
    >
      <Reveal>
        <h2 className="font-serif text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
          {capability.heading}
        </h2>
        <p className="mt-5 max-w-sm text-lg text-ink-soft">{capability.sub}</p>
      </Reveal>

      <Reveal delay={120}>
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-0 grid place-items-center">
            <img
              src={mascot("green")}
              alt=""
              width={170}
              height={170}
              className="h-[170px] w-[170px] animate-float drop-shadow-sm"
            />
          </div>
          {capability.bubbles.map((b, i) => (
            <div
              key={b.label}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-line/70 bg-paper px-3.5 py-2 whitespace-nowrap shadow-[0_6px_20px_rgba(0,0,0,0.06)] animate-float"
              style={{
                top: b.pos.top,
                left: b.pos.left,
                animationDelay: `${i * 0.4}s`,
              }}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${dotColor[b.color] ?? "bg-grass-500"}`}
              />
              <span className="text-sm font-medium text-ink">{b.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
