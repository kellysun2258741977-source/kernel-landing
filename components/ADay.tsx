import Reveal from "./Reveal";
import { aDay } from "@/lib/content";

const scene = [
  { emoji: "🔍", from: "from-sky-100", to: "to-sky-50" },
  { emoji: "🧪", from: "from-violet-100", to: "to-violet-50" },
  { emoji: "✍️", from: "from-rose-100", to: "to-rose-50" },
  { emoji: "📦", from: "from-amber-100", to: "to-amber-50" },
];

export default function ADay() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal className="mb-14 text-center">
        <h2 className="font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {aDay.heading}
        </h2>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {aDay.cards.map((c, i) => (
          <Reveal
            key={c.time}
            delay={(i % 4) * 90}
            className="overflow-hidden rounded-2xl border border-line bg-paper"
          >
            <div
              className={`grid h-32 place-items-center bg-gradient-to-br ${scene[i].from} ${scene[i].to} text-5xl`}
            >
              {scene[i].emoji}
            </div>
            <div className="p-5">
              <p className="flex items-center gap-2 text-sm font-medium text-grass-600">
                <span className="h-2 w-2 rounded-full bg-grass-500" />
                {c.time}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{c.title}</h3>
              <div className="mt-3 space-y-2 text-sm leading-relaxed">
                <p className="text-ink-soft">
                  <span className="font-semibold text-ink-faint">
                    {c.agent}
                  </span>{" "}
                  {c.agentText}
                </p>
                <p className="text-ink-soft">
                  <span className="font-semibold text-ink-faint">{c.you}</span>{" "}
                  {c.youText}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
