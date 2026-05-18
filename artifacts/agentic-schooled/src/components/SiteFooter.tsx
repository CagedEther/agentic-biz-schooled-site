import { Link } from "wouter";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <h3 className="font-display text-2xl"><span className="neon-text">Agentic</span> Business Schooled</h3>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            The unconventional curriculum for builders who'd rather ship an agent than read another textbook.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Learn</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/curriculum" className="hover:neon-text">Curriculum</Link></li>
            <li><Link href="/quick-start" className="hover:neon-text">Quick Start</Link></li>
            <li><Link href="/about" className="hover:neon-text">About</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Stay schooled</p>
          <p className="mt-4 text-sm text-muted-foreground">
            New lessons drop monthly. No spam, just signal.
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground lg:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Agentic Business Schooled. All rights reserved.</p>
          <p className="font-mono">// keep the sign humming</p>
        </div>
      </div>
    </footer>
  );
}
