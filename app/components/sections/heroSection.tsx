"use client";

import "swiper/css";
import TechSlider, { TechItem } from "../ui/TechSlider";
import Button from "../ui/Button";


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
            className="relative sm:h-[90vh] h-[80vh] flex flex-col justify-center items-center text-center px-6"
        >
            {/* Content */}
            <div className="relative z-10 container">
                <h1 className="heading-light">
                    UI/UX Designer &
                    <br />
                    <span className="text-white/60">Scalable Frontend Engineer</span>
                    <br />
                    Powered by AI
                </h1>

                <p className="mt-6 subheading-light mx-auto">
                    I design and build scalable, high-performance web applications with
                    modern technologies and a strong focus on user experience.
                </p>

                <div className="mt-10 flex items-center justify-center gap-6">
                    <Button variant="whiteOutline" href="#about">
                        View Projects
                    </Button>

                    <Button variant="white" href="#contact">
                        Contact Me
                    </Button>
                </div>
            </div>

            {/* Floating Tech Strip */}
            <div className="absolute -bottom-[38px] w-full sm:px-10 px-4">
                <TechSlider items={techStack} />
            </div>
        </section>
    );
}