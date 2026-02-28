"use client";

import SectionHeading from "../ui/SectionHeading";
import {
  LayoutGrid,
  Code2,
  Palette,
  Bot,
  Layers,
  Gauge,
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="pt-10">
      <div className="container-sm space">

        {/* Section Heading */}
        <SectionHeading
          label="My Expertise"
          heading="What I Do Best"
          subheading="From concept to execution, I craft scalable digital experiences that combine design thinking and frontend engineering."
        />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 sm:auto-rows-[250px] gap-4">

          {/* 1️⃣ UX STRATEGY & RESEARCH */}
          <div className="group lg:col-span-2 lg:row-span-2 relative bg-white sm:rounded-[20px] rounded-2xl p-6 sm:p-8 overflow-hidden border border-black/50 transition-all duration-500">

            <div className="mb-6 w-10 h-10 rounded-lg bg-black flex items-center justify-center border border-black transition-all duration-500">
              <LayoutGrid size={18} className="text-white transition duration-500" />
            </div>

            <h3 className="mb-4 heading-light-sm text-black! transition duration-500">
              UX Strategy & User Research
            </h3>

            <p className="max-w-sm text-black/70 transition duration-500 ">
              Conducting user research, defining personas, mapping journeys,
              and aligning product direction with real user needs and business goals.
            </p>
          </div>


          {/* 2️⃣ PRODUCT DESIGN & WIREFRAMING */}
          <div className="group lg:col-span-3 relative bg-white sm:rounded-[20px] rounded-2xl p-6 sm:p-8 overflow-hidden border border-black/50 transition-all duration-500">

            <div className="mb-6 w-10 h-10 rounded-lg bg-black flex items-center justify-center border border-black transition-all duration-500">
              <Layers size={18} className="text-white transition duration-500" />
            </div>

            <h3 className="mb-4 heading-light-sm text-black! transition duration-500">
              Product Design & Wireframing
            </h3>

            <p className="max-w-md text-black/70 transition duration-500">
              Translating ideas into structured wireframes, user flows, and
              high-fidelity interfaces with usability at the core.
            </p>
          </div>


          {/* 3️⃣ CREATIVE DESIGN (UNCHANGED) */}
          <div className="group lg:col-span-1 relative bg-[#111] sm:rounded-[20px] rounded-2xl p-6 overflow-hidden border border-white/5 transition-all duration-500 hover:bg-white hover:border-black/50 hover:-translate-y-2">

            <div className="mb-5 w-9 h-9 rounded-md bg-white/5 group-hover:bg-purple-200 flex items-center justify-center border border-white/10 transition-all duration-500">
              <Palette
                size={16}
                className="transition-all duration-500 text-purple-600"
              />
            </div>

            <h4 className="mb-3 heading-light-sm transition duration-500
      bg-linear-to-r 
      from-purple-500 
      to-pink-500 
      bg-clip-text 
      text-transparent!">
              Creative Design
            </h4>

            <p className="text-sm text-white/60 group-hover:text-black/70 transition duration-500">
              Memorable designs that feel intuitive and comfortable.
            </p>
          </div>


          {/* 4️⃣ DESIGN SYSTEMS */}
          <div className="group lg:col-span-2 relative bg-white sm:rounded-[20px] rounded-2xl p-6 overflow-hidden border border-black/50 transition-all duration-500">

            <div className="mb-5 w-9 h-9 rounded-md bg-black flex items-center justify-center border border-black transition-all duration-500">
              <Bot size={16} className="text-white transition duration-500 " />
            </div>

            <h4 className="mb-3 heading-light-sm text-black! transition duration-500">
              Scalable Design Systems
            </h4>

            <p className="text-sm text-black/70 transition duration-500">
              Building reusable component libraries and structured visual
              systems for consistency across digital products.
            </p>
          </div>


          {/* 5️⃣ FRONTEND ARCHITECTURE */}
          <div className="group lg:col-span-3 relative bg-white sm:rounded-[20px] rounded-2xl p-6 sm:p-8 overflow-hidden border border-black/50 transition-all duration-500">

            <div className="mb-6 w-10 h-10 rounded-lg bg-black flex items-center justify-center border border-black transition-all duration-500 ">
              <Code2 size={18} className="text-white transition duration-500" />
            </div>

            <h3 className="mb-4 heading-light-sm text-black! transition duration-500">
              Frontend Architecture
            </h3>

            <p className="max-w-md text-black/70 transition duration-500">
              Translating design systems into scalable, maintainable frontend
              structures with clean component-driven architecture.
            </p>
          </div>


          {/* 6️⃣ PERFORMANCE & OPTIMIZATION */}
          <div className="group lg:col-span-2 relative bg-white sm:rounded-[20px] rounded-2xl p-6 sm:p-8 overflow-hidden border border-black/50 transition-all duration-500">

            <div className="mb-6 w-10 h-10 rounded-lg bg-black flex items-center justify-center border border-black transition-all duration-500">
              <Gauge size={18} className="text-white transition duration-500" />
            </div>

            <h3 className="mb-4 heading-light-sm text-black! transition duration-500 ">
              Performance & Optimization
            </h3>

            <p className="max-w-sm text-black/70 transition duration-500">
              Ensuring accessibility, responsiveness, and production-grade
              performance across devices and environments.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}