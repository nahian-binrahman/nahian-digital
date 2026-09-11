import React from "react";
import { Hero } from "@/components/hero";
import { ProblemsSolved } from "@/components/problems-solved";
import { Solutions } from "@/components/solutions";
import { CaseStudies } from "@/components/case-studies";
import { Agency } from "@/components/agency";
import { About } from "@/components/about";
import { TechStack } from "@/components/tech-stack";
import { Testimonials } from "@/components/testimonials";
import { Journal } from "@/components/journal";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Step 3: Business Problems I Solve */}
      <ProblemsSolved />

      {/* Step 4: Solutions & Services */}
      <Solutions />

      {/* Step 5: Four Featured Case Studies */}
      <CaseStudies />

      {/* Step 6: Nahian Digital Agency Section */}
      <Agency />

      {/* Step 8: About Nahian + Founder Story */}
      <About />

      {/* Step 9: Technology Behind the Solutions */}
      <TechStack />

      {/* Step 10: Testimonials + Trust & Credibility */}
      <Testimonials />

      {/* Blog & Thought Leadership */}
      <Journal />

      {/* Step 11: Final CTA + Project Inquiry System */}
      <Contact />
    </div>
  );
}
