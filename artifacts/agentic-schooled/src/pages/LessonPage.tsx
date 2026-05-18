import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getLesson, getRelatedLessons, lessons } from "@/data/curriculum";

export function LessonPage() {
  const { slug } = useParams<{ slug: string }>();
  const lesson = slug ? getLesson(slug) : undefined;
  const related = slug ? getRelatedLessons(slug, 3) : [];
  const currentIdx = lesson ? lessons.findIndex((l) => l.slug === lesson.slug) : -1;
  const prev = currentIdx > 0 ? lessons[currentIdx - 1] : null;
  const next = currentIdx < lessons.length - 1 && currentIdx >= 0 ? lessons[currentIdx + 1] : null;

  useEffect(() => {
    if (lesson) {
      document.title = `${lesson.title} — Agentic Schooled`;
    } else {
      document.title = "Lesson not found — Agentic Schooled";
    }
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="relative min-h-screen">
        <SiteHeader />
        <section className="mx-auto max-w-2xl px-6 py-32 text-center lg:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] neon-text">404</p>
          <h1 className="mt-4 font-display text-5xl">Lesson not found</h1>
          <p className="mt-4 text-muted-foreground">
            This lesson hasn't been written yet, or the URL is wrong.
          </p>
          <Link
            href="/curriculum"
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-[color:var(--neon-pink)] px-5 py-3 text-sm neon-glow-sm hover:neon-glow-md"
          >
            Back to curriculum
          </Link>
        </section>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" aria-hidden />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[400px] w-[700px] -translate-x-1/2 bg-radial-glow opacity-40"
        aria-hidden
      />

      <SiteHeader />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mx-auto mt-4 max-w-3xl px-6 lg:px-10">
        <ol className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <li>
            <Link href="/curriculum" className="hover:neon-text">Curriculum</Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href={`/category/${lesson.category}`} className="hover:neon-text">
              {lesson.categoryLabel}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="neon-text">{lesson.number}</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mx-auto max-w-3xl px-6 pb-8 pt-8 lg:px-10">
        <p className="font-mono text-xs neon-text">Lesson {lesson.number}</p>
        <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          {lesson.title}
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
          {lesson.description}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-border py-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span>By {lesson.author}</span>
          <span aria-hidden>·</span>
          <time dateTime={lesson.publishedAt}>
            {new Date(lesson.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <span aria-hidden>·</span>
          <span>{lesson.readMinutes} min read</span>
        </div>
      </header>

      {/* Content + sidebar */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pb-16 lg:grid-cols-12 lg:px-10">
        <article className="lg:col-span-8">
          {/* TLDR */}
          <aside className="mb-12 rounded-2xl border border-[color:var(--neon-pink)]/40 bg-card/60 p-6 neon-glow-sm">
            <p className="font-mono text-xs uppercase tracking-widest neon-text">TL;DR</p>
            <ul className="mt-4 space-y-2">
              {lesson.tldr.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--neon-pink)] neon-glow-sm" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Body */}
          <div className="space-y-12">
            {lesson.body.map((section, i) => (
              <section key={section.heading} id={`section-${i + 1}`} className="scroll-mt-24">
                <h2 className="font-display text-3xl tracking-tight">{section.heading}</h2>
                <div className="mt-5 space-y-5 text-lg leading-relaxed text-muted-foreground">
                  {section.paragraphs.map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Try this — sandbox CTA */}
          <aside className="mt-16 overflow-hidden rounded-2xl border border-[color:var(--neon-pink)]/40 bg-card/60 p-8 neon-glow-sm">
            <p className="font-mono text-xs uppercase tracking-widest neon-text">
              ● Try this in the sandbox
            </p>
            <p className="mt-4 font-display text-2xl leading-snug">{lesson.tryThis}</p>
            <Link
              href="/quick-start"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-neon px-5 py-3 text-sm font-semibold text-primary-foreground neon-glow-md hover:neon-glow-lg"
            >
              Open Quick Start →
            </Link>
          </aside>

          {/* Prev / Next */}
          <nav className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/curriculum/${prev.slug}`}
                className="group rounded-xl border border-border p-5 transition-colors hover:border-[color:var(--neon-pink)]/40"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  ← Previous
                </p>
                <p className="mt-2 font-display text-lg group-hover:neon-text">{prev.title}</p>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/curriculum/${next.slug}`}
                className="group rounded-xl border border-border p-5 text-right transition-colors hover:border-[color:var(--neon-pink)]/40"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Next →
                </p>
                <p className="mt-2 font-display text-lg group-hover:neon-text">{next.title}</p>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-8 space-y-8">
            <div className="rounded-xl border border-border p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                In this lesson
              </p>
              <ol className="mt-4 space-y-3 text-sm">
                {lesson.body.map((section, i) => (
                  <li key={section.heading} className="flex gap-3">
                    <span className="font-mono text-xs neon-text">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <a
                      href={`#section-${i + 1}`}
                      className="text-muted-foreground transition-colors hover:neon-text"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {related.length > 0 && (
              <div className="rounded-xl border border-border p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Related lessons
                </p>
                <ul className="mt-4 space-y-4">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/curriculum/${r.slug}`} className="group block">
                        <p className="font-mono text-[11px] neon-text">{r.number}</p>
                        <p className="mt-1 font-display text-base leading-snug text-foreground transition-colors group-hover:neon-text">
                          {r.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>

      <SiteFooter />
    </div>
  );
}
