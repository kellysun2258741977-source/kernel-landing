import Reveal from "./Reveal";
import { Icon } from "./Icons";
import { hero, mascot } from "@/lib/content";

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="var(--color-grass-400)"
      aria-hidden
    >
      <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-10 sm:pt-28">
      {/* 背景柔光 */}
      <div className="pointer-events-none absolute inset-x-0 top-10 -z-10 mx-auto h-[480px] max-w-3xl rounded-full bg-grass-100/40 blur-[120px]" />

      <Reveal className="mx-auto max-w-3xl text-center">
        <h1 className="font-serif text-[2.6rem] leading-[1.12] font-semibold tracking-tight text-ink sm:text-6xl md:text-[5rem]">
          {hero.titleLead}
          <span className="text-grass-500">{hero.titleAccent}</span>
          {hero.titleTail}
          <span className="font-serif">{hero.titleBrand}</span>
          {hero.titleEnd}
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
          {hero.subtitle}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-transform hover:scale-[1.03] active:scale-95"
          >
            {hero.primaryCta}
          </a>
          <a
            href="#workflows"
            className="inline-flex items-center gap-2 rounded-full border border-grass-200 px-6 py-3.5 text-sm font-medium text-grass-700 transition-colors hover:bg-grass-50"
          >
            {hero.secondaryCta}
            <span className="grid h-5 w-5 place-items-center rounded-full bg-grass-500 text-paper">
              <Icon name="play" className="h-3 w-3" />
            </span>
          </a>
        </div>
      </Reveal>

      {/* 吉祥物 + 星点 */}
      <div className="relative mx-auto mt-16 flex h-[300px] max-w-md items-center justify-center sm:mt-20">
        <Sparkle className="absolute left-[8%] top-[12%] h-4 w-4 animate-float" />
        <Sparkle className="absolute right-[10%] top-[24%] h-3 w-3 animate-float [animation-delay:1.2s]" />
        <Sparkle className="absolute left-[18%] bottom-[14%] h-5 w-5 animate-float [animation-delay:0.6s]" />
        <Sparkle className="absolute right-[16%] bottom-[20%] h-3 w-3 animate-float [animation-delay:1.8s]" />
        <img
          src={mascot("green")}
          alt="Kernel 吉祥物"
          width={240}
          height={240}
          className="h-[240px] w-[240px] animate-float drop-shadow-sm"
        />
      </div>
    </section>
  );
}
