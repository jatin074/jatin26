export type WorkItem = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  featured?: boolean;
  tags: string[];
  year: string;
  role: string;
  client?: string;
  // Detail page content
  overview: string;
  challenge: string;
  solution: string;
  highlights: string[];
  gallery?: string[];
  tech: string[];
};

export const WORKS: WorkItem[] = [
  {
    slug: "saas-product-dashboard",
    title: "SaaS Product Dashboard",
    subtitle: "Admin Dashboard & Analytics Platform",
    description: "Designed and developed a scalable admin dashboard with structured design systems, real-time analytics, and performance-first frontend architecture.",
    image: "/images/projects/project3.png",
    featured: true,
    tags: ["React", "Next.js", "Design System", "TypeScript"],
    year: "2024",
    role: "UI/UX Designer & Frontend Engineer",
    client: "B2B SaaS",
    overview: "A comprehensive admin dashboard built for managing complex business operations with real-time data visualization, user management, and intuitive workflows.",
    challenge: "The client needed a dashboard that could handle 50+ data types while remaining performant and easy to use for non-technical users.",
    solution: "We built a modular design system with reusable components, implemented virtualized tables for large datasets, and created an intuitive navigation structure with contextual help.",
    highlights: [
      "Design system with 100+ components",
      "Real-time analytics with sub-second updates",
      "Role-based access control",
      "Responsive across all devices",
      "95+ Lighthouse performance score",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Zustand"],
  },
  {
    slug: "web3-identity-platform",
    title: "Web3 Identity Platform",
    subtitle: "Privacy-First Verification",
    description: "Built a privacy-first identity verification platform integrating blockchain and AI workflows.",
    image: "/images/projects/project2.png",
    featured: false,
    tags: ["Web3", "Blockchain", "AI", "Next.js"],
    year: "2024",
    role: "UI/UX Designer & Developer",
    client: "Web3 Startup",
    overview: "A decentralized identity verification platform that gives users control over their credentials while enabling secure KYC/AML compliance for enterprises.",
    challenge: "Balancing user privacy with regulatory compliance in a decentralized context required novel UX patterns for credential management.",
    solution: "We designed a wallet-first flow with clear consent steps, progressive disclosure for complex concepts, and a verification status system that builds trust.",
    highlights: [
      "Wallet connection with multiple providers",
      "Self-sovereign identity flow",
      "Zero-knowledge credential verification",
      "Enterprise compliance dashboard",
    ],
    tech: ["Next.js", "Ethers.js", "Tailwind", "Web3.js", "PostgreSQL"],
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    subtitle: "Enterprise AI Copilot",
    description: "Designed intelligent UI flows integrating AI copilots into enterprise-level dashboards.",
    image: "/images/projects/project4.png",
    featured: false,
    tags: ["AI", "Automation", "Design Systems"],
    year: "2025",
    role: "Lead Product Designer",
    client: "Enterprise",
    overview: "An AI-powered workflow automation platform that helps teams automate repetitive tasks through natural language and smart suggestions.",
    challenge: "Users needed to trust AI suggestions while maintaining full control over critical business workflows.",
    solution: "We created a preview-before-execute pattern, clear confidence indicators, and an undo-friendly architecture that made AI feel like a helpful assistant rather than a black box.",
    highlights: [
      "Natural language workflow creation",
      "AI-powered task suggestions",
      "One-click automation templates",
      "Audit trail for compliance",
    ],
    tech: ["React", "OpenAI API", "Node.js", "PostgreSQL", "Figma"],
  },
];

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return WORKS.find((w) => w.slug === slug);
}

export function getAllWorkSlugs(): string[] {
  return WORKS.map((w) => w.slug);
}
