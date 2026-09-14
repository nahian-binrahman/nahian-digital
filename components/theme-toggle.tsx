"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`h-8 w-8 rounded-full border border-white/10 bg-white/5 ${className}`} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 focus:outline-none ${
        isDark
          ? "border-white/10 bg-white/5 text-stone-300 hover:border-sky-400/40 hover:bg-white/10 hover:text-white"
          : "border-slate-300 bg-white/80 text-slate-700 shadow-xs hover:border-sky-500 hover:text-sky-600"
      } ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform duration-300 hover:rotate-45 text-amber-300" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-300 hover:-rotate-12 text-slate-800" />
      )}
    </button>
  );
}
