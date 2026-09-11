import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium uppercase tracking-wider text-stone-300 backdrop-blur-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
          {badge}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-sm sm:text-base lg:text-lg leading-relaxed text-stone-400",
            isCenter ? "max-w-2xl" : "max-w-3xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
