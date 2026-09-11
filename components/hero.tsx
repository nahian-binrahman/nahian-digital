import React from "react";
import Image from "next/image";
import profilePhoto from "@/public/images/nahian-profile.jpg";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-6 lg:pb-10 min-h-[calc(100vh-4.5rem)] flex items-center overflow-hidden"
    >
      {/* Subtle ambient lighting aura */}
      <div
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[380px] w-[650px] max-w-full rounded-full bg-gradient-to-tr from-blue-600/15 via-blue-900/10 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column: 55% balanced outcome messaging & CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-4.5">
            {/* Positioning Pill */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-stone-300 backdrop-blur-xs shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              <span>Nahian Bin Rahman · Founder of Nahian Digital</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-semibold tracking-tight text-white leading-[1.1]">
              Build. Automate. Grow.
            </h1>

            {/* Supporting Headline Copy */}
            <p className="text-base sm:text-lg font-normal text-stone-200 leading-snug max-w-xl">
              I build digital systems that help businesses attract customers,
              automate operations, launch faster and grow.
            </p>

            {/* Additional Detail Copy */}
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-lg">
              From high-converting websites and SaaS products to AI automation,
              creative campaigns and growth systems — I help turn business ideas
              and bottlenecks into practical digital solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-0.5 w-full sm:w-auto">
              <Button
                href="#contact"
                variant="primary"
                size="default"
                className="gap-2 shadow-xs px-5 py-2.5 w-full sm:w-auto justify-center"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4 opacity-75" />
              </Button>
              <Button
                href="#work"
                variant="outline"
                size="default"
                className="px-5 py-2.5 w-full sm:w-auto justify-center"
              >
                See My Work
              </Button>
            </div>

            {/* Subtle Tertiary Trust Cue */}
            <div className="pt-1">
              <p className="text-[11px] font-medium text-stone-400 tracking-wider uppercase">
                Focus Areas
              </p>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-stone-300">
                <span>Software</span>
                <span className="text-stone-700">·</span>
                <span>AI</span>
                <span className="text-stone-700">·</span>
                <span>Automation</span>
                <span className="text-stone-700">·</span>
                <span>Growth</span>
                <span className="text-stone-700">·</span>
                <span>Creative</span>
              </div>
            </div>
          </div>

          {/* Right Column: 45% responsive portrait container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[310px] sm:max-w-[340px] lg:max-w-[350px] xl:max-w-[370px]">
              {/* Asymmetric Underlay Plate */}
              <div
                className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-2.5 sm:translate-y-2.5 rounded-2xl border border-white/5 bg-white/[0.02] -rotate-1"
                aria-hidden="true"
              />

              {/* Minimal Decorative Geometric Accent */}
              <div
                className="absolute -top-2.5 -right-2.5 h-11 w-11 rounded-full border border-white/10 bg-[#0f131d]/90 backdrop-blur-md flex items-center justify-center text-[9px] font-semibold text-stone-300 uppercase tracking-widest pointer-events-none z-10 shadow-lg"
                aria-hidden="true"
              >
                Studio
              </div>

              {/* Main Framed Card */}
              <div className="relative rounded-2xl border border-white/10 bg-[#0f131d]/85 backdrop-blur-md p-2 sm:p-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-stone-900">
                  <Image
                    src={profilePhoto}
                    alt="Nahian Bin Rahman - Founder of Nahian Digital"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 370px"
                    className="object-cover object-[center_10%] transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>

                {/* Subtle Credential Tag Below Photo */}
                <div className="pt-2.5 pb-0.5 px-1 flex items-center justify-between text-xs">
                  <div className="flex flex-col">
                    <span className="font-semibold text-white tracking-tight text-xs">
                      Nahian Bin Rahman
                    </span>
                    <span className="text-[10px] text-stone-400">
                      Founder & Lead Technologist
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-stone-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                    Global Nomad
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
