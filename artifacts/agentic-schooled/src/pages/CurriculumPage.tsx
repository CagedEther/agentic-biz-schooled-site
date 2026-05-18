import { useEffect } from "react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { categories, getLessonsByCategory } from "@/data/curriculum";

export function CurriculumPage() {
  useEffect(() => {
    document.title = "Curriculum — Agentic Schooled";
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pb-12 pt-10 lg:px-10 lg:pt-16">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          The curriculum
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          Twelve lessons. <span className="neon-text">Zero filler.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Read in any order. Each lesson is roughly 10 minutes and ends with one thing to try in the
          Quick Start sandbox.
        </p>
        <div className="mt-8">
          <Link
            href="/quick-start"
            className="inline-flex items-center gap-2 rounded-md border border-[color:var(--neon-pink)] px-5 py-3 text-sm font-medium text-foreground neon-glow-sm transition-all hover:neon-glow-md"
          >
            Skip to Quick Start →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="space-y-16">
          {categories.map((cat) => {
            const items = getLessonsByCategory(cat.slug);
            return (
              <div key={cat.slug}>
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4">
                  <div>
                    <Link
                      href={`/category/${cat.slug}`}
                      className="group inline-flex items-baseline gap-3"
                    >
                      <h2 className="font-display text-3xl tracking-tight transition-colors group-hover:neon-text">
                        {cat.label}
                      </h2>
                      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:neon-text">
                        View track →
                      </span>
                    </Link>
                    <p className="mt-1 font-display italic text-muted-foreground">{cat.tagline}</p>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {items.length} lessons
                  </span>
                </div>
                <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
                  {items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/curriculum/${item.slug}`}
                      className="group bg-card p-7 transition-colors hover:bg-secondary"
                    >
                      <p className="font-mono text-xs neon-text">{item.number}</p>
                      <h3 className="mt-3 font-display text-xl">{item.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                      <p className="mt-6 text-sm text-muted-foreground transition-colors group-hover:neon-text">
                        Read lesson →
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
