


"use client";

import React, { useEffect, useRef } from "react";
import {
    Search,
    PenTool,
    Code2,
    BarChart3,
    LayoutGrid,
    Rocket
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

export default function DesignProcess() {
    const processRef1 = useRef<HTMLDivElement | null>(null);
    const processRef2 = useRef<HTMLDivElement | null>(null);
    const processRef3 = useRef<HTMLDivElement | null>(null);
    const processRef4 = useRef<HTMLDivElement | null>(null);
    const processRef5 = useRef<HTMLDivElement | null>(null);
    const processRef6 = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const initializeScrollMagic = async () => {
            const { default: ScrollMagic } = await import(
                "scrollmagic/scrollmagic/uncompressed/ScrollMagic"
            );

            const controller = new ScrollMagic.Controller();

            const scenes = [
                { triggerElement: processRef1.current, ref: processRef1 },
                { triggerElement: processRef2.current, ref: processRef2 },
                { triggerElement: processRef3.current, ref: processRef3 },
                { triggerElement: processRef4.current, ref: processRef4 },
                { triggerElement: processRef5.current, ref: processRef5 },
                { triggerElement: processRef6.current, ref: processRef6 },
            ];

            scenes.forEach(({ triggerElement, ref }) => {
                new ScrollMagic.Scene({
                    triggerElement,
                    duration: 500,
                    triggerHook: 0.7,
                })
                    .setClassToggle(ref.current, "scaleUp")
                    .addTo(controller);

                new ScrollMagic.Scene({
                    triggerElement,
                    duration: 500,
                    triggerHook: 0.3,
                })
                    .setClassToggle(ref.current, "removeScale")
                    .addTo(controller);
            });

            return () => {
                controller.destroy(true);
            };
        };

        initializeScrollMagic();
    }, []);

    const steps = [
        {
            number: "01.",
            title: "Research & Product Understanding",
            desc: "Understanding client requirements, business objectives, and user behavior. I analyze competitors, define product goals, and map complete user journeys to build solutions that are scalable and outcome-driven.",
            icon: Search,
            ref: processRef1,
        },
        {
            number: "02.",
            title: "UX Strategy & Wireframing",
            desc: "Structuring information architecture, defining user flows, and creating low-fidelity wireframes that focus on usability, clarity, and efficient interaction patterns before visual design begins.",
            icon: LayoutGrid,
            ref: processRef2,
        },
        {
            number: "03.",
            title: "UI Design & Design Systems",
            desc: "Designing modern, visually refined interfaces in Figma with scalable design systems, reusable components, and consistent visual language to ensure long-term product growth.",
            icon: PenTool,
            ref: processRef3,
        },
        {
            number: "04.",
            title: "Frontend Development",
            desc: "Translating designs into clean, responsive frontend architecture with smooth micro-interactions, maintainable component structures, and performance-focused implementation.",
            icon: Code2,
            ref: processRef4,
        },
        {
            number: "05.",
            title: "Testing, Analysis & Iteration",
            desc: "Conducting usability testing, reviewing user behavior, identifying friction points, and refining the interface to improve clarity, performance, and overall product experience.",
            icon: BarChart3,
            ref: processRef5,
        },
        {
            number: "06.",
            title: "Optimization & Product Growth",
            desc: "Optimizing accessibility, performance, scalability, and AI-driven enhancements to ensure measurable business impact and long-term product success.",
            icon: Rocket,
            ref: processRef6,
        },
    ];

    return (
        <section className="px-6 overflow-hidden">
            <div className="container-sm">

                <div className="sm:mb-20 mb-10 text-center">
                    <SectionHeading
                        heading="Design Process"
                        subheading="From discovery to deployment, I follow a structured approach that blends design thinking, engineering precision, and AI-driven innovation."
                    />
                </div>

                <div className="border-t border-black/20">

                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-16 border-b border-black/20"
                            >
                                {/* Number */}
                                <div className="text-3xl font-medium text-black w-16">
                                    {step.number}
                                </div>

                                {/* Circle Icon */}
                                <div
                                    ref={step.ref}
                                    className="processCircle flex items-center justify-center"
                                >
                                    <Icon size={32} className="text-black" />
                                </div>

                                {/* Title */}
                                <h3 className="text-3xl font-semibold text-black w-full md:w-48">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-black/60 max-w-md">
                                    {step.desc}
                                </p>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}