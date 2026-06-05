export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden>
        <path
          d="M16 2 27.3 8.5v13L16 28 4.7 21.5v-13L16 2Z"
          fill="var(--color-grass-500)"
        />
        <path
          d="M16 9.5c3 0 5 2.2 5 5.2 0 3.6-3.4 6.1-5 7.8-1.6-1.7-5-4.2-5-7.8 0-3 2-5.2 5-5.2Z"
          fill="#fff"
        />
      </svg>
      <span className="font-serif text-[22px] font-semibold tracking-tight text-ink">
        Kernel
      </span>
    </span>
  );
}
