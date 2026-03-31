"use client";

import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8401111886",
    href: "tel:+918401111886",
    accent: "from-violet-500/15 to-purple-500/15 border-violet-500/20",
    iconColor: "text-violet-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: "jayti0474@gmail.com",
    href: "mailto:jayti0474@gmail.com",
    accent: "from-blue-500/15 to-cyan-500/15 border-blue-500/20",
    iconColor: "text-blue-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ahmedabad Gujarat, India",
    href: "https://maps.google.com/?q=Ahmedabad,Gujarat,India",
    accent: "from-emerald-500/15 to-teal-500/15 border-emerald-500/20",
    iconColor: "text-emerald-600",
  },
];

export default function ContactSection() {
  return (
    <section>
      <div className="container-sm">
        {/* Heading */}
        <div className="mb-10 sm:mb-20">
          <SectionHeading
            label="Get in Touch"
            heading="Let&apos;s Build Together"
            subheading="Open to collaborations, product discussions, and new opportunities. Let&apos;s connect and create scalable digital experiences."
          />
        </div>
        {/* <div className="text-center mb-16 sm:mb-24">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-black/50 mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black tracking-tight max-w-3xl mx-auto leading-tight">
            Let&apos;s Build Something Meaningful
          </h2>
          <p className="mt-6 text-black/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Open to collaborations, product discussions, and new opportunities.
            Let&apos;s connect and create scalable digital experiences.
          </p>
        </div> */}

        {/* Main layout - 2/3 contact cards + 1/3 CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`
                    group relative flex flex-col rounded-2xl p-6 sm:p-7
                    bg-white border border-black/8
                    transition-all duration-400 ease-out
                    hover:border-black/15 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.1)]
                    hover:-translate-y-1
                  `}
                >
                  <div
                    className={`mb-5 w-12 h-12 rounded-xl flex items-center justify-center border bg-gradient-to-br ${item.accent} group-hover:shadow-md transition-all duration-300`}
                  >
                    <Icon size={22} className={`${item.iconColor}`} strokeWidth={1.5} />
                  </div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-black/50 mb-1.5">
                    {item.label}
                  </p>
                  <p className={`font-medium text-black ${item.label === "Email" ? "break-all text-sm sm:text-base" : "text-base"}`}>
                    {item.value}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-black/50 group-hover:text-black group-hover:gap-2 transition-all">
                    Reach out
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </span>
                </a>
              );
            })}
          </div>

          {/* Behance Portfolio Card */}
          <a
            href="https://www.behance.net/jt07"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 overflow-hidden border border-white/10 bg-black text-white transition-all duration-400 ease-out hover:border-white/20 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden />

            <div className="relative z-10">
              <div className="mb-6 w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 border border-white/20 group-hover:bg-white/15 transition-colors">
                <ExternalLink size={22} className="text-white" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold tracking-wider uppercase text-white/50 mb-3">
                Full Portfolio
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-500 leading-tight mb-2">
                Behance
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                More UI/UX work landing pages, app designs, dashboards & brand projects.
              </p>
            </div>

            <span className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white group-hover:gap-3 transition-all">
              Open Portfolio
              <ArrowUpRight size={16} strokeWidth={2} />
            </span>
          </a>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sm text-black/50">
            Prefer to start with a quick chat?{" "}
            <a
              href="mailto:jayti0474@gmail.com"
              className="font-medium text-black underline underline-offset-4 hover:no-underline transition"
            >
              Drop an email
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
