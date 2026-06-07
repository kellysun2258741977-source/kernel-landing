import Mascot from "./Mascot";
import Reveal from "./Reveal";
import { compare } from "@/lib/content";

const art = ["🏢", "💬", "🎨"];

export default function Compare() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="mb-14 text-center">
          <h2 className="font-serif text-4xl leading-tight font-semibold tracking-tight text-ink sm:text-[3.25rem]">
            {compare.headingLead}
            <br />
            {compare.headingTail}
          </h2>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-4">
          {/* 品牌高亮卡 */}
          <Reveal className="flex flex-col justify-between rounded-3xl bg-grass-500 p-7 text-white">
            <Mascot size={56} color="#ffffff" face={false} animate={false} />
            <div className="mt-8">
              <h3 className="font-serif text-2xl font-semibold">
                {compare.brandCard.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-grass-50">
                {compare.brandCard.desc}
              </p>
            </div>
          </Reveal>

          {/* 竞品卡 */}
          {compare.cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={(i + 1) * 90}
              className="flex flex-col rounded-3xl border border-line bg-paper p-7 transition-all hover:-translate-y-1 hover:border-grass-200 hover:shadow-[0_14px_40px_rgba(0,0,0,0.07)]"
            >
              <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mt-4 text-sm font-medium text-grass-600">{c.like}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                {c.likeText}
              </p>
              <div className="my-5 grid h-24 place-items-center rounded-xl bg-mist text-4xl">
                {art[i]}
              </div>
              <p className="text-sm font-medium text-ink-faint">{c.but}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                {c.butText}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
