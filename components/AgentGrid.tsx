import Reveal from "./Reveal";
import { Icon } from "./Icons";
import { agents, mascot } from "@/lib/content";

// 每张能力卡配一个坚果吉祥物头像(复刻 moxt 的彩色角色图标)
const cardMascot = ["green", "orange", "red", "purple", "blue", "teal"];

export default function AgentGrid() {
  return (
    <section id="capabilities" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
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
            <img
              src={mascot(cardMascot[i % cardMascot.length])}
              alt=""
              width={52}
              height={52}
              className="mb-4 h-13 w-13 drop-shadow-sm transition-transform group-hover:scale-110"
              style={{ height: 52, width: 52 }}
            />
            <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              {c.desc}
            </p>
            <a
              href="#pricing"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-grass-600 transition-colors hover:text-grass-700"
            >
              查看详情
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </a>
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
