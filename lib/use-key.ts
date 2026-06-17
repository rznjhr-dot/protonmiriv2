"use client";

import { useEffect } from "react";

/** Call `onKey` when the specified key is pressed */
export function useEscapeKey(active: boolean, onKey: () => void) {
  useEffect(() => {
    if (!active) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onKey();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [active, onKey]);
}
