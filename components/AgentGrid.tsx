import Reveal from "./Reveal";
import { Icon } from "./Icons";
import { agents } from "@/lib/content";

const iconBg = [
  "bg-grass-50 text-grass-600",
  "bg-amber-50 text-tangerine",
  "bg-rose-50 text-rose",
  "bg-sky-50 text-sky",
  "bg-violet-50 text-grape",
  "bg-grass-50 text-grass-600",
];

export default function AgentGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {agents.heading}
        </h2>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {agents.cards.map((c, i) => (
          <Reveal
            key={c.title}
            delay={(i % 3) * 90}
            className="group rounded-2xl border border-line bg-paper p-6 transition-all hover:-translate-y-1 hover:border-grass-200 hover:shadow-[0_14px_40px_rgba(0,0,0,0.07)]"
          >
            <div
              className={`mb-4 grid h-11 w-11 place-items-center rounded-xl ${iconBg[i % iconBg.length]}`}
            >
              <Icon name={c.icon} className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              {c.desc}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-grass-600">
              查看详情
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </span>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 flex justify-center">
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-transform hover:scale-[1.03] active:scale-95"
        >
          {agents.cta}
          <Icon name="arrow" className="h-4 w-4" />
        </a>
      </Reveal>
    </section>
  );
}
