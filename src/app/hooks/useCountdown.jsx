"use client";

import { useEffect, useState } from "react";

const pad = (n) => String(n).padStart(2, "0");

// Initial: 6 days, 2 hours, 41 mins, 17 secs
const INITIAL_SECONDS = 6 * 86400 + 2 * 3600 + 41 * 60 + 17;

export function useCountdown() {
  const [remaining, setRemaining] = useState(INITIAL_SECONDS);

  useEffect(() => {
    const timerId = setInterval(() => {
      setRemaining((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const d = Math.floor(remaining / 86400);
  const h = Math.floor((remaining % 86400) / 3600);
  const m = Math.floor((remaining % 3600) / 60);
  const s = remaining % 60;

  return `${d}d : ${pad(h)}h : ${pad(m)}m : ${pad(s)}s`;
}