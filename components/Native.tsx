import Reveal from "./Reveal";
import { native } from "@/lib/content";

const art = ["🛠️", "🧠", "🗂️"];
const tint = ["bg-grass-50", "bg-violet-50", "bg-amber-50"];

export default function Native() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal className="mx-auto mb-14 max-w-3xl text-center">
        <h2 className="font-serif text-4xl leading-tight font-semibold tracking-tight text-ink sm:text-[3.25rem]">
          {native.headingLead}
          <span className="text-grass-500">{native.headingAccent}</span>
          {native.headingTail}
          <br />
          {native.headingSecond}
        </h2>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-3">
        {native.cards.map((c, i) => (
          <Reveal
            key={c.title}
            delay={i * 100}
            className="rounded-3xl border border-line bg-paper p-7"
          >
            <div
              className={`mb-6 grid h-40 place-items-center rounded-2xl ${tint[i]} text-6xl`}
            >
              {art[i]}
            </div>
            <h3 className="text-xl font-semibold text-ink">{c.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              {c.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
