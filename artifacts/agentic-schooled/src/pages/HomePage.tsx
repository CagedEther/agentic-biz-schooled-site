import { useEffect } from "react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import neonHero from "@/assets/neon-hero.jpg";
import neonAgent from "@/assets/neon-agent.jpg";

const featuredLessons = [
  {
    n: "01",
    title: "What is an agent, really?",
    desc: "Strip away the hype. A working definition you can actually build against.",
    slug: "what-is-an-agent",
  },
  {
    n: "02",
    title: "Tools, memory, and the loop",
    desc: "The three primitives behind every agent worth shipping.",
    slug: "tools-memory-loop",
  },
  {
    n: "03",
    title: "Models as components",
    desc: "Choosing a model is an architecture decision, not a vibe.",
    slug: "models-as-components",
  },
  {
    n: "04",
    title: "Designing the tool surface",
    desc: "Bad tools = bad agents. How to design ones an LLM can actually wield.",
    slug: "designing-the-tool-surface",
  },
];

export function HomePage() {
  useEffect(() => {
    document.title = "Agentic Business Schooled — Learn to build, ship, and test AI agents";
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 bg-radial-glow opacity-60"
        aria-hidden
      />

      <SiteHeader />

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-10 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="neon-text">●</span> Now schooling — Cohort 04
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Welcome to{" "}
              <span className="neon-text animate-hum">Agentic</span> Business{" "}
              <span className="animate-hum" style={{ color: "inherit" }}>Schooled</span>, the curriculum for
              builders who'd rather <em className="text-muted-foreground">ship an agent</em> than
              read another textbook.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              Plain-spoken lessons on what AI agents actually are, what they're good for, and the
              boring work of making one earn its keep. When you're ready to test an idea, hit Quick
              Start — an agent will pressure-test your business proposition in minutes.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/quick-start"
                className="group inline-flex items-center gap-2 rounded-md bg-gradient-neon px-6 py-3 text-sm font-semibold text-primary-foreground neon-glow-md transition-all hover:neon-glow-lg"
              >
                Quick Start: test a business idea
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/curriculum"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-[color:var(--neon-pink)] hover:neon-text"
              >
                Browse the curriculum
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <img
                src={neonHero}
                alt="Glowing pink and purple neon sign reading Agentic Schooled mounted on a dark brick wall"
                width={1536}
                height={1024}
                className="h-auto w-full"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[color:var(--neon-pink)]/30" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-card/80 px-4 py-3 backdrop-blur-sm sm:block">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Open · 24/7
              </p>
              <p className="font-display text-lg neon-text">Class is in session</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK START CALLOUT */}
      <section className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--neon-pink)]/40 bg-card/60 p-8 sm:p-12 neon-glow-sm">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-radial-glow"
            aria-hidden
          />
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.25em] neon-text">
                The Quick Start
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                Got a business idea? <br />
                <span className="neon-text-purple">Let an agent take it apart.</span>
              </h2>
              <p className="mt-6 max-w-xl text-muted-foreground">
                Drop in a one-paragraph proposition. Our agent will identify the customer, the
                wedge, the unit economics worth questioning, and three things that will probably
                kill it. Useful in about 90 seconds.
              </p>
              <Link
                href="/quick-start"
                className="mt-8 inline-flex items-center gap-2 rounded-md border border-[color:var(--neon-pink)] px-5 py-3 text-sm font-medium text-foreground neon-glow-sm transition-all hover:neon-glow-md"
              >
                Open the sandbox →
              </Link>
            </div>
            <div className="relative lg:col-span-5">
              <img
                src={neonAgent}
                alt="Neon outline of an AI agent head glowing pink"
                loading="lazy"
                width={1024}
                height={1024}
                className="mx-auto h-64 w-64 object-contain drop-shadow-[0_0_30px_rgba(255,80,180,0.6)] animate-hum"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              The curriculum
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              Lessons you <span className="neon-text">won't find</span> in a textbook.
            </h2>
          </div>
          <Link href="/curriculum" className="hidden text-sm text-muted-foreground hover:neon-text sm:block">
            See all lessons →
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {featuredLessons.map((l) => (
            <article
              key={l.n}
              className="group relative bg-card p-8 transition-colors hover:bg-secondary"
            >
              <p className="font-mono text-xs neon-text">{l.n}</p>
              <h3 className="mt-3 font-display text-2xl text-foreground">{l.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{l.desc}</p>
              <Link
                href={`/curriculum/${l.slug}`}
                className="mt-6 inline-block text-sm text-muted-foreground transition-colors group-hover:neon-text"
              >
                Read lesson →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          The thesis
        </p>
        <p className="mt-6 font-display text-3xl leading-snug text-foreground sm:text-4xl">
          You don't learn to build agents by{" "}
          <span className="neon-text">reading about agents.</span> You learn by pointing one at a
          messy problem and watching what breaks.
        </p>
        <p className="mt-6 text-muted-foreground">
          That's the whole school. Lessons on the left, sandbox on the right.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
