import { Link, useLocation } from "wouter";

const navLinks = [
  { href: "/", label: "Home", exact: true },
  { href: "/curriculum", label: "Curriculum", exact: false },
  { href: "/quick-start", label: "Quick Start", exact: false },
  { href: "/about", label: "About", exact: false },
] as const;

function NavLink({ href, label, exact }: { href: string; label: string; exact: boolean }) {
  const [location] = useLocation();
  const isActive = exact ? location === href : location.startsWith(href);

  return (
    <Link
      href={href}
      className={
        isActive
          ? "rounded-md px-3 py-2 text-sm neon-text"
          : "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      }
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-display text-xl font-semibold tracking-tight text-foreground">
            Agentic <span className="italic neon-text">Schooled</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} exact={l.exact} />
          ))}
          <Link
            href="/quick-start"
            className="ml-3 inline-flex items-center rounded-md border border-[color:var(--neon-pink)] px-4 py-2 text-sm font-medium text-foreground transition-all neon-glow-sm hover:neon-glow-md"
          >
            Launch agent →
          </Link>
        </nav>
      </div>
      <div className="pointer-events-none absolute right-0 top-0 hidden lg:block">
        <div
          className="h-28 w-28 origin-top-right rotate-45 translate-x-14 -translate-y-14 bg-gradient-neon neon-glow-md animate-hum"
          aria-hidden
        />
      </div>
    </header>
  );
}
