"use client";

import {
  Palette,
  Code2,
  LayoutGrid,
  Monitor,
} from "lucide-react";

export default function NewsletterSection() {
  return (
    <section>
      <div className="container-sm">

        {/* BLACK CARD */}
        <div className="relative group rounded-xl sm:rounded-4xl overflow-hidden px-6 sm:px-14 py-16 sm:py-20 text-center border bg-black border-white/10 transition-all duration-500 hover:border-white/30 hover:shadow-[0_32px_80px_-24px_rgba(0,0,0,0.85)]">

          {/* Subtle top glow */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/10 via-transparent to-transparent opacity-30" />

          {/* ICON CHIPS */}
          <div className="relative z-10 flex flex-wrap justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs sm:text-sm text-white/80">
              <Palette size={14} className="text-purple-300" />
              <span>UI/UX Design</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs sm:text-sm text-white/80">
              <LayoutGrid size={14} className="text-sky-300" />
              <span>Design Systems</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs sm:text-sm text-white/80">
              <Code2 size={14} className="text-emerald-300" />
              <span>Frontend Engineering</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs sm:text-sm text-white/80">
              <Monitor size={14} className="text-amber-300" />
              <span>Product Thinking</span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-5xl mx-auto">
            <h2 className="heading-light-sm text-white! sm:text-5xl!">
              A blend of design sensibility and technical precision to build
              meaningful digital experiences.
            </h2>

            <p className="mt-10! subheading-light-sm max-w-xl mx-auto">
              Share a bit about your product or idea, and I&apos;ll get back with
              ways we can turn it into a polished, scalable experience.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}