import Reveal from "./Reveal";
import { personal, mascot } from "@/lib/content";

// 7 个坚果吉祥物散布成簇 —— 对应 Moxt 的「每个人一个 momo」
const cluster = [
  { name: "green", size: 96, top: "32%", left: "46%", d: 0 },
  { name: "purple", size: 66, top: "12%", left: "20%", d: 0.5 },
  { name: "orange", size: 72, top: "16%", left: "72%", d: 1 },
  { name: "blue", size: 60, top: "60%", left: "22%", d: 1.4 },
  { name: "red", size: 62, top: "64%", left: "70%", d: 0.8 },
  { name: "teal", size: 52, top: "6%", left: "48%", d: 1.7 },
  { name: "yellow", size: 48, top: "74%", left: "46%", d: 0.3 },
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
            {cluster.map((c) => (
              <img
                key={c.name}
                src={mascot(c.name)}
                alt=""
                width={c.size}
                height={c.size}
                className="absolute -translate-x-1/2 -translate-y-1/2 animate-float drop-shadow-sm"
                style={{
                  top: c.top,
                  left: c.left,
                  width: c.size,
                  height: c.size,
                  animationDelay: `${c.d}s`,
                }}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
