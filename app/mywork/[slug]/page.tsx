import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Briefcase, CheckCircle2 } from "lucide-react";
import { getWorkBySlug, getAllWorkSlugs } from "@/app/lib/work";

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

      <article className="max-w-4xl mx-auto px-6 pb-24">
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

        {/* Cover image */}
        <div className="relative rounded-2xl overflow-hidden border border-black/8 mb-16 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)]">
          <div className="aspect-[16/10] sm:aspect-[16/9] bg-black/5">
            <Image
              src={work.image}
              alt={work.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
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
        <nav className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          {prevWork ? (
            <Link
              href={`/mywork/${prevWork.slug}`}
              className="group flex-1 p-6 rounded-xl border border-black/8 hover:border-black/15 hover:bg-black/[0.02] transition-all"
            >
              <p className="text-xs font-medium tracking-wider uppercase text-black/50 mb-2">
                Previous Project
              </p>
              <p className="font-semibold text-black group-hover:text-black/80 transition">
                {prevWork.title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {nextWork ? (
            <Link
              href={`/mywork/${nextWork.slug}`}
              className="group flex-1 p-6 rounded-xl border border-black/8 hover:border-black/15 hover:bg-black/[0.02] transition-all text-right"
            >
              <p className="text-xs font-medium tracking-wider uppercase text-black/50 mb-2">
                Next Project
              </p>
              <p className="font-semibold text-black group-hover:text-black/80 transition">
                {nextWork.title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </nav>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-medium rounded-xl hover:bg-black/90 transition-colors"
          >
            Start a Project
            <ArrowLeft size={18} className="rotate-180" strokeWidth={2} />
          </Link>
        </div>
      </article>
    </div>
  );
}
