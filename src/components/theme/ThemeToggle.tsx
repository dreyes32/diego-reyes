"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-ink"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle color theme"}
    >
      <span aria-hidden className="text-base leading-none">
        {mounted ? (isDark ? "○" : "●") : "·"}
      </span>
    </button>
  );
}
