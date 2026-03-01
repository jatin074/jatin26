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
};

export const WORKS: WorkItem[] = [
  {
    slug: "bridgehr-dashboard",
    title: "BridgeHR Dashboard",
    subtitle: "HRMS & Payroll Management Platform",
    description: "Designed a user-centered HR admin dashboard focused on long-term usability, structured data management, and a visually comfortable interface for daily operational workflows.",
    image: "/images/projects/project3.png",
    behanceEmbed:
      "https://www.behance.net/embed/project/244675463?ilo0=1",
    featured: false,
    tags: ["UI/UX Design", "SaaS Dashboard", "HRMS", "Design System"],
    year: "2025",
    role: "UI/UX Designer",
    client: "HR & Payroll SaaS",
    overview: "BridgeHR is a comprehensive HRMS and payroll management dashboard built to simplify complex workforce operations. The goal was to create a clean, structured, and scalable interface that HR administrators could use daily without fatigue or friction.",
    challenge: "The platform required managing large employee datasets, payroll records, filters, permissions, and multi-step workflows while maintaining clarity and usability for non-technical HR teams.",
    solution: "I designed a reading-first interface with comfortable color tones, structured data tables, advanced filtering systems, and well-defined pagination. The layout prioritizes long-term interaction, reducing cognitive load while improving operational efficiency.",
    highlights: [
      "Comfortable, eye-relaxing color system for long usage",
      "Structured data tables with advanced filtering",
      "Clear pagination and dataset management",
      "Optimized admin workflows for HR teams",
      "Scalable design system for future features",
    ],
    tech: ["Figma", "Design System", "UX Research", "Data Tables", "Workflow Optimization"],
  },
  {
    slug: "web3-identity-platform",
    title: "Yomoken Landing Experience",
    subtitle: "Web3 Identity Platform – UI/UX & Frontend Development",
    description: "Designed and developed a Web3-focused landing page that clearly communicates real-world KYC challenges while presenting Yomoken’s privacy-first blockchain solution through an engaging, trust-driven experience.",
    image: "/images/projects/project2.png",
    behanceEmbed: "https://www.behance.net/embed/project/244676009?ilo0=1",
    featured: false,
    tags: ["UI/UX Design", "Web3", "Landing Page", "Next.js", "Tailwind"],
    year: "2024",
    role: "UI/UX Designer & Frontend Developer",
    client: "Web3 Startup",

    overview:
      "Yomoken is a privacy-first Web3 identity platform designed to simplify digital verification while maintaining user control over credentials. I led both the UI/UX design and frontend development of the landing page, creating a structured storytelling flow that educates users about existing KYC challenges and gradually introduces Yomoken’s blockchain-powered solution.",

    challenge:
      "The main challenge was translating complex Web3 and identity concepts into a simple, user-friendly narrative. KYC processes are often repetitive, intrusive, and poorly explained. The landing page needed to immediately communicate these pain points while building trust in a decentralized identity solution without overwhelming users with technical jargon.",

    solution:
      "I structured the landing page around a problem-first storytelling flow. The hero section directly highlights current KYC frustrations, and interactive problem chips reveal solutions on hover in a creative and engaging way. The design adopts a clean white and blue color palette to reinforce trust and security, while subtle Web3-inspired animations and slightly playful illustrations make the experience feel modern and approachable. Built using Next.js and Tailwind CSS, the page ensures performance, responsiveness, and smooth micro-interactions throughout.",

    highlights: [
      "Problem-first hero section focused on real KYC pain points",
      "Interactive hover-based problem-to-solution storytelling",
      "Web3-inspired animated UI with clean trust-driven color system",
      "Responsive and performance-optimized frontend architecture",
      "Strong brand presence with a structured, impactful footer design",
    ],

    tech: [
      "Figma",
      "React.js",
      "User Research",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    slug: "camelab-creator-platform",
    title: "Camelab Creator Platform",
    subtitle: "Affiliate & Brand Collaboration Marketplace",
    description: "Designed a modern creator-economy platform connecting brands with content creators through affiliate sales and video collaboration workflows.",
    image: "/images/projects/project4.png",
    behanceEmbed: "https://www.behance.net/embed/project/244747771?ilo0=1",
    featured: false,
    tags: ["UI/UX Design", "Creator Economy", "Marketplace", "Brand Platform"],
    year: "2025",
    role: "Lead Product Designer",
    client: "Startup Platform",

    overview:
      "Camelab is a creator-focused platform that empowers individuals to earn through affiliate sales while helping brands collaborate with content creators. The product combines affiliate marketing, video creation workflows, and brand partnerships into one seamless ecosystem.",

    challenge:
      "The primary challenge was designing a platform that speaks to two audiences — creators and brands — while maintaining clarity and conversion-driven structure. The landing experience needed to communicate earning potential, trust, and collaboration opportunities without overwhelming users.",

    solution:
      "I designed a conversion-first landing page with a strong value proposition in the hero section, supported by trust badges (Meta, TikTok, Shopify, Slack). The experience flows through core values, inspiring creator showcases, brand collaboration steps, and testimonials. A clean white layout combined with vibrant orange accents reinforces energy and growth, while structured sections maintain professionalism and clarity.",

    highlights: [
      "Dual audience UX (Brands & Creators)",
      "Affiliate-driven earning flow communication",
      "Structured brand-to-creator video workflow",
      "Trust-building social proof & testimonials",
      "Conversion-optimized CTAs throughout",
    ],

    tech: [
      "Figma",
      "Design System",
      "Landing Page UX",
      "Responsive Layout",
      "Component Library",
    ],
  },
  {
    slug: "prabhim-learning-platform",
    title: "Prabhim Learning & Software Platform",
    subtitle: "Online Teaching & Technical Service Website",
    description: "Designed and developed a multi-service platform offering online technical courses, custom software solutions, and AutoCAD/CAM training programs.",
    image: "/images/projects/project6.png",
    behanceEmbed: "https://www.behance.net/embed/project/244992689?ilo0=1",
    featured: false,
    tags: ["UI/UX Design", "Education Platform", "Service Website", "Responsive Design"],
    year: "2025",
    role: "UI/UX Designer & Frontend Developer",
    client: "Technical Education & Software Provider",

    overview:
      "Prabhim is a combined online learning and technical service platform offering professional training in AutoCAD, CAM, and software tools, alongside custom software development services. The goal was to create a structured, scalable website that clearly communicates services while enabling course discovery and sales.",

    challenge:
      "The platform needed to balance two different offerings educational courses and technical software services without confusing users. The challenge was organizing complex information (services, detailed course content, blogs, contact forms) into a clean and intuitive structure that supports both credibility and conversions.",

    solution:
      "I designed a structured homepage that introduces all core offerings in a clear hierarchy services, courses, and technical expertise. Dedicated service pages explain custom software and CAD/CAM solutions in detail, while course listing and course detail pages focus on clarity, enrollment CTAs, and trust-building content. Blog sections were added to strengthen SEO and thought leadership. The UI uses a professional, education-focused design system with strong typography, structured layouts, and mobile-first responsiveness.",

    highlights: [
      "Clear information architecture for multi-service platform",
      "Course listing & detailed enrollment pages",
      "Dedicated service & service-detail pages",
      "SEO-friendly blog structure with detail pages",
      "Mobile-responsive and performance-optimized design",
      "Conversion-focused CTAs for course sales and inquiries"
    ],

    tech: [
      "Figma",
      "Photoshop",
      "Freepik",
      "User Research",
      "Responsive UI",
    ],
  },
  {
    slug: "harishree-masala-brand-website",
    title: "Harishree Masala",
    subtitle: "Premium Indian Spice Brand Website",
    description: "Designed and developed a visually rich brand website showcasing premium Indian spices with immersive interactions and strong product storytelling.",
    image: "/images/projects/project7.webp",
    behanceEmbed: "https://www.behance.net/embed/project/244989229?ilo0=1",
    featured: false,
    tags: ["UI/UX Design", "Brand Website", "Next.js", "3D Interaction"],
    year: "2025",
    role: "UI/UX Designer & Frontend Developer",
    client: "Harishree Masala",

    overview:
      "Harishree Masala is a premium Indian spice brand focused on authenticity, purity, and bold flavor. I designed and developed a visually immersive website that reflects the richness of Indian spices while maintaining modern usability standards. The goal was to create an experience that feels vibrant, flavorful, and rooted in tradition — yet contemporary in execution.",

    challenge:
      "The main challenge was translating the sensory experience of Indian spices into a digital format. The website needed to feel rich, colorful, and energetic without becoming visually overwhelming. At the same time, product presentation had to remain clean and conversion-focused.",

    solution:
      "I crafted a bold visual identity using warm spice-inspired tones, strong typography, and high-contrast product highlights. The hero section features animated floating spice elements and subtle motion effects that enhance engagement. A 3D rotation modal built in Next.js allows users to interact with product packaging dynamically, giving a premium and tactile feel to the browsing experience. Structured product sections, strong brand storytelling, and refined animations ensure both aesthetics and usability are balanced throughout.",

    highlights: [
      "Immersive hero section with animated floating spice elements",
      "Interactive 3D product rotation modal (Next.js implementation)",
      "Strong Indian brand identity with bold color palette",
      "Smooth hover-based object motion animations",
      "Conversion-focused product showcase sections",
      "Fully responsive and performance-optimized frontend"
    ],

    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "3D Modal Interaction",
      "Figma"
    ],
  },
  {
    slug: "yomoken-identity-dashboard",
    title: "Yomoken Identity Dashboard",
    subtitle: "Web3 Verification & Credential Management System",
    description: "Designed a mobile-first identity dashboard focused on clarity, guided verification flows, and a smooth, trust-driven user experience.",

    image: "/images/projects/project1.png",
    behanceEmbed: "https://www.behance.net/embed/project/244606471?ilo0=1",
    featured: false,
    tags: ["UI/UX Design", "Web3", "Dashboard", "Mobile-First", "User Research"],
    year: "2025",
    role: "UI/UX Designer",
    client: "Web3 Identity Platform",

    overview:
      "Yomoken Dashboard is a verification and credential management system built for a Web3 identity platform. The goal was to design a clean, intuitive interface that simplifies complex identity verification processes while maintaining trust, security, and usability across devices.",

    challenge:
      "The primary challenge was structuring the multi-step verification process. Identity verification can easily overwhelm users with unclear instructions, document uploads, and compliance steps. The flow needed to feel guided, transparent, and reassuring especially for first-time Web3 users unfamiliar with decentralized identity systems.",

    solution:
      "I began with user research and persona definition to understand user expectations, trust barriers, and friction points. Based on these insights, I designed a mobile-first dashboard experience with clear step indicators, contextual instructions, progress tracking, and structured feedback states. Smooth, soft color tones were chosen to reduce cognitive load and support long-session usability. Each verification stage includes precise guidance and visual clarity, ensuring users understand what to do, why it matters, and what happens next.",

    highlights: [
      "User research-driven UX foundation",
      "Defined personas and mapped user journeys",
      "Mobile-first responsive dashboard design",
      "Clear multi-step verification flow with progress indicators",
      "Contextual instructions to reduce user confusion",
      "Soft, trust-driven color system for long-term usability"
    ],

    tech: [
      "Figma",
      "User Research",
      "Persona Development",
      "Responsive UI Design",
      "Design System"
    ],
  }
];

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return WORKS.find((w) => w.slug === slug);
}

export function getAllWorkSlugs(): string[] {
  return WORKS.map((w) => w.slug);
}