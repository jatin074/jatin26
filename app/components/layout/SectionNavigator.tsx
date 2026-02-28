"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "design-process", label: "Process" },
  { id: "technologies", label: "Tech" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export default function SectionNavigator() {
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);

  useEffect(() => {
    const heroHeight = typeof window !== "undefined" ? window.innerHeight * 0.7 : 600;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > heroHeight);

      let current: string | null = null;

      SECTIONS.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const viewportMiddle = window.innerHeight / 2;
          if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle - 100) {
            current = section.id;
          } else if (rect.top < viewportMiddle && !current) {
            current = section.id;
          }
        }
      });

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setHoveredLabel(null);
  };

  if (!visible) return null;

  return (
    <nav
      className="fixed bottom-6 right-6 z-40 sm:bottom-8 sm:right-8 animate-fade-in-nav"
      aria-label="Section navigation"
    >
      <div className="relative flex flex-col items-end gap-2 py-2">
        {/* Vertical line behind dots */}
        <div
          className="absolute right-[5px] top-6 bottom-6 w-px bg-black/10 -z-10"
          aria-hidden
        />

        {SECTIONS.map((section) => {
          const isActive = active === section.id;
          const isHovered = hoveredLabel === section.id;

          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              onMouseEnter={() => setHoveredLabel(section.id)}
              onMouseLeave={() => setHoveredLabel(null)}
              aria-current={isActive ? "true" : undefined}
              aria-label={`Go to ${section.label} section`}
              className="group relative flex items-center justify-end gap-3 transition-all duration-300 ease-out"
            >
              {/* Label - appears on hover or when active */}
              <span
                className={`
                  text-xs font-medium tracking-wide whitespace-nowrap
                  px-3 py-1.5 rounded-full shadow-sm
                  transition-all duration-200 ease-out
                  ${
                    isActive
                      ? "bg-black text-white shadow-lg scale-100"
                      : isHovered
                        ? "bg-black/90 text-white shadow-md scale-100"
                        : "bg-white/95 text-black/80 border border-black/5 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                  }
                `}
              >
                {section.label}
              </span>

              {/* Dot */}
              <span
                className={`
                  relative flex shrink-0 rounded-full
                  transition-all duration-300 ease-out
                  ${
                    isActive
                      ? "w-3 h-3 bg-black ring-4 ring-black/10"
                      : "w-2 h-2 bg-black/25 group-hover:w-2.5 group-hover:h-2.5 group-hover:bg-black/60"
                  }
                `}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full animate-ping bg-black/25" aria-hidden />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
