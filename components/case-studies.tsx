"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CASE_STUDIES, type CaseStudy } from "@/data/case-studies";
import {
  ArrowUpRight,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Layers,
} from "lucide-react";

interface CaseStudyCardProps {
  project: CaseStudy;
  index: number;
}

function ProjectImageMockup({ project, index }: { project: CaseStudy; index: number }) {
  const [imageError, setImageError] = useState(false);

  // Subtle unique background tone per placeholder
  const gradientAccents = [
    "from-stone-900 to-slate-800",
    "from-stone-900 to-stone-800",
    "from-slate-900 to-zinc-800",
    "from-zinc-900 to-stone-900",
  ];

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-stone-200/80 bg-stone-100">
      {!imageError ? (
        <Image
          src={project.image}
          alt={`${project.projectName} preview`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          onError={() => setImageError(true)}
        />
      ) : null}

      {/* Polished Neutral Fallback Mockup Frame */}
      {imageError && (
        <div
          className={`absolute inset-0 flex flex-col justify-between bg-gradient-to-br ${
            gradientAccents[index % gradientAccents.length]
          } p-6 sm:p-7 text-white`}
        >
          {/* Mock Browser Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
              Deliverable Preview
            </span>
          </div>

          {/* Central Mockup Identity */}
          <div className="my-auto py-4">
            <span className="text-[11px] font-medium tracking-wider uppercase text-white/50">
              {project.clientOrIndustry}
            </span>
            <h4 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mt-1">
              {project.projectName}
            </h4>
          </div>

          {/* Bottom Metatag */}
          <div className="flex items-center justify-between pt-2 text-xs text-white/50 border-t border-white/10">
            <span className="flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-blue-400" />
              Production Architecture
            </span>
            <span className="font-mono text-[10px]">0{index + 1} / 04</span>
          </div>
        </div>
      )}
    </div>
  );
}

export function CaseStudyCard({ project, index }: CaseStudyCardProps) {
  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-white/8 bg-[#0f131d]/75 p-5 sm:p-7 lg:p-8 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/35 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(59,130,246,0.12)]">
      <div className="space-y-6">
        {/* Project Visual Mockup */}
        <ProjectImageMockup project={project} index={index} />

        {/* Header & Category */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider text-stone-400">
              {project.clientOrIndustry}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[11px] font-medium text-stone-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {project.projectName}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-400">
            {project.shortSummary}
          </p>
        </div>

        {/* Problem / Solution / Result Structured Breakdown */}
        <div className="space-y-3 pt-3 border-t border-white/8 text-xs sm:text-sm">
          {/* Problem */}
          <div className="flex items-start gap-2.5">
            <AlertCircle className="h-4 w-4 text-stone-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-stone-300">Problem: </span>
              <span className="text-stone-400 leading-relaxed">{project.problem}</span>
            </div>
          </div>

          {/* Solution */}
          <div className="flex items-start gap-2.5">
            <CheckCircle className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-stone-300">Solution: </span>
              <span className="text-stone-400 leading-relaxed">{project.solution}</span>
            </div>
          </div>

          {/* Result */}
          <div className="flex items-start gap-2.5 rounded-xl bg-white/5 p-3.5 border border-white/10">
            <TrendingUp className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
            <div>
              <span className="font-semibold text-white">Result: </span>
              <span className="text-stone-200 font-medium leading-relaxed">
                {project.result}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="pt-6 mt-6 border-t border-white/8 flex items-center justify-between">
        <span className="text-xs font-mono text-stone-500">Case 0{index + 1}</span>
        <Button
          href={project.caseStudyUrl || "#contact"}
          variant="ghost"
          size="sm"
          className="gap-1.5 text-stone-300 hover:text-blue-400 p-0 h-auto font-semibold hover:bg-transparent"
        >
          View Case Study
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
      </div>
    </div>
  );
}

export function CaseStudies() {
  return (
    <section id="work" className="pt-10 sm:pt-12 pb-10 sm:pb-12 bg-transparent scroll-mt-20">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <SectionHeading
            badge="Featured Work"
            title="Proven business outcomes across software, AI, and digital growth."
            description="Selected digital initiatives engineered to resolve critical operational bottlenecks and launch market-ready commercial platforms."
          />
        </div>

        {/* 4 Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-9">
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
            Explore Selected Work
            <ArrowUpRight className="h-4 w-4 opacity-75" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
