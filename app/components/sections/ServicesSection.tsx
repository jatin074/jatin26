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
          heading="What I Do Best"
          subheading="From concept to execution, I craft scalable digital experiences that combine design thinking and frontend engineering."
        />

        {/* Grid Layout */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-5 auto-rows-[220px] gap-4">

                    
                    <div className="group lg:col-span-2 lg:row-span-2 relative bg-black sm:rounded-[20px] rounded-2xl p-6 sm:p-8 overflow-hidden transition duration-300 hover:bg-[#111]">

                        <h3 className="heading-light-sm mb-4">
                            UI/UX Design Systems
                        </h3>

                        <p className="subheading-light-sm max-w-sm">
                            Crafting scalable design systems and intuitive digital experiences
                            that balance usability and visual precision.
                        </p>

                        <LayoutGrid
                            size={140}
                            strokeWidth={1.2}
                            className="absolute bottom-6 right-6 text-white/20 group-hover:text-white/40 transition duration-500"
                        />
                    </div>


                    <div className="group lg:col-span-3 relative bg-[#2f2f2f] sm:rounded-[20px] rounded-2xl p-6 sm:p-8 overflow-hidden transition duration-300 hover:bg-[#3a3a3a]">

                        <h3 className="heading-light-sm mb-4">
                            Frontend Architecture & Interactions
                        </h3>

                        <p className="subheading-light-sm max-w-md">
                            Building scalable frontend systems with clean architecture,
                            smooth micro-interactions, and performance-first engineering.
                        </p>

                        <Code2
                            size={120}
                            strokeWidth={1.2}
                            className="absolute bottom-6 right-8 text-white/20 group-hover:text-white transition duration-500"
                        />
                    </div>


                    <div className="group lg:col-span-1 relative bg-[#1a1a1a] sm:rounded-[20px] rounded-2xl p-6 overflow-hidden transition duration-300 hover:bg-[#242424]">

                        <h4 className="heading-light-sm mb-3">
                            Brand Identity
                        </h4>

                        <p className="subheading-light-sm text-sm">
                            Crafting unified visual systems for clarity and trust.
                        </p>

                        <Palette
                            size={90}
                            strokeWidth={1.4}
                            className="absolute bottom-6 right-6 text-white/20 group-hover:text-white transition duration-500"
                        />
                    </div>


                    <div className="group lg:col-span-2 relative bg-black sm:rounded-[20px] rounded-2xl p-6 overflow-hidden transition duration-300 hover:bg-[#111]">

                        <h4 className="heading-light-sm mb-3">
                            AI-Integrated Experiences
                        </h4>

                        <p className="subheading-light-sm text-sm">
                            Integrating intelligent workflows, AI copilots,
                            and smart automation into modern web applications.
                        </p>

                        <Bot
                            size={100}
                            strokeWidth={1.3}
                            className="absolute bottom-6 right-6 text-white/20 group-hover:text-white transition duration-500"
                        />
                    </div>


                
                    <div className="group lg:col-span-3 relative bg-[#2f2f2f] sm:rounded-[20px] rounded-2xl p-6 sm:p-8 overflow-hidden transition duration-300 hover:bg-[#3a3a3a]">

                        <h3 className="heading-light-sm mb-4">
                            Creative Product Interfaces
                        </h3>

                        <p className="subheading-light-sm max-w-md">
                            Designing visually compelling interfaces with purposeful layout,
                            typography systems, and interaction-driven user journeys.
                        </p>

                        <Layers
                            size={120}
                            strokeWidth={1.2}
                            className="absolute bottom-6 right-8 text-white/20 group-hover:text-white transition duration-500"
                        />
                    </div>


                    <div className="group lg:col-span-2 relative bg-black sm:rounded-[20px] rounded-2xl p-6 sm:p-8 overflow-hidden transition duration-300 hover:bg-[#111]">

                        <h3 className="heading-light-sm mb-4">
                            Performance & Optimization
                        </h3>

                        <p className="subheading-light-sm max-w-sm">
                            Optimizing frontend performance, accessibility,
                            and scalability to deliver production-grade applications.
                        </p>

                        <Gauge
                            size={110}
                            strokeWidth={1.3}
                            className="absolute bottom-6 right-6 text-white/20 group-hover:text-white transition duration-500"
                        />
                    </div>

                </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-5 sm:auto-rows-[220px] gap-4">

          {/* 1️⃣ UI/UX DESIGN SYSTEMS */}
          <div className="group lg:col-span-2 lg:row-span-2 relative bg-[#111] sm:rounded-[20px] rounded-2xl p-6 sm:p-8 overflow-hidden border border-white/5 transition-all duration-500 hover:bg-white hover:border-black hover:-translate-y-2">

            <div className="mb-6 w-10 h-10 rounded-lg bg-white/5 group-hover:bg-black flex items-center justify-center border border-white/10 group-hover:border-black transition-all duration-500">
              <LayoutGrid size={18} className="text-white/60 group-hover:text-white transition duration-500" />
            </div>

            <h3 className="mb-4 heading-light-sm group-hover:text-black transition duration-500">
              UI/UX Design Systems
            </h3>

            <p className="max-w-sm text-white/60 group-hover:text-black/70 transition duration-500">
              Crafting scalable design systems and intuitive digital experiences
              rooted in usability and structured visual language.
            </p>
          </div>


          {/* 2️⃣ FRONTEND ARCHITECTURE */}
          <div className="group lg:col-span-3 relative bg-[#383838] sm:rounded-[20px] rounded-2xl p-6 sm:p-8 overflow-hidden border border-white/5 transition-all duration-500 hover:bg-white hover:border-black hover:-translate-y-2">

            <div className="mb-6 w-10 h-10 rounded-lg bg-white/5 group-hover:bg-black flex items-center justify-center border border-white/10 group-hover:border-black transition-all duration-500">
              <Code2 size={18} className="text-white/60 group-hover:text-white transition duration-500" />
            </div>

            <h3 className="mb-4 heading-light-sm group-hover:text-black transition duration-500">
              Frontend Architecture & Interactions
            </h3>

            <p className="max-w-md text-white/60 group-hover:text-black/70 transition duration-500">
              Engineering scalable frontend systems with performance-driven structure
              and refined micro-interactions.
            </p>
          </div>


          {/* 3️⃣ BRAND IDENTITY */}
          <div className="group lg:col-span-1 relative bg-[#111] sm:rounded-[20px] rounded-2xl p-6 overflow-hidden border border-white/5 transition-all duration-500 hover:bg-white hover:border-black hover:-translate-y-2">

            <div className="mb-5 w-9 h-9 rounded-md bg-white/5 group-hover:bg-black flex items-center justify-center border border-white/10 group-hover:border-black transition-all duration-500">
              <Palette size={16} className="text-white/60 group-hover:text-white transition duration-500" />
            </div>

            <h4 className="mb-3 heading-light-sm group-hover:text-black transition duration-500">
              Brand Identity
            </h4>

            <p className="text-sm text-white/60 group-hover:text-black/70 transition duration-500">
              Unified visual systems for clarity and trust.
            </p>
          </div>


          {/* 4️⃣ AI INTEGRATION */}
          <div className="group lg:col-span-2 relative bg-[#111] sm:rounded-[20px] rounded-2xl p-6 overflow-hidden border border-white/5 transition-all duration-500 hover:bg-white hover:border-black hover:-translate-y-2">

            <div className="mb-5 w-9 h-9 rounded-md bg-white/5 group-hover:bg-black flex items-center justify-center border border-white/10 group-hover:border-black transition-all duration-500">
              <Bot size={16} className="text-white/60 group-hover:text-white transition duration-500" />
            </div>

            <h4 className="mb-3 heading-light-sm group-hover:text-black transition duration-500">
              AI-Integrated Experiences
            </h4>

            <p className="text-sm text-white/60 group-hover:text-black/70 transition duration-500">
              Intelligent workflows and AI copilots built into real products.
            </p>
          </div>


          {/* 5️⃣ PRODUCT INTERFACES */}
          <div className="group lg:col-span-3 relative bg-[#383838] sm:rounded-[20px] rounded-2xl p-6 sm:p-8 overflow-hidden border border-white/5 transition-all duration-500 hover:bg-white hover:border-black hover:-translate-y-2">

            <div className="mb-6 w-10 h-10 rounded-lg bg-white/5 group-hover:bg-black flex items-center justify-center border border-white/10 group-hover:border-black transition-all duration-500">
              <Layers size={18} className="text-white/60 group-hover:text-white transition duration-500" />
            </div>

            <h3 className="mb-4 heading-light-sm group-hover:text-black transition duration-500">
              Creative Product Interfaces
            </h3>

            <p className="max-w-md text-white/60 group-hover:text-black/70 transition duration-500">
              Purpose-driven layouts, typography systems,
              and interaction-first interface design.
            </p>
          </div>


          {/* 6️⃣ PERFORMANCE */}
          <div className="group lg:col-span-2 relative bg-[#111] sm:rounded-[20px] rounded-2xl p-6 sm:p-8 overflow-hidden border border-white/5 transition-all duration-500 hover:bg-white hover:border-black hover:-translate-y-2">

            <div className="mb-6 w-10 h-10 rounded-lg bg-white/5 group-hover:bg-black flex items-center justify-center border border-white/10 group-hover:border-black transition-all duration-500">
              <Gauge size={18} className="text-white/60 group-hover:text-white transition duration-500" />
            </div>

            <h3 className="mb-4 heading-light-sm group-hover:text-black transition duration-500">
              Performance & Optimization
            </h3>

            <p className="max-w-sm text-white/60 group-hover:text-black/70 transition duration-500">
              Production-grade performance, accessibility,
              and scalable frontend delivery.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}