import Reveal from "./Reveal";
import { Icon } from "./Icons";
import { finalCta } from "@/lib/content";

export default function FinalCTA() {
  return (
    <section id="pricing" className="relative overflow-hidden px-6 py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 mx-auto my-auto h-[420px] max-w-3xl rounded-full bg-grass-100/50 blur-[130px]" />
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="mb-7 flex items-center justify-center gap-3">
          <svg width="44" height="44" viewBox="0 0 32 32" aria-hidden>
            <path
              d="M16 2 27.3 8.5v13L16 28 4.7 21.5v-13L16 2Z"
              fill="var(--color-grass-500)"
            />
            <path
              d="M16 9.5c3 0 5 2.2 5 5.2 0 3.6-3.4 6.1-5 7.8-1.6-1.7-5-4.2-5-7.8 0-3 2-5.2 5-5.2Z"
              fill="#fff"
            />
          </svg>
          <span className="font-serif text-4xl font-semibold tracking-tight text-ink">
            Kernel
          </span>
        </div>
        <p className="font-serif text-2xl text-ink sm:text-3xl">
          {finalCta.heading}
        </p>
        <div className="mt-9 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-medium text-paper transition-transform hover:scale-[1.03] active:scale-95"
          >
            {finalCta.cta}
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
