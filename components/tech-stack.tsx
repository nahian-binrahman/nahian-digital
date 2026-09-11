"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";
import {
  Layers,
  Code2,
  Cpu,
  Server,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

interface TechItem {
  name: string;
  badge: string;
  icon: React.ReactNode;
}

interface TechGroup {
  name: string;
  categoryBadge: string;
  icon: LucideIcon;
  items: TechItem[];
}

const TECH_GROUPS: TechGroup[] = [
  {
    name: "Product & Web",
    categoryBadge: "Frontend",
    icon: Layers,
    items: [
      {
        name: "Next.js",
        badge: "React Framework",
        icon: (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white shrink-0">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1.2 13.6-4.5-5.9v5.9H5.1V8.4h1.4l4.3 5.7V8.4h1.2v7.2Zm4.8 0h-1.2V8.4h1.2Z" />
          </svg>
        ),
      },
      {
        name: "React 19",
        badge: "UI Library",
        icon: (
          <svg viewBox="-11.5 -10.2 23 20.4" className="h-4 w-4 text-[#61DAFB] shrink-0">
            <circle cx="0" cy="0" r="2.05" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        ),
      },
      {
        name: "TypeScript",
        badge: "Typed Logic",
        icon: (
          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0">
            <rect width="24" height="24" rx="4" fill="#3178C6" />
            <path
              d="M11.5 8.5H6.5v2h1.6v6h2v-6h1.4v-2Zm3 4.2c.6.4 1.3.6 2 .6.7 0 1.1-.3 1.1-.7 0-.4-.4-.6-1.3-.9-1.4-.4-2.3-1-2.3-2.1 0-1.3 1-2.3 2.6-2.3.9 0 1.6.2 2.2.6l-.6 1.6c-.5-.3-1.1-.5-1.6-.5-.6 0-1 .3-1 .6 0 .4.4.6 1.4.9 1.4.5 2.2 1.1 2.2 2.2 0 1.4-1.1 2.3-2.7 2.3-1 0-1.9-.3-2.5-.7l.6-1.6Z"
              fill="#fff"
            />
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        badge: "Modern Styling",
        icon: (
          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#38BDF8">
            <path d="M12 6c-3.3 0-5.4 1.6-6.3 4.8 1.3-1.6 2.7-2.2 4.4-1.8 1 .3 1.8 1 2.6 1.8 1.4 1.4 3 3 6.3 3 3.3 0 5.4-1.6 6.3-4.8-1.3 1.6-2.7 2.2-4.4 1.8-1-.3-1.8-1-2.6-1.8C16.9 7.6 15.3 6 12 6ZM5 12c-3.3 0-5.4 1.6-6.3 4.8 1.3-1.6 2.7-2.2 4.4-1.8 1 .3 1.8 1 2.6 1.8 1.4 1.4 3 3 6.3 3 3.3 0 5.4-1.6 6.3-4.8-1.3 1.6-2.7 2.2-4.4 1.8-1-.3-1.8-1-2.6-1.8C9.9 13.6 8.3 12 5 12Z" />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Software & APIs",
    categoryBadge: "Backend",
    icon: Code2,
    items: [
      {
        name: "Python",
        badge: "Automation & Data",
        icon: (
          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0">
            <path
              d="M11.9 2c-3.1 0-4.9 1.4-4.9 3.5v2.6h5v.7H4.8C2.7 8.8 1 10.6 1 13.7c0 3.2 1.6 5 4.8 5h1.9v-2.7c0-2.2 1.8-3.9 3.9-3.9h5v-.7h-5V8.8h7.7c2.1 0 3.7-1.7 3.7-3.7 0-3.1-1.6-3.1-4.8-3.1h-4.3zm-1.8 1.8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"
              fill="#3776AB"
            />
            <path
              d="M12.1 22c3.1 0 4.9-1.4 4.9-3.5v-2.6h-5v-.7h7.2c2.1 0 3.8-1.8 3.8-4.9 0-3.2-1.6-5-4.8-5h-1.9v2.7c0 2.2-1.8 3.9-3.9 3.9h-5v.7h5v2.6H4.7c-2.1 0-3.7 1.7-3.7 3.7 0 3.1 1.6 3.1 4.8 3.1h4.3zm1.8-1.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
              fill="#FFD43B"
            />
          </svg>
        ),
      },
      {
        name: "Node.js",
        badge: "Scalable Runtimes",
        icon: (
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#5FA04E] fill-current shrink-0">
            <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z" />
          </svg>
        ),
      },
      {
        name: "REST & GraphQL",
        badge: "Fast Integrations",
        icon: (
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#E535AB] fill-current shrink-0">
            <circle cx="12" cy="12" r="3" />
            <circle cx="4" cy="12" r="2" />
            <circle cx="20" cy="12" r="2" />
            <path d="M6 12h3m6 0h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: "PostgreSQL",
        badge: "Relational DB",
        icon: (
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#4169E1] fill-current shrink-0">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5v-2h-2v2H9v-5h4v1.5h1.5V11H16v5.5h-3z" />
          </svg>
        ),
      },
    ],
  },
  {
    name: "AI & Automation",
    categoryBadge: "Intelligence",
    icon: Cpu,
    items: [
      {
        name: "OpenAI & LLMs",
        badge: "GPT-4o & Reasoning",
        icon: (
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#10A37F] fill-current shrink-0">
            <path d="M22.28 10.1a5.6 5.6 0 0 0-.47-4.48 5.75 5.75 0 0 0-4.8-2.88 5.68 5.68 0 0 0-3.32 1.08 5.7 5.7 0 0 0-7.85 2.7 5.73 5.73 0 0 0-3.4 3.25 5.68 5.68 0 0 0 .54 5.8 5.6 5.6 0 0 0 .47 4.49 5.75 5.75 0 0 0 4.8 2.87 5.65 5.65 0 0 0 3.32-1.07 5.7 5.7 0 0 0 7.85-2.7 5.73 5.73 0 0 0 3.4-3.25 5.68 5.68 0 0 0-.54-5.81z" />
          </svg>
        ),
      },
      {
        name: "Anthropic Claude",
        badge: "Complex Reasoning",
        icon: (
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#D97706] fill-current shrink-0">
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
          </svg>
        ),
      },
      {
        name: "Autonomous Agents",
        badge: "Custom Logic",
        icon: (
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#A855F7] fill-current shrink-0">
            <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4zm-3 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
          </svg>
        ),
      },
      {
        name: "Custom Workflows",
        badge: "n8n & Webhooks",
        icon: (
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#3B82F6] fill-current shrink-0">
            <circle cx="6" cy="6" r="3" />
            <circle cx="18" cy="6" r="3" />
            <circle cx="18" cy="18" r="3" />
            <path d="M9 6h6m3 3v6m-6-3h6" stroke="currentColor" strokeWidth="2" />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Cloud & Infrastructure",
    categoryBadge: "DevOps",
    icon: Server,
    items: [
      {
        name: "AWS Cloud",
        badge: "Compute & S3",
        icon: (
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#FF9900] fill-current shrink-0">
            <path d="M18.8 17.5c-2.4 1.8-5.7 2.7-8.7 2.7-4.2 0-7.9-1.5-10.8-4.1-.2-.2-.2-.5 0-.7.3-.3.6-.3.8-.1 2.6 2.3 6.1 3.7 9.9 3.7 2.8 0 5.8-.8 8-2.4.4-.3.9.1.8.6zm1.1-.9c-.3-.4-2-.2-3 .1-.3.1-.3-.2-.1-.4 1.4-.9 3.6-.6 4 .2.3.6-.4 2.8-1.7 3.9-.2.2-.4.1-.3-.1.5-.9 1.4-3.3 1.1-3.7z" />
          </svg>
        ),
      },
      {
        name: "Docker",
        badge: "Containers",
        icon: (
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#2496ED] fill-current shrink-0">
            <path d="M13.5 8h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2h-2zm9 3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2h-2zm14.8.7c-.5-.4-1.3-.5-2-.3-.3-.8-.9-1.5-1.7-1.9-.3-.2-.7-.3-1.1-.3v1.8c.8.2 1.3.8 1.4 1.5-.6.4-1.3.6-2 .6H2.1c-.2 1.1 0 2.2.6 3.1 1.2 1.8 3.5 3 6.3 3 5 0 9.2-2.9 10.3-7.2.7.2 1.4.1 2-.3.4-.3.7-.7.7-1.1-.3.3-.7.5-1.2.5z" />
          </svg>
        ),
      },
      {
        name: "Supabase",
        badge: "Auth & Realtime",
        icon: (
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#3ECF8E] fill-current shrink-0">
            <path d="M13.2 21.6c-.7 1-2.2.5-2.2-.8v-8.3H3.6c-1.3 0-1.9-1.6-.9-2.5L13.8 1.2c.7-1 2.2-.5 2.2.8v8.3h7.4c1.3 0 1.9 1.6.9 2.5L13.2 21.6z" />
          </svg>
        ),
      },
      {
        name: "Redis",
        badge: "In-Memory Cache",
        icon: (
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#DC382D] fill-current shrink-0">
            <path d="M2.5 7.5L12 3l9.5 4.5L12 12 2.5 7.5zm0 4.5L12 16.5l9.5-4.5V14L12 18.5 2.5 14v-2zm0 4.5L12 21l9.5-4.5v2L12 23l-9.5-4.5v-2z" />
          </svg>
        ),
      },
    ],
  },
];

export function TechStack() {
  return (
    <section className="pt-10 sm:pt-12 pb-10 sm:pb-12 bg-transparent border-b border-white/8 scroll-mt-20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[750px] rounded-full bg-blue-600/[0.04] blur-[100px]"
        aria-hidden="true"
      />

      <Container className="relative">
        {/* Section Heading */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <SectionHeading
            badge="Capabilities"
            title="Technology behind the solutions."
            description="Production-grade tools selected for durability, speed, and real business results."
          />
        </div>

        {/* 4 Interactive 3D Category Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 [perspective:1200px]">
          {TECH_GROUPS.map((group) => {
            const Icon = group.icon;
            return (
              <TiltCard
                key={group.name}
                maxTilt={5}
                spotlightColor="rgba(59, 130, 246, 0.16)"
                className="rounded-2xl border border-white/10 bg-[#0f131d]/85 p-3.5 sm:p-4 backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_16px_36px_rgba(0,0,0,0.7),0_0_20px_rgba(59,130,246,0.12)] flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/8">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-stone-200 shadow-xs">
                        <Icon className="h-3.5 w-3.5 text-blue-400" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-semibold tracking-tight text-white">
                        {group.name}
                      </h3>
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-blue-400/90 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded-full">
                      {group.categoryBadge}
                    </span>
                  </div>

                  {/* Tech Logo Pills */}
                  <div className="space-y-1.5 sm:space-y-2">
                    {group.items.map((tech) => (
                      <div
                        key={tech.name}
                        className="group/item flex items-center justify-between rounded-xl border border-white/6 bg-white/[0.03] px-2.5 py-1.5 sm:py-2 transition-all duration-200 hover:scale-[1.01] hover:bg-white/[0.07] hover:border-blue-500/30 hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)] cursor-default"
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-black/40 border border-white/10 p-0.5">
                            {tech.icon}
                          </div>
                          <span className="text-xs font-semibold text-stone-200 group-hover/item:text-white transition-colors">
                            {tech.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-medium text-stone-400 group-hover/item:text-blue-400 transition-colors">
                          {tech.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Premium Closing Statement */}
        <div className="mt-12 pt-6 border-t border-white/8 flex items-center justify-center text-center">
          <p className="text-xs sm:text-sm font-medium text-stone-400 inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-blue-400 shrink-0 animate-pulse" />
            <span>
              The stack changes. The objective stays the same — build systems that produce tangible business value.
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
}
