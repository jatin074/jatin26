"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const SECTIONS: readonly { id: string; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "experience", label: "About" },
  { id: "projects", label: "Work" },
  { id: "design", label: "Design" },
  { id: "contact", label: "Contact" },
] as const;

function getScrollBehavior(): ScrollBehavior {
  if (typeof window === "undefined") return "smooth";
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}

function elementDocumentTop(el: Element): number {
  const r = el.getBoundingClientRect();
  return r.top + window.scrollY;
}

export default function StickyPortfolioNav() {
  const pathname = usePathname();
  const [pastHero, setPastHero] = useState(false);
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);
  const rafRef = useRef<number | null>(null);

  const updateFromScroll = useCallback(() => {
    const hero = document.getElementById("home");
    if (hero) {
      const rect = hero.getBoundingClientRect();
      setPastHero(rect.bottom < 72);
    } else {
      setPastHero(window.scrollY > window.innerHeight * 0.55);
    }

    const probeY = window.scrollY + Math.min(140, window.innerHeight * 0.22);
    let next = SECTIONS[0].id;
    for (let i = SECTIONS.length - 1; i >= 0; i--) {
      const id = SECTIONS[i].id;
      const el = document.getElementById(id);
      if (!el) continue;
      if (elementDocumentTop(el) <= probeY + 1) {
        next = id;
        break;
      }
    }
    setActiveId((prev) => (prev === next ? prev : next));
  }, []);

  const onScrollOrResize = useCallback(() => {
    if (rafRef.current != null) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      updateFromScroll();
    });
  }, [updateFromScroll]);

  useEffect(() => {
    if (pathname !== "/") return;

    updateFromScroll();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [pathname, onScrollOrResize, updateFromScroll]);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: getScrollBehavior(), block: "start" });
  }, []);

  if (pathname !== "/") return null;

  return (
    <nav
      className="pointer-events-none fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 md:block xl:right-6"
      aria-hidden={pastHero ? undefined : true}
      aria-label="On this page"
    >
      <div
        className={`pointer-events-auto flex flex-col items-center gap-0 rounded-full border border-neutral-200/90 bg-white/95 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-sm transition-[opacity,transform] duration-300 ease-out ${
          pastHero
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-3 opacity-0"
        }`}
      >
        <div
          className="absolute left-1/2 top-3 bottom-3 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-neutral-200 to-transparent"
          aria-hidden
        />

        <ol className="relative z-10 flex flex-col gap-3.5 px-2">
          {SECTIONS.map(({ id, label }) => {
            const active = activeId === id;
            return (
              <li key={id} className="group relative flex justify-center">
                <button
                  type="button"
                  className="relative flex h-6 w-6 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  aria-label={`Go to ${label}`}
                  aria-current={active ? "location" : undefined}
                  tabIndex={pastHero ? 0 : -1}
                  onClick={() => scrollToSection(id)}
                >
                  <span
                    className={`block rounded-full transition-[transform,background-color] duration-200 ${
                      active
                        ? "h-2.5 w-2.5 bg-neutral-900"
                        : "h-2 w-2 bg-neutral-300 group-hover:bg-neutral-500 group-hover:scale-110"
                    }`}
                  />
                </button>
                <span
                  className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-md border border-neutral-200/80 bg-neutral-900 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 lg:block"
                  aria-hidden
                >
                  {label}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
