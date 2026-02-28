"use client";

import { Check } from "lucide-react";
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiFigma,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiMongodb,
    SiRedux,
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiMui,
    SiOpenai,
    SiFramer,
    SiVercel,
    SiGithub,
} from "react-icons/si";

export default function TechnologiesSection() {
    const technologies = [
        { icon: SiReact, name: "React", color: "#61DAFB" },
        { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
        { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
        { icon: SiFigma, name: "Figma", color: "#F24E1E" },
        { icon: SiAdobephotoshop, name: "Photoshop", color: "#31A8FF" },
        { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
        { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
        { icon: SiNodedotjs, name: "Node.js", color: "#3C873A" },
        { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
        { icon: SiRedux, name: "Redux Toolkit", color: "#764ABC" },
        { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
        { icon: SiCss3, name: "CSS3", color: "#1572B6" },
        { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
        { icon: SiMui, name: "MUI", color: "#007FFF" },
        { icon: SiOpenai, name: "OpenAI", color: "#10A37F" },
        { icon: SiVercel, name: "Vercel", color: "#ffffff" },
        { icon: SiGithub, name: "GitHub", color: "#ffffff" },
    ];

    const duplicated = [...technologies, ...technologies];

    return (
        <section className="bg-black py-24 overflow-hidden">
            <div className="container-sm">
            <div className="grid lg:grid-cols-2 sm:gap-20 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <p className="sectionlabel text-white/50!">
                        Tools & Technologies
                    </p>

                    <h2 className="text-4xl sm:text-5xl font-normal leading-tight text-white">
                        Technologies I use to build <br />
                        scalable digital products.
                    </h2>

                    <p className="mt-6 text-white/60 max-w-md">
                        A modern stack combining design tools, frontend frameworks,
                        scalable architectures, and backend technologies to deliver
                        high-performance applications.
                    </p>

                    <ul className="mt-8 space-y-3 text-white/70">
                        <li className="flex items-center gap-2"><Check size={18} className="text-purple-500" /> Modern UI Design Systems</li>
                        <li className="flex items-center gap-2"><Check size={18} className="text-purple-500"/> React & Next.js Architecture</li>
                        <li className="flex items-center gap-2"><Check size={18} className="text-purple-500"/> TypeScript & Scalable Code</li>
                        <li className="flex items-center gap-2"><Check size={18} className="text-purple-500"/> Cloud-ready Backend</li>
                        <li className="flex items-center gap-2"><Check size={18} className="text-purple-500"/> Performance Optimization</li>
                    </ul>
                </div>

                {/* RIGHT SIDE SCROLLING COLUMNS */}
                <div className="relative h-[600px] overflow-hidden grid grid-cols-2 gap-6">

                    {/* COLUMN 1 */}
                    <div className="animate-scrollUp space-y-6 opacity-80">
                        {duplicated.map((tech, index) => {
                            const Icon = tech.icon;
                            return (
                                <div
                                    key={`up-${index}`}
                                    className="group w-full h-24 border border-white/10 rounded-xl bg-[#111] flex items-center justify-center gap-4 transition duration-300 hover:bg-[#1a1a1a]"
                                >
                                    <Icon
                                        size={26}
                                        className="transition duration-300"
                                        style={{ color: tech.color }}
                                    />
                                    <span className="text-sm font-medium text-white/70 group-hover:text-white transition">
                                        {tech.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* COLUMN 2 */}
                    <div className="animate-scrollDown space-y-6 opacity-60">
                        {duplicated.map((tech, index) => {
                            const Icon = tech.icon;
                            return (
                                <div
                                    key={`down-${index}`}
                                    className="group w-full h-24 border border-white/10 rounded-xl bg-[#0f0f0f] flex items-center justify-center gap-4 transition duration-300 hover:bg-[#1a1a1a]"
                                >
                                    <Icon
                                        size={26}
                                        className="transition duration-300 md:grayscale group-hover:grayscale-0"
                                        style={{ color: tech.color }}
                                    />
                                    <span className="text-sm font-medium text-white/60 group-hover:text-white transition">
                                        {tech.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* FADE TOP */}
                    <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />

                    {/* FADE BOTTOM */}
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
                </div>

            </div>
        </div>
        </section>
    );
}