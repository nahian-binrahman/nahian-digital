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
    <section className="pt-10 sm:pt-12 pb-10 sm:pb-12 bg-transparent border-b border-white/8 scroll-mt-20">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <SectionHeading
            badge="Trust & Credibility"
            title="Engineered for reliability, velocity, and measurable impact."
            description="Client partnerships built on transparent communication, disciplined execution, and commercial results."
          />
        </div>

        {/* Qualitative Trust Pillars Bar (No Fake Statistics) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
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
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0d1322]/70 p-7 sm:p-8 backdrop-blur-2xl transition-all duration-400 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:border-sky-400/60 hover:bg-[#12192e]/90 shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.12)] hover:shadow-[0_24px_55px_rgba(0,0,0,0.7),0_0_35px_rgba(56,189,248,0.2)]"
            >
              {/* Top Colorful Aurora Beam */}
              <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-44 w-4/5 rounded-full bg-gradient-to-b from-sky-500/20 via-blue-500/10 to-transparent blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Quote Icon & Placeholder Flag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
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
