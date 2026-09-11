import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Briefcase,
  Terminal,
  Cpu,
  Zap,
  Users,
  MessageSquare,
  CheckCircle2,
  Compass,
  FileCode2,
  Layers,
  Rocket,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface Advantage {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ADVANTAGES: Advantage[] = [
  {
    title: "Business-First Thinking",
    description: "Technology decisions mapped directly to revenue, margins, and customer acquisition.",
    icon: Briefcase,
  },
  {
    title: "Technical Execution",
    description: "Production-grade code, resilient architectures, and clean maintainable systems.",
    icon: Terminal,
  },
  {
    title: "AI-Native Workflows",
    description: "Leveraging modern automation and LLM tooling to 10x output and collapse delivery timelines.",
    icon: Cpu,
  },
  {
    title: "Fast Development",
    description: "Agile, unbloated sprint cycles shipping working solutions in weeks rather than quarters.",
    icon: Zap,
  },
  {
    title: "Flexible Remote Team",
    description: "Tailored specialist pods assembled on-demand without the cost of permanent agency retainers.",
    icon: Users,
  },
  {
    title: "Founder-Level Communication",
    description: "Direct dialogue with Nahian — zero junior account managers or misaligned telephone games.",
    icon: MessageSquare,
  },
  {
    title: "End-to-End Delivery",
    description: "A single unified partner managing strategy, design, engineering, launch, and growth.",
    icon: CheckCircle2,
  },
];

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business, customer, bottleneck, and strategic opportunity.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Plan",
    description: "Define the simplest solution capable of creating meaningful, measurable value.",
    icon: FileCode2,
  },
  {
    number: "03",
    title: "Build",
    description: "Design, develop, automate, or produce the solution with speed and precision.",
    icon: Layers,
  },
  {
    number: "04",
    title: "Launch & Improve",
    description: "Launch quickly, observe real-world results, and iterate based on verified data.",
    icon: Rocket,
  },
];

export function WhyMeAndProcess() {
  return (
    <section className="py-20 sm:py-28 bg-transparent scroll-mt-20 border-b border-white/8">
      <Container>
        {/* ================= PART 1: WHY WORK WITH ME ================= */}
        <div className="mb-20 sm:mb-28">
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <SectionHeading
              badge="The Ownership Advantage"
              title="One point of ownership from idea to execution."
              description="You shouldn't need five disconnected freelancers to launch one digital initiative. We coordinate technology, AI, creative work, and growth through one streamlined system."
            />
          </div>

          {/* 7 Scannable Trust Advantage Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {ADVANTAGES.map((item, index) => {
              const Icon = item.icon;
              const isHighlight = index === 6; // End-to-End Delivery

              return (
                <div
                  key={item.title}
                  className={`rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between backdrop-blur-md ${
                    isHighlight
                      ? "border-blue-500/40 bg-gradient-to-br from-blue-950/40 to-[#0f131d]/90 text-white shadow-[0_0_30px_rgba(59,130,246,0.15)] sm:col-span-2 lg:col-span-3 xl:col-span-1"
                      : "border-white/8 bg-[#0f131d]/75 text-white hover:border-blue-500/30 hover:shadow-[0_12px_36px_rgba(0,0,0,0.5),0_0_20px_rgba(59,130,246,0.1)]"
                  }`}
                >
                  <div>
                    <div
                      className={`h-9 w-9 rounded-xl flex items-center justify-center mb-4 ${
                        isHighlight
                          ? "bg-blue-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                          : "bg-white/5 text-stone-200 border border-white/10"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-semibold tracking-tight mb-2 text-white">
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isHighlight ? "text-stone-300" : "text-stone-400"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= PART 2: FOUR-STEP PROCESS ================= */}
        <div className="pt-8 border-t border-white/8">
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <SectionHeading
              badge="Structured Delivery"
              title="A four-step framework designed for velocity."
              description="Working with Nahian Digital is structured, transparent, and completely unbureaucratic. We eliminate unnecessary meetings and focus on tangible shipping milestones."
            />
          </div>

          {/* 4-Step Process Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/8 bg-[#0f131d]/75 p-7 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/35 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(59,130,246,0.12)]"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between pb-5 border-b border-white/8 mb-5">
                      <span className="font-mono text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-md">
                        Step {step.number}
                      </span>
                      <div className="h-8 w-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-stone-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500/40 transition-colors">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <h4 className="text-xl font-semibold tracking-tight text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-stone-400">
                      {step.description}
                    </p>
                  </div>

                  {/* Flow Arrow for intermediate steps */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-stone-600">
                      <ArrowRight className="h-5 w-5 bg-[#090b10] rounded-full p-0.5 border border-white/10" />
                    </div>
                  )}

                  <div className="pt-4 mt-6 border-t border-white/8 text-[11px] font-mono text-stone-500">
                    Phase 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
