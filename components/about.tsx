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
    <section id="about" className="pt-10 sm:pt-12 pb-10 sm:pb-12 bg-transparent scroll-mt-20 border-b border-white/8">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Column: Editorial Portrait & Background Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[260px] sm:max-w-[290px] lg:max-w-[310px]">
              {/* Clean Editorial Photo Frame */}
              <div className="relative rounded-2xl border border-white/10 bg-[#0f131d]/85 backdrop-blur-md p-2.5 shadow-2xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-stone-900">
                  <Image
                    src={profilePhoto}
                    alt="Nahian Bin Rahman - Software Engineer & Founder"
                    fill
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className="object-cover object-[center_12%]"
                    priority
                  />
                </div>

                {/* Identity Tag Below Photo */}
                <div className="pt-2 pb-0.5 px-1 text-center sm:text-left">
                  <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    Nahian Bin Rahman
                  </h3>
                  <p className="text-[11px] font-medium text-stone-400">
                    Roboticist · Software Engineer · Founder of Nahian Digital
                  </p>
                </div>
              </div>

              {/* Compact Educational & Global Credentials */}
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.12] bg-[#0d1322]/65 backdrop-blur-xl px-3 py-2 text-xs text-stone-300 shadow-[0_4px_16px_rgba(0,0,0,0.35),inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <GraduationCap className="h-4 w-4 text-blue-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white text-xs">Intelligent Mechatronics & Robotics</span>
                    <span className="block text-stone-400 text-[10px]">Autonomous Systems & ROS 2 Specialization</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.12] bg-[#0d1322]/65 backdrop-blur-xl px-3 py-2 text-xs text-stone-300 shadow-[0_4px_16px_rgba(0,0,0,0.35),inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <Globe2 className="h-4 w-4 text-blue-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white text-xs">Global Engineering Rigor</span>
                    <span className="block text-stone-400 text-[10px]">Cross-border development & international clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Story & Practical Philosophy */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-stone-300 backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span>Background & Philosophy</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold tracking-tight text-white leading-tight">
              Engineering precision informed by international perspective and commercial focus.
            </h2>

            {/* Core Philosophy Callout Box */}
            <div className="rounded-2xl border border-white/10 bg-[#0f131d]/85 backdrop-blur-md p-3.5 sm:p-4.5 border-l-4 border-l-blue-500 shadow-xl">
              <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                &ldquo;Technology should solve problems, save time, create opportunities, and help businesses grow.&rdquo;
              </p>
              <span className="mt-1.5 block text-[10px] font-mono uppercase tracking-wider text-blue-400 font-semibold">
                Guiding Operating Principle
              </span>
            </div>

            {/* Concise Story Paragraphs */}
            <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed text-stone-400">
              <p>
                I am a roboticist, software engineer, and the founder of <strong className="text-white font-medium">Nahian Digital</strong>.
                My work bridges autonomous robotics (ROS 2), modern full-stack development, AI-driven automation, and digital acquisition funnels.
              </p>
              <p>
                Specializing in Intelligent Mechatronics & Robotics Engineering, I approach software engineering and digital systems with a roboticist&apos;s physical precision and an operator&apos;s commercial pragmatism.
              </p>
              <p>
                From architecting ROS 2 autonomous navigation pipelines to deploying production AI agents and scalable micro-SaaS platforms, I focus on resilient, real-world execution.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="gap-2 shadow-xs px-5 py-2.5 w-full sm:w-auto justify-center"
              >
                Let&apos;s Work Together
                <ArrowUpRight className="h-4 w-4 opacity-75" />
              </Button>
              <a
                href="#solutions"
                className="text-xs sm:text-sm font-semibold text-stone-300 hover:text-white transition-colors text-center sm:text-left py-1 sm:py-0"
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
