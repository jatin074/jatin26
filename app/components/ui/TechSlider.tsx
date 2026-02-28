"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

export interface TechItem {
    name: string;
    icon: string;
}

interface TechSliderProps {
    items: TechItem[];
}

export default function TechSlider({ items }: TechSliderProps) {
    // Duplicate for seamless effect
    const duplicatedItems = [...items, ...items];

    return (
        <div className="relative bg-white/90 backdrop-blur-md rounded-xl py-6 shadow-xl overflow-hidden">

            {/* LEFT MIST */}
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white via-white/70 to-transparent z-20 pointer-events-none" />

            {/* RIGHT MIST */}
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white via-white/70 to-transparent z-20 pointer-events-none" />

            <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                loop={true}
                speed={5000}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                allowTouchMove={true}
                grabCursor={true}
                breakpoints={{
                    0: {
                        spaceBetween: 20,
                    },
                    640: {
                        spaceBetween: 40,
                    },
                    1024: {
                        spaceBetween: 60,
                    },
                }}
            >
                {duplicatedItems.map((tech, index) => (
                    <SwiperSlide
                        key={index}
                        className="!w-auto flex items-center justify-center group"
                    >
                        <div className="flex items-center gap-3 transition duration-300">
                            <div className="relative sm:w-8 sm:h-8 w-6 h-6">
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    fill
                                    className="
                    object-contain
                   
                    opacity-100
                    transition duration-300
                    group-hover:grayscale-0
                    group-hover:opacity-100
                  "
                                />
                            </div>

                            <span className="sm:text-lg text-sm font-medium text-gray-600 tracking-wide transition duration-300 group-hover:text-black">
                                {tech.name}
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}