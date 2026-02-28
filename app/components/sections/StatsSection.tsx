"use client";

export default function StatsSection() {
  const stats = [
    {
      number: "10+",
      label: "SaaS Dashboard Designs",
    },
    {
      number: "20+",
      label: "Landing Pages Designed",
    },
    {
      number: "20+",
      label: "React, Next.js & Tailwind Projects",
    },
    {
      number: "3+",
      label: "Years of Experience",
    },
  ];

  return (
    <section className="bg-black py-16 sm:py-24 border-y border-white/5">
      <div className="container-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-[#111] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-white/30 hover:-translate-y-1"
            >
              <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
                {stat.number}
              </h3>
              <p className="text-white/60 text-sm sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}