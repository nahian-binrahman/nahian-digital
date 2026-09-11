import React from "react";
import Image from "next/image";
import profilePhoto from "@/public/images/nahian-profile.jpg";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Building2,
  Globe2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-28 bg-transparent scroll-mt-20 border-b border-white/8">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Editorial Portrait & Background Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[300px] sm:max-w-[380px]">
              {/* Clean Editorial Photo Frame */}
              <div className="relative rounded-2xl border border-white/10 bg-[#0f131d]/85 backdrop-blur-md p-3 shadow-2xl">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-stone-900">
                  <Image
                    src={profilePhoto}
                    alt="Nahian Bin Rahman - Software Engineer & Founder"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover object-[center_15%]"
                  />
                </div>

                {/* Identity Tag Below Photo */}
                <div className="pt-3 pb-1 px-1">
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    Nahian Bin Rahman
                  </h3>
                  <p className="text-xs font-medium text-stone-400">
                    Software Engineer · Digital Builder · Founder of Nahian Digital
                  </p>
                </div>
              </div>

              {/* International & Educational Credentials Box */}
              <div className="mt-5 space-y-2.5">
                <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-[#0f131d]/75 backdrop-blur-md px-4 py-3 text-xs text-stone-300 shadow-sm">
                  <GraduationCap className="h-4 w-4 text-blue-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Intelligent Mechatronics Engineering</span>
                    <span className="block text-stone-400 text-[11px]">Beijing Institute of Technology</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-[#0f131d]/75 backdrop-blur-md px-4 py-3 text-xs text-stone-300 shadow-sm">
                  <Building2 className="h-4 w-4 text-blue-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Tech & Manufacturing Hubs</span>
                    <span className="block text-stone-400 text-[11px]">Professional experience in Shenzhen & Shanghai</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-[#0f131d]/75 backdrop-blur-md px-4 py-3 text-xs text-stone-300 shadow-sm">
                  <Globe2 className="h-4 w-4 text-blue-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Global Nomad Perspective</span>
                    <span className="block text-stone-400 text-[11px]">Lived & travelled across Central, South & East Asia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Story & Practical Philosophy */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-medium text-stone-300 backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span>Background & Philosophy</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-[1.15]">
              Engineering precision informed by international perspective and commercial focus.
            </h2>

            {/* Core Philosophy Callout Box */}
            <div className="rounded-2xl border border-white/10 bg-[#0f131d]/85 backdrop-blur-md p-5 sm:p-6 border-l-4 border-l-blue-500 shadow-xl">
              <p className="text-base sm:text-lg font-semibold text-white leading-snug">
                &ldquo;Technology should solve problems, save time, create opportunities, and help businesses grow.&rdquo;
              </p>
              <span className="mt-2 block text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                Guiding Operating Principle
              </span>
            </div>

            {/* Concise Story Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-stone-400">
              <p>
                I am a software engineer, digital builder, and the founder of <strong className="text-white font-medium">Nahian Digital</strong>.
                My work bridges modern full-stack development, AI-driven automation, creative media, and digital acquisition funnels.
              </p>
              <p>
                Having studied Intelligent Mechatronics Engineering at Beijing Institute of Technology and gained hands-on professional exposure in the tech ecosystems of Shenzhen and Shanghai, I approach digital systems with an engineer&apos;s discipline and an operator&apos;s pragmatism.
              </p>
              <p>
                Living and travelling as a digital nomad across Central, South, and East Asia has shaped how I collaborate: asynchronous, globally minded, unencumbered by bureaucracy, and laser-focused on practical business utility rather than writing code for code&apos;s sake.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                className="gap-2 shadow-xs w-full sm:w-auto justify-center"
              >
                Let&apos;s Work Together
                <ArrowUpRight className="h-4 w-4 opacity-75" />
              </Button>
              <a
                href="#solutions"
                className="text-sm font-semibold text-stone-300 hover:text-white transition-colors text-center sm:text-left py-2 sm:py-0"
              >
                View Solutions →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
