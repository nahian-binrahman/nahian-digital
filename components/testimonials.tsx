import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TESTIMONIALS, TRUST_PILLARS } from "@/data/testimonials";
import {
  Quote,
  UserCheck,
  Globe2,
  Layers,
  Compass,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  UserCheck,
  Globe2,
  Layers,
  Compass,
};

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-transparent border-b border-white/8 scroll-mt-20">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            badge="Trust & Credibility"
            title="Engineered for reliability, velocity, and measurable impact."
            description="Client partnerships built on transparent communication, disciplined execution, and commercial results."
          />
        </div>

        {/* Qualitative Trust Pillars Bar (No Fake Statistics) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {TRUST_PILLARS.map((pillar) => {
            const Icon = ICON_MAP[pillar.iconName] || UserCheck;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl border border-white/8 bg-[#0f131d]/75 p-5 backdrop-blur-md shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-stone-200">
                    <Icon className="h-4 w-4 text-blue-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white tracking-tight">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed pl-11">
                  {pillar.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3 Tasteful Quote Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-white/8 bg-[#0f131d]/75 p-7 sm:p-8 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/35 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(59,130,246,0.12)]"
            >
              <div>
                {/* Quote Icon & Placeholder Flag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="h-8 w-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                    <Quote className="h-4 w-4" />
                  </div>
                  {item.isPlaceholder && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                      Sample Feedback
                    </span>
                  )}
                </div>

                {/* Testimonial Quote Copy */}
                <p className="text-sm sm:text-base leading-relaxed text-stone-300 font-normal">
                  &ldquo;{item.testimonial}&rdquo;
                </p>
              </div>

              {/* Client Metadata & Monogram */}
              <div className="pt-6 mt-6 border-t border-white/8 flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-white/10 border border-white/10 text-white flex items-center justify-center text-xs font-semibold">
                  {item.clientName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">
                    {item.clientName}
                  </span>
                  <span className="text-xs text-stone-400">
                    {item.role} · {item.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
