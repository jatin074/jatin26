"use client"

import SparklesText from "../ui/sparkles-text"

const NAV_LINKS = [
  { label: "Services", id: "services" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Technologies", id: "technologies" },
];

export default function RightSidebar() {
  return (
    <div className="
      fixed
      right-6
      top-1/2
      -translate-y-1/2
      z-50
    ">
      <div className="
        flex flex-col items-start gap-3
        px-4 py-4
        rounded-2xl
        bg-black/40
        backdrop-blur-xl
        border border-white/10
        shadow-[0_10px_40px_rgba(0,0,0,0.4)]
      ">

        {/* Nav Links */}
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => {
              const el = document.getElementById(link.id)
              el?.scrollIntoView({ behavior: "smooth" })
            }}
            className="
              text-sm text-white/70
              hover:text-white
              transition
              relative
              group
            "
          >
            {link.label}

            {/* underline animation */}
            <span className="
              absolute left-0 -bottom-1
              h-[1px] w-0
              bg-white/60
              transition-all duration-300
              group-hover:w-full
            " />
          </button>
        ))}

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-2" />

        {/* AI Button */}
        <button className="
          relative
          px-4 py-2
          rounded-full
          bg-gradient-to-r from-purple-600/20 to-pink-500/20
          border border-white/20
          hover:border-white/40
          hover:scale-105
          transition
        ">
          <SparklesText
            text="AI Assistant"
            className="text-xs text-white"
            sparklesCount={6}
          />
        </button>

      </div>
    </div>
  )
}