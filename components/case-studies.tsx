"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CASE_STUDIES, type CaseStudy } from "@/data/case-studies";
import {
  ArrowUpRight,
  Layers,
  ShoppingBag,
  BarChart3,
  BrainCircuit,
  Cloud,
  Bot,
  Video,
  Workflow,
  Sparkles,
  Smartphone,
  Cpu,
} from "lucide-react";

interface CaseStudyCardProps {
  project: CaseStudy;
  index: number;
}

const domainIcons: Record<string, React.ReactNode> = {
  "E-Commerce": <ShoppingBag className="h-3.5 w-3.5 text-amber-400" />,
  "AI Robotics": <Cpu className="h-3.5 w-3.5 text-cyan-400" />,
  "AI Automation": <Workflow className="h-3.5 w-3.5 text-teal-400" />,
  "LLM Dev": <BrainCircuit className="h-3.5 w-3.5 text-purple-400" />,
  "Micro SaaS": <Cloud className="h-3.5 w-3.5 text-cyan-400" />,
  "AI Agent": <Bot className="h-3.5 w-3.5 text-blue-400" />,
  "AI Video Ads": <Video className="h-3.5 w-3.5 text-rose-400" />,
  "Mobile App Dev": <Smartphone className="h-3.5 w-3.5 text-violet-400" />,
  "MCP Development": <Cpu className="h-3.5 w-3.5 text-emerald-400" />,
};

