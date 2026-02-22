// "use client";

// import { useEffect, useState } from "react";

// const SECTIONS = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "projects", label: "Projects" },
//   { id: "skills", label: "Skills" },
//   { id: "contact", label: "Contact" },
// ];

// export default function SectionNavigator() {
//   const [active, setActive] = useState("home");
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       let current = "home";

//       SECTIONS.forEach((section) => {
//         const el = document.getElementById(section.id);
//         if (el) {
//           const rect = el.getBoundingClientRect();
//           if (rect.top <= window.innerHeight / 2) {
//             current = section.id;
//           }
//         }
//       });

//       setActive(current);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollTo = (id: string) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//     setHovered(false);
//   };

//   return (
//     <div className="fixed bottom-8 right-8 z-50">
//       <div
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         className={`
//           relative
//           transition-all duration-500 ease-out
//           rounded-full
//           backdrop-blur-2xl
//           border border-white/10
//           bg-white/5
//           shadow-2xl
//           flex items-center justify-center
//           ${hovered ? "w-44 h-44" : "w-20 h-20"}
//         `}
//       >
//         {/* Center Label */}
//         {!hovered && (
//           <span className="text-xs tracking-wider uppercase text-white/80">
//             Action
//           </span>
//         )}

//         {/* Circular Section Labels */}
//         {hovered &&
//           SECTIONS.map((section, index) => {
//             const angle = (360 / SECTIONS.length) * index;
//             const radius = 70;

//             const x = radius * Math.cos((angle * Math.PI) / 180);
//             const y = radius * Math.sin((angle * Math.PI) / 180);

//             return (
//               <div
//                 key={section.id}
//                 onClick={() => scrollTo(section.id)}
//                 className="absolute cursor-pointer group"
//                 style={{
//                   transform: `translate(${x}px, ${y}px)`,
//                 }}
//               >
//                 <div
//                   className={`
//                     px-3 py-1 text-xs rounded-full
//                     transition-all duration-300
//                     backdrop-blur-md
//                     border
//                     ${
//                       active === section.id
//                         ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-110"
//                         : "bg-white/10 text-white border-white/20 hover:bg-white hover:text-black hover:scale-110"
//                     }
//                   `}
//                 >
//                   {section.label}
//                 </div>
//               </div>
//             );
//           })}

//         {/* Inner Glow */}
//         <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)] pointer-events-none" />
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";

// const SECTIONS = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "projects", label: "Projects" },
//   { id: "skills", label: "Skills" },
//   { id: "contact", label: "Contact" },
// ];

// export default function SectionNavigator() {
//   const [active, setActive] = useState("home");
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       let current = "home";

//       SECTIONS.forEach((section) => {
//         const el = document.getElementById(section.id);
//         if (el) {
//           const rect = el.getBoundingClientRect();
//           if (rect.top <= window.innerHeight / 2) {
//             current = section.id;
//           }
//         }
//       });

//       setActive(current);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollTo = (id: string) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="fixed bottom-8 right-8 z-50">
//       <div
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         className={`
//           relative
//           transition-all duration-500 ease-out
//           rounded-full
//           backdrop-blur-2xl
//           border border-white/10
//           bg-white/5
//           shadow-2xl
//           flex items-center justify-center
//           ${
//             hovered ? "w-36 h-36" : "w-20 h-20"
//           }
//         `}
//       >
//         {/* Center Text */}
//         {!hovered && (
//           <span className="text-xs text-white/80 tracking-wide">
//             Action Menu
//           </span>
//         )}

//         {/* Circular Dots */}
//         {hovered &&
//           SECTIONS.map((section, index) => {
//             const angle = (360 / SECTIONS.length) * index;
//             const radius = 50;

//             const x = radius * Math.cos((angle * Math.PI) / 180);
//             const y = radius * Math.sin((angle * Math.PI) / 180);

//             return (
//               <div
//                 key={section.id}
//                 onClick={() => scrollTo(section.id)}
//                 className="absolute cursor-pointer group"
//                 style={{
//                   transform: `translate(${x}px, ${y}px)`,
//                 }}
//               >
//                 <div
//                   className={`
//                     w-3 h-3 rounded-full transition-all duration-300
//                     ${
//                       active === section.id
//                         ? "bg-white scale-125 shadow-[0_0_12px_white]"
//                         : "bg-white/40 hover:bg-white"
//                     }
//                   `}
//                 />

//                 {/* Tooltip */}
//                 <span className="
//                   absolute bottom-6 left-1/2 -translate-x-1/2
//                   text-xs px-2 py-1 rounded-md
//                   bg-black/80 text-white
//                   opacity-0 group-hover:opacity-100
//                   transition
//                   whitespace-nowrap
//                 ">
//                   {section.label}
//                 </span>
//               </div>
//             );
//           })}

//         {/* Subtle Inner Glow */}
//         <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none" />
//       </div>
//     </div>
//   );
// }