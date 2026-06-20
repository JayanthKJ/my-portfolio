import { cn } from "../../lib/cn";

const SOCIAL_LINKS = [
  { label: "GitHub",   href: "https://github.com/JayanthKJ",          external: true  },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jayanth-k-j",     external: true  },
  { label: "Email",    href: "mailto:jayanthkj92@gmail.com",              external: false },
] as const;

const NAV_LINKS = [
  { label: "work",  href: "#work"  },
  { label: "stack", href: "#stack" },
  { label: "focus", href: "#focus" },
  { label: "about", href: "#about" },
] as const;

function ExternalIcon() {
  return (
    <svg aria-hidden="true" width="10" height="10" viewBox="0 0 12 12" fill="none"
      className="opacity-40 group-hover:opacity-70 transition-opacity duration-150">
      <path d="M2.5 9.5l7-7M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1.3"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 sm:px-8 lg:px-0 pb-12 pt-16">
      <div className="mx-auto w-full max-w-[720px]">
        <div className="mb-10 h-px bg-white/[0.06]" />

        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <span className="font-sans text-[0.9375rem] font-[500] tracking-[-0.015em] text-[#525252]">
              jaykj.xyz
            </span>
            <p className="font-mono text-[11px] leading-[1.6] text-[#3a3a3a] max-w-[240px]">
              Building AI systems and backend infrastructure.<br />
              Bengaluru, IN.
            </p>
          </div>

          <div className="flex flex-col gap-5 sm:items-end">
            <nav aria-label="Footer navigation">
              <ul className="flex items-center gap-5">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="font-mono text-[11px] tracking-[0.04em] text-[#3a3a3a] transition-colors duration-150 hover:text-[#737373]">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className="flex items-center gap-5">
              {SOCIAL_LINKS.map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={cn(
                      "group inline-flex items-center gap-1",
                      "font-mono text-[11px] text-[#3a3a3a]",
                      "transition-colors duration-150 hover:text-[#737373]"
                    )}
                  >
                    {label}
                    {external && <ExternalIcon />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] text-[#2a2a2a]">© {year} Jayanth KJ</p>
          <p className="font-mono text-[10px] text-[#2a2a2a]">React · Vite · TailwindCSS</p>
        </div>
      </div>
    </footer>
  );
}
