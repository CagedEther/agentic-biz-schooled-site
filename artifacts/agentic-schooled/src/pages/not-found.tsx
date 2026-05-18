import { useEffect } from "react";
import { Link } from "wouter";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 — Agentic Schooled";
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <h1 className="font-display text-7xl neon-text animate-flicker">404</h1>
      <h2 className="mt-4 font-display text-2xl text-foreground">Page not found</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        The sign for this page burned out. Try the homepage.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-md border border-[color:var(--neon-pink)] px-5 py-2 text-sm font-medium text-foreground neon-glow-sm transition-all hover:neon-glow-md"
      >
        Back to base
      </Link>
    </div>
  );
}
