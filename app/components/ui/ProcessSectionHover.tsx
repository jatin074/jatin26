"use client"

import { Gauge } from "lucide-react"

type ProcessItem = {
    title: string
    description: string
}

interface Props {
    process: ProcessItem[]
}

export function ProcessSectionHover({ process }: Props) {
    if (!process?.length) return null

    return (
        <section className="mb-24">
            <div className="flex items-center gap-4 mb-16">
                <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center border border-black">
                    <Gauge size={18} className="text-white" />
                </div>

                <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50">
                    Our Process
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl">
                {process.map((item, index) => (
                    <Feature
                        key={index}
                        title={item.title}
                        description={item.description}
                        index={index}
                    />
                ))}
            </div>
        </section>
    )
}

const Feature = ({
    title,
    description,
    index,
}: {
    title: string
    description: string
    index: number
}) => {
    return (
        <div
            className={`flex flex-col lg:border-r py-10 relative group/feature border-black/10
  ${index === 0 || index === 4 ? "lg:border-l" : ""}
  ${index < 4 ? "lg:border-b" : ""}
`}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            )}

            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
            )}

            {/* Step Number */}
            <div className="mb-4 relative z-10 px-10 text-black/50 font-semibold">
                Step {index + 1}
            </div>

            {/* Title */}
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-black/20 group-hover/feature:bg-black transition-all duration-200 origin-center" />

                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-black">
                    {title}
                </span>
            </div>

            {/* Description */}
            <p className="text-sm text-black/60 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    )
}