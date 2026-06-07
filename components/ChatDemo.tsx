import Reveal from "./Reveal";
import { chat, mascot } from "@/lib/content";

export default function ChatDemo() {
  return (
    <section className="bg-mist">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
        <Reveal>
          <h2 className="font-serif text-4xl leading-tight font-semibold tracking-tight text-ink sm:text-5xl">
            {chat.heading}
          </h2>
          <p className="mt-5 max-w-sm text-lg text-ink-soft">{chat.sub}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
            <div className="flex">
              <div className="w-3 shrink-0 bg-grass-500" />
              <div className="flex-1 space-y-5 p-6">
                {/* 用户 */}
                <div className="flex gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-grape text-sm font-semibold text-white">
                    {chat.user.name[0]}
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-semibold text-ink">
                        {chat.user.name}
                      </span>
                      <span className="ml-2 text-xs text-ink-faint">
                        {chat.user.time}
                      </span>
                    </p>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink">
                      <span className="text-grass-600">@Kernel</span>{" "}
                      {chat.user.text}
                    </p>
                  </div>
                </div>
                {/* Agent */}
                <div className="flex gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-lg bg-grass-50">
                    <img src={mascot("green")} alt="" width={30} height={30} />
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-semibold text-ink">
                        {chat.agent.name}
                      </span>
                      <span className="ml-2 text-xs text-ink-faint">
                        {chat.agent.time}
                      </span>
                    </p>
                    <div className="mt-1 space-y-1.5 text-[15px] leading-relaxed text-ink">
                      {chat.agent.lines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                    <div className="mt-3 flex gap-2">
                      <span className="rounded-full border border-line bg-mist px-2.5 py-1 text-sm">
                        ✦ 5
                      </span>
                      <span className="rounded-full border border-line bg-mist px-2.5 py-1 text-sm">
                        👍 3
                      </span>
                    </div>
                  </div>
                </div>
                {/* 团队其他角色跟进 */}
                {chat.followups.map((f) => (
                  <div key={f.name} className="flex gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-lg bg-mist">
                      <img src={mascot(f.mascot)} alt="" width={30} height={30} />
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-semibold text-ink">{f.name}</span>
                        <span className="ml-2 text-xs text-ink-faint">
                          {f.time}
                        </span>
                      </p>
                      <p className="mt-1 text-[15px] leading-relaxed text-ink">
                        {f.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
