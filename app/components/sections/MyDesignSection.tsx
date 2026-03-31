"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

type DesignLink = {
  title: string;
  slug: string;
  figmaUrl: string;
  previewImage: string;
  description: string;
  tags: string[];
  meta?: string;
};

const DESIGN_LINKS: DesignLink[] = [
  {
    title: "Cricbid Tournament Platform",
    slug: "cricbid-platform",
    figmaUrl: "https://www.figma.com/design/RQj3ViyJX3ATRmYS7I2Cpk/CricBid?node-id=16-1391&t=EESIqtlN98Nlmkwc-1",
    previewImage: "/images/screens/p7s1.webp",
    description:
      "An end-to-end tournament management platform where users can create tournaments, manage teams, conduct player auctions, and handle complete match workflows. Currently in progress, with focus on building scalable flows and intuitive auction experiences.",
    tags: ["Sports Tech", "Dashboard", "Auction System", "UX Strategy"],
    meta: "Role: Product Designer • Status: Work in Progress",
  },
  {
    title: "BridgeHR Dashboard",
    slug: "bridgehr-dashboard",
    figmaUrl: "https://www.figma.com/design/RB62hmtpFHU6mWNa9GCKBj/BridgeHR?t=0mXXaqD0HhtsE8cD-1",
    previewImage: "/images/screens/p1s1.png",
    description:
      "HR analytics dashboard designed for quick insights, employee tracking, and performance visualization. Focused on simplifying complex data into actionable views.",
    tags: ["Dashboard", "UX Strategy", "Data Visualization", "SaaS"],
    meta: "Role: UI/UX Designer • Type: Dashboard",
  },
  {
    title: "Vayno Mobile App",
    slug: "vayno-mobile-app",
    figmaUrl: "https://www.figma.com/design/UsfBXAPHxKjhwrOn65othZ/vayno?node-id=0-1&t=BgvZR5E4Koz8VPCb-1",
    previewImage: "/images/screens/p8s1.png",
    description:
      "Designing an intuitive, mobile-first experience focused on usability, seamless user flows, and visually refined interfaces tailored for real-world user needs.",
    tags: ["Mobile App", "UX Design", "UI Design", "User Flows"],
    meta: "Role: UI/UX Designer • Type: Mobile Application",
  },
  {
    title: "Yomoken Landing Experience",
    slug: "web3-identity-platform",
    figmaUrl: "https://www.figma.com/design/W08eQ1Nvr6NNok3UteJrlW/Yomoken?node-id=0-1&t=0mXXaqD0HhtsE8cD-1",
    previewImage: "/images/screens/p2s1.png",
    description:
      "High-conversion landing experience for a Web3 identity platform, crafted with strong visual hierarchy and clear storytelling.",
    tags: ["Landing Page", "Web3", "Conversion", "Branding"],
    meta: "Role: Product Designer • Type: Marketing",
  },
  {
    title: "Camelab Creator Platform",
    slug: "camelab-creator-platform",
    figmaUrl: "https://www.figma.com/design/go5Tro7l74GMba5iP2u6RC/Camelab?node-id=0-1&t=XwnamkZQILO3jOLY-1",
    previewImage: "/images/screens/p3s1.webp",
    description:
      "Creator platform enabling content management and monetization. Designed for scalability and seamless creator workflows.",
    tags: ["Platform", "Creator Economy", "UX", "Dashboard"],
    meta: "Role: UI/UX Designer , Frontend Developer • Type: Platform",
  },
  {
    title: "Prabhim Learning Platform",
    slug: "prabhim-learning-platform",
    figmaUrl: "https://www.figma.com/design/1V28ZjFOwCNEfWzzgW0mZD/prabhim?t=XwnamkZQILO3jOLY-1",
    previewImage: "/images/screens/p4s1.webp",
    description:
      "E-learning platform focused on structured learning paths, accessibility, and intuitive course navigation.",
    tags: ["EdTech", "UX Design", "Learning", "Mobile Friendly"],
    meta: "Role: UI/UX Designer • Type: Education",
  },
  {
    title: "Harishree Masala Website",
    slug: "harishree-masala-brand-website",
    figmaUrl: "https://www.figma.com/design/AT3O4qYyqFVTU21zrS7xlV/creative?node-id=0-1&t=dCa9XL67agXIPrYH-1",
    previewImage: "/images/screens/p5s1.webp",
    description:
      "Brand-focused website highlighting product authenticity and cultural identity through strong visuals and storytelling.",
    tags: ["Branding", "E-commerce", "Visual Design", "Website"],
    meta: "Role: UI/UX Designer • Type: Brand Website",
  },
  {
    title: "Yomoken Identity Dashboard",
    slug: "yomoken-identity-dashboard",
    figmaUrl: "https://www.figma.com/design/t4FG8udmo4VWfNI0bZBYnh/YOMOKEN-ALL?t=0mXXaqD0HhtsE8cD-1",
    previewImage: "/images/screens/p6s1.webp",
    description:
      "Identity management dashboard designed for clarity, control, and secure user interactions in a Web3 environment.",
    tags: ["Dashboard", "Web3", "Security UX", "System Design"],
    meta: "Role: Product Designer • Type: Dashboard",
  },
];

