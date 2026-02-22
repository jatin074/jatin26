"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WorkSection() {
  return (
    <section id="projects" className="bg-white">
      <div className="container-sm">

        {/* Section Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold text-black">
            Selected Work
          </h2>
          <p className="mt-4 text-black/60 max-w-2xl mx-auto">
            A collection of product-focused projects where design systems,
            frontend architecture, and performance-driven thinking come together.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* FEATURED PROJECT */}
          <div className="group lg:col-span-2 border border-black/10 rounded-2xl overflow-hidden transition duration-500 hover:border-black hover:-translate-y-2">

            {/* Image */}
            <div className="relative h-72 bg-black">
              <Image
                src="/images/projects/project1.png"
                alt="Project"
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-black mb-3">
                SaaS Product Dashboard
              </h3>

              <p className="text-black/60 mb-6">
                Designed and developed a scalable admin dashboard with
                structured design systems, real-time analytics, and
                performance-first frontend architecture.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 text-xs border border-black/20 rounded-full">
                  React
                </span>
                <span className="px-3 py-1 text-xs border border-black/20 rounded-full">
                  Next.js
                </span>
                <span className="px-3 py-1 text-xs border border-black/20 rounded-full">
                  Design System
                </span>
                <span className="px-3 py-1 text-xs border border-black/20 rounded-full">
                  TypeScript
                </span>
              </div>

              <Link
                href="#"
                className="inline-flex items-center gap-2 text-black font-medium hover:gap-3 transition-all"
              >
                View Case Study
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="group border border-black/10 rounded-2xl overflow-hidden transition duration-500 hover:border-black hover:-translate-y-2">

            <div className="relative h-48 bg-black">
              <Image
                src="/images/projects/project2.png"
                alt="Project"
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h4 className="text-lg font-semibold text-black mb-2">
                Web3 Identity Platform
              </h4>

              <p className="text-black/60 text-sm mb-4">
                Built a privacy-first identity verification platform
                integrating blockchain and AI workflows.
              </p>

              <Link
                href="#"
                className="inline-flex items-center gap-2 text-black text-sm font-medium hover:gap-3 transition-all"
              >
                View Project
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="group border border-black/10 rounded-2xl overflow-hidden transition duration-500 hover:border-black hover:-translate-y-2">

            <div className="relative h-48 bg-black">
              <Image
                src="/images/projects/project4.png"
                alt="Project"
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h4 className="text-lg font-semibold text-black mb-2">
                AI Workflow Automation
              </h4>

              <p className="text-black/60 text-sm mb-4">
                Designed intelligent UI flows integrating AI copilots
                into enterprise-level dashboards.
              </p>

              <Link
                href="#"
                className="inline-flex items-center gap-2 text-black text-sm font-medium hover:gap-3 transition-all"
              >
                View Project
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}