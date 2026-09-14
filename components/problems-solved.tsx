import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  TrendingUp,
  Workflow,
  Rocket,
  Sparkles,
  Video,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";

interface ProblemItem {
  icon: LucideIcon;
  problem: string;
  solution: string;
  highlight: string;
}

const PROBLEMS: ProblemItem[] = [
  {
    icon: TrendingUp,
    problem: "Need more customers?",
    solution:
      "Conversion-focused websites, high-impact landing pages, AI advertising assets, and email campaigns engineered to capture attention and inquiries.",
    highlight: "Attract & Convert",
  },
  {
    icon: Workflow,
    problem: "Too much repetitive work?",
    solution:
      "AI-powered workflows and custom business automations that eliminate manual bottlenecks, streamline internal operations, and save dozens of team hours.",
    highlight: "Automate & Reclaim Time",
  },
  {
    icon: Rocket,
    problem: "Have a SaaS or product idea?",
    solution:
      "Turn concepts into focused, production-grade MVPs with modern architecture, fast turnarounds, and zero unnecessary development overhead.",
    highlight: "Ship & Validate Fast",
  },
  {
    icon: Sparkles,
    problem: "Does your business look outdated online?",
    solution:
      "Create a sleek, high-credibility digital presence that elevates your brand perception, inspires executive confidence, and wins against competitors.",
    highlight: "Elevate Brand Authority",
  },
  {
    icon: Video,
    problem: "Need content faster?",
    solution:
      "Produce cinematic AI video, modern brand visuals, and targeted advertising creative without the delays or cost of traditional production houses.",
    highlight: "Rapid Creative Assets",
  },
];

export function ProblemsSolved() {
  return (
    <section id="solutions" className="pt-10 sm:pt-12 pb-10 sm:pb-12 relative scroll-mt-20">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <SectionHeading
            badge="How I Help"
            title="Business problems turned into practical digital solutions."
            description="Technology is only valuable when it produces tangible commercial outcomes — higher conversions, lower operational drag, and faster growth."
          />
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 [perspective:1200px]">
          {PROBLEMS.map((item, index) => {
            const Icon = item.icon;
            const isWide = index >= 3;
            const colorThemes = [
              {
                aura: "from-emerald-500/25 via-teal-500/10 to-transparent",
                borderHover: "hover:border-emerald-400/60 hover:shadow-[0_24px_55px_rgba(0,0,0,0.7),0_0_35px_rgba(52,211,153,0.22)]",
                iconBg: "group-hover:bg-emerald-500 group-hover:border-emerald-400 group-hover:text-white",
                spotlight: "rgba(52, 211, 153, 0.25)",
                textHover: "group-hover:text-emerald-300",
              },
              {
                aura: "from-cyan-500/25 via-sky-500/10 to-transparent",
                borderHover: "hover:border-cyan-400/60 hover:shadow-[0_24px_55px_rgba(0,0,0,0.7),0_0_35px_rgba(6,182,212,0.22)]",
                iconBg: "group-hover:bg-cyan-500 group-hover:border-cyan-400 group-hover:text-white",
                spotlight: "rgba(6, 182, 212, 0.25)",
                textHover: "group-hover:text-cyan-300",
              },
              {
                aura: "from-purple-500/25 via-indigo-500/10 to-transparent",
                borderHover: "hover:border-purple-400/60 hover:shadow-[0_24px_55px_rgba(0,0,0,0.7),0_0_35px_rgba(168,85,247,0.22)]",
                iconBg: "group-hover:bg-purple-600 group-hover:border-purple-400 group-hover:text-white",
                spotlight: "rgba(168, 85, 247, 0.25)",
                textHover: "group-hover:text-purple-300",
              },
              {
                aura: "from-amber-500/25 via-orange-500/10 to-transparent",
                borderHover: "hover:border-amber-400/60 hover:shadow-[0_24px_55px_rgba(0,0,0,0.7),0_0_35px_rgba(251,191,36,0.22)]",
                iconBg: "group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:text-white",
                spotlight: "rgba(251, 191, 36, 0.25)",
                textHover: "group-hover:text-amber-300",
              },
              {
                aura: "from-rose-500/25 via-pink-500/10 to-transparent",
                borderHover: "hover:border-rose-400/60 hover:shadow-[0_24px_55px_rgba(0,0,0,0.7),0_0_35px_rgba(244,63,94,0.22)]",
                iconBg: "group-hover:bg-rose-500 group-hover:border-rose-400 group-hover:text-white",
                spotlight: "rgba(244, 63, 94, 0.25)",
                textHover: "group-hover:text-rose-300",
              },
            ];
            const pTheme = colorThemes[index % colorThemes.length];

            return (
              <TiltCard
                key={item.problem}
                maxTilt={7}
                spotlightColor={pTheme.spotlight}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0d1322]/70 p-5 sm:p-7 md:p-8 backdrop-blur-2xl transition-all duration-400 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:bg-[#12192e]/90 shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.12)] ${
                  pTheme.borderHover
                } ${isWide ? "lg:col-span-1 lg:last:col-span-2 xl:last:col-span-1" : ""}`}
              >
                {/* Top Colorful Aurora Beam */}
                <div
                  className={`pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-4/5 rounded-full bg-gradient-to-b ${pTheme.aura} blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Shimmering top border beam */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-stone-200 transition-all duration-300 shadow-xs ${pTheme.iconBg}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-stone-400">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Problem Question Headline */}
                  <h3
                    className={`text-xl font-semibold tracking-tight text-white mb-2.5 transition-colors duration-300 ${pTheme.textHover}`}
                  >
                    {item.problem}
                  </h3>

                  {/* Solution Outcome */}
                  <p className="text-sm leading-relaxed text-stone-400">
                    {item.solution}
                  </p>
                </div>

                {/* Micro Action Link */}
                <div className="pt-6 mt-4 border-t border-white/8 relative z-10">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-300 group-hover:text-blue-400 transition-colors"
                  >
                    <span>Explore solution</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
