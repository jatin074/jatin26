// "use client";

// import "swiper/css";
// import TechSlider, { TechItem } from "../ui/TechSlider";
// import Button from "../ui/Button";


// const techStack: TechItem[] = [
//     { name: "Next.js", icon: "/images/tech/tech1.svg" },
//     { name: "React", icon: "/images/tech/tech2.svg" },
//     { name: "TypeScript", icon: "/images/tech/tech3.svg" },
//     { name: "Node", icon: "/images/tech/tech7.svg" },
//     { name: "AI-Powered", icon: "/images/tech/tech8.svg" },
//     { name: "Tailwind", icon: "/images/tech/tech4.svg" },
//     { name: "Figma", icon: "/images/tech/tech5.svg" },
//     { name: "Photoshop", icon: "/images/tech/tech6.svg" },
// ];

// export default function HeroSection() {
//     return (
//         <section
//             id="home"
//             className="relative sm:h-[90vh] h-[80vh] flex flex-col justify-center items-center text-center px-6"
//         >
//             {/* Content */}
//             <div className="relative z-10 container">
//                 <p className="text-sm sm:text-base font-medium tracking-[0.3em] uppercase text-white/70 mb-4 animate-fade-in">
//                     Hi, I&apos;m Jatin
//                 </p>
//                 <h1 className="heading-light">
//                     UI/UX Designer &
//                     <br />
//                     <span className="text-white/60">Scalable Frontend Engineer</span>
//                     <br />
//                     with Precision & AI
//                 </h1>

//                 <p className="mt-6 subheading-light mx-auto">
//                     I design and build scalable, high-performance web applications with
//                     modern technologies and a strong focus on user experience.
//                 </p>

//                 <div className="mt-10 sm:flex items-center justify-center sm:gap-6 gap-2 hidden">
//                     <Button variant="whiteOutline" href="#projects">
//                         View Projects
//                     </Button>

//                     <Button variant="white" href="#contact">
//                         Get in Touch
//                     </Button>
//                 </div>
//             </div>

//             {/* Floating Tech Strip */}
//             <div className="absolute -bottom-[38px] w-full sm:px-10 px-4">
//                 <TechSlider items={techStack} />
//             </div>
//         </section>
//     );
// }


"use client";

import "swiper/css";
import Button from "../ui/Button";
import { Palette, Code2, LayoutGrid, Sparkles } from "lucide-react";
import TechSlider, { TechItem } from "../ui/TechSlider";

const techStack: TechItem[] = [
  { name: "Next.js", icon: "/images/tech/tech1.svg" },
  { name: "React", icon: "/images/tech/tech2.svg" },
  { name: "TypeScript", icon: "/images/tech/tech3.svg" },
  { name: "Node", icon: "/images/tech/tech7.svg" },
  { name: "AI-Powered", icon: "/images/tech/tech8.svg" },
  { name: "Tailwind", icon: "/images/tech/tech4.svg" },
  { name: "Figma", icon: "/images/tech/tech5.svg" },
  { name: "Photoshop", icon: "/images/tech/tech6.svg" },
];


export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 pb-10 sm:pb-14 flex items-center"
    >
      <div className="container-sm w-full">

        {/* TOP GRADIENT BACKGROUND */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/10 via-transparent to-sky-500/10" />

        {/* CHIPS */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="chip">
            <Palette size={14} className="text-purple-300" />
            <span>UI/UX Design</span>
          </div>
          <div className="chip">
            <LayoutGrid size={14} className="text-sky-300" />
            <span>Design Systems</span>
          </div>
          <div className="chip">
            <Code2 size={14} className="text-emerald-300" />
            <span>Frontend</span>
          </div>
          <div className="chip">
            <Sparkles size={14} className="text-amber-300" />
            <span>AI + Product</span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="text-center max-w-4xl mx-auto">
          
          <p className="text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-white/60 mb-5">
            Hi, I&apos;m Jatin
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight tracking-tight">
            Designing & Building
            <br />
            <span className="text-white/60">
              Scalable Digital Products
            </span>
            <br />
            with Precision & AI
          </h1>

          <p className="mt-6 sm:mt-8 text-white/60 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            I design and build high-performance web applications with a strong
            focus on usability, scalability, and modern product thinking.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button variant="whiteOutline" href="#projects">
              View Projects
            </Button>

            <Button variant="white" href="#contact">
              Get in Touch
            </Button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="mt-10 sm:mt-14">
          <TechSlider items={techStack} />
        </div>
      </div>

      {/* CHIP STYLE */}
      <style jsx>{`
        .chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.05);
          padding: 6px 12px;
          font-size: 12px;
          color: rgba(255,255,255,0.8);
          backdrop-filter: blur(6px);
          transition: all 0.3s ease;
        }

        .chip:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.3);
        }
      `}</style>
    </section>
  );
}