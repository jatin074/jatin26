// "use client";

// import { useEffect, useState } from "react";

// const NAV_LINKS = [
//   { label: "About", id: "about" },
//   { label: "Projects", id: "projects" },
//   { label: "Skills", id: "skills" },
//   { label: "Contact", id: "contact" },
// ];

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleScrollTo = (id: string) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <header
//       className="
//          absolute top-0 left-0 w-full z-50
//         transition-all duration-300"
//     >
//       <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <div className="text-white font-bold text-xl tracking-wider">
//           JT
//         </div>

//         {/* Nav */}
//         <nav className="flex items-center gap-8">
//           {NAV_LINKS.map((link) => (
//             <button
//               key={link.id}
//               onClick={() => handleScrollTo(link.id)}
//               className="text-white/70 hover:text-white transition text-sm tracking-wide"
//             >
//               {link.label}
//             </button>
//           ))}
//         </nav>

//         {/* CTA */}
//         <button
//           onClick={() => handleScrollTo("contact")}
//           className="hidden md:block px-5 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
//         >
//           Contact Me
//         </button>
//       </div>
//     </header>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header
      className={`absolute top-1 rounded-xl px-4 left-0 w-full z-50 transition-all duration-500 bg-black/80 backdrop-blur-xl border-b border-white/10`}
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
          <button
            onClick={() => handleScrollTo("contact")}
            className="hidden md:block px-5 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
          >
            Contact Me
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown (INSIDE HEADER) */}
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

            <button
              onClick={() => handleScrollTo("contact")}
              className="mt-2 px-5 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              Contact Me
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}