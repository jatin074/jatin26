"use client";

export default function WhyMeSection() {
  const stats = [
    {
      number: "15+",
      label: "Production Features Shipped",
    },
    {
      number: "10+",
      label: "Web3 Integrations Built",
    },
    {
      number: "5+",
      label: "dApps & Web Products Delivered",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container-sm">
        {/* 40% / 60% Layout */}
        <div className="flex flex-col lg:flex-row gap-20">

          {/* LEFT SIDE - 40% */}
          <div className="lg:w-[50%]">
            <p className="sectionlabel">Why Me</p>
            <h2 className="heading-dark mb-6 leading-tight">
              Engineering Mindset. <br /> Production Results.
            </h2>

            <ul className="space-y-4 text-black/70 text-sm sm:text-base">
              {[
                "Product-first mindset with strong Web2 foundation",
                "Modern Web3 development & secure infrastructure integration",
                "AI-powered productivity without sacrificing code quality",
                "Ownership mentality with clean, maintainable code",
                "Continuous learning & rapid adaptation to new ecosystems",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="inline-block text-purple-600 animate-spin-slow leading-0 tracking-tighter text-center">
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-12 border-l-2 border-black/10 pl-6">
              <p className="text-black/70 italic text-sm">
                &ldquo;Jatin brings a product-first approach to Web3 engineering.
                He ships fast, thinks about security upfront, and delivers
                production-quality code that the team can maintain.&rdquo;
              </p>
              <p className="mt-4 text-black font-medium text-sm">
                — Engineering Team Feedback
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - 60% */}
          <div className="lg:w-[50%]">

            {/* Top 3 Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-[#f5f5f5] border border-black/5 rounded-2xl p-8 sm:h-[280px] flex flex-col justify-between transition-all duration-500 hover:bg-black hover:-translate-y-2"
                >
                  {/* Faded Background Number */}
                  <span className="absolute -top-6 -right-4 text-[70px] opacity-70 font-normal text-slate-300/40 select-none pointer-events-none transition duration-500">
                    {stat.number}
                  </span>

                  {/* Main Number */}
                  <h3 className="text-5xl font-normal text-black transition duration-500 group-hover:text-white relative z-10">
                    {stat.number}
                  </h3>

                  {/* Label */}
                  <p className="text-black/70 text-sm transition duration-500 group-hover:text-white/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* BIG HORIZONTAL CARD */}
            <div className="group relative overflow-hidden sm:bg-[#f5f5f5] bg-black border border-black/5 rounded-2xl p-10 h-[240px] flex flex-col justify-between transition-all duration-500 hover:bg-black hover:-translate-y-2">

              {/* Faded Background Text */}
              <span className="absolute -top-6 sm:right-4 -right-4 text-[70px] font-normal text-slate-300/40 select-none pointer-events-none transition duration-500">
                3+
              </span>

              {/* Main Number */}
              <h3 className="text-6xl font-normal text-white sm:text-black transition duration-500 group-hover:text-white relative z-10">
                3+
              </h3>

              {/* Description */}
              <p className="sm:text-black/70 text-white/70 text-base transition duration-500 group-hover:text-white/70 max-w-md">
                Years of professional experience building Web2 and Web3 products
                — from dApps and wallet integrations to full-stack features with
                security, scalability, and user experience at the core.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Slow Spin Animation */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}