"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WORKS } from "@/app/lib/work";

export default function WorkSection() {
  return (
    <section id="projects" className="bg-white">
      <div className="container-sm">
        {/* Section Heading */}
        <div className="mb-16 sm:mb-20 text-center">
          <p className="sectionlabel">
            Portfolio
          </p>
          <h2 className="heading-dark">
            Selected Work
          </h2>
          <p className="mt-5 text-black/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            A collection of product-focused projects where design systems,
            frontend architecture, and performance-driven thinking come together.
          </p>
        </div>

        {/* Grid - Bento-style layout */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 sm:gap-6 auto-rows-fr">
          {WORKS.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ work }: { work: (typeof WORKS)[0] }) {
  const isFeatured = work.featured;

  return (
    <Link
      href={`/mywork/${work.slug}`}
      className={`
        group relative flex flex-col overflow-hidden rounded-2xl
        border border-black/8 bg-white
        transition-all duration-400 ease-out
        hover:border-black/15 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)]
        hover:-translate-y-1
        ${isFeatured ? "lg:col-span-4 lg:row-span-2" : "lg:col-span-2"}
      `}
    >
      {/* Image container */}
      <div
        className={`relative bg-black/5 ${isFeatured ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[4/3]"}`}
      >
        <Image
          src={work.image}
          alt={work.title}
          fill
          sizes={
            isFeatured
              ? "(max-width: 1024px) 100vw, 66vw"
              : "(max-width: 1024px) 100vw, 33vw"
          }
          className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          aria-hidden
        />
        {/* View badge */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm text-black text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          View Case Study
          <ArrowUpRight size={16} strokeWidth={2} />
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex flex-col flex-1 ${isFeatured ? "p-6 sm:p-8" : "p-5 sm:p-6"}`}
      >
        <div className="flex flex-wrap gap-2 mb-3">
          {work.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium text-black/50 bg-black/5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          className={`font-semibold text-black tracking-tight group-hover:text-black/90 transition-colors ${
            isFeatured ? "text-xl sm:text-2xl mb-2" : "text-lg mb-1.5"
          }`}
        >
          {work.title}
        </h3>

        <p
          className={`text-black/60 leading-relaxed ${
            isFeatured ? "text-base sm:text-lg mb-4" : "text-sm mb-3"
          }`}
        >
          {work.description}
        </p>

        <div className="mt-auto pt-4 flex items-center gap-2 text-black font-medium text-sm group-hover:gap-3 transition-all">
          <span>View Project</span>
          <ArrowUpRight size={16} strokeWidth={2} />
        </div>
      </div>
    </Link>
  );
}
