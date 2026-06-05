import Mascot from "./Mascot";
import Reveal from "./Reveal";
import { personal } from "@/lib/content";

const cluster = [
  { color: "var(--color-grass-500)", size: 92, top: "30%", left: "44%", d: 0 },
  { color: "var(--color-grape)", size: 64, top: "12%", left: "20%", d: 0.5 },
  { color: "var(--color-tangerine)", size: 70, top: "16%", left: "70%", d: 1 },
  { color: "var(--color-sky)", size: 58, top: "58%", left: "22%", d: 1.4 },
  { color: "var(--color-rose)", size: 60, top: "62%", left: "68%", d: 0.8 },
  { color: "var(--color-grass-400)", size: 50, top: "6%", left: "48%", d: 1.7 },
  { color: "#34d399", size: 46, top: "72%", left: "46%", d: 0.3 },
];

export default function PersonalBrand() {
  return (
    <section className="bg-mist">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-24 md:grid-cols-2 md:py-32">
        <Reveal className="md:order-2">
          <h2 className="font-serif text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
            {personal.heading}
          </h2>
          <p className="mt-5 max-w-sm text-lg text-ink-soft">{personal.sub}</p>
        </Reveal>

        <Reveal delay={120} className="md:order-1">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {cluster.map((c, i) => (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
                style={{ top: c.top, left: c.left, animationDelay: `${c.d}s` }}
              >
                <Mascot size={c.size} color={c.color} animate={false} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
