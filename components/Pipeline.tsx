import Reveal from "./Reveal";
import { Icon } from "./Icons";
import { pipeline } from "@/lib/content";

export default function Pipeline() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-serif text-3xl leading-snug font-semibold tracking-tight text-ink sm:text-4xl">
            {pipeline.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
            {pipeline.sub}
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-4">
          {pipeline.stages.map((s, i) => (
            <Reveal key={s.step} delay={i * 90} className="relative">
              <div className="h-full rounded-2xl border border-line bg-paper p-6">
                <span className="font-serif text-2xl font-semibold text-grass-500">
                  {s.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {s.desc}
                </p>
              </div>
              {i < pipeline.stages.length - 1 && (
                <Icon
                  name="arrow"
                  className="absolute top-1/2 -right-3 hidden h-5 w-5 -translate-y-1/2 text-grass-200 md:block"
                />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
