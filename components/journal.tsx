import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { JOURNAL_ARTICLES } from "@/data/journal";
import { ArrowUpRight, Clock } from "lucide-react";

export function Journal() {
  return (
    <section id="journal" className="pt-10 sm:pt-12 pb-10 sm:pb-12 bg-transparent scroll-mt-20 border-b border-white/8">
      <Container>
        {/* Section Heading */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <SectionHeading
            badge="Insights"
            title="The Journal."
            description="Perspectives on building high-performance software, practical AI workflows, and digital business systems."
          />
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between rounded-2xl border border-white/8 bg-[#0f131d]/75 p-7 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/35 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(59,130,246,0.12)]"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4 text-xs">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-md">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-stone-400">
                    <Clock className="h-3 w-3 text-stone-500" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold tracking-tight text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-sm leading-relaxed text-stone-400">
                  {article.summary}
                </p>
              </div>

              {/* Bottom Read Action */}
              <div className="pt-6 mt-6 border-t border-white/8 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-mono">{article.date}</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 font-semibold text-stone-300 group-hover:text-blue-400 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
