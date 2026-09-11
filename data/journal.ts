export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  slug: string;
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: "practical-ai-ops",
    title: "How Modern Businesses Are Actually Deploying AI for Operations",
    category: "AI & Automation",
    readTime: "4 min read",
    date: "Sep 2026",
    summary:
      "Why conversational wrappers fail and how internal autonomous agents deliver real operational leverage without breaking existing workflows.",
    slug: "#journal",
  },
  {
    id: "mvp-velocity",
    title: "The Death of Over-Engineered MVPs: Why Radical Simplicity Wins",
    category: "Software & SaaS",
    readTime: "5 min read",
    date: "Aug 2026",
    summary:
      "A blueprint for launching market-ready digital products in weeks instead of months by eliminating premature architectural complexity.",
    slug: "#journal",
  },
  {
    id: "hardware-software-lessons",
    title: "Lessons From Shenzhen & Shanghai: Speed, Supply Chains & Software",
    category: "Global Perspectives",
    readTime: "6 min read",
    date: "Jul 2026",
    summary:
      "What rapid hardware prototyping and China's hyper-dense tech ecosystems teach software engineers about commercial velocity.",
    slug: "#journal",
  },
];
