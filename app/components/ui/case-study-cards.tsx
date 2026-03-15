"use client"

import { Briefcase, CheckCircle2, Gauge } from "lucide-react"

export function CaseStudyCards({ work }: any) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">

      {/* Top Full Width Card */}
      {work.problemStatement && (
        <Card className="md:col-span-2">
          <IconBox icon={<Briefcase size={18} className="text-white" />} />

          <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-black">
            Problem Statement
          </h3>

          <p className="max-w-2xl text-black/70 leading-relaxed">
            {work.problemStatement}
          </p>
        </Card>
      )}

      {/* Left Middle Card */}
      {work.goals?.length && (
        <Card>
          <IconBox icon={<CheckCircle2 size={18} className="text-white" />} />

          <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-black">
            Objectives & Goals
          </h3>

          <ul className="space-y-3">
            {work.goals.map((goal: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-1 shrink-0" />
                <span className="text-black/70 leading-relaxed">
                  {goal}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Right Middle Card */}
      {work.competitors?.length && (
        <Card>
          <IconBox icon={<Gauge size={18} className="text-white"/>} />

          <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-black">
            Competitor Analysis
          </h3>

          <div className="space-y-4">
            {work.competitors.map((c: any, i: number) => (
              <div key={i}>
                <h4 className="font-semibold text-black mb-1">
                  {c.name}
                </h4>
                <p className="text-black/70 leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Bottom Full Width Card */}
      {work.features?.length && (
        <Card className="md:col-span-2">
          <IconBox icon={<Briefcase size={18} className="text-white" />} />

          <h3 className="mb-6 text-xl sm:text-2xl font-semibold text-black">
            Unique Features
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {work.features.map((feature: any, i: number) => (
              <div key={i}>
                <h4 className="font-semibold text-black mb-1">
                  {feature.title}
                </h4>

                <p className="text-black/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Card>
      )}

    </section>
  )
}

/* Card */

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`group relative bg-white rounded-2xl sm:rounded-[20px] p-6 sm:p-8 border border-black/50 transition-all duration-500 ${className}`}
    >
      {children}
    </div>
  )
}

/* Icon Box */

function IconBox({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="mb-6 w-10 h-10 rounded-lg bg-black flex items-center justify-center border border-black">
      {icon}
    </div>
  )
}