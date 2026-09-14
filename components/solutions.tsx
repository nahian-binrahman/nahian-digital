import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Code2,
  Cpu,
  BarChart3,
  Wand2,
  CheckCircle2,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
}

export const SOLUTIONS_DATA: ServiceCategory[] = [
  {
    id: "web-software",
    number: "01",
    title: "Web & Software",
    description:
      "Modern, high-performance web applications, digital platforms, and custom software systems engineered for reliability and conversion.",
    icon: Code2,
    capabilities: [
      "Business websites",
      "Conversion landing pages",
      "Web applications",
      "SaaS development",
      "MVP development",
      "Custom software",
    ],
  },
  {
    id: "ai-automation",
    number: "02",
    title: "AI & Automation",
    description:
      "Intelligent workflows and custom business automations that eliminate manual bottlenecks, boost output, and reduce operational drag.",
    icon: Cpu,
    capabilities: [
      "Generative AI solutions",
      "AI workflows",
      "Business automation",
      "Internal productivity tools",
      "AI-powered applications",
      "Process automation",
    ],
  },
  {
    id: "growth-systems",
    number: "03",
    title: "Growth Systems",
    description:
      "Predictable acquisition funnels and digital campaign infrastructure designed to generate qualified inquiries and accelerate revenue.",
    icon: BarChart3,
    capabilities: [
      "Email marketing",
      "Lead funnels",
      "Conversion optimization",
      "Digital growth systems",
      "Campaign infrastructure",
    ],
  },
  {
    id: "creative-ai",
    number: "04",
    title: "Creative AI",
    description:
      "Cinematic promotional media, AI-driven advertising assets, and high-impact visual storytelling without legacy studio overhead.",
    icon: Wand2,
    capabilities: [
      "Cinematic AI videos",
      "AI advertisements",
      "Promotional creative",
      "Product storytelling",
      "Digital campaign assets",
    ],
  },
];

interface ServiceCardProps {
  service: ServiceCategory;
}

const solutionThemes: Record<
  string,
  { aura: string; borderHover: string; iconBg: string; textHover: string }
> = {
  "01": {
    aura: "from-sky-500/25 via-blue-500/10 to-transparent",
    borderHover: "hover:border-sky-400/60 hover:shadow-[0_24px_55px_rgba(0,0,0,0.7),0_0_35px_rgba(56,189,248,0.22)]",
    iconBg: "group-hover:bg-sky-500 group-hover:border-sky-400 group-hover:text-white",
    textHover: "group-hover:text-sky-300",
  },
  "02": {
    aura: "from-purple-500/25 via-indigo-500/10 to-transparent",
    borderHover: "hover:border-purple-400/60 hover:shadow-[0_24px_55px_rgba(0,0,0,0.7),0_0_35px_rgba(168,85,247,0.22)]",
    iconBg: "group-hover:bg-purple-600 group-hover:border-purple-400 group-hover:text-white",
    textHover: "group-hover:text-purple-300",
  },
  "03": {
    aura: "from-rose-500/25 via-pink-500/10 to-transparent",
    borderHover: "hover:border-rose-400/60 hover:shadow-[0_24px_55px_rgba(0,0,0,0.7),0_0_35px_rgba(244,63,94,0.22)]",
    iconBg: "group-hover:bg-rose-600 group-hover:border-rose-400 group-hover:text-white",
    textHover: "group-hover:text-rose-300",
  },
  "04": {
    aura: "from-emerald-500/25 via-teal-500/10 to-transparent",
    borderHover: "hover:border-emerald-400/60 hover:shadow-[0_24px_55px_rgba(0,0,0,0.7),0_0_35px_rgba(52,211,153,0.22)]",
    iconBg: "group-hover:bg-emerald-600 group-hover:border-emerald-400 group-hover:text-white",
    textHover: "group-hover:text-emerald-300",
  },
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  const theme = solutionThemes[service.number] || solutionThemes["01"];

  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0d1322]/70 p-5 sm:p-7 md:p-9 backdrop-blur-2xl transition-all duration-400 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:bg-[#12192e]/90 shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.12)] ${theme.borderHover}`}
    >
      {/* Top Colorful Aurora Beam */}
      <div
        className={`pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-56 w-4/5 rounded-full bg-gradient-to-b ${theme.aura} blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Shimmering top border beam */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        {/* Card Header: Number & Category Icon */}
        <div className="flex items-center justify-between pb-6 border-b border-white/8">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-stone-200 transition-all duration-300 shadow-xs ${theme.iconBg}`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-xs font-mono font-semibold tracking-wider text-stone-400">
              {service.number}
            </span>
          </div>
          <span className="text-[11px] font-medium uppercase tracking-wider text-stone-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
            Capabilities
          </span>
        </div>

        {/* Title & Description */}
        <div className="pt-6 pb-5">
          <h3
            className={`text-2xl font-semibold tracking-tight text-white mb-2.5 transition-colors duration-300 ${theme.textHover}`}
          >
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed text-stone-400">
            {service.description}
          </p>
        </div>

        {/* Capabilities Checklist */}
        <div className="pt-2 pb-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.capabilities.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-300"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Subtle Inquire Link */}
      <div className="pt-5 mt-4 border-t border-white/8 flex items-center justify-between relative z-10">
        <span className="text-xs text-stone-400">End-to-end execution</span>
        <a
          href="#contact"
          className="inline-flex items-center gap-1 text-xs font-semibold text-stone-300 group-hover:text-blue-400 transition-colors"
        >
          <span>Discuss scope</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

export function Solutions() {
  return (
    <section id="solutions-overview" className="pt-10 sm:pt-12 pb-8 sm:pb-10 bg-transparent scroll-mt-20">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <SectionHeading
            badge="Solutions"
            title="One partner across technology, AI, creative and growth."
            description="Instead of coordinating several disconnected freelancers, clients can work with one team capable of taking a digital initiative from idea to execution."
          />
        </div>

        {/* 2x2 Responsive Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {SOLUTIONS_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Soft CTA Underneath */}
        <div className="mt-8 pt-5 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm sm:text-base font-medium text-stone-300">
            Have something different in mind?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-blue-400 transition-colors group"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Container>
    </section>
  );
}
