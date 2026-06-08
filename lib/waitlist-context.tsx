"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import WaitlistModal from "@/components/WaitlistModal";

type WaitlistCtx = { open: () => void };
const Ctx = createContext<WaitlistCtx | null>(null);

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Ctx.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <WaitlistModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Ctx.Provider>
  );
}

export function useWaitlist() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useWaitlist must be inside WaitlistProvider");
  return ctx;
}
