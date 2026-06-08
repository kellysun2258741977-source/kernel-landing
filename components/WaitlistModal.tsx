"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // 关闭时重置
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setEmail("");
        setStatus("idle");
        setErrMsg("");
      }, 300);
    } else {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  // Esc 关闭
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    setErrMsg("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrMsg(data.error ?? "提交失败，请重试。");
        setStatus("error");
      }
    } catch {
      setErrMsg("网络错误，请重试。");
      setStatus("error");
    }
  }

  return (
    <div
      aria-modal="true"
      role="dialog"
      style={{
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "auto" : "none",
      }}
      className="fixed inset-0 z-[200] flex items-center justify-center px-4 transition-all duration-200"
    >
      {/* 背景遮罩 */}
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* 卡片 */}
      <div
        style={{
          transform: isOpen ? "scale(1) translateY(0)" : "scale(0.95) translateY(16px)",
        }}
        className="relative w-full max-w-md rounded-3xl bg-paper p-10 shadow-[0_32px_80px_rgba(0,0,0,0.18)] transition-all duration-200"
      >
        {/* 关闭按钮 */}
        <button
          type="button"
          onClick={onClose}
          aria-label="关闭"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-ink-faint transition-colors hover:bg-mist hover:text-ink"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {status === "success" ? (
          // 成功态
          <div className="py-4 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-grass-50">
              <svg className="h-8 w-8 text-grass-500" viewBox="0 0 32 32" fill="none" aria-hidden>
                <path d="M6 16l7 7L26 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl font-semibold text-ink">已加入候补！</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              产品上线第一时间会发邮件通知你。
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 w-full rounded-full bg-ink py-3 text-sm font-medium text-paper transition-transform hover:scale-[1.03] active:scale-95"
            >
              好的
            </button>
          </div>
        ) : (
          // 表单态
          <>
            {/* Logo */}
            <div className="mb-7 flex items-center gap-2.5">
              <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden>
                <path d="M16 2 27.3 8.5v13L16 28 4.7 21.5v-13L16 2Z" fill="var(--color-grass-500)" />
                <path d="M16 9.5c3 0 5 2.2 5 5.2 0 3.6-3.4 6.1-5 7.8-1.6-1.7-5-4.2-5-7.8 0-3 2-5.2 5-5.2Z" fill="#fff" />
              </svg>
              <span className="font-serif text-xl font-semibold text-ink">Kernel</span>
            </div>

            <h2 className="font-serif text-2xl font-semibold leading-snug text-ink">
              提前体验 Kernel。
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              留下邮箱，产品上线第一时间通知你。不发垃圾邮件。
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-3">
              <input
                ref={inputRef}
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-line bg-mist px-5 py-3 text-sm text-ink placeholder-ink-faint outline-none transition-colors focus:border-grass-400 focus:bg-paper"
              />
              {errMsg && (
                <p className="pl-2 text-xs text-rose">{errMsg}</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-grass-500 py-3 text-sm font-medium text-white transition-all hover:bg-grass-600 active:scale-95 disabled:opacity-60"
              >
                {status === "loading" ? "提交中…" : "加入候补名单"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
