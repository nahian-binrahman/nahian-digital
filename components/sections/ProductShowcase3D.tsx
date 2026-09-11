"use client";

import React, { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, Activity } from "lucide-react";

// Client-mount subscriber
function subscribeMount() {
  return () => {};
}

// Reduced motion subscribers
function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Lazy load the 3D Canvas scene on client side only
const ProductShowcaseScene = dynamic(
  () => import("./ProductShowcaseScene"),
  {
    ssr: false,
    loading: () => <StaticDeviceFallback />,
  }
);

// High-fidelity Static Fallback for SSR & low-power devices
function StaticDeviceFallback() {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-6">
      {/* Laptop Frame */}
      <div className="rounded-2xl border border-stone-800 bg-[#121418] p-3 sm:p-4 shadow-2xl">
        <div className="rounded-xl border border-stone-800 bg-[#0c0e12] p-5 sm:p-6 text-stone-100">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-stone-400">OmniCore Cloud OS / Production v3.4</span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400">● AI Node Cluster Online</span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4 space-y-3">
              <div className="rounded-lg border border-stone-800 bg-stone-950/70 p-3.5">
                <span className="text-[10px] font-mono text-stone-500 uppercase">ARR Run-Rate</span>
                <p className="text-xl font-bold text-white mt-1">$1.84M</p>
              </div>
              <div className="rounded-lg border border-stone-800 bg-stone-950/70 p-3.5">
                <span className="text-[10px] font-mono text-stone-500 uppercase">Active Automations</span>
                <p className="text-xl font-bold text-white mt-1">42,890 / hr</p>
              </div>
            </div>
            <div className="md:col-span-8 rounded-lg border border-stone-800 bg-stone-950/70 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <span className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                  <Activity className="h-3.5 w-3.5 text-blue-400" />
                  Live Workflow Pipeline
                </span>
                <span className="text-[10px] font-mono text-stone-500">Latency: 18ms</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 my-4 text-xs">
                <div className="p-2.5 rounded border border-stone-700 bg-stone-900/90 text-center">
                  <p className="font-mono text-[10px] text-stone-400">01. INGEST</p>
                  <p className="font-semibold text-white mt-0.5">API Stream</p>
                </div>
                <div className="p-2.5 rounded border border-blue-500/50 bg-blue-950/40 text-center">
                  <p className="font-mono text-[10px] text-blue-300">02. REASON</p>
                  <p className="font-semibold text-white mt-0.5">Neural Model</p>
                </div>
                <div className="p-2.5 rounded border border-stone-700 bg-stone-900/90 text-center">
                  <p className="font-mono text-[10px] text-stone-400">03. DISPATCH</p>
                  <p className="font-semibold text-white mt-0.5">Action Triggers</p>
                </div>
              </div>
              <p className="text-[11px] font-mono text-emerald-400">✓ 4,218 records synchronized</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductShowcase3D() {
  const isMounted = useSyncExternalStore(
    subscribeMount,
    () => true,
    () => false
  );

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false
  );

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-transparent border-b border-white/8 overflow-hidden relative scroll-mt-20">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <SectionHeading
            badge="Digital Experiences"
            title="From ideas to powerful digital products."
            description="I design and build websites, SaaS platforms, AI solutions, and automated systems that help businesses move faster and grow."
          />

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-5 sm:pt-6 w-full sm:w-auto">
            <Button
              href="#work"
              variant="primary"
              size="md"
              className="gap-2 shadow-xs w-full sm:w-auto justify-center"
            >
              View Case Studies
              <ArrowUpRight className="h-4 w-4 opacity-75" />
            </Button>
            <Button
              href="#contact"
              variant="outline"
              size="md"
              className="w-full sm:w-auto justify-center"
            >
              Start a Project
            </Button>
          </div>
        </div>

        {/* 3D Showcase Canvas Area */}
        <div className="relative w-full rounded-3xl border border-white/10 bg-[#0f131d]/60 backdrop-blur-md p-2 sm:p-4 shadow-2xl">
          {/* Subtle Ambient Vignette */}
          <div className="absolute inset-0 pointer-events-none rounded-3xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

          {/* Scene Render */}
          {isMounted && !prefersReducedMotion ? (
            <ProductShowcaseScene />
          ) : (
            <StaticDeviceFallback />
          )}

          {/* Micro Caption */}
          <div className="text-center pb-3">
            <span className="text-[11px] font-mono text-stone-400 flex items-center justify-center gap-1.5">
              <Sparkles className="h-3 w-3 text-blue-400" />
              Interactive 3D Preview · Move cursor to inspect device & workflow graph
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProductShowcase3D;
