import { useEffect, useState } from "react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

type Section = { title: string; body: string };

function generateMockAnalysis(idea: string): Section[] {
  const trimmed = idea.trim();
  return [
    {
      title: "The customer",
      body: `Best read of the buyer for "${trimmed.slice(0, 80)}${
        trimmed.length > 80 ? "…" : ""
      }": a specific operator who feels this pain weekly, has budget authority under $5k, and would tell two peers if it actually worked. Be ruthless about who it isn't.`,
    },
    {
      title: "The wedge",
      body: "The narrowest possible first deliverable an agent could ship in week one — not the platform vision. If you can't describe it in one sentence, the wedge is still too wide.",
    },
    {
      title: "Unit economics worth questioning",
      body: "Inference cost per successful task, human-in-the-loop minutes per task, and the ceiling on what this customer will pay per outcome. Two of those three usually move against you.",
    },
    {
      title: "Three things that will probably kill it",
      body: "1) The workflow has a regulated step the agent can't legally touch. 2) The buyer wants determinism the model can't promise. 3) A larger incumbent ships a 'good enough' version inside their existing tool before you reach distribution.",
    },
    {
      title: "What to test this week",
      body: "Five concierge runs. No code. You — or a contractor — performs the agent's job manually for five real customers. If they don't pay or refer, the agent won't change that.",
    },
  ];
}

export function QuickStartPage() {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Section[] | null>(null);

  useEffect(() => {
    document.title = "Quick Start — Test a business idea with an agent | Agentic Schooled";
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim() || loading) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult(generateMockAnalysis(idea));
      setLoading(false);
    }, 1100);
  };

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 bg-radial-glow opacity-50"
        aria-hidden
      />

      <SiteHeader />

      <section className="mx-auto max-w-4xl px-6 pb-12 pt-10 lg:px-10 lg:pt-16">
        <p className="font-mono text-xs uppercase tracking-[0.25em] neon-text">
          ● Quick Start sandbox
        </p>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          Pitch your idea. <br />
          <span className="neon-text-purple">Let the agent take it apart.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          One paragraph is plenty. The agent will return a customer read, the wedge, the unit
          economics worth questioning, and three things most likely to kill it.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16 lg:px-10">
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-[color:var(--neon-pink)]/40 bg-card/60 p-6 sm:p-8 neon-glow-sm"
        >
          <label htmlFor="idea" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Your business proposition
          </label>
          <textarea
            id="idea"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="E.g. An AI agent that watches a small clinic's inbox, drafts replies in the doctor's voice, and flags anything urgent for human review. Charged per resolved message."
            rows={6}
            className="mt-3 w-full resize-none rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-[color:var(--neon-pink)] focus:outline-none focus:ring-0"
          />
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              {idea.length} chars · No data stored.
            </p>
            <button
              type="submit"
              disabled={!idea.trim() || loading}
              className="inline-flex items-center gap-2 rounded-md bg-gradient-neon px-6 py-3 text-sm font-semibold text-primary-foreground neon-glow-md transition-all hover:neon-glow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:neon-glow-md"
            >
              {loading ? "Agent thinking…" : "Run the agent →"}
            </button>
          </div>
        </form>

        <div className="mt-10">
          {loading && (
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-widest neon-text animate-flicker">
                ● Agent running
              </p>
              <div className="mt-4 space-y-3">
                {["Reading proposition", "Modeling the buyer", "Pressure-testing economics", "Drafting kill scenarios"].map(
                  (s, i) => (
                    <div key={s} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span
                        className="h-2 w-2 rounded-full bg-[color:var(--neon-pink)] neon-glow-sm"
                        style={{ animation: `neon-pulse 1.2s ${i * 0.2}s infinite` }}
                      />
                      {s}…
                    </div>
                  ),
                )}
              </div>
            </div>
          )}

          {result && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-widest neon-text">● Analysis complete</p>
                <button
                  onClick={() => {
                    setResult(null);
                    setIdea("");
                  }}
                  className="text-xs text-muted-foreground hover:neon-text"
                >
                  Start over
                </button>
              </div>
              {result.map((s, i) => (
                <article
                  key={s.title}
                  className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-[color:var(--neon-pink)]/40"
                >
                  <p className="font-mono text-xs neon-text">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-display text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </article>
              ))}
              <p className="pt-4 text-center text-xs text-muted-foreground">
                This sandbox runs a templated demo agent. Wire it to a live model when you're ready.
              </p>
            </div>
          )}

          {!loading && !result && (
            <div className="rounded-xl border border-dashed border-border p-8 text-center">
              <p className="text-sm text-muted-foreground">
                Output will appear here. Try a real idea — vague pitches get vague answers.
              </p>
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
