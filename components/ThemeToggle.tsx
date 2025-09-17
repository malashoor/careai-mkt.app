"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="rounded-xl px-3 py-2 text-sm border border-neutral-200 dark:border-neutral-700
                     bg-white dark:bg-neutral-900 w-20 h-8 animate-pulse" />
    );
  }

  const current = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="rounded-xl px-3 py-2 text-sm border border-neutral-200 dark:border-neutral-700
                 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800
                 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {current === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