function ProjectImageMockup({ project, index }: { project: CaseStudy; index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-stone-950 shadow-inner group/img">
      {!imageError ? (
        <>
          <Image
            src={project.image}
            alt={`${project.projectName} preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            onError={() => setImageError(true)}
          />
          {/* Subtle cinematic gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d14] via-transparent to-black/30 opacity-70 transition-opacity duration-300 group-hover:opacity-40" />
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-blue-950/40 via-stone-900 to-stone-950 p-3.5 text-white">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-500/70" />
              <span className="h-2 w-2 rounded-full bg-amber-500/70" />
              <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
              Architecture Preview
            </span>
          </div>
          <div className="py-2">
            <h4 className="text-sm font-semibold text-white">{project.projectName}</h4>
          </div>
        </div>
      )}

      {/* Floating Badges */}
      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/15 px-2.5 py-0.5 text-[10px] font-medium text-stone-200 shadow-lg">
          {domainIcons[project.clientOrIndustry] || <Layers className="h-3 w-3 text-blue-400" />}
          {project.clientOrIndustry}
        </span>
        <span className="rounded-full bg-black/65 backdrop-blur-md border border-white/15 px-2 py-0.5 text-[9px] font-mono text-stone-300 shadow-lg">
          0{index + 1}
        </span>
      </div>
    </div>
  );
}

const domainColorConfig: Record<
  string,
  { aura: string; borderHover: string; textHover: string; iconBg: string; buttonColor: string }
> = {
  "E-Commerce": {
    aura: "from-amber-500/25 via-orange-500/15 to-transparent",
    borderHover: "hover:border-amber-400/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(251,191,36,0.22)]",
    textHover: "group-hover:text-amber-300",
    iconBg: "group-hover:bg-amber-500/20 group-hover:border-amber-400/50 group-hover:text-amber-300",
    buttonColor: "text-amber-400 group-hover:text-amber-300",
  },
  "AI Robotics": {
    aura: "from-cyan-500/25 via-teal-500/15 to-transparent",
    borderHover: "hover:border-cyan-400/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(6,182,212,0.22)]",
    textHover: "group-hover:text-cyan-300",
    iconBg: "group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 group-hover:text-cyan-300",
    buttonColor: "text-cyan-400 group-hover:text-cyan-300",
  },
  "AI Automation": {
    aura: "from-cyan-500/25 via-sky-500/15 to-transparent",
    borderHover: "hover:border-cyan-400/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(6,182,212,0.22)]",
    textHover: "group-hover:text-cyan-300",
    iconBg: "group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 group-hover:text-cyan-300",
    buttonColor: "text-cyan-400 group-hover:text-cyan-300",
  },
  "LLM Dev": {
    aura: "from-purple-500/25 via-violet-500/15 to-transparent",
    borderHover: "hover:border-purple-400/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(168,85,247,0.22)]",
    textHover: "group-hover:text-purple-300",
    iconBg: "group-hover:bg-purple-500/20 group-hover:border-purple-400/50 group-hover:text-purple-300",
    buttonColor: "text-purple-400 group-hover:text-purple-300",
  },
  "Micro SaaS": {
    aura: "from-sky-500/25 via-blue-500/15 to-transparent",
    borderHover: "hover:border-sky-400/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(56,189,248,0.22)]",
    textHover: "group-hover:text-sky-300",
    iconBg: "group-hover:bg-sky-500/20 group-hover:border-sky-400/50 group-hover:text-sky-300",
    buttonColor: "text-sky-400 group-hover:text-sky-300",
  },
  "AI Agent": {
    aura: "from-indigo-500/25 via-blue-600/15 to-transparent",
    borderHover: "hover:border-indigo-400/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(99,102,241,0.22)]",
    textHover: "group-hover:text-indigo-300",
    iconBg: "group-hover:bg-indigo-500/20 group-hover:border-indigo-400/50 group-hover:text-indigo-300",
    buttonColor: "text-indigo-400 group-hover:text-indigo-300",
  },
  "AI Video Ads": {
    aura: "from-pink-500/25 via-rose-500/15 to-transparent",
    borderHover: "hover:border-pink-400/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(244,63,94,0.22)]",
    textHover: "group-hover:text-pink-300",
    iconBg: "group-hover:bg-pink-500/20 group-hover:border-pink-400/50 group-hover:text-pink-300",
    buttonColor: "text-pink-400 group-hover:text-pink-300",
  },
  "Mobile App Dev": {
    aura: "from-violet-500/25 via-fuchsia-500/15 to-transparent",
    borderHover: "hover:border-violet-400/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(139,92,246,0.22)]",
    textHover: "group-hover:text-violet-300",
    iconBg: "group-hover:bg-violet-500/20 group-hover:border-violet-400/50 group-hover:text-violet-300",
    buttonColor: "text-violet-400 group-hover:text-violet-300",
  },
  "MCP Development": {
    aura: "from-teal-500/25 via-emerald-500/15 to-transparent",
    borderHover: "hover:border-teal-400/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(20,184,166,0.22)]",
    textHover: "group-hover:text-teal-300",
    iconBg: "group-hover:bg-teal-500/20 group-hover:border-teal-400/50 group-hover:text-teal-300",
    buttonColor: "text-teal-400 group-hover:text-teal-300",
  },
};

export function CaseStudyCard({ project, index }: CaseStudyCardProps) {
  const targetUrl = project.caseStudyUrl || `/case-studies/${project.id}`;
  const colorTheme = domainColorConfig[project.clientOrIndustry] || domainColorConfig["AI Automation"];

  return (
    <Link
      href={targetUrl}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0d1322]/70 p-3.5 sm:p-4 backdrop-blur-2xl transition-all duration-400 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:bg-[#12192e]/90 shadow-[0_12px_32px_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.12)] cursor-pointer ${colorTheme.borderHover}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Animated Top Glow Spotlight Aura */}
      <div
        className={`pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-44 w-4/5 rounded-full bg-gradient-to-b ${colorTheme.aura} blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Shimmering top border beam */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

      <div className="space-y-3 relative z-10">
        {/* Project Visual Image */}
        <ProjectImageMockup project={project} index={index} />

        {/* Info Content */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <h3
              className={`text-base sm:text-lg font-semibold tracking-tight text-white transition-colors duration-300 ${colorTheme.textHover} flex items-center gap-1.5`}
            >
              {project.projectName}
            </h3>
            <div
              className={`h-7 w-7 shrink-0 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-stone-400 transition-all duration-300 group-hover:scale-110 ${colorTheme.iconBg}`}
            >
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          <p className="text-xs leading-relaxed text-stone-400 line-clamp-2">
            {project.shortSummary}
          </p>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1 pt-0.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 text-[10px] font-medium text-stone-300 transition-all duration-200 group-hover:border-white/20 group-hover:bg-white/[0.08]"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="rounded-md bg-white/[0.02] border border-white/5 px-1.5 py-0.5 text-[9px] text-stone-500">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Footer Trigger */}
      <div className="mt-4 pt-3 border-t border-white/[0.07] flex items-center justify-between text-xs relative z-10">
        <span className="flex items-center gap-1 text-[11px] text-stone-400 group-hover:text-stone-300 transition-colors">
          <Sparkles className="h-3 w-3 text-sky-400" />
          Production Deliverable
        </span>
        <span
          className={`font-semibold text-xs flex items-center gap-1 transition-all duration-300 ${colorTheme.buttonColor}`}
        >
          View Study
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function CaseStudies() {
  return (
    <section id="work" className="pt-10 sm:pt-12 pb-10 sm:pb-12 bg-transparent scroll-mt-20">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <SectionHeading
            badge="Case Studies"
            title="Recent works engineered for high commercial impact."
            description="Verified production deliverables across AI robotics (ROS 2), e-commerce, AI automation, LLM development, micro SaaS, autonomous agents, and mobile applications."
          />
        </div>

        {/* Ultra Modern Case Studies Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CASE_STUDIES.map((project, index) => (
            <CaseStudyCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Section Level CTA */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between rounded-2xl border border-white/10 bg-[#0f131d]/85 backdrop-blur-md p-5 sm:p-7 lg:p-9 shadow-2xl gap-5 sm:gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-white">
              Have a similar business bottleneck or product roadmap?
            </h4>
            <p className="text-xs sm:text-sm text-stone-400">
              Let&apos;s review your objectives and explore what a practical solution looks like.
            </p>
          </div>
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            className="gap-2 shrink-0 shadow-xs w-full sm:w-auto justify-center"
          >
            Inquire About a Project
            <ArrowUpRight className="h-4 w-4 opacity-75" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
