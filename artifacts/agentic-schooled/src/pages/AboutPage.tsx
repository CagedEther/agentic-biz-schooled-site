import { useEffect } from "react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function AboutPage() {
  useEffect(() => {
    document.title = "About — Agentic Business Schooled";
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />
      <SiteHeader />

      <section className="mx-auto max-w-3xl px-6 pb-16 pt-10 lg:px-10 lg:pt-16">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          About
        </p>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          A school with <span className="neon-text">one neon sign</span> and one rule.
        </h1>

        <div className="prose-invert mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Agentic Schooled was started by builders who got tired of two things: AI content that
            mistook a Twitter thread for a curriculum, and business advice that ignored what's
            actually changed in the last 24 months.
          </p>
          <p>
            The rule: <span className="text-foreground">every lesson ends with something you do</span>.
            Read for ten minutes, then open the Quick Start sandbox and try it on a real idea — yours,
            ideally. If a lesson can't survive contact with a real proposition, it doesn't belong here.
          </p>
          <p>
            We don't sell a course. We don't run a Discord. The site stays on, the sign stays lit,
            and new lessons drop when there's something worth saying.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {[
            { k: "12", l: "lessons live" },
            { k: "01", l: "sandbox" },
            { k: "00", l: "filler" },
          ].map((s) => (
            <div key={s.l} className="bg-card p-6 text-center">
              <p className="font-display text-4xl neon-text">{s.k}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {s.l}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/curriculum"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium hover:border-[color:var(--neon-pink)] hover:neon-text"
          >
            See the curriculum
          </Link>
          <Link
            href="/quick-start"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-neon px-5 py-3 text-sm font-semibold text-primary-foreground neon-glow-md hover:neon-glow-lg"
          >
            Try the Quick Start →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
