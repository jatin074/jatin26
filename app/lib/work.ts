export type WorkItem = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  featured?: boolean;
  tags: string[];
  behanceEmbed?: string;
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
  problemStatement?: string;
  competitors?: { name: string; description: string }[];
  goals?: string[];
  features?: { title: string; description: string }[];
  businessChallenges?: string[];
  persona?: {
    name: string;
    role: string;
    age?: string;
    location?: string;
    image: string;
    about?: string;
    goals: string[];
    pains: string[];
  };
  process?: { title: string; description: string }[];
  sketches?: string[];
  screens?: { title: string; description: string; image: string }[];
  /** What you owned end-to-end — helps employers scope your impact */
  responsibilities?: string[];
  /** Explicit user / business needs distilled from research */
  userNeeds?: string[];
  /** How you researched: competitive analysis, interviews, heuristics, etc. */
  researchMethods?: { title: string; description: string }[];
  /** Usability testing, UAT, QA checks, analytics — what you validated and how */
  testingMethods?: { title: string; description: string; findings?: string }[];
  /** Results: adoption, error reduction, cycle time, qualitative wins */
  outcomes?: string[];
  /** Honest reflection recruiters like */
  lessonsLearned?: string[];
};

export const WORKS: WorkItem[] = [
  {
    slug: "aplombsync",
    title: "AplombSync",
    subtitle: "Enterprise Employee Data Synchronization Platform",
    description:
      "Designed an enterprise platform that synchronizes employee data across multiple HR systems, enabling organizations to maintain consistent records, automate reconciliation, and eliminate manual data management.",

    image: "/images/projects/project3.png",

    behanceEmbed:
      "https://www.behance.net/embed/project/244675463?ilo0=1",

    featured: false,

    tags: [
      "UI/UX Design",
      "Enterprise Platform",
      "HR Data Synchronization",
      "System Integration",
    ],

    year: "2025",

    role: "UI/UX Designer",

    client: "Enterprise HR Systems",

    overview:
      "AplombSync is an enterprise-grade platform designed to synchronize employee data across multiple HR systems such as payroll platforms, HRIS tools, time tracking software, and internal management systems. The platform enables organizations to eliminate data silos, automate employee data updates, and maintain consistent records across all integrated systems.",

    challenge:
      "Enterprises often rely on multiple HR platforms, each maintaining its own employee database. Updating employee records across these systems manually creates inconsistencies, payroll errors, compliance risks, and operational inefficiencies. HR teams also spend significant time reconciling data differences between systems.",

    solution:
      "AplombSync introduces a centralized synchronization platform that connects multiple HR systems through intelligent data mapping, automated difference detection, and configurable synchronization workflows. The platform provides administrators with full visibility into discrepancies, automated conflict resolution, and secure synchronization across systems.",

    highlights: [
      "Automated employee data synchronization across multiple HR systems",
      "Field-level difference detection and conflict resolution",
      "Bidirectional synchronization between integrated platforms",
      "Comprehensive error logging and audit tracking",
      "Role-based access control for secure administration",
    ],

    tech: [
      "Figma",
      "UX Research",
      "Enterprise Dashboard Design",
      "System Integration UX",
      "Data Visualization",
    ],

    /* ------------------------ NEW SECTIONS ------------------------ */

    problemStatement:
      "Large organizations often rely on multiple HR systems such as payroll platforms, time tracking tools, and HRIS databases. Because these systems operate independently, employee data quickly becomes inconsistent across platforms. Manual reconciliation is time-consuming and prone to errors, leading to payroll issues, compliance risks, and operational inefficiencies.",

    competitors: [
      {
        name: "Workday",
        description:
          "Comprehensive enterprise HR platform but often expensive and difficult to customize for cross-system synchronization.",
      },
      {
        name: "BambooHR",
        description:
          "User-friendly HR management system but lacks advanced multi-system synchronization capabilities.",
      },
      {
        name: "Zapier Integrations",
        description:
          "Provides automation between tools but lacks the deep employee-level data synchronization required for enterprise HR operations.",
      },
    ],

    goals: [
      "Ensure consistent employee data across multiple HR systems",
      "Reduce manual data reconciliation by HR teams",
      "Provide full visibility into employee data differences",
      "Enable secure and configurable synchronization workflows",
      "Improve enterprise data governance and compliance tracking",
    ],

    features: [
      {
        title: "Employee Mapping System",
        description:
          "Automatically matches employee records across different systems using identifiers such as employee ID, email, and name.",
      },
      {
        title: "Unified Employee Synchronization",
        description:
          "Centralized interface displaying all employee changes, allowing administrators to review and apply updates efficiently.",
      },
      {
        title: "Bidirectional Synchronization",
        description:
          "Enables two-way data synchronization between systems with configurable conflict resolution rules.",
      },
      {
        title: "Advanced Difference Analysis",
        description:
          "Provides detailed comparison views showing field-level discrepancies between integrated systems.",
      },
    ],

    businessChallenges: [
      "Managing employee data across multiple independent HR systems",
      "Preventing payroll and compliance errors caused by inconsistent records",
      "Integrating systems with different APIs, schemas, and authentication mechanisms",
      "Maintaining audit trails and change tracking across multiple platforms",
    ],

    persona: {
      name: "David Martinez",
      role: "HR Systems Administrator",
      image: "/images/projects/pic.svg",

      goals: [
        "Maintain consistent employee records across all HR systems",
        "Reduce manual data reconciliation efforts",
        "Monitor system synchronization and data integrity",
      ],

      pains: [
        "Employee data mismatches between systems",
        "Manual reconciliation consuming large amounts of time",
        "Lack of visibility into where data discrepancies occur",
      ],
    },

    process: [
      {
        title: "Discover",
        description:
          "Conducted research with HR administrators and IT teams to understand how organizations manage employee data across multiple systems.",
      },
      {
        title: "Define",
        description:
          "Identified key pain points including data inconsistencies, reconciliation delays, and lack of centralized visibility into employee data changes.",
      },
      {
        title: "Ideate",
        description:
          "Explored interface concepts that could clearly display employee differences, synchronization status, and system mappings.",
      },
      {
        title: "Design",
        description:
          "Designed a structured enterprise dashboard with clear workflows for reviewing differences, managing sync operations, and monitoring system integrations.",
      },
    ],

    screens: [
      {
        title: "Synchronization Dashboard",
        description:
          "Overview interface displaying synchronization status, system integrations, and recent employee data changes.",
        image: "/images/screens/p1s1.png",
      },
      {
        title: "Employee Mapping Interface",
        description:
          "Interface for identifying and mapping employee records between different HR systems.",
        image: "/images/screens/p1s2.png",
      },
      {
        title: "Difference Analysis View",
        description:
          "Detailed comparison interface highlighting field-level differences between employee records across systems.",
        image: "/images/screens/p1s3.png",
      },
      {
        title: "Synchronization Management",
        description:
          "Administrative interface for initiating synchronization operations and resolving data conflicts.",
        image: "/images/screens/p1s4.png",
      },
    ],

    responsibilities: [
      "Led UX discovery with HR admins and integration owners; synthesized workflows into IA and dashboard journeys.",
      "Designed field-level difference views, sync status dashboards, audit affordances, and admin permission patterns.",
      "Partnered with engineering on realistic states: empty data, conflicts, retries, API failures, and partial sync.",
      "Documented UX specs and edge-case behavior for QA and UAT scenarios.",
    ],

    userNeeds: [
      "Single place to see which employee records mismatch across payroll, HRIS, and time systems.",
      "Confidence that syncing will not silently corrupt payroll-critical fields.",
      "Fast reconciliation with clear remediation steps instead of spreadsheets.",
      "Evidence for auditors: what changed, when, and who approved.",
    ],

    researchMethods: [
      {
        title: "Stakeholder interviews & journey mapping",
        description:
          "Walked HR ops and IT through weekly reconciliation rituals; mapped disconnects between tools and escalation paths.",
      },
      {
        title: "Competitive / analog analysis",
        description:
          "Compared enterprise HR suites and lighter iPaaS patterns to avoid copying complexity while matching admin mental models.",
      },
      {
        title: "Heuristic review of dense data UIs",
        description:
          "Audited readability of diff tables, filter patterns, bulk actions, and error surfacing against enterprise SaaS standards.",
      },
    ],

    testingMethods: [
      {
        title: "Task-based usability walkthroughs",
        description:
          "Admins completed “find mismatch → explain impact → resolve” tasks on mid-fidelity prototypes.",
        findings:
          "Users needed field-level grouping and a persistent “source of truth” indicator per attribute.",
      },
      {
        title: "Scenario testing with engineering",
        description:
          "Validated conflict resolution flows for bidirectional sync, locked fields, and rollback edge cases.",
        findings:
          "Surfacing “blocking vs warning” severities reduced false escalations in dry runs.",
      },
      {
        title: "UAT scripts with pilot HR teams",
        description:
          "Structured scripts around payroll month-end and new-hire spikes; logged time-to-triage and error rates.",
        findings:
          "Average triage time dropped when diff summary cards appeared above raw tables.",
      },
    ],

    outcomes: [
      "Turned an ambiguous “data sync” problem into a governed workflow: map → diff → review → apply → audit.",
      "Reduced cognitive load for admins by prioritizing severity, system source, and last-sync context in one view.",
      "Created a scalable pattern for adding new connectors without redesigning the core dashboard.",
    ],

    lessonsLearned: [
      "Enterprise trust is won through transparent error handling and recoverability, not only pretty dashboards.",
      "Diff UIs must encode business rules (e.g., payroll-locked fields) visibly or admins won’t adopt them.",
    ],
  },
  {
    slug: "web3-identity-platform",
    title: "Yomoken Landing Experience",
    subtitle: "Web3 Identity Platform – UI/UX & Frontend Development",

    description:
      "Designed and developed a Web3-focused landing experience that explains real-world KYC challenges and introduces Yomoken’s privacy-first identity verification solution using clear storytelling and interactive design.",

    image: "/images/projects/project2.png",

    behanceEmbed: "https://www.behance.net/embed/project/244676009?ilo0=1",

    featured: false,

    tags: ["UI/UX Design", "Web3", "Landing Page", "Next.js", "Tailwind"],

    year: "2024",

    role: "UI/UX Designer & Frontend Developer",

    client: "Web3 Startup",

    overview:
      "Yomoken is a decentralized identity platform designed to simplify digital verification while allowing users to maintain control over their personal credentials. The landing page was designed to communicate complex Web3 identity concepts through a clear storytelling structure that highlights the problems with traditional KYC systems and gradually introduces Yomoken’s blockchain-powered solution.",

    challenge:
      "Communicating Web3 identity and KYC challenges to a broad audience without overwhelming users with technical language. Many visitors are unfamiliar with decentralized identity concepts, so the experience needed to simplify the narrative while still building credibility and trust in the platform.",

    solution:
      "I designed a structured landing experience that introduces the problem first and progressively reveals the solution. The design combines clean trust-driven colors, modern Web3-inspired illustrations, and interactive elements that guide users through the story. The frontend was built using Next.js and Tailwind CSS to ensure performance, scalability, and responsive design across devices.",

    highlights: [
      "Problem-driven storytelling approach for explaining Web3 identity",
      "Interactive problem-to-solution hover interactions",
      "Modern Web3 visual identity with trust-focused UI design",
      "Performance-focused frontend architecture using Next.js",
      "Responsive layout optimized for both desktop and mobile users",
    ],

    tech: [
      "Figma",
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
    ],

    /* ------------------------ NEW SECTIONS ------------------------ */

    problemStatement:
      "Traditional KYC verification processes require users to repeatedly submit sensitive personal information across multiple platforms. This creates privacy concerns, inefficient onboarding experiences, and unnecessary duplication of identity verification efforts.",

    competitors: [
      {
        name: "Civic",
        description:
          "A blockchain identity platform focused on identity verification, but its onboarding experience can feel complex for non-technical users.",
      },
      {
        name: "Polygon ID",
        description:
          "Provides decentralized identity infrastructure but lacks simple user-facing explanations of the benefits.",
      },
      {
        name: "Worldcoin Identity",
        description:
          "Focuses on proof-of-personhood but raises concerns around biometric privacy and centralized verification mechanisms.",
      },
    ],

    goals: [
      "Clearly communicate the challenges of traditional KYC processes",
      "Introduce decentralized identity in a simple and approachable way",
      "Build trust through clean design and structured storytelling",
      "Encourage users to explore the platform’s privacy-first identity solution",
      "Create a visually engaging landing page optimized for Web3 audiences",
    ],

    features: [
      {
        title: "Problem-First Storytelling",
        description:
          "The landing experience begins by highlighting real-world identity verification frustrations before introducing the platform’s solution.",
      },
      {
        title: "Interactive Problem Chips",
        description:
          "Users can hover over key identity challenges to reveal how Yomoken solves them, creating an engaging learning experience.",
      },
      {
        title: "Trust-Focused Visual Design",
        description:
          "A clean white and blue color system was chosen to reinforce themes of security, transparency, and reliability.",
      },
      {
        title: "Performance-Optimized Frontend",
        description:
          "Built using Next.js and Tailwind CSS to ensure fast loading times and smooth interactions across devices.",
      },
    ],

    businessChallenges: [
      "Explaining complex Web3 identity concepts to non-technical audiences",
      "Building trust for a decentralized identity platform",
      "Balancing technical depth with simple user communication",
      "Designing a landing experience that converts visitors into platform users",
    ],

    persona: {
      name: "Alex Chen",
      role: "Crypto User & Early Web3 Adopter",
      image: "/images/projects/pic.svg",

      goals: [
        "Protect personal identity data online",
        "Avoid repeated KYC verification processes",
        "Use secure and decentralized digital services",
      ],

      pains: [
        "Re-entering identity details across multiple platforms",
        "Privacy concerns when sharing personal data online",
        "Lack of transparency in traditional identity verification systems",
      ],
    },

    process: [
      {
        title: "Discover",
        description:
          "Researched current KYC workflows and user frustrations related to identity verification in Web3 ecosystems.",
      },
      {
        title: "Define",
        description:
          "Identified key messaging opportunities to simplify decentralized identity concepts for a broader audience.",
      },
      {
        title: "Ideate",
        description:
          "Explored multiple storytelling layouts and interaction concepts to make complex identity topics engaging.",
      },
      {
        title: "Design",
        description:
          "Designed the final UI and implemented the landing page using Next.js with responsive layouts and interactive elements.",
      },
    ],

    screens: [
      {
        title: "Hero Section",
        description:
          "Landing hero highlighting the challenges of traditional identity verification processes.",
        image: "/images/screens/p2s1.png",
      },
      {
        title: "Problem & Solution Section",
        description:
          "Interactive chips revealing how Yomoken solves identity verification challenges.",
        image: "/images/screens/p2s2.png",
      },
      {
        title: "Platform Explanation",
        description:
          "Section explaining how the decentralized identity platform works.",
        image: "/images/screens/p2s3.png",
      },
      {
        title: "Footer & Call-to-Action",
        description:
          "Structured footer design guiding users to explore the product further.",
        image: "/images/screens/p2s4.png",
      },
    ],

    responsibilities: [
      "Owned UX narrative, visual design, interaction patterns, and production frontend implementation (Next.js + Tailwind).",
      "Ran lightweight research to validate comprehension of Web3/KYC messaging with crypto-curious audiences.",
      "Built responsive layouts, hover micro-interactions, and performance-conscious animation.",
      "Collaborated with stakeholders to balance marketing goals with honest, non-hand-wavy explanations.",
    ],

    userNeeds: [
      "Understand why current KYC feels broken — without jargon walls.",
      "Feel legitimacy and security cues before trusting a newer identity stack.",
      "Scan quickly on mobile; deepen on desktop.",
      "Clear next step toward product exploration or contact.",
    ],

    researchMethods: [
      {
        title: "Message testing with 1:1 sessions",
        description:
          "Quick sessions with prospective users to reveal which metaphors landed (privacy, control, reuse) versus which felt gimmicky.",
      },
      {
        title: "Competitive landing teardowns",
        description:
          "Compared Web3 identity and fintech onboarding pages for hierarchy, proof points, and CTA placement.",
      },
      {
        title: "Content layering review",
        description:
          "Structured the page as progressive disclosure: pain → mechanism → proof → CTA to avoid cognitive overload.",
      },
    ],

    testingMethods: [
      {
        title: "5-second comprehension checks",
        description:
          "First-view tests to ensure visitors could name the problem space and one product promise.",
        findings:
          "Problem-first hero outperformed feature-first; users needed the “why” before “how.”",
      },
      {
        title: "Prototype click tests on interactive chips",
        description:
          "Observed discoverability and delight without hiding critical copy on mobile.",
        findings:
          "Added persistent summary lines under chips for touch users who don’t hover.",
      },
      {
        title: "Performance & accessibility spot checks",
        description:
          "Lighthouse passes, contrast checks on blue/white system, reduced motion respect.",
        findings:
          "Kept animation subtle to protect LCP and respect vestibular sensitivity.",
      },
    ],

    outcomes: [
      "Established a repeatable storytelling pattern for complex Web3 products: education before technology flex.",
      "Shipped a fast, responsive landing that supports both trust (visual system) and clarity (copy structure).",
      "Created interaction patterns that scale to future product marketing pages.",
    ],

    lessonsLearned: [
      "Web3 UX wins when you translate protocol benefits into user outcomes (time saved, privacy, control).",
      "Interactive flourishes must never be the only place critical information lives.",
    ],
  },
  {
    slug: "camelab-creator-platform",
    title: "Camelab Creator Platform",
    subtitle: "Affiliate & Brand Collaboration Marketplace",

    description:
      "Designed a creator-economy platform that connects brands with content creators through affiliate sales, video collaboration workflows, and performance-driven partnerships.",

    image: "/images/projects/project4.png",

    behanceEmbed: "https://www.behance.net/embed/project/244747771?ilo0=1",

    featured: false,

    tags: [
      "UI/UX Design",
      "Creator Economy",
      "Marketplace",
      "Brand Platform",
    ],

    year: "2025",

    role: "Lead Product Designer",

    client: "Startup Platform",

    overview:
      "Camelab is a creator-focused marketplace that enables individuals to monetize their content through affiliate marketing and brand collaborations. The platform connects brands with creators who can promote products through short-form videos and social media content while earning commissions from affiliate sales.",

    challenge:
      "The biggest challenge was designing a platform that effectively communicates value to two distinct audiences — creators and brands. Creators need clarity around earning opportunities, while brands require trust in the collaboration workflow. The platform needed to clearly explain the ecosystem without overwhelming new users.",

    solution:
      "I designed a structured product experience that highlights creator earnings and brand collaboration workflows through a conversion-focused landing experience. The design combines storytelling, trust indicators, creator showcases, and collaboration steps to help both audiences quickly understand how the platform works.",

    highlights: [
      "Dual-audience UX for creators and brands",
      "Clear affiliate earning workflow explanation",
      "Structured brand-to-creator collaboration process",
      "Trust-building partnerships and platform integrations",
      "Conversion-focused landing experience",
    ],

    tech: [
      "Figma",
      "React Js",
      "Design System",
      "Landing Page UX",
      "Responsive Layout",
      "Component Library",
    ],

    /* ------------------------ NEW SECTIONS ------------------------ */

    problemStatement:
      "The creator economy has grown rapidly, but many creators struggle to monetize their content effectively. At the same time, brands face challenges in discovering reliable creators and managing collaborations. Existing platforms often focus only on influencers or affiliate programs, creating fragmented workflows for both sides.",

    competitors: [
      {
        name: "Upfluence",
        description:
          "Influencer marketing platform that connects brands with creators but lacks a strong affiliate monetization system.",
      },
      {
        name: "Shopify Collabs",
        description:
          "Provides affiliate partnerships for creators but offers limited collaboration workflow tools.",
      },
      {
        name: "Impact Affiliate",
        description:
          "Affiliate marketing platform focused on brands but less optimized for creator experience.",
      },
    ],

    goals: [
      "Create a platform that connects brands and creators seamlessly",
      "Enable creators to earn through affiliate sales and collaborations",
      "Provide brands with structured collaboration workflows",
      "Build trust through social proof and platform integrations",
      "Design a scalable product experience for the growing creator economy",
    ],

    features: [
      {
        title: "Creator Affiliate Earnings",
        description:
          "Creators can promote brand products through affiliate links and earn commissions from every successful sale.",
      },
      {
        title: "Brand Collaboration Workflow",
        description:
          "Brands can discover creators, propose collaborations, and manage video content campaigns directly within the platform.",
      },
      {
        title: "Creator Showcase System",
        description:
          "Top-performing creators are highlighted to inspire new users and demonstrate earning potential.",
      },
      {
        title: "Trust & Partnership Indicators",
        description:
          "Platform integrations with tools such as Meta, TikTok, Shopify, and Slack reinforce credibility and ecosystem support.",
      },
    ],

    businessChallenges: [
      "Balancing the needs of creators and brands in one platform",
      "Communicating complex collaboration workflows clearly",
      "Building trust in a new creator marketplace",
      "Encouraging both creators and brands to join the ecosystem",
    ],

    persona: {
      name: "Sarah Kim",
      role: "Content Creator",
      age: "27",
      location: "Los Angeles, USA",
      image: "/images/projects/pic.svg",

      about:
        "Sarah is a lifestyle and tech content creator who regularly posts short-form videos on TikTok and Instagram. She enjoys promoting products she genuinely likes and wants a reliable platform to collaborate with brands while earning through affiliate marketing.",

      goals: [
        "Monetize social media content consistently",
        "Collaborate with brands aligned with her audience",
        "Track performance and earnings from affiliate campaigns",
      ],

      pains: [
        "Difficulty discovering trustworthy brand partnerships",
        "Unclear payment terms across influencer platforms",
        "Limited transparency around affiliate performance data",
      ],
    },

    process: [
      {
        title: "Discover",
        description:
          "Researched how creators currently monetize content and how brands manage influencer collaborations.",
      },
      {
        title: "Define",
        description:
          "Identified key usability challenges related to creator discovery, collaboration workflows, and earning transparency.",
      },
      {
        title: "Ideate",
        description:
          "Explored product concepts that clearly communicate creator earnings and brand collaboration processes.",
      },
      {
        title: "Design",
        description:
          "Designed a conversion-focused landing experience with structured storytelling and clear product workflows.",
      },
    ],

    screens: [
      {
        title: "Landing Hero Section",
        description:
          "Hero section introducing the platform's value proposition for creators and brands.",
        image: "/images/screens/p3s1.webp",
      },
      {
        title: "Creator Earnings Flow",
        description:
          "Section explaining how creators earn through affiliate marketing and brand collaborations.",
        image: "/images/screens/p3s2.webp",
      },
      {
        title: "Creator Showcase",
        description:
          "Section highlighting successful creators and example content collaborations.",
        image: "/images/screens/p3s3.webp",
      },
    ],

    responsibilities: [
      "Led end-to-end UX for dual-audience acquisition: creators and brands.",
      "Defined IA, conversion narrative, and reusable section patterns for marketplace landing.",
      "Articulated earnings and collaboration flows in scannable steps with trust proof.",
      "Prepared handoff-ready specs for engineering and growth experiments.",
    ],

    userNeeds: [
      "Creators: understand how they earn, timelines, and legitimacy of brand deals.",
      "Brands: clarity on discovery, briefs, and ROI story before signing up.",
      "Both: credibility via integrations, testimonials, and recognizable social proof.",
    ],

    researchMethods: [
      {
        title: "Creator interviews (lightweight)",
        description:
          "Asked how they find brand deals today, what feels scammy, and what data they need before clicking “apply.”",
      },
      {
        title: "Competitive positioning matrix",
        description:
          "Mapped affiliate vs influencer tools to find whitespace: collaboration + affiliate in one story.",
      },
      {
        title: "Funnel critique sessions",
        description:
          "Reviewed scroll depth and CTA redundancy with marketing to avoid dead ends.",
      },
    ],

    testingMethods: [
      {
        title: "First-click tests on hero value prop",
        description:
          "Validated whether creator vs brand visitors self-identified with the headline and scrolled to relevant proof.",
        findings:
          "Split hero proof (earnings snippet + integration strip) lifted comprehension scores in informal tests.",
      },
      {
        title: "Hallway usability on mobile",
        description:
          "Users attempted “figure out how to earn” and “figure out how to hire creators” paths.",
        findings:
          "Step cards needed numeric labels (“1–2–3”) to imply order without walls of copy.",
      },
      {
        title: "Accessibility pass on badges and orange accents",
        description:
          "Checked contrast on primary CTAs and link states for WCAG-aligned iteration.",
      },
    ],

    outcomes: [
      "Clear dual-track narrative reduced ambiguity for creator vs brand visitors landing cold.",
      "Reusable modular sections support future localized campaigns.",
      "Trust layer (integrations + testimonials) made the marketplace feel credible pre-launch.",
    ],

    lessonsLearned: [
      "Two-sided markets need mirrored mental models — each side asks “what’s in it for me” within 10 seconds.",
      "Visual energy (orange accents) works when paired with strict typographic rhythm so it stays premium.",
    ],
  },
  {
    slug: "prabhim-learning-platform",
    title: "Prabhim Learning & Software Platform",
    subtitle: "Online Teaching & Technical Service Website",

    description:
      "Designed and developed a multi-service platform offering online technical courses, custom software solutions, and AutoCAD/CAM training programs.",

    image: "/images/projects/project6.png",

    behanceEmbed: "https://www.behance.net/embed/project/244992689?ilo0=1",

    featured: false,

    tags: [
      "UI/UX Design",
      "Education Platform",
      "Service Website",
      "Responsive Design"
    ],

    year: "2025",

    role: "UI/UX Designer & Frontend Developer",

    client: "Technical Education & Software Provider",

    overview:
      "Prabhim is a combined online learning and technical service platform designed to provide professional training in AutoCAD, CAM, and technical software while also offering custom software development services. The platform was built to clearly communicate both offerings through a structured website that enables course discovery, builds trust, and drives service inquiries.",

    challenge:
      "The biggest challenge was combining two distinct offerings — technical education and software development services — within a single platform. The website needed to present courses, service information, blogs, and contact opportunities without overwhelming users or creating confusion in the navigation structure.",

    solution:
      "I designed a structured website architecture that separates services and courses while maintaining a unified user experience. The homepage introduces the platform's core offerings and guides users toward course enrollment or service inquiries. Dedicated pages explain software services and training programs in detail, while blog sections support SEO and knowledge sharing.",

    highlights: [
      "Structured multi-service website architecture",
      "Course listing and detailed enrollment pages",
      "Service pages explaining custom software and CAD/CAM solutions",
      "SEO-focused blog section with detailed articles",
      "Mobile-responsive and performance-optimized layouts",
      "Conversion-focused CTAs for both training and service inquiries"
    ],

    tech: [
      "Figma",
      "Photoshop",
      "Freepik",
      "User Research",
      "Responsive UI"
    ],

    /* ------------------------ NEW SECTIONS ------------------------ */

    problemStatement:
      "Many technical training providers and software consultants struggle to present their services clearly online. Educational content, training programs, and technical services are often scattered across different pages without a clear structure, making it difficult for users to understand the value of the platform or discover relevant offerings.",

    competitors: [
      {
        name: "Udemy",
        description:
          "Offers a wide range of courses but lacks specialized industry training for CAD and technical software tools."
      },
      {
        name: "Coursera",
        description:
          "Provides professional courses but focuses mainly on academic programs rather than practical industry training."
      },
      {
        name: "Local Training Institutes",
        description:
          "Offer in-person CAD training but often lack modern digital platforms for online learning and service promotion."
      }
    ],

    goals: [
      "Clearly present both training programs and software services",
      "Make it easy for users to explore and enroll in courses",
      "Establish credibility through professional content and structured layouts",
      "Improve discoverability of technical services and expertise",
      "Create an SEO-friendly platform for long-term growth"
    ],

    features: [
      {
        title: "Course Discovery System",
        description:
          "Dedicated course listing pages allow users to easily explore available training programs and view detailed course content."
      },
      {
        title: "Service Showcase Pages",
        description:
          "Custom software development services are presented through structured service pages that explain capabilities and solutions."
      },
      {
        title: "Educational Blog Section",
        description:
          "Blog content supports SEO while providing valuable insights related to CAD training, software tools, and technical learning."
      },
      {
        title: "Conversion-Focused CTAs",
        description:
          "Strategically placed calls-to-action encourage users to enroll in courses or request software development services."
      }
    ],

    businessChallenges: [
      "Presenting both educational courses and software services in one platform",
      "Building trust for a technical training provider online",
      "Organizing large amounts of educational and service content",
      "Driving conversions for both course enrollments and service inquiries"
    ],

    persona: {
      name: "Rahul Patel",
      role: "Mechanical Engineering Student",
      image: "/images/projects/pic.svg",

      goals: [
        "Learn AutoCAD and CAM tools for career advancement",
        "Find practical training programs with real-world applications",
        "Access technical learning resources online"
      ],

      pains: [
        "Difficulty finding specialized CAD training programs",
        "Lack of practical learning content in many online courses",
        "Limited access to technical mentors or trainers"
      ]
    },

    process: [
      {
        title: "Discover",
        description:
          "Researched how students and professionals search for technical training and software services online."
      },
      {
        title: "Define",
        description:
          "Identified key usability challenges related to navigation, content organization, and service clarity."
      },
      {
        title: "Ideate",
        description:
          "Explored multiple information architecture layouts to separate services, courses, and educational content."
      },
      {
        title: "Design",
        description:
          "Designed a clean and structured website with clear navigation, course discovery sections, and service pages."
      }
    ],

    sketches: [
      "/images/projects/prabhim/sketch1.png",
      "/images/projects/prabhim/sketch2.png",
      "/images/projects/prabhim/sketch3.png"
    ],

    screens: [
      {
        title: "Homepage",
        description:
          "Homepage introducing the platform's core offerings including technical training and software services.",
        image: "/images/screens/p4s1.webp"
      },
      {
        title: "Course Listing Page",
        description:
          "Page displaying available technical courses with key details and enrollment options.",
        image: "/images/screens/p4s2.webp"
      },
      {
        title: "Service Detail Page",
        description:
          "Dedicated page explaining custom software solutions and technical consulting services.",
        image: "/images/screens/p4s3.webp"
      },
      {
        title: "Blog & Knowledge Section",
        description:
          "Educational blog section supporting SEO and sharing technical insights related to CAD and software tools.",
        image: "/images/screens/p4s4.webp"
      }
    ],

    responsibilities: [
      "Owned information architecture merging courses, software services, and content marketing.",
      "Designed course listing/detail templates and service pages with conversion-aware CTAs.",
      "Conducted structuring workshops with stakeholders to avoid mixed messaging.",
      "Built responsive layouts and prioritized performance for hybrid student + B2B visitors.",
    ],

    userNeeds: [
      "Students quickly find the right CAD/CAM program level and enrollment path.",
      "Prospects evaluating custom software understand scope, credibility, and how to enquire.",
      "SEO discoverability without sacrificing readable navigation.",
    ],

    researchMethods: [
      {
        title: "Search intent & IA card sort",
        description:
          "Grouped offerings by user jobs-to-be-done (learn vs hire) versus by internal org chart.",
      },
      {
        title: "Analog site audits (EdTech + dev shops)",
        description:
          "Borrowed trustworthy education patterns while keeping SME service clarity.",
      },
      {
        title: "Content inventory",
        description:
          "Mapped existing brochures and PDFs into scannable web modules and FAQs.",
      },
    ],

    testingMethods: [
      {
        title: "Tree testing (informal)",
        description:
          "Asked participants to locate “CAD course enrollment” vs “hire for custom tooling.”",
        findings:
          "Top nav split (“Courses” vs “Services”) outperformed a single mega-menu.",
      },
      {
        title: "Prototype task tests",
        description:
          "Timed flows to syllabus, syllabus to CTA, and service detail to contact form.",
        findings:
          "Sticky CTA on mobile course pages prevented drop-off on long syllabus scrolls.",
      },
      {
        title: "Cross-device QA",
        description:
          "Verified forms, breakpoints, image weight, and blog readability.",
      },
    ],

    outcomes: [
      "Resolved split-audience risk with explicit IA and mirrored templates for courses vs services.",
      "Improved credibility through structured syllabus content and repeatable CTA placements.",
      "SEO-friendly hub without burying transactional paths.",
    ],

    lessonsLearned: [
      "When one brand sells education and contracting, duplication of nav labels is preferable to ambiguity.",
      "Long syllabi need progressive disclosure modules, not accordion walls.",
    ],
  },
  {
    slug: "harishree-masala-brand-website",
    title: "Harishree Masala",
    subtitle: "Premium Indian Spice Brand Website",

    description:
      "Designed and developed a visually immersive brand website showcasing premium Indian spices through rich storytelling, interactive product presentation, and modern web experiences.",

    image: "/images/projects/project7.webp",

    behanceEmbed: "https://www.behance.net/embed/project/244989229?ilo0=1",

    featured: false,

    tags: [
      "UI/UX Design",
      "Brand Website",
      "Next.js",
      "3D Interaction"
    ],

    year: "2025",

    role: "UI/UX Designer & Frontend Developer",

    client: "Harishree Masala",

    overview:
      "Harishree Masala is a premium Indian spice brand that celebrates authentic flavors and traditional culinary heritage. The website was designed to visually communicate the richness and vibrancy of Indian spices while providing a modern, engaging digital experience that strengthens brand identity and product appeal.",

    challenge:
      "The key challenge was translating the sensory richness of spices — their colors, aromas, and textures — into a digital interface. The website needed to feel vibrant and energetic while still maintaining a clean structure that highlights products clearly and supports user exploration.",

    solution:
      "I designed a bold visual experience inspired by traditional spice markets and modern product storytelling. The interface combines vibrant spice-inspired color palettes, smooth motion interactions, and interactive product showcases. A 3D product rotation modal built with Next.js allows users to explore spice packaging in detail, creating a premium and tactile browsing experience.",

    highlights: [
      "Immersive hero section with animated spice visuals",
      "Interactive 3D product rotation modal experience",
      "Vibrant brand identity inspired by Indian spice culture",
      "Smooth micro-interactions and motion animations",
      "Clear product storytelling with structured sections",
      "Fully responsive and performance-optimized frontend",
    ],

    tech: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "3D Modal Interaction",
      "Figma",
    ],

    /* ------------------------ NEW SECTIONS ------------------------ */

    problemStatement:
      "Many traditional spice brands struggle to create engaging digital experiences that reflect the richness of their products. Most spice websites rely on simple product catalogs without storytelling or visual immersion, making it difficult to communicate brand authenticity and product quality online.",

    competitors: [
      {
        name: "Everest Masala",
        description:
          "Well-known spice brand with strong retail presence but limited immersive digital storytelling.",
      },
      {
        name: "MDH Spices",
        description:
          "Traditional spice brand with a recognizable identity but minimal modern web experience.",
      },
      {
        name: "Organic India",
        description:
          "Strong product storytelling but focuses more on health and organic products rather than culinary spice exploration.",
      },
    ],

    goals: [
      "Create a visually rich digital experience reflecting Indian spice culture",
      "Showcase spice products with strong storytelling and visual impact",
      "Build a modern brand identity for a traditional product category",
      "Encourage product discovery through interactive design elements",
      "Provide a responsive experience optimized for all devices",
    ],

    features: [
      {
        title: "Immersive Hero Experience",
        description:
          "The homepage hero introduces the brand with vibrant spice visuals and subtle motion animations that capture the essence of Indian flavors.",
      },
      {
        title: "Interactive 3D Product View",
        description:
          "Users can explore spice packaging through a 3D rotation modal, giving a tactile feel to the digital product experience.",
      },
      {
        title: "Product Storytelling Sections",
        description:
          "Dedicated sections highlight product categories and spice qualities through visual storytelling and structured layouts.",
      },
      {
        title: "Motion-Based Interactions",
        description:
          "Smooth hover effects and animated spice elements create a dynamic browsing experience.",
      },
    ],

    businessChallenges: [
      "Creating a premium digital identity for a traditional spice brand",
      "Balancing rich visual design with usability and performance",
      "Encouraging product exploration through interactive experiences",
      "Maintaining strong brand storytelling while keeping the UI clean",
    ],

    persona: {
      name: "Anjali Mehta",
      role: "Home Chef & Cooking Enthusiast",
      image: "/images/projects/pic.svg",

      goals: [
        "Discover authentic Indian spice products",
        "Explore high-quality ingredients for cooking",
        "Learn about spice flavors and product uses",
      ],

      pains: [
        "Difficulty identifying premium spice brands online",
        "Limited product information on many food brand websites",
        "Generic product catalog experiences without storytelling",
      ],
    },

    process: [
      {
        title: "Discover",
        description:
          "Studied how users explore food brands online and how spice brands present products digitally.",
      },
      {
        title: "Define",
        description:
          "Identified opportunities to introduce stronger storytelling and immersive product presentation.",
      },
      {
        title: "Ideate",
        description:
          "Explored visual directions inspired by spice colors, traditional markets, and modern brand design.",
      },
      {
        title: "Design",
        description:
          "Designed a modern brand website with interactive product elements and strong visual storytelling.",
      },
    ],

    screens: [
      {
        title: "Hero Experience",
        description:
          "Homepage hero introducing the brand with vibrant spice visuals and animated motion elements.",
        image: "/images/screens/p5s1.webp",
      },
      {
        title: "Product Showcase",
        description:
          "Structured product section highlighting spice categories and brand storytelling.",
        image: "/images/screens/p5s2.webp",
      },
      {
        title: "3D Product Interaction",
        description:
          "Interactive modal allowing users to rotate spice packaging and view details dynamically.",
        image: "/images/screens/p5s3.webp",
      },
      {
        title: "Brand Story Section",
        description:
          "Section explaining the heritage, authenticity, and quality of the Harishree Masala brand.",
        image: "/images/screens/p5s4.webp",
      },
    ],

    responsibilities: [
      "Led brand-led UX/UI, motion language, and frontend build (Next.js + Framer Motion patterns).",
      "Balanced sensory storytelling with product clarity so shopping paths never get lost in visuals.",
      "Prototyped interactive 3D product modal and refined performance budgets for heavy imagery.",
      "Defined component behavior for hover, focus, and reduced-motion fallbacks.",
    ],

    userNeeds: [
      "Feel cultural authenticity and premium quality before reading ingredients.",
      "Explore products without friction on mobile (thumb reach, legible type on warm backgrounds).",
      "Trust the brand through consistent story + product alignment.",
    ],

    researchMethods: [
      {
        title: "Brand & category mood board review",
        description:
          "Benchmarked premium food and D2C spice sites for hero patterns, motion intensity, and typography.",
      },
      {
        title: "Lightweight user interviews",
        description:
          "Asked shoppers how they judge spice quality online when they can’t smell or taste.",
      },
      {
        title: "Technical feasibility check",
        description:
          "Scoped 3D/modal interaction complexity vs LCP on real devices.",
      },
    ],

    testingMethods: [
      {
        title: "Visual preference & clarity tests",
        description:
          "Compared calmer vs maximal hero treatments; measured perceived “premium” vs “overwhelming.”",
        findings:
          "Guided motion paired with strong typographic anchors read as premium; unbounded motion felt noisy.",
      },
      {
        title: "Task flows: find a product → packaging detail",
        description:
          "Timed success on mobile for opening 3D modal and returning to catalog context.",
        findings:
          "Clear close affordance and backdrop lock improved confidence in the modal.",
      },
      {
        title: "Accessibility & contrast sweeps",
        description:
          "Checked text on warm gradients; ensured focus rings and keyboard paths for interactive cards.",
      },
    ],

    outcomes: [
      "Delivered a differentiated brand site that feels tactile (3D) yet structured for commerce storytelling.",
      "Established a motion system: spice accents move; UI chrome stays stable.",
      "Improved perceived quality through hierarchy, not clutter.",
    ],

    lessonsLearned: [
      "Bold palettes need strict grid discipline or the UX becomes ornamental.",
      "Immersive brand sites still need ruthless performance tradeoffs — ship delight where it converts.",
    ],
  },
  {
    slug: "yomoken-identity-dashboard",
    title: "Yomoken Identity Dashboard",
    subtitle: "Web3 Verification & Credential Management System",

    description:
      "Designed a mobile-first identity dashboard focused on clarity, guided verification flows, and a secure, trust-driven experience for managing digital credentials.",

    image: "/images/projects/project1.png",

    behanceEmbed: "https://www.behance.net/embed/project/244606471?ilo0=1",

    featured: false,

    tags: [
      "UI/UX Design",
      "Web3",
      "Dashboard",
      "Mobile-First",
      "User Research",
    ],

    year: "2025",

    role: "UI/UX Designer",

    client: "Web3 Identity Platform",

    overview:
      "Yomoken Dashboard is a credential verification and identity management interface designed for a Web3 identity ecosystem. The platform allows users to verify personal credentials, manage identity records, and securely interact with decentralized services. The dashboard focuses on clarity, trust, and a guided user experience that simplifies complex verification processes.",

    challenge:
      "Identity verification processes often involve multiple steps, document uploads, and compliance checks that can overwhelm users. For Web3 platforms, the challenge becomes even greater because many users are unfamiliar with decentralized identity systems. The interface needed to reduce confusion while maintaining transparency and trust.",

    solution:
      "I designed a mobile-first dashboard with clear step-by-step verification flows, progress indicators, and contextual guidance at every stage. Each verification step explains what is required, why it matters, and what happens next. The interface uses soft, trust-focused colors and structured layouts to ensure users remain confident throughout the verification journey.",

    highlights: [
      "User research-driven UX strategy",
      "Persona creation and user journey mapping",
      "Mobile-first verification dashboard design",
      "Guided step-by-step identity verification flows",
      "Clear progress indicators and feedback states",
      "Trust-focused UI with soft, accessible color system",
    ],

    tech: [
      "Figma",
      "React Js",
      "User Research",
      "Persona Development",
      "Responsive UI Design",
      "Design System",
    ],

    /* ------------------------ NEW SECTIONS ------------------------ */

    problemStatement:
      "Digital identity verification systems are often confusing and difficult for users to navigate. Many platforms require complex document submissions and unclear verification steps, leading to user frustration and abandonment. In Web3 environments, this challenge becomes more significant due to unfamiliar decentralized identity concepts.",

    competitors: [
      {
        name: "Civic",
        description:
          "Blockchain-based identity verification platform but often complex for new users unfamiliar with decentralized identity systems.",
      },
      {
        name: "Worldcoin Identity",
        description:
          "Provides identity verification through biometric methods but raises concerns about privacy and accessibility.",
      },
      {
        name: "Polygon ID",
        description:
          "Advanced decentralized identity infrastructure but lacks simple user-facing dashboards for credential management.",
      },
    ],

    goals: [
      "Simplify identity verification for Web3 users",
      "Guide users through each verification step clearly",
      "Build trust through transparent identity processes",
      "Create a mobile-first dashboard optimized for usability",
      "Enable users to manage credentials securely and easily",
    ],

    features: [
      {
        title: "Guided Verification Flow",
        description:
          "Step-by-step identity verification process with clear instructions and progress tracking.",
      },
      {
        title: "Credential Management Dashboard",
        description:
          "Centralized interface allowing users to view and manage their verified credentials.",
      },
      {
        title: "Contextual User Guidance",
        description:
          "Each verification stage includes clear instructions explaining required actions and outcomes.",
      },
      {
        title: "Trust-Focused Interface Design",
        description:
          "Soft color tones and structured layouts create a reassuring experience during identity verification.",
      },
    ],

    businessChallenges: [
      "Simplifying complex identity verification processes",
      "Building trust for a decentralized identity platform",
      "Designing an experience suitable for first-time Web3 users",
      "Maintaining security while ensuring usability",
    ],

    persona: {
      name: "Daniel Park",
      role: "Web3 Platform User",
      image: "/images/projects/pic.svg",

      goals: [
        "Verify identity quickly and securely",
        "Access decentralized services using verified credentials",
        "Manage personal identity data with full control",
      ],

      pains: [
        "Confusing identity verification processes",
        "Unclear instructions during document submission",
        "Concerns about privacy and data security",
      ],
    },

    process: [
      {
        title: "Discover",
        description:
          "Conducted research on identity verification workflows and analyzed existing Web3 identity platforms.",
      },
      {
        title: "Define",
        description:
          "Identified key friction points in multi-step verification processes and user trust barriers.",
      },
      {
        title: "Ideate",
        description:
          "Explored dashboard structures that simplify verification flows and credential management.",
      },
      {
        title: "Design",
        description:
          "Designed a mobile-first interface with clear verification steps, feedback states, and trust-driven visual design.",
      },
    ],

    screens: [
      {
        title: "Login & Registration",
        description:
          "Clean blue authentication interface designed to build trust. Includes login, registration, and animated trust indicators highlighting security, privacy, and fast verification.",
        image: "/images/screens/p6s1.webp",
      },
      {
        title: "Verification Dashboard",
        description:
          "Calm and minimal dashboard presenting verification status, progress overview, and key identity features. Designed to give users quick visibility into their verification progress.",
        image: "/images/screens/p6s2.webp",
      },
      {
        title: "Verification Process",
        description:
          "Simple step-by-step verification flow guiding users through identity submission, document upload, and validation with clear instructions and minimal friction.",
        image: "/images/screens/p6s3.webp",
      },
      {
        title: "Verification Result",
        description:
          "Outcome interface showing both successful and unsuccessful verification states with clear feedback, next steps, and helpful guidance for retrying if verification fails.",
        image: "/images/screens/p6s4.webp",
      },
      {
        title: "The Loader Experience",
        description:
          "An engaging loading experience designed to keep users informed and engaged while their verification is securely processed. The creative loader animation reassures users that the system is actively working and prevents drop-off during wait time.",
        image: "/images/screens/p6s5.png",
      },
    ],

    responsibilities: [
      "Conducted discovery around identity verification anxiety and Web3 literacy gaps.",
      "Defined mobile-first flows: auth, dashboard, stepper verification, outcomes, and wait states.",
      "Designed trust-forward UI patterns: progress, expectations, retries, privacy reassurance.",
      "Prepared detailed specs for engineering on states, empty data, and edge failures.",
    ],

    userNeeds: [
      "Know exactly what document or action is required at each step.",
      "Understand time expectations and what happens to personal data.",
      "Recover gracefully from failure without losing trust.",
      "Complete flows on mobile with minimal cognitive load.",
    ],

    researchMethods: [
      {
        title: "Journey mapping with failure paths",
        description:
          "Mapped happy path plus drop-off points: upload errors, OCR delays, manual review, rejected docs.",
      },
      {
        title: "Heuristic evaluation of verification products",
        description:
          "Compared banking KYC and Web3 wallets for clarity of status language and error copy.",
      },
      {
        title: "Microcopy workshop",
        description:
          "Aligned legal/compliance tone with plain-language explanations users actually read.",
      },
    ],

    testingMethods: [
      {
        title: "Moderated usability tests (mobile)",
        description:
          "Users completed verification tasks with think-aloud on mid/high fidelity prototypes.",
        findings:
          "Progress + “why we need this” microcopy at each step reduced abandonment vs a bare stepper.",
      },
      {
        title: "Cognitive walkthrough with engineering",
        description:
          "Step-by-step review of system states: pending, success, partial failure, full rejection.",
        findings:
          "Explicit next actions on failure outperformed generic “try again” messaging.",
      },
      {
        title: "Visual accessibility review",
        description:
          "Validated contrast for soft palette, focus order, and touch target sizes on small screens.",
      },
    ],

    outcomes: [
      "Turned a high-anxiety compliance flow into a guided experience with predictable feedback.",
      "Reduced ambiguity through consistent status vocabulary across dashboard, steps, and results.",
      "Created reusable patterns for loaders, retries, and secure waiting moments.",
    ],

    lessonsLearned: [
      "Trust in identity products is mostly about predictability — users forgive wait time if expectations are clear.",
      "Web3 UX must avoid jargon in the task layer even if the product is deeply technical underneath.",
    ],
  }
];

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return WORKS.find((w) => w.slug === slug);
}

export function getAllWorkSlugs(): string[] {
  return WORKS.map((w) => w.slug);
}