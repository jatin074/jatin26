import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Briefcase,
  CheckCircle2,
  Gauge,
  UserRoundCheck,
  ClipboardList,
  Target,
  FlaskConical,
  TestTube2,
} from "lucide-react";
import { getWorkBySlug, getAllWorkSlugs } from "@/app/lib/work";
import Button from "@/app/components/ui/Button";
import { ProcessSectionHover } from "@/app/components/ui/ProcessSectionHover";
import { CaseStudyCards } from "@/app/components/ui/case-study-cards";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return { title: "Project Not Found" };
  return {
    title: `${work.title} | Jatin Tiwari`,
    description: work.description,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) notFound();

  const allWorks = await import("@/app/lib/work").then((m) => m.WORKS);
  const currentIndex = allWorks.findIndex((w) => w.slug === slug);
  const prevWork = currentIndex > 0 ? allWorks[currentIndex - 1] : null;
  const nextWork = currentIndex >= 0 && currentIndex < allWorks.length - 1
    ? allWorks[currentIndex + 1]
    : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar - back & nav */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-black/60 hover:text-black text-sm font-medium transition-colors"
          >
            <ArrowLeft size={18} strokeWidth={2} />
            Back to Projects
          </Link>
          <Link
            href="/"
            className="text-black font-semibold tracking-wider text-sm"
          >
            JT
          </Link>
        </div>
      </header>

      <article className="max-w-5xl mx-auto px-6 pb-24">
        {/* Hero */}
        <div className="pt-12 sm:pt-16 mb-12">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-black/50 mb-4">
            Case Study
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black tracking-tight leading-tight mb-4">
            {work.title}
          </h1>
          <p className="text-xl text-black/60 max-w-2xl mb-8">
            {work.subtitle}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-6 text-sm text-black/60">
            <span className="flex items-center gap-2">
              <Calendar size={16} strokeWidth={1.5} />
              {work.year}
            </span>
            <span className="flex items-center gap-2">
              <Briefcase size={16} strokeWidth={1.5} />
              {work.role}
            </span>
            {work.client && (
              <span className="px-3 py-1 bg-black/5 rounded-full text-black/70">
                {work.client}
              </span>
            )}
          </div>
        </div>

        {/* Cover Media (Image or Behance Embed) */}
        <div className="relative rounded-2xl overflow-hidden border border-black/8 mb-16 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] bg-white">
          <div className="aspect-16/10 sm:aspect-video bg-black/5">
            {work.behanceEmbed ? (
              <iframe
                src={work.behanceEmbed}
                className="w-full h-full overflow-hidden"
                allowFullScreen
                loading="lazy"
                allow="clipboard-write"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : (
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
            )}
          </div>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50 mb-4">
            Overview
          </h2>
          <p className="text-lg text-black/80 leading-relaxed">
            {work.overview}
          </p>
        </section>

        <CaseStudyCards work={work} />

        {/* User needs + responsibilities — scope of impact */}
        {(work.userNeeds?.length || work.responsibilities?.length) ? (
          <section className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-24">
            {work.userNeeds?.length ? (
              <div className="rounded-2xl border border-black/10 bg-black/2 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                    <Target size={18} className="text-white" />
                  </div>
                  <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-black/50">
                    User & business needs
                  </h2>
                </div>
                <ul className="space-y-4">
                  {work.userNeeds.map((n, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500/80" />
                      <span className="text-black/75 leading-relaxed">{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div />
            )}
            {work.responsibilities?.length ? (
              <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                    <ClipboardList size={18} className="text-white" />
                  </div>
                  <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-black/50">
                    My role & responsibilities
                  </h2>
                </div>
                <ul className="space-y-4">
                  {work.responsibilities.map((r, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="shrink-0 mt-0.5 text-black/35" size={18} strokeWidth={2} />
                      <span className="text-black/75 leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div />
            )}
          </section>
        ) : null}

        {/* Research + testing */}
        {(work.researchMethods?.length || work.testingMethods?.length) ? (
          <section className="mb-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                <FlaskConical size={18} className="text-white" />
              </div>
              <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-black/50">
                Research & validation
              </h2>
            </div>
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {work.researchMethods?.length ? (
                <div className="rounded-2xl border border-black/10 p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-black mb-6 flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white text-xs font-bold">
                      R
                    </span>
                    How I researched
                  </h3>
                  <ul className="space-y-6">
                    {work.researchMethods.map((m, i) => (
                      <li key={i}>
                        <p className="font-semibold text-black">{m.title}</p>
                        <p className="mt-2 text-black/65 leading-relaxed text-sm sm:text-base">
                          {m.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {work.testingMethods?.length ? (
                <div className="rounded-2xl border border-black/10 p-6 sm:p-8 bg-linear-to-b from-white to-black/2">
                  <h3 className="text-lg font-semibold text-black mb-6 flex items-center gap-2">
                    <TestTube2 size={20} className="text-black" strokeWidth={2} />
                    Testing & what I learned
                  </h3>
                  <ul className="space-y-6">
                    {work.testingMethods.map((t, i) => (
                      <li key={i} className="border-l-2 border-black/15 pl-4">
                        <p className="font-semibold text-black">{t.title}</p>
                        <p className="mt-2 text-black/65 leading-relaxed text-sm sm:text-base">
                          {t.description}
                        </p>
                        {t.findings ? (
                          <p className="mt-3 text-sm text-black/80 leading-relaxed">
                            <span className="font-semibold text-black/90">Outcome: </span>
                            {t.findings}
                          </p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

        {/* Business Challenges */}
        {work.businessChallenges?.length ? (
          <section className="mb-28">

            <div className="">

              {/* Section label */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center border border-black">
                  <Briefcase size={18} className="text-white" />
                </div>

                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50">
                  Business Challenges
                </span>
              </div>

              {/* Big heading */}
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black leading-tight mb-10">
                Key business challenges that shaped the product strategy and design decisions.
              </h2>

              {/* List */}
              <ul className="space-y-5">

                {work.businessChallenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-4">

                    <span className="mt-2 w-2 h-2 rounded-full bg-black/40 shrink-0" />

                    <p className="text-lg text-black/70 leading-relaxed">
                      {c}
                    </p>

                  </li>
                ))}

              </ul>

            </div>

          </section>
        ) : null}


        {work.persona ? (
          <section className="mb-28">

            <div className="max-w-5xl mx-auto">

              {/* Section Header */}
              <div className="flex items-center gap-4 mb-12">
                <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center border border-green-600">
                  <UserRoundCheck size={18} className="text-white" />
                </div>

                <span className="text-sm font-semibold tracking-[0.18em] uppercase text-black/45">
                  User Persona
                </span>
              </div>

              {/* Persona Container */}
              <div className="border border-black/10 rounded-2xl p-10">

                {/* Profile */}
                <div className="flex items-center gap-6 mb-10">

                  <Image
                    src={work.persona.image}
                    alt={work.persona.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />

                  <div>
                    <h3 className="text-xl font-semibold text-black">
                      {work.persona.name}
                    </h3>

                    <p className="text-black/60">
                      {work.persona.role}
                    </p>

                    {(work.persona.age || work.persona.location) && (
                      <p className="text-sm text-black/50 mt-1">
                        {work.persona.age} • {work.persona.location}
                      </p>
                    )}
                  </div>

                </div>

                {/* About */}
                {work.persona.about && (
                  <p className="text-lg text-black/70 leading-relaxed mb-10 max-w-3xl">
                    {work.persona.about}
                  </p>
                )}

                {/* Goals & Pain Points */}
                <div className="grid md:grid-cols-2 gap-12">

                  {/* Goals */}
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-black/50 mb-5">
                      Goals
                    </h4>

                    <ul className="space-y-4">
                      {work.persona.goals.map((g, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="mt-2 w-2 h-2 rounded-full bg-black/40"></span>
                          <p className="text-black/70 leading-relaxed">{g}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pain Points */}
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-black/50 mb-5">
                      Pain Points
                    </h4>

                    <ul className="space-y-4">
                      {work.persona.pains.map((p, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="mt-2 w-2 h-2 rounded-full bg-black/40"></span>
                          <p className="text-black/70 leading-relaxed">{p}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>

            </div>

          </section>
        ) : null}

        <ProcessSectionHover process={work.process || []} />



        {/* Major Screens */}
        {work.screens?.length ? (
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center border border-black">
                <Gauge size={18} className="text-white" />
              </div>

              <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50">
                Major Screens
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {work.screens.map((screen, i) => (
                <div key={i} className="space-y-4">
                  <div className="relative h-[400px] rounded-xl overflow-hidden border border-black/10">
                    <Image src={screen.image} alt="" fill className="object-contain object-top" />
                  </div>

                  <h3 className="font-semibold text-black">{screen.title}</h3>
                  <p className="text-sm text-black/60">{screen.description}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}








        {/* Challenge & Solution - two column on desktop */}
        <div className="grid sm:grid-cols-2 gap-10 sm:gap-12 mb-16">
          <section>
            <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50 mb-4">
              The Challenge
            </h2>
            <p className="text-black/70 leading-relaxed">
              {work.challenge}
            </p>
          </section>
          <section>
            <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50 mb-4">
              The Solution
            </h2>
            <p className="text-black/70 leading-relaxed">
              {work.solution}
            </p>
          </section>
        </div>

        {/* Highlights */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50 mb-6">
            Key Highlights
          </h2>
          <ul className="space-y-4">
            {work.highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="text-emerald-500 shrink-0 mt-0.5"
                  strokeWidth={2}
                />
                <span className="text-black/80">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Outcomes & reflection */}
        {(work.outcomes?.length || work.lessonsLearned?.length) ? (
          <section className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-16">
            {work.outcomes?.length ? (
              <div className="rounded-2xl border border-black/10 bg-black text-white p-6 sm:p-8">
                <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-white/55 mb-6">
                  Impact & outcomes
                </h2>
                <ul className="space-y-4">
                  {work.outcomes.map((o, i) => (
                    <li key={i} className="flex gap-3 text-white/85 leading-relaxed">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/50" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div />
            )}
            {work.lessonsLearned?.length ? (
              <div className="rounded-2xl border border-black/10 p-6 sm:p-8">
                <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-black/50 mb-6">
                  Lessons learned
                </h2>
                <ul className="space-y-4">
                  {work.lessonsLearned.map((l, i) => (
                    <li key={i} className="text-black/75 leading-relaxed pl-4 border-l-2 border-black/10">
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div />
            )}
          </section>
        ) : null}

        {/* Tech stack */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-black/50 mb-6">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {work.tech.map((t) => (
              <span
                key={t}
                className="px-4 py-2 bg-black/5 rounded-full text-sm font-medium text-black/80 border border-black/5"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Divider */}
        <hr className="border-black/8 mb-16" />

        {/* Prev / Next */}
        <nav className="flex flex-col sm:flex-row justify-between gap-8 border-t border-black/8 pt-12">

          {/* Previous */}
          {prevWork ? (
            <Link
              href={`/mywork/${prevWork.slug}`}
              className="group flex items-center gap-5 max-w-md"
            >
              {/* Thumbnail */}
              <div className="relative w-24 h-16 rounded-lg overflow-hidden border border-black/10">
                <Image
                  src={prevWork.image}
                  alt={prevWork.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div>
                <p className="text-xs uppercase tracking-wider text-black/40 mb-1">
                  ← Previous
                </p>
                <h3 className="text-base font-semibold text-black group-hover:translate-x-1 transition-transform">
                  {prevWork.title}
                </h3>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {/* Next */}
          {nextWork ? (
            <Link
              href={`/mywork/${nextWork.slug}`}
              className="group flex items-center gap-5 max-w-md sm:text-right sm:flex-row-reverse ml-auto"
            >
              {/* Thumbnail */}
              <div className="relative w-24 h-16 rounded-lg overflow-hidden border border-black/10">
                <Image
                  src={nextWork.image}
                  alt={nextWork.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div>
                <p className="text-xs uppercase tracking-wider text-black/40 mb-1">
                  Next →
                </p>
                <h3 className="text-base font-semibold text-black group-hover:-translate-x-1 transition-transform">
                  {nextWork.title}
                </h3>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </nav>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button href="/#contact" variant="black">Start a Project</Button>
        </div>
      </article>
    </div>
  );
}
