import Reveal from "./Reveal";
import { pricing } from "@/lib/content";
import WaitlistButton from "./WaitlistButton";

function Check({ highlight }: { highlight: boolean }) {
  return (
    <svg
      className={`mt-0.5 h-4 w-4 shrink-0 ${highlight ? "text-grass-100" : "text-grass-500"}`}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 8l3.5 3.5L13 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-mist px-6 py-24 md:py-32">
      <Reveal className="mb-14 text-center">
        <h2 className="font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {pricing.heading}
        </h2>
        <p className="mt-3 text-lg text-ink-soft">{pricing.sub}</p>
      </Reveal>

      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
        {pricing.plans.map((plan, i) => (
          <Reveal
            key={plan.name}
            delay={i * 80}
            className={`flex flex-col rounded-3xl p-8 ${
              plan.highlight
                ? "bg-grass-500 shadow-[0_20px_60px_rgba(41,193,106,0.25)]"
                : "border border-line bg-paper"
            }`}
          >
            {/* 头部 */}
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-widest ${
                  plan.highlight ? "text-grass-100" : "text-grass-600"
                }`}
              >
                {plan.name}
              </p>
              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={`font-serif text-4xl font-semibold ${
                    plan.highlight ? "text-white" : "text-ink"
                  }`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className={`text-sm ${
                      plan.highlight ? "text-grass-100" : "text-ink-soft"
                    }`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>
              <p
                className={`mt-2 text-sm ${
                  plan.highlight ? "text-grass-50" : "text-ink-soft"
                }`}
              >
                {plan.desc}
              </p>
            </div>

            {/* 功能列表 */}
            <ul className="mt-8 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <Check highlight={plan.highlight} />
                  <span
                    className={
                      plan.highlight ? "text-grass-50" : "text-ink-soft"
                    }
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <WaitlistButton
              className={`mt-8 block w-full rounded-full py-3 text-center text-sm font-medium transition-transform hover:scale-[1.03] active:scale-95 ${
                plan.highlight
                  ? "bg-white text-grass-700 hover:bg-grass-50"
                  : "border border-line text-ink hover:border-grass-300 hover:bg-grass-50"
              }`}
            >
              {plan.cta}
            </WaitlistButton>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
