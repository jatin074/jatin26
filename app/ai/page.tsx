"use client";

import Image from "next/image";

export default function AIDevelopment() {
  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.1),_transparent_55%)]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.6) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        
        {/* Left: Text content */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
            AI Systems & Intelligent Automation
          </div>

          <h1 className="mt-6 heading-light">
            Build <span className="text-gradient">AI systems</span> that automate
            work, assist teams, and power new products.
          </h1>

          <p className="mt-5 subheading text-slate-300">
            I design and deploy production-ready AI solutions including
            agentic AI systems, applied AI models, and intelligent automation
            that integrate directly into your products, workflows, and
            operations.
          </p>

          {/* Pills */}
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-200">
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1">
              Agentic AI systems
            </span>

            <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1">
              Applied AI solutions
            </span>

            <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1">
              Workflow automation
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="button-wrapper">
              <span className="button-bg" />
              <span className="button px-6 py-3">
                Discuss your AI project
              </span>
            </button>

            <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10">
              View AI solutions
              <span className="text-lg leading-none">↗</span>
            </button>

            <p className="w-full text-xs text-slate-400 sm:w-auto">
              Typical AI deployment: 4–8 weeks from prototype to production.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-5 text-left sm:flex sm:flex-row sm:gap-8">
            <div>
              <p className="text-2xl font-semibold text-white">100M+</p>
              <p className="mt-1 text-xs text-slate-400">
                automated AI decisions monthly
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-white">10x</p>
              <p className="mt-1 text-xs text-slate-400">
                faster workflows with automation
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-white">99.9%</p>
              <p className="mt-1 text-xs text-slate-400">
                reliability across AI systems
              </p>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:mx-0">
          
          {/* Outer glow */}
          <div className="absolute inset-0 blur-3xl">
            <div className="mx-auto h-72 w-72 rounded-full bg-gradient-to-tr from-sky-500/35 via-violet-500/40 to-fuchsia-500/35 opacity-70" />
          </div>

          {/* Card */}
          <div className="relative z-10 w-full rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_80px_rgba(56,189,248,0.3)] backdrop-blur-2xl">
            <div className="flex items-center justify-between text-xs text-slate-200/80">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                AI system activity
              </span>

              <span className="rounded-full bg-black/40 px-2 py-0.5 text-[10px]">
                Agents · Models · Automation
              </span>
            </div>

            <div className="mt-5 flex items-center justify-center">
              <div className="relative">
                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400/40 via-violet-500/40 to-fuchsia-500/40 blur-2xl" />

                <Image
                  src="/images/abstract.png"
                  alt="AI system visualization"
                  width={420}
                  height={420}
                  className="ai-rotate relative z-10 opacity-90 mix-blend-screen"
                  priority
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-200">
              <div className="rounded-2xl border border-white/5 bg-black/40 p-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                  AI architecture
                </p>
                <p className="mt-1 font-medium text-slate-50">
                  Agents + models + tools
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-black/40 p-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                  Deployments
                </p>
                <p className="mt-1 font-medium text-slate-50">
                  SaaS · Ops · Products
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}