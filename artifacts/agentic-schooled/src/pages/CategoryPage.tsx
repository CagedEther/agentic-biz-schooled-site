import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { categories, getCategory, getLessonsByCategory } from "@/data/curriculum";

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategory(slug) : undefined;
  const lessons = slug ? getLessonsByCategory(slug) : [];
  const totalMinutes = lessons.reduce((acc, l) => acc + l.readMinutes, 0);
  const otherCategories = categories.filter((c) => c.slug !== slug);

  useEffect(() => {
    if (category) {
      document.title = `${category.label} — Agentic Business Schooled`;
    } else {
      document.title = "Category not found — Agentic Business Schooled";
    }
  }, [category]);

  if (!category) {
    return (
      <div className="relative min-h-screen">
        <SiteHeader />
        <section className="mx-auto max-w-2xl px-6 py-32 text-center lg:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] neon-text">404</p>
          <h1 className="mt-4 font-display text-5xl">Category not found</h1>
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
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 bg-radial-glow opacity-50"
        aria-hidden
      />

      <SiteHeader />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto mt-4 max-w-7xl px-6 lg:px-10">
        <ol className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <li><Link href="/curriculum" className="hover:neon-text">Curriculum</Link></li>
          <li aria-hidden>/</li>
          <li className="neon-text">{category.label}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Track
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="neon-text animate-hum">{category.label}</span>
            </h1>
            <p className="mt-4 font-display text-2xl italic text-muted-foreground">
              {category.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              {category.description}
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              <div className="bg-card p-5 text-center">
                <p className="font-display text-3xl neon-text">{lessons.length}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  lessons
                </p>
              </div>
              <div className="bg-card p-5 text-center">
                <p className="font-display text-3xl neon-text-purple">{totalMinutes}m</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  total read
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons list */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border">
          {lessons.map((l) => (
            <li key={l.slug}>
              <Link
                href={`/curriculum/${l.slug}`}
                className="group flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-secondary sm:flex-row sm:items-center sm:gap-8 sm:p-8"
              >
                <div className="font-mono text-2xl neon-text sm:w-16">{l.number}</div>
                <div className="flex-1">
                  <h2 className="font-display text-2xl text-foreground transition-colors group-hover:neon-text">
                    {l.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{l.description}</p>
                </div>
                <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground sm:flex-col sm:items-end sm:gap-1">
                  <span>{l.readMinutes} min</span>
                  <span className="text-foreground transition-colors group-hover:neon-text">
                    Read →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Other tracks */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Other tracks
        </p>
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {otherCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="group bg-card p-6 transition-colors hover:bg-secondary"
            >
              <h3 className="font-display text-2xl transition-colors group-hover:neon-text">
                {c.label}
              </h3>
              <p className="mt-2 text-sm italic text-muted-foreground">{c.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
