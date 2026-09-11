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

            return (
              <TiltCard
                key={item.problem}
                maxTilt={7}
                spotlightColor="rgba(59, 130, 246, 0.22)"
                className={`group rounded-2xl border border-white/10 bg-[#0f131d]/85 p-5 sm:p-7 md:p-8 backdrop-blur-md transition-shadow duration-300 hover:border-blue-500/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(59,130,246,0.15)] ${
                  isWide ? "lg:col-span-1 lg:last:col-span-2 xl:last:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-stone-200 transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500/40 shadow-xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-stone-400">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Problem Question Headline */}
                  <h3 className="text-xl font-semibold tracking-tight text-white mb-2.5">
                    {item.problem}
                  </h3>

                  {/* Solution Outcome */}
                  <p className="text-sm leading-relaxed text-stone-400">
                    {item.solution}
                  </p>
                </div>

                {/* Micro Action Link */}
                <div className="pt-6 mt-4 border-t border-white/8">
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
