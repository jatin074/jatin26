// "use client"

// import { useEffect, useState } from "react"
// import { Briefcase, Layers, FolderKanban, Cpu } from "lucide-react"
// import SparklesText from "../ui/sparkles-text"

// const NAV_LINKS = [
//   { label: "Services", id: "services", icon: Briefcase },
//   { label: "Experience", id: "experience", icon: Layers },
//   { label: "Projects", id: "projects", icon: FolderKanban },
//   { label: "Technologies", id: "technologies", icon: Cpu },
// ];

// export default function FloatingHeader() {
//   const [visible, setVisible] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       const heroHeight = window.innerHeight * 0.8
//       setVisible(window.scrollY > heroHeight)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <div
//       className={`
//         fixed right-6 top-1/2 -translate-y-1/2 z-50
//         transition-all duration-500 ease-out
//         ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}
//       `}
//     >
//       <div
//         className="
//           flex flex-col items-center gap-3
//           p-2
//           rounded-full
//           backdrop-blur-3xl
//           bg-white/60 dark:bg-black/40
//           border border-black/10 dark:border-white/10
//           shadow-[0_10px_30px_rgba(0,0,0,0.2)]
//         "
//       >
//         {/* Nav Icons */}
//         {NAV_LINKS.map((link) => {
//           const Icon = link.icon
//           return (
//             <div key={link.id} className="relative group">
//               <button
//                 onClick={() => {
//                   const el = document.getElementById(link.id)
//                   el?.scrollIntoView({ behavior: "smooth" })
//                 }}
//                 className="
//                   p-2
//                   rounded-full
//                   hover:bg-black/10 dark:hover:bg-white/10
//                   transition
//                 "
//               >
//                 <Icon
//                   size={18}
//                   className="text-black dark:text-white"
//                 />
//               </button>

//               {/* Hover Label */}
//               <span
//                 className="
//                   absolute right-12 top-1/2 -translate-y-1/2
//                   px-3 py-1
//                   text-xs
//                   rounded-md
//                   bg-black text-white
//                   whitespace-nowrap
//                   opacity-0 translate-x-2
//                   group-hover:opacity-100 group-hover:translate-x-0
//                   transition-all duration-300
//                   pointer-events-none
//                 "
//               >
//                 {link.label}
//               </span>
//             </div>
//           )
//         })}

//         {/* Divider */}
//         <div className="w-6 h-px bg-black/20 dark:bg-white/20 my-1" />

//         {/* AI Button */}
//         <div className="relative group">
//           <button
//             className="
//               p-2.5
//               rounded-full
//               bg-gradient-to-br from-purple-500/20 to-pink-500/20
//               border border-black/10 dark:border-white/10
//               hover:scale-110
//               transition
//             "
//           >
//             <SparklesText
//               text="AI"
//               className="text-[10px] text-black dark:text-white"
//               sparklesCount={5}
//             />
//           </button>

//           {/* Hover Label */}
//           <span
//             className="
//               absolute right-12 top-1/2 -translate-y-1/2
//               px-3 py-1
//               text-xs
//               rounded-md
//               bg-black text-white
//               whitespace-nowrap
//               opacity-0 translate-x-2
//               group-hover:opacity-100 group-hover:translate-x-0
//               transition-all duration-300
//               pointer-events-none
//             "
//           >
//             AI Assistant
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import {
  Briefcase,
  Layers,
  FolderKanban,
  Cpu,
  Sparkles,
} from "lucide-react"
import SparklesText from "../ui/sparkles-text"

const NAV_LINKS = [
  { label: "Services", id: "services", icon: Briefcase },
  { label: "Experience", id: "experience", icon: Layers },
  { label: "Projects", id: "projects", icon: FolderKanban },
  { label: "Technologies", id: "technologies", icon: Cpu },
]

export default function RadialMenu() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8
      setVisible(window.scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`
        fixed right-6 bottom-6 z-50
        transition-all duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
      `}
    >
      {/* 👇 HOVER AREA FIXED HERE */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative pr-4 pb-4" // 👈 extra hover buffer
      >

        {/* EXPANDED MENU */}
        <div
          className={`
            absolute bottom-16 right-0
            flex flex-col items-end gap-3
            transition-all duration-300
            ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
          `}
        >
          {NAV_LINKS.map((link, i) => {
            const Icon = link.icon
            return (
              <div
                key={link.id}
                className={`
                  flex items-center gap-3
                  transition-all duration-300
                  ${hovered ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}
                `}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="px-3 py-1 text-xs rounded-md bg-black text-white">
                  {link.label}
                </span>

                <button
                  onClick={() => {
                    const el = document.getElementById(link.id)
                    el?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="
                    p-2.5 rounded-full
                    bg-white/80 dark:bg-black/60
                    border border-black/10 dark:border-white/10
                    hover:scale-110 transition
                  "
                >
                  <Icon size={16} className="text-black dark:text-white" />
                </button>
              </div>
            )
          })}

          {/* AI Button */}
          <div
            className={`
              flex items-center gap-3
              transition-all duration-300
              ${hovered ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}
            `}
            style={{ transitionDelay: `${NAV_LINKS.length * 60}ms` }}
          >
            <span className="px-3 py-1 text-xs rounded-md bg-black text-white">
              AI Assistant
            </span>

            <button
              className="
                px-3 py-1.5 rounded-full
                bg-gradient-to-r from-purple-500/20 to-pink-500/20
                border border-black/10 dark:border-white/10
                hover:scale-110 transition
              "
            >
              <SparklesText
                text="AI"
                className="text-xs text-black dark:text-white"
                sparklesCount={5}
              />
            </button>
          </div>
        </div>

        {/* MAIN BUTTON */}
        <button
          className="
            w-14 h-14
            rounded-full
            flex items-center justify-center
            backdrop-blur-xl
            bg-white/70 dark:bg-black/50
            border border-black/10 dark:border-white/10
            shadow-[0_10px_30px_rgba(0,0,0,0.25)]
            transition-all duration-300
          "
        >
          <Sparkles className="text-black dark:text-white" size={20} />
        </button>
      </div>
    </div>
  )
}