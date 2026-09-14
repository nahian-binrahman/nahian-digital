import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CASE_STUDIES } from "@/data/case-studies";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowUpRight,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Layers,
  Sparkles,
  Calendar,
  Building2,
  Terminal,
} from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    id: study.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = CASE_STUDIES.find((item) => item.id === id);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${project.projectName} — Case Study | Nahian Digital`,
    description: project.shortSummary,
    openGraph: {
      title: `${project.projectName} — Production Case Study`,
      description: project.shortSummary,
      images: [project.image],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = CASE_STUDIES.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  const currentIndex = CASE_STUDIES.findIndex((item) => item.id === id);
  const nextProject = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];

  return (
    <main className="min-h-screen pt-28 pb-20 text-stone-200">
      <Container>
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-stone-300 backdrop-blur-md transition-colors hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to All Works
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 px-3 py-1 text-xs font-semibold text-blue-400">
              <Sparkles className="h-3.5 w-3.5" />
              {project.clientOrIndustry}
            </span>
            <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-mono text-stone-400">
              Production System 0{currentIndex + 1}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            {project.projectName}
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 leading-relaxed max-w-3xl">
            {project.shortSummary}
          </p>

          {project.liveUrl && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 via-amber-600 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-orange-500/25"
              >
                <span>Visit Live Store</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <span className="text-xs font-mono text-stone-400 bg-white/5 border border-white/10 px-3 py-2 rounded-xl">
                {project.liveUrl.replace("https://", "").replace(/\/$/, "")}
              </span>
            </div>
          )}
        </div>

        {/* High-Resolution Project Showcase Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-stone-950 shadow-2xl mb-16">
          <Image
            src={project.image}
            alt={project.projectName}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d14] via-transparent to-transparent opacity-60" />
        </div>

        {/* Additional Real Deliverables Preview for Meyer's */}
        {project.id === "meyers-elgin-sausage" && (
          <div className="mb-16 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Product Catalog & Online Ordering Experience
                </h3>
                <p className="text-sm text-stone-400 mt-1">
                  Custom categorized navigation for Smoked Meats, Sausages, Gift Sets, and Pantry items.
                </p>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
              >
                <span>Explore Catalog Live</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              <div className="md:col-span-8 relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-stone-950 shadow-2xl">
                <Image
                  src="/images/case-studies/meyers-catalog.png"
                  alt="Meyer's Elgin Sausage Product Grid"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="md:col-span-4 flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0f131d]/85 p-6 backdrop-blur-md">
                <div className="space-y-4">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-white p-4 flex items-center justify-center">
                    <Image
                      src="/images/case-studies/meyers-logo.png"
                      alt="Meyer's Elgin Sausage Official Logo"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Texas Tradition Since 1949</h4>
                    <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                      Preserving historic brand identity while deploying high-speed modern e-commerce architectures for nationwide direct-to-door delivery.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-xs font-semibold text-amber-300 transition-all hover:bg-amber-500/20"
                  >
                    <span>Order Online at meyerselginsausage.com</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Structured Breakdown: Challenge, Solution, Result */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Problem */}
          <div className="flex flex-col justify-between rounded-2xl border border-rose-500/20 bg-gradient-to-b from-rose-950/15 to-[#0f131d]/80 p-6 sm:p-8 backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2.5 text-rose-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                <AlertCircle className="h-4 w-4" />
                The Bottleneck & Challenge
              </div>
              <p className="text-stone-300 leading-relaxed text-sm sm:text-base">
                {project.problem}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-rose-500/15 text-xs text-rose-300/80 font-mono">
              Status: Identified & Resolved
            </div>
          </div>

          {/* Solution */}
          <div className="flex flex-col justify-between rounded-2xl border border-blue-500/20 bg-gradient-to-b from-blue-950/15 to-[#0f131d]/80 p-6 sm:p-8 backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2.5 text-blue-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4" />
                Engineering Architecture
              </div>
              <p className="text-stone-300 leading-relaxed text-sm sm:text-base">
                {project.solution}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-blue-500/15 text-xs text-blue-300/80 font-mono">
              Standard: Production Ready
            </div>
          </div>

          {/* Result */}
          <div className="flex flex-col justify-between rounded-2xl border border-emerald-500/25 bg-gradient-to-b from-emerald-950/20 to-[#0f131d]/90 p-6 sm:p-8 backdrop-blur-md shadow-[0_0_30px_rgba(16,185,129,0.06)]">
            <div>
              <div className="flex items-center gap-2.5 text-emerald-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                <TrendingUp className="h-4 w-4 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                Verified Commercial Impact
              </div>
              <p className="text-white font-medium leading-relaxed text-sm sm:text-base">
                {project.result}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-500/20 text-xs text-emerald-300 font-mono">
              Metric Impact: Verified
            </div>
          </div>
        </div>

        {/* Tech Stack & Architecture Specs */}
        <div className="rounded-2xl border border-white/10 bg-[#0f131d]/70 p-6 sm:p-8 backdrop-blur-md mb-16">
          <div className="flex items-center gap-2 mb-4 text-sm font-semibold uppercase tracking-wider text-stone-400">
            <Terminal className="h-4 w-4 text-blue-400" />
            Technologies & Frameworks Deployed
          </div>
          <div className="flex flex-wrap gap-2.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-stone-200 transition-colors hover:border-blue-400/40 hover:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Dual Action: Next Study & Consultation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Next Study Card */}
          <Link
            href={`/case-studies/${nextProject.id}`}
            className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0f131d]/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-blue-500/40 hover:-translate-y-1"
          >
            <div>
              <span className="text-xs font-mono uppercase text-stone-500">Next Case Study</span>
              <h4 className="text-xl sm:text-2xl font-bold text-white mt-1 group-hover:text-blue-300 transition-colors">
                {nextProject.projectName}
              </h4>
              <p className="text-sm text-stone-400 mt-2 line-clamp-2">
                {nextProject.shortSummary}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-blue-400 font-semibold text-sm mt-6">
              View Next Study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </Link>

          {/* Project Inquire CTA */}
          <div className="flex flex-col justify-between rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/40 via-[#0c1017] to-[#0f131d] p-6 sm:p-8 backdrop-blur-md">
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                Build a Similar High-Impact System
              </h4>
              <p className="text-sm text-stone-300 mt-2 leading-relaxed">
                Ready to engineer your custom web application, AI automation pipeline, or commercial software?
              </p>
            </div>
            <div className="mt-6">
              <Button
                href="/#contact"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto justify-center gap-2"
              >
                Schedule Architecture Consultation
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
