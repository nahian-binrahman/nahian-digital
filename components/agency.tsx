import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  Code,
  Cpu,
  Palette,
  Sparkles,
  Video,
  Megaphone,
  MailCheck,
  TrendingUp,
  Globe2,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

interface CapabilityRole {
  title: string;
  category: string;
  icon: LucideIcon;
  description: string;
}

const CAPABILITIES: CapabilityRole[] = [
  {
    title: "Development",
    category: "Engineering",
    icon: Code,
    description: "Modern full-stack web apps, performant APIs, and scalable architectures.",
  },
  {
    title: "AI & Automation",
    category: "Intelligence",
    icon: Cpu,
    description: "Custom AI workflows, internal productivity tools, and process automation.",
  },
  {
    title: "UI/UX",
    category: "Product Design",
    icon: Palette,
    description: "Conversion-first interface systems, wireframes, and design systems.",
  },
  {
    title: "Creative",
    category: "Brand & Visuals",
    icon: Sparkles,
    description: "Distinctive brand storytelling, digital assets, and high-impact messaging.",
  },
  {
    title: "AI Video",
    category: "Next-Gen Media",
    icon: Video,
    description: "Cinematic commercial video production and short-form ad creatives.",
  },
  {
    title: "Marketing",
    category: "Acquisition",
    icon: Megaphone,
    description: "Strategic digital campaigns, go-to-market roadmaps, and audience targeting.",
  },
  {
    title: "Email",
    category: "Lifecycle",
    icon: MailCheck,
    description: "Automated nurturing sequences, transactional funnels, and retention flows.",
  },
  {
    title: "Growth",
    category: "Optimization",
    icon: TrendingUp,
    description: "Conversion rate optimization, analytics infrastructure, and continuous testing.",
  },
];

export function Agency() {
  return (
    <section id="nahian-digital" className="pt-10 sm:pt-12 pb-10 sm:pb-12 bg-transparent border-y border-white/8 scroll-mt-20 relative">
      <Container>
        {/* Section Header: Identity & Ethos */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-stone-300 mb-4 backdrop-blur-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <span>Nahian Digital · Remote Studio Model</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
            A focused digital growth and technology team led by Nahian Bin Rahman.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-stone-300">
            Strategy, technology, AI, creative production, and growth — working
            together to help businesses move faster.
          </p>
        </div>

        {/* Central Core & Operating Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12">
          {/* Founder-Led Hub Card */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#0f131d]/85 backdrop-blur-md p-5 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                  Founder-Led Execution
                </span>
                <span className="flex items-center gap-1.5 text-xs text-stone-400">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  Direct Oversight
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Small enough to move fast. Flexible enough to assemble the right expertise for each project.
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-stone-300">
                Instead of carrying heavy agency overhead or passing clients between junior account managers,
                Nahian Bin Rahman directly leads strategy, architecture, and quality assurance. Specialized
                collaborators are brought in precisely where needed.
              </p>
            </div>

            {/* Operating Badges */}
            <div className="pt-8 mt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="space-y-1">
                <span className="text-stone-400">Leadership</span>
                <p className="font-semibold text-white">Nahian Bin Rahman</p>
              </div>
              <div className="space-y-1">
                <span className="text-stone-400">Delivery Model</span>
                <p className="font-semibold text-white">Remote-Native & Agile</p>
              </div>
              <div className="space-y-1">
                <span className="text-stone-400">Coverage</span>
                <p className="font-semibold text-white">International Reach</p>
              </div>
            </div>
          </div>

          {/* Remote Network Card */}
          <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#0f131d]/85 backdrop-blur-md p-5 sm:p-8 lg:p-10 flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-400">
                <Globe2 className="h-4 w-4 text-stone-400" />
                <span>Distributed Specialist Pods</span>
              </div>
              <h4 className="text-xl font-semibold text-white tracking-tight">
                Agile talent tailored to the problem.
              </h4>
              <p className="text-sm leading-relaxed text-stone-300">
                Every business initiative has unique demands. We assemble dedicated pods across engineering,
                creative AI, and marketing to execute with startup speed and enterprise rigor.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-2 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <Zap className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>Zero bureaucratic lag or handoff delays</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                <span>Direct communication with technical builders</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>High-velocity delivery focused on business impact</span>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Team Capability Roles Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400">
              Core Team Capability Disciplines
            </h4>
            <span className="text-xs text-stone-400">8 Integrated Disciplines</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAPABILITIES.map((role) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.title}
                  className="rounded-xl border border-white/10 bg-[#0f131d]/60 backdrop-blur-md p-5 transition-all duration-200 hover:border-blue-500/40 hover:-translate-y-1 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-stone-200">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                      {role.category}
                    </span>
                  </div>
                  <h5 className="text-base font-semibold text-white tracking-tight mb-1">
                    {role.title}
                  </h5>
                  <p className="text-xs leading-relaxed text-stone-400">
                    {role.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Bottom Banner & CTA */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#0c1220] to-[#0f172a] p-5 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 shadow-2xl text-white">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-semibold !text-white">
              Ready to assemble the right team for your next digital initiative?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300">
              Consult directly with Nahian to scope your roadmap, timelines, and deliverables.
            </p>
          </div>
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            className="gap-2 shrink-0 shadow-sm w-full sm:w-auto justify-center"
          >
            Work With Nahian Digital
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
