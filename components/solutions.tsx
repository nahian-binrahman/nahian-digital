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

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-white/8 bg-[#0f131d]/75 p-5 sm:p-7 md:p-9 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/35 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(59,130,246,0.12)]">
      <div>
        {/* Card Header: Number & Category Icon */}
        <div className="flex items-center justify-between pb-6 border-b border-white/8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-stone-200 transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500/40 shadow-xs">
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
          <h3 className="text-2xl font-semibold tracking-tight text-white mb-2.5">
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
      <div className="pt-5 mt-4 border-t border-white/8 flex items-center justify-between">
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
