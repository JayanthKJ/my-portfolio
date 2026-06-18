import { useCallback } from "react";
import { cn } from "../../lib/cn";
import { useActiveSection } from "../../hooks/useActiveSection";

const NAV_ITEMS = [
  { label: "work",  href: "work"  },
  { label: "stack", href: "stack" },
  { label: "focus", href: "focus" },
  { label: "about", href: "about" },
] as const;

export default function Nav() {
  const active = useActiveSection(NAV_ITEMS.map((n) => n.href));

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto flex max-w-[720px] items-center justify-between px-6 sm:px-8 lg:px-0 h-14">

        {/* Wordmark */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-[13px] text-[#525252] hover:text-[#a3a3a3] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3ecf8e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded-sm"
        >
          jaykj.xyz
        </button>

        {/* Nav pill */}
        <nav aria-label="Primary navigation">
          <div className="flex items-center gap-0.5 rounded-[8px] border border-white/[0.07] bg-white/[0.03] px-1 py-1 backdrop-blur-sm">
            {NAV_ITEMS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={cn(
                  "rounded-[6px] px-3 py-1.5",
                  "font-mono text-[11px] tracking-[0.02em]",
                  "transition-all duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3ecf8e] focus-visible:ring-offset-1 focus-visible:ring-offset-[#0a0a0a]",
                  active === href
                    ? "bg-white/[0.08] text-[#a3a3a3]"
                    : "text-[#3a3a3a] hover:text-[#737373]"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>

        {/* Contact CTA */}
        <a
          href="mailto:hey@jaykj.xyz"
          className={cn(
            "hidden sm:inline-flex items-center gap-1.5",
            "rounded-[7px] border border-white/[0.08] bg-white/[0.03]",
            "px-3 py-1.5",
            "font-mono text-[11px] text-[#3a3a3a]",
            "transition-all duration-150",
            "hover:border-white/[0.14] hover:text-[#737373]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3ecf8e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
          )}
        >
          hey@jaykj.xyz
        </a>

      </div>

      {/* Hairline border */}
      <div className="h-px bg-white/[0.04]" />
    </header>
  );
}
