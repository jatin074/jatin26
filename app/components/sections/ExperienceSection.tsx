"use client";

import { GraduationCap, Briefcase, ArrowRight } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="bg-black sm:py-24 py-16 relative overflow-hidden">
      {/* Subtle grid background - matches hero flow */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-sm relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="sectionlabel text-white/50!">
            Career & Learning
          </p>
          <h2 className="heading-light">
            My Journey
          </h2>
          <p className="mt-5 text-white/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            From engineering foundations to product design and frontend systems
            building meaningful digital experiences with purpose and precision.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* EDUCATION COLUMN */}
          <div className="relative">
            <div className="absolute left-[22px] top-[50px] bottom-2 w-0.5 bg-white/20" />

            {/* Column header */}
            <div className="flex items-center gap-4 mb-10 relative">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <GraduationCap className="text-white/80" size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                Education
              </h3>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <ExperienceCard
                title="Apollo Institute of Engineering"
                subtitle="Bachelor's Degree in Engineering"
                period="2018 — 2022"
                isPresent={false}
                accent="education"
              />
              <ExperienceCard
                title="UI/UX Design Certification"
                subtitle="Certified UI/UX Designer"
                period="2022 — 2023"
                isPresent={false}
                accent="education"
              />
            </div>
          </div>

          {/* WORK EXPERIENCE COLUMN */}
          <div className="relative">
            <div className="absolute left-[22px] top-[50px] bottom-2 w-0.5 bg-white/20" />

            {/* Column header */}
            <div className="flex items-center gap-4 mb-10 group/header">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover/header:bg-white/10 group-hover/header:border-white/20">
                <Briefcase className="text-white/80" size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                Work Experience
              </h3>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <ExperienceCard
                title="CloseDigit LLP"
                subtitle="UI/UX Developer"
                period="2023 — 2025"
                isPresent={false}
                accent="work"
              />
              <ExperienceCard
                title="Aplombsoft Pvt Ltd"
                subtitle="UI/UX Designer & Frontend Developer"
                period="2025 — Present"
                isPresent={true}
                accent="work"
              />
            </div>
          </div>
        </div>

        {/* Journey CTA */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <p className="text-sm text-white/40 tracking-wide flex items-center gap-2">
            <span>Continuous growth</span>
            <ArrowRight size={14} className="text-white/30" strokeWidth={2} />
          </p>
        </div>
      </div>
    </section>
  );
}

/* Card Component with hover effects */
function ExperienceCard({
  title,
  subtitle,
  period,
  isPresent,
  accent,
}: {
  title: string;
  subtitle: string;
  period: string;
  isPresent: boolean;
  accent: "education" | "work";
}) {

  // Accent Glow Border
  const borderColor =
    accent === "education"
      ? "group-hover:border-blue-500/40"
      : "group-hover:border-violet-500/40";

  // Accent Left Line
  const accentLineColor =
    accent === "education"
      ? "group-hover:bg-blue-500"
      : "group-hover:bg-violet-500";

  // Gradient Background Overlay
  const gradientOverlay =
    title.includes("Apollo")
      ? "from-blue-600/20 to-transparent"
      : title.includes("Certification")
        ? "from-purple-600/20 to-transparent"
        : title.includes("CloseDigit")
          ? "from-violet-600/20 to-transparent"
          : "from-violet-600/20 via-orange-500/15 to-transparent";

  return (
    <div
      className={`
        group relative
        bg-[#0a0a0a] border border-white/[0.07]
        rounded-2xl p-6 sm:p-7 overflow-hidden
        transition-all duration-400 ease-out
        hover:-translate-y-1 hover:bg-[#111]
        ${borderColor}
      `}
    >
      {/* Gradient Hover Background */}
      <div
        className={`
          absolute inset-0 opacity-0  group-hover:opacity-100
          transition-opacity duration-500
          bg-gradient-to-r ${gradientOverlay}
          pointer-events-none
        `}
      />

      {/* Left Accent Line */}
      <div
        className={`
          absolute left-0 top-0 bottom-0 w-1 bg-white/10
          ${accentLineColor}
          transition-all duration-400 ease-out rounded-l-2xl
        `}
        aria-hidden
      />

      <div className="relative pl-4 sm:pl-5">
        {/* Period */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium tracking-wider uppercase text-white/50">
            {period}
          </span>

          {isPresent && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Current
            </span>
          )}
        </div>

        <h4 className="text-white font-semibold text-lg sm:text-xl tracking-tight">
          {title}
        </h4>

        <p className="mt-1.5 text-white/55 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
