"use client";

import { useWaitlist } from "@/lib/waitlist-context";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function WaitlistButton({ className, children }: Props) {
  const { open } = useWaitlist();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