export default function MyDesignSection() {
  const enabledLinks = useMemo(
    () => DESIGN_LINKS.filter((d) => d.figmaUrl.trim().length > 0),
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const active = DESIGN_LINKS[Math.min(activeIndex, DESIGN_LINKS.length - 1)];

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-sm">
        {/* Header */}
        <div className="mb-10 sm:mb-20">
          <SectionHeading
            label="My Work"
            heading="Explore My Figma Work"
            subheading="A collection of product-focused design work from dashboards to full platform experiences. Each project reflects my approach to usability, scalability, and clean visual systems."
          />
        </div>
        {/* <div className="mb-10 sm:mb-16">
          <p className="sectionlabel">My Work</p>
          <h2 className="heading-dark">Explore My Figma Work</h2>
          <p className="mt-5 text-black/60 max-w-2xl text-base sm:text-lg leading-relaxed">
            A collection of product-focused design work from dashboards to
            full platform experiences. Each project reflects my approach to
            usability, scalability, and clean visual systems.
          </p>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-10 items-start">

          {/* Preview */}
          <div className="lg:col-span-3 lg:sticky lg:top-24 lg:order-1 order-2">
            <div className="group sm:rounded-2xl rounded-xl border border-black/10 bg-white overflow-hidden shadow-[0_18px_60px_-30px_rgba(0,0,0,0.18)] hover:shadow-[0_25px_80px_-25px_rgba(0,0,0,0.25)] transition-all duration-500">

              {/* Image */}
              <div className="relative bg-black/5 aspect-16/10 sm:aspect-video overflow-hidden">
                <Image
                  src={active.previewImage}
                  alt={`${active.title} preview`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-semibold text-black tracking-tight">
                      {active.title}
                    </h3>

                    {active.meta && (
                      <p className="mt-1 text-xs text-black/50">
                        {active.meta}
                      </p>
                    )}

                    <p className="mt-3 text-black/60 text-sm sm:text-base leading-relaxed">
                      {active.description}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="shrink-0">
                    {active.figmaUrl.trim().length > 0 ? (
                      <Link
                        href={active.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm font-medium hover:bg-black/90 transition hover:scale-[1.03]"
                      >
                        Open in Figma
                        <ExternalLink size={18} />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-xl bg-black text-white/80 px-4 py-2 text-sm font-medium cursor-not-allowed">
                        Figma (Coming Soon)
                        <ArrowUpRight size={18} />
                      </span>
                    )}
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-black/5 border border-black/10 text-black/70 text-xs font-medium hover:bg-black/10 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* List */}
          <div className="lg:col-span-2 lg:order-2 order-1">
            <div className="sm:rounded-2xl rounded-xl border border-black/10 bg-white p-4 sm:p-5">
              <p className="text-sm font-semibold text-black/70 mb-4">
                Selected Work
              </p>

              <div className="flex flex-col gap-3">
                {DESIGN_LINKS.map((d, idx) => {
                  const isActive = idx === activeIndex;

                  return (
                    <button
                      key={d.slug}
                      onClick={() => setActiveIndex(idx)}
                      className={`group text-left rounded-2xl border transition-all duration-300 overflow-hidden ${isActive
                        ? "bg-black text-white border-black shadow-lg"
                        : "border-black/10 hover:border-black/20 hover:bg-black/5"
                        }`}
                    >
                      <div className="p-4 sm:p-5 flex items-center gap-4">

                        {/* Thumbnail */}
                        <div className="relative w-14 h-10 sm:w-16 sm:h-11 rounded-lg overflow-hidden bg-black/5 shrink-0">
                          <Image
                            src={d.previewImage}
                            alt={`${d.title} thumbnail`}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Content */}
                        <div className="min-w-0 flex-1">
                          <p
                            className={`text-sm sm:text-base font-semibold truncate ${isActive ? "text-white" : "text-black/90"
                              }`}
                          >
                            {d.title}
                          </p>
                          <p
                            className={`mt-1 text-xs ${isActive ? "text-white/70" : "text-black/55"
                              }`}
                          >
                            View Design File
                          </p>
                        </div>

                        {/* Icon */}
                        <div className="shrink-0">
                          <span
                            className={`inline-flex items-center justify-center w-9 h-9 rounded-xl transition ${isActive
                              ? "bg-white text-black"
                              : "bg-black text-white/90 group-hover:scale-110"
                              }`}
                          >
                            <ExternalLink size={16} />
                          </span>
                        </div>

                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}