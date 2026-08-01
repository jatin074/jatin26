


"use client";

import React, { useEffect, useRef } from "react";
import {
    Search,
    PenTool,
    Code2,
    LayoutGrid,
    Rocket,
    Palette
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
            title: "Product Discovery",
            desc: "Understanding product goals, business requirements, user pain points, and technical constraints before writing a single line of code. I define scope, success metrics, and feasibility early to align engineering work with real outcomes.",
            icon: Search,
            ref: processRef1,
        },
        {
            number: "02.",
            title: "User & Technical Research",
            desc: "Researching existing products, competitor solutions, blockchain infrastructure, security considerations, UX patterns, and developer documentation. I evaluate Web3 providers, wallet flows, and integration options to inform sound technical decisions.",
            icon: LayoutGrid,
            ref: processRef2,
        },
        {
            number: "03.",
            title: "AI-assisted Exploration",
            desc: "Using agentic AI and prompt engineering with ChatGPT, Claude, and Cursor to compare approaches, validate architecture, accelerate research, identify risks, and explore implementation strategies — with all engineering decisions validated manually.",
            icon: Palette,
            ref: processRef3,
        },
        {
            number: "04.",
            title: "Architecture & Planning",
            desc: "Designing scalable architecture, defining APIs, choosing infrastructure, evaluating Web3 providers, and optimizing developer experience. I plan for security, performance, and maintainability from the start.",
            icon: Code2,
            ref: processRef4,
        },
        {
            number: "05.",
            title: "Implementation",
            desc: "Building production-ready solutions with clean architecture, testing, performance optimization, and security best practices. I ship features incrementally while maintaining code quality and clear documentation.",
            icon: PenTool,
            ref: processRef5,
        },
        {
            number: "06.",
            title: "Testing & Iteration",
            desc: "Validating functionality, improving UX, optimizing performance, gathering feedback, and continuously iterating. I treat every release as a learning cycle that sharpens the product and the engineering approach.",
            icon: Rocket,
            ref: processRef6,
        },
    ];

    return (
        <section className="px-6 overflow-hidden">
            <div className="container-sm">

                <div className="sm:mb-20 mb-10 text-center">
                    <SectionHeading
                        heading="Research Process"
                        subheading="I solve engineering problems before writing code — combining structured research, AI-assisted exploration, and hands-on validation to ship the right solution."
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
                                    <Icon size={32} />
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