import Reveal from "./Reveal";
import { native } from "@/lib/content";

// 三张卡复用手绘场景大图(复刻 moxt 的横构图插画卡)
const cardScene = ["insight", "memory", "content"];

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
            className="overflow-hidden rounded-3xl border border-line bg-paper transition-all hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
          >
            <div className={`overflow-hidden ${c.tint}`}>
              <img
                src={`/assets/scenes/${cardScene[i % cardScene.length]}.png`}
                alt=""
                width={520}
                height={300}
                className="h-52 w-full object-cover"
              />
            </div>
            <div className="p-7">
              <h3 className="text-xl font-semibold text-ink">{c.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {c.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
