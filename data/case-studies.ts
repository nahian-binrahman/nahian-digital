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
    id: "aura-commerce",
    projectName: "Aura DTC Commerce",
    clientOrIndustry: "E-Commerce",
    shortSummary:
      "High-conversion headless storefront with custom cart drawer, instant checkout flow, and sub-second page performance.",
    problem:
      "Legacy monolithic store suffered 4.2s load times, mobile checkout abandonment over 68%, and rigid promotional limits.",
    solution:
      "Re-architected to a headless Next.js storefront powered by Shopify Storefront API, Tailwind CSS, and Edge-cached dynamic inventory.",
    result:
      "Increased mobile conversion rate by 42%, cut median load latency to 420ms, and scaled through flash sale spikes without downtime.",
    image: "/images/case-studies/ecommerce.jpg",
    tags: ["E-Commerce", "Next.js", "Shopify Storefront", "Headless Cart", "Edge Caching"],
    caseStudyUrl: "/case-studies/aura-commerce",
  },
  {
    id: "apex-ros2-robotics",
    projectName: "Apex Autonomous Mobile Robotics (ROS 2)",
    clientOrIndustry: "AI Robotics",
    shortSummary:
      "Production-grade ROS 2 autonomous navigation system with 3D LiDAR SLAM, Nav2 trajectory planning, and real-time obstacle avoidance.",
    problem:
      "Industrial facility relied on rigid magnetic-tape AGVs that frequently stalled at path obstructions, causing costly factory logistics bottlenecks.",
    solution:
      "Architected a custom ROS 2 Humble AMR software stack integrating Cartographer SLAM, Nav2 costmaps, kinematic differential drive control, and YOLO edge perception.",
    result:
      "Achieved sub-2cm positioning accuracy, 99.4% autonomous mission success across 10,000+ floor hours, and zero collisions in dynamic human environments.",
    image: "/images/case-studies/robotics-ros2.jpg",
    tags: ["AI Robotics", "ROS 2 Humble", "Nav2 / SLAM", "Autonomous AMR", "C++ / Python"],
    caseStudyUrl: "/case-studies/apex-ros2-robotics",
  },
  {
    id: "omnisync-automation",
    projectName: "Apex OmniSync Pipeline",
    clientOrIndustry: "AI Automation",
    shortSummary:
      "Cross-platform intelligent automation pipeline syncing ERP, CRM, and logistics manifests with AI discrepancy validation.",
    problem:
      "Operations teams spent 25+ manual hours weekly copying, reconciling, and fixing errors across legacy ERP systems and client portals.",
    solution:
      "Constructed an event-driven automation engine with webhook triggers, automated OCR document parsing, and exception escalation.",
    result:
      "Eliminated 95% of manual data entry errors and reclaimed 100+ team hours monthly with end-to-end automated synchronization.",
    image: "/images/case-studies/ai-automation.jpg",
    tags: ["AI Automation", "Workflow Engine", "OCR Parsing", "ERP Sync", "Python"],
    caseStudyUrl: "/case-studies/omnisync-automation",
  },
  {
    id: "lexicon-llm",
    projectName: "Enterprise DocuMind LLM",
    clientOrIndustry: "LLM Dev",
    shortSummary:
      "Production RAG pipeline and fine-tuned LLM system enabling instant semantic synthesis across 50,000+ proprietary internal documents.",
    problem:
      "Support engineers and technical consultants spent 14+ hours weekly hunting for compliance and technical specs across isolated silos.",
    solution:
      "Engineered a hybrid retrieval RAG engine using vector embeddings, reranking models, and guardrailed prompt orchestration.",
    result:
      "91% retrieval accuracy with zero hallucinated compliance claims, saving over 40 hours of cross-team research every month.",
    image: "/images/case-studies/llm-dev.jpg",
    tags: ["LLM Dev", "RAG Pipeline", "Vector DB", "Embeddings", "FastAPI"],
    caseStudyUrl: "/case-studies/lexicon-llm",
  },
  {
    id: "formsnap-saas",
    projectName: "FormSnap Micro SaaS",
    clientOrIndustry: "Micro SaaS",
    shortSummary:
      "Zero-backend form endpoint service offering automated spam filtration, webhook routing, and instant client lead notifications.",
    problem:
      "Indie founders and agencies struggled with bloated form backends requiring complex setups just for basic static landing page leads.",
    solution:
      "Shipped a focused micro SaaS with Stripe subscription billing, per-domain rate limiting, and instant Slack and email automations.",
    result:
      "Bootstrapped to $4.8K MRR within 90 days with 99.98% service uptime and over 250,000 processed form submissions.",
    image: "/images/case-studies/micro-saas.jpg",
    tags: ["Micro SaaS", "Stripe Billing", "Serverless", "API Engine", "Next.js"],
    caseStudyUrl: "/case-studies/formsnap-saas",
  },
  {
    id: "sentinel-agent",
    projectName: "Sentinel Autonomous Ops Agent",
    clientOrIndustry: "AI Agent",
    shortSummary:
      "Multi-agent autonomous system that ingests inbound customer requests, queries internal APIs, and resolves tickets end-to-end.",
    problem:
      "Tier-1 inbound support queues were overwhelmed with repetitive order lookups, invoice requests, and system credential resets.",
    solution:
      "Built a deterministic tool-calling agent framework equipped with safety boundaries, human-in-the-loop escalation, and audit logging.",
    result:
      "Automated 64% of repetitive support tickets without human intervention while driving customer first-response time down under 45 seconds.",
    image: "/images/case-studies/ai-agent.jpg",
    tags: ["AI Agent", "Tool-Calling", "Autonomous Workflows", "LangGraph", "Python"],
    caseStudyUrl: "/case-studies/sentinel-agent",
  },
  {
    id: "cinecraft-ads",
    projectName: "CineCraft AI Video Engine",
    clientOrIndustry: "AI Video Ads",
    shortSummary:
      "Generative multimodal video engine producing targeted 9:16 and 16:9 commercial hooks, dynamic voiceovers, and motion titles.",
    problem:
      "Production costs of $3,500+ per live video shoot made rapid creative testing on Meta and TikTok cost-prohibitive.",
    solution:
      "Developed an automated AI video composition pipeline integrating generative video models, neural voice clones, and dynamic auto-captions.",
    result:
      "Cut creative production turnaround from 14 days to 4 hours while reducing customer acquisition cost (CAC) by 34% in ad split tests.",
    image: "/images/case-studies/ai-video-ads.jpg",
    tags: ["AI Video Ads", "Generative Video", "Motion Graphics", "Dynamic Scripting", "TikTok/Meta"],
    caseStudyUrl: "/case-studies/cinecraft-ads",
  },
  {
    id: "zenith-mobile-app",
    projectName: "Zenith Cross-Platform Mobile OS",
    clientOrIndustry: "Mobile App Dev",
    shortSummary:
      "High-performance native mobile experience with offline-first biometric sync, interactive financial telemetry, and sub-60fps responsiveness.",
    problem:
      "Client web application faced low mobile retention, high bounce rates in cellular dead zones, and zero native biometric authentication.",
    solution:
      "Engineered an offline-first cross-platform application using React Native and Expo with SQLite local synchronization, push queues, and FaceID/TouchID security.",
    result:
      "Increased 30-day user retention by 58%, scaled to 150,000+ active installs, and achieved a 4.9-star average store rating across iOS and Android.",
    image: "/images/case-studies/mobile-app.jpg",
    tags: ["Mobile App Dev", "React Native", "Expo", "iOS / Android", "Offline Sync"],
    caseStudyUrl: "/case-studies/zenith-mobile-app",
  },
  {
    id: "omni-mcp-server",
    projectName: "OmniContext Enterprise MCP Gateway",
    clientOrIndustry: "MCP Development",
    shortSummary:
      "Secure Model Context Protocol server exposing internal databases, proprietary APIs, and safe tool executions to modern LLMs.",
    problem:
      "Internal engineering and support agents lacked a secure, audited protocol to allow autonomous LLMs to query production data without leaking credentials.",
    solution:
      "Implemented a standardized Model Context Protocol (MCP) server featuring JSON-RPC tool orchestration, role-based tool execution, and audited query limits.",
    result:
      "Integrated 12 corporate data services with sub-45ms tool call execution, eliminating credential leak risks while maintaining 100% audit compliance.",
    image: "/images/case-studies/mcp-server.jpg",
    tags: ["MCP Development", "Model Context Protocol", "TypeScript", "LLM Tooling", "Zero-Trust"],
    caseStudyUrl: "/case-studies/omni-mcp-server",
  },
];
