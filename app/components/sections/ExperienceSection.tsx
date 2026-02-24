"use client";

import { GraduationCap, Briefcase } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="bg-black sm:py-24 py-16">
      <div className="container-sm">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white">
            My Journey
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            From engineering foundations to product design and frontend systems
            building meaningful digital experiences with purpose and precision.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* EDUCATION */}
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-2.5 top-0 bottom-0 w-[2px] bg-white/10" />

            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-white" size={22} />
              <h3 className="text-xl font-semibold text-white">
                Education
              </h3>
            </div>

            {/* Card 1 */}
            <div className="relative sm:pl-12 pl-8  mb-10 group">
              <div className="absolute left-0.75 top-2 w-4 h-4 rounded-full bg-white border-4 border-black group-hover:bg-white transition" />

              <div className="bg-[#111] border border-white/10 rounded-2xl p-6 transition duration-300 hover:border-white/30 hover:-translate-y-1">
                <h4 className="text-white font-medium text-lg">
                  Apollo Institute of Engineering
                </h4>
                <p className="text-white/60 mt-1">
                  Bachelor’s Degree in Engineering
                </p>
                <span className="text-white/40 text-sm mt-3 block">
                  2018 — 2022
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative sm:pl-12 pl-8 group">
              <div className="absolute left-0.75 top-2 w-4 h-4 rounded-full bg-white border-4 border-black group-hover:bg-white transition" />

              <div className="bg-[#111] border border-white/10 rounded-2xl p-6 transition duration-300 hover:border-white/30 hover:-translate-y-1">
                <h4 className="text-white font-medium text-lg">
                  UI/UX Design Certification
                </h4>
                <p className="text-white/60 mt-1">
                  Certified UI/UX Designer
                </p>
                <span className="text-white/40 text-sm mt-3 block">
                  2022 — 2023
                </span>
              </div>
            </div>
          </div>

          {/* WORK EXPERIENCE */}
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-2.5 top-0 bottom-0 w-[2px] bg-white/10" />

            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-white" size={22} />
              <h3 className="text-xl font-semibold text-white">
                Work Experience
              </h3>
            </div>

            {/* Card 1 */}
            <div className="relative sm:pl-12 pl-8 mb-10 group">
              <div className="absolute left-0.75 top-2 w-4 h-4 rounded-full bg-white border-4 border-black group-hover:bg-white transition" />

              <div className="bg-[#111] border border-white/10 rounded-2xl p-6 transition duration-300 hover:border-white/30 hover:-translate-y-1">
                <h4 className="text-white font-medium text-lg">
                  CloseDigit LLP
                </h4>
                <p className="text-white/60 mt-1">
                  UI/UX Devloper
                </p>
                <span className="text-white/40 text-sm mt-3 block">
                  2023 — 2025
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative sm:pl-12 pl-8 group">
              <div className="absolute left-0.75 top-2 w-4 h-4 rounded-full bg-white border-4 border-black group-hover:bg-white transition" />

              <div className="bg-[#111] border border-white/10 rounded-2xl p-6 transition duration-300 hover:border-white/30 hover:-translate-y-1">
                <h4 className="text-white font-medium text-lg">
                  Aplombsoft Pvt Ltd
                </h4>
                <p className="text-white/60 mt-1">
                  UI/UX Designer & Frontend Developer
                </p>
                <span className="text-white/40 text-sm mt-3 block">
                  2025 — Present
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}