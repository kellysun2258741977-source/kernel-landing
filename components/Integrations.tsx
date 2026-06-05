import Reveal from "./Reveal";
import { integrations } from "@/lib/content";

export default function Integrations() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {integrations.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg text-ink-soft">
          {integrations.sub}
        </p>
      </Reveal>

      <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
        {integrations.items.map((it, i) => (
          <Reveal
            key={it.label}
            delay={(i % 5) * 70}
            className="flex w-28 flex-col items-center gap-3 rounded-2xl border border-line bg-paper p-5 transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)]"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-mist text-2xl">
              {it.glyph}
            </span>
            <span className="text-center text-sm font-medium text-ink-soft">
              {it.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
