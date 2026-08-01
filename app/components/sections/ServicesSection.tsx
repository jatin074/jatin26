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
          subheading="From product discovery to production deployment, I ship Web2 and Web3 features that solve real business problems with security and scalability built in."
        />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 sm:auto-rows-[250px] gap-4">

          {/* 1️⃣ UX STRATEGY & RESEARCH */}
          <div className="group lg:col-span-2 lg:row-span-2 relative bg-white sm:rounded-[20px] rounded-2xl p-6 sm:p-8 overflow-hidden border border-black/50 transition-all duration-500">

            <div className="mb-6 w-10 h-10 rounded-lg bg-black flex items-center justify-center border border-black transition-all duration-500">
              <LayoutGrid size={18} className="text-white transition duration-500" />
            </div>

            <h3 className="mb-4 heading-light-sm text-black! transition duration-500">
              Product Engineering
            </h3>

            <p className="max-w-sm text-black/70 transition duration-500 ">
              Taking features from idea to launch solving business problems
              with scalable architecture, strong UX, and code teams can maintain
              and extend over time.
            </p>
          </div>


          {/* 2️⃣ PRODUCT DESIGN & WIREFRAMING */}
          <div className="group lg:col-span-3 relative bg-white sm:rounded-[20px] rounded-2xl p-6 sm:p-8 overflow-hidden border border-black/50 transition-all duration-500">

            <div className="mb-6 w-10 h-10 rounded-lg bg-black flex items-center justify-center border border-black transition-all duration-500">
              <Layers size={18} className="text-white transition duration-500" />
            </div>

            <h3 className="mb-4 heading-light-sm text-black! transition duration-500">
              Web3 Development
            </h3>

            <p className="max-w-md text-black/70 transition duration-500">
              Building dApps on Ethereum smart wallets, Account Abstraction,
              gasless transactions, NFT integration, and on chain authentication.
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
              Security-first Development
            </h4>

            <p className="text-sm text-white/60 group-hover:text-black/70 transition duration-500">
              Secure auth, wallet safety, and transaction protection built into
              every layer of the stack.
            </p>
          </div>


          {/* 4️⃣ DESIGN SYSTEMS */}
          <div className="group lg:col-span-2 relative bg-white sm:rounded-[20px] rounded-2xl p-6 overflow-hidden border border-black/50 transition-all duration-500">

            <div className="mb-5 w-9 h-9 rounded-md bg-black flex items-center justify-center border border-black transition-all duration-500">
              <Bot size={16} className="text-white transition duration-500 " />
            </div>

            <h4 className="mb-3 heading-light-sm text-black! transition duration-500">
              Frontend Architecture
            </h4>

            <p className="text-sm text-black/70 transition duration-500">
              React and Next.js with TypeScript clean component structures,
              responsive UI, and performance tuned for production.
            </p>
          </div>


          {/* 5️⃣ FRONTEND ARCHITECTURE */}
          <div className="group lg:col-span-3 relative bg-white sm:rounded-[20px] rounded-2xl p-6 sm:p-8 overflow-hidden border border-black/50 transition-all duration-500">

            <div className="mb-6 w-10 h-10 rounded-lg bg-black flex items-center justify-center border border-black transition-all duration-500 ">
              <Code2 size={18} className="text-white transition duration-500" />
            </div>

            <h3 className="mb-4 heading-light-sm text-black! transition duration-500">
              AI Accelerated Development
            </h3>

            <p className="max-w-md text-black/70 transition duration-500">
              Agentic AI workflows with Claude, ChatGPT, and Cursor faster
              research, debugging, and prototyping with manual validation on
              every decision.
            </p>
          </div>


          {/* 6️⃣ PERFORMANCE & OPTIMIZATION */}
          <div className="group lg:col-span-2 relative bg-white sm:rounded-[20px] rounded-2xl p-6 sm:p-8 overflow-hidden border border-black/50 transition-all duration-500">

            <div className="mb-6 w-10 h-10 rounded-lg bg-black flex items-center justify-center border border-black transition-all duration-500">
              <Gauge size={18} className="text-white transition duration-500" />
            </div>

            <h3 className="mb-4 heading-light-sm text-black! transition duration-500 ">
              Backend & Infrastructure
            </h3>

            <p className="max-w-sm text-black/70 transition duration-500">
              Node.js APIs, Firebase, MongoDB, and PostgreSQL reliable
              backend systems with clean REST design and CI/CD deployment.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}