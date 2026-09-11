export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  testimonial: string;
  photo?: string;
  companyLogo?: string;
  isPlaceholder?: boolean;
}

export interface TrustPillar {
  title: string;
  subtitle: string;
  iconName: string;
}

export const TRUST_PILLARS: TrustPillar[] = [
  {
    title: "Founder-Led Communication",
    subtitle: "Direct strategy and technical execution with Nahian",
    iconName: "UserCheck",
  },
  {
    title: "Remote-First Delivery",
    subtitle: "Agile, asynchronous workflows across time zones",
    iconName: "Globe2",
  },
  {
    title: "Cross-Disciplinary Execution",
    subtitle: "Software, AI, creative media, and growth combined",
    iconName: "Layers",
  },
  {
    title: "International Perspective",
    subtitle: "Global engineering rigor and commercial pragmatism",
    iconName: "Compass",
  },
];

// ============================================================================
// IMPORTANT: The items below are layout placeholders for design review.
// PLACEHOLDER — replace with verified client testimonial when approved.
// ============================================================================
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-01",
    clientName: "Alex Rivera",
    role: "Co-Founder & CEO",
    company: "OmniFlow Cloud",
    testimonial:
      "Nahian took our vague product roadmap and delivered a production-ready SaaS MVP in weeks. Having a single technical partner who understands both high-level business goals and clean code is rare.",
    isPlaceholder: true,
  },
  {
    id: "testimonial-02",
    clientName: "Sarah Jenkins",
    role: "VP of Operations",
    company: "Apex Freight Logistics",
    testimonial:
      "The custom AI workflows Nahian built removed over 20 hours of weekly manual data entry for our team. The implementation was fast, unbureaucratic, and worked seamlessly on day one.",
    isPlaceholder: true,
  },
  {
    id: "testimonial-03",
    clientName: "David Sterling",
    role: "Managing Partner",
    company: "Vanguard Executive Advisory",
    testimonial:
      "Our new digital presence finally reflects our executive caliber. Inquiries from institutional clients increased noticeably within the first month after launch.",
    isPlaceholder: true,
  },
];
