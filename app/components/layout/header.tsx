"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

const NAV_LINKS = [
  { label: "Services", id: "services" },
  { label: "About", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Technologies", id: "technologies" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header
      ref={headerRef}
      className="absolute top-1 rounded-xl px-4 left-0 w-full z-50 transition-all duration-500 bg-black/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="container">

        {/* Header Top Row */}
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <div className="text-white font-bold text-xl tracking-wider">
            JT
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="text-white/70 hover:text-white transition text-sm tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Button onClick={() => handleScrollTo("contact")} variant="white">Contact Me</Button>


          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col gap-5 pt-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="text-white/80 hover:text-white text-left transition text-base"
              >
                {link.label}
              </button>
            ))}


            <Button onClick={() => handleScrollTo("contact")} variant="white">Contact Me</Button>
          </div>
        </div>

      </div>
    </header>
  );
}