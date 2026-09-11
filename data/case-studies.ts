export interface CaseStudy {
  id: string;
  projectName: string;
  clientOrIndustry: string;
  shortSummary: string;
  problem: string;
  solution: string;
  result: string;
  image: string;
  tags: string[];
  caseStudyUrl?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "omniflow-saas",
    projectName: "OmniFlow Cloud",
    clientOrIndustry: "B2B SaaS / Productivity Platform",
    shortSummary:
      "Engineered an MVP workflow orchestrator turning complex manual operations into an intuitive multi-tenant SaaS application.",
    problem:
      "The founder faced an 8-month development backlog and ballooning agency quotes that threatened their launch window.",
    solution:
      "Architected a lean, modern full-stack web application with Next.js, automated user authentication, and high-performance pipeline views.",
    result:
      "Faster product launch to market, allowing the founders to onboard pilot enterprise customers within 6 weeks of kickoff.",
    image: "/images/case-studies/project-01.jpg",
    tags: ["SaaS MVP", "Next.js", "Full-Stack", "Cloud Architecture"],
    caseStudyUrl: "#contact",
  },
  {
    id: "apex-logistics",
    projectName: "Apex Logistics Pipeline",
    clientOrIndustry: "Supply Chain & Multi-Carrier Operations",
    shortSummary:
      "Built custom AI-assisted workflow automations to sync cross-border shipment data and eliminate manual spreadsheet entry.",
    problem:
      "Operations staff spent 20+ manual hours weekly copying manifest data between fragmented legacy portals and ERP databases.",
    solution:
      "Designed an automated data pipeline and background sync engine that parses multi-format incoming manifests automatically.",
    result:
      "Drastically reduced repetitive work and human input errors while accelerating freight booking confirmation speeds.",
    image: "/images/case-studies/project-02.jpg",
    tags: ["AI Automation", "Process Sync", "Internal Tools", "Data Pipeline"],
    caseStudyUrl: "#contact",
  },
  {
    id: "vanguard-advisory",
    projectName: "Vanguard Executive Advisory",
    clientOrIndustry: "Boutique Financial Consultancy & M&A",
    shortSummary:
      "Designed and deployed an authoritative digital presence and high-converting inbound consultation funnel.",
    problem:
      "An outdated web presence failed to communicate their executive caliber, resulting in low conversion rates from high-value prospects.",
    solution:
      "Created a bespoke, responsive website with editorial typography, frictionless booking flows, and clear strategic value propositions.",
    result:
      "Stronger digital credibility and improved qualified consultation inquiries from institutional decision-makers.",
    image: "/images/case-studies/project-03.jpg",
    tags: ["Conversion Website", "Brand Authority", "UI/UX", "Lead Funnel"],
    caseStudyUrl: "#contact",
  },
  {
    id: "kroma-creative-ai",
    projectName: "Kroma Creative Engine",
    clientOrIndustry: "Consumer E-Commerce & DTC Apparel",
    shortSummary:
      "Built a rapid creative asset generation pipeline producing cinematic product visuals and video variations for omnichannel ads.",
    problem:
      "High agency production fees and 3-week studio turnaround times restricted the brand's ability to test fresh creative across channels.",
    solution:
      "Implemented a customized generative AI workflow for high-definition lifestyle product media and cinematic short-form video hooks.",
    result:
      "Faster content production cycles, cutting creative iteration timelines from weeks to days with consistent brand aesthetics.",
    image: "/images/case-studies/project-04.jpg",
    tags: ["Creative AI", "Cinematic Video", "Campaign Assets", "Ad Creative"],
    caseStudyUrl: "#contact",
  },
];
