import { cn } from "../lib/cn";
import { STACK } from "../data/stack";
import type { Tech } from "../types";

type Group = Tech["group"];

const GROUPS: { key: Group; label: string; caption: string }[] = [
  { key: "frontend", label: "Frontend", caption: "interfaces" },
  { key: "backend",  label: "Backend",  caption: "core systems" },
  { key: "ai",       label: "AI",       caption: "model layer" },
  { key: "infra",    label: "Infra",    caption: "delivery" },
];

export default function Stack() {
  const byGroup = (g: Group) => STACK.filter((t) => t.group === g);

  return (
    <section id="stack" className="px-6 sm:px-8 lg:px-0 py-24">
      <div className="mx-auto w-full max-w-[720px]">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#4a4a4a]">Stack</p>
          <p className="max-w-[360px] font-sans text-[13px] leading-[1.65] text-[#737373]">
            Backend-first systems, AI where it earns its keep, and frontend kept sharp enough to ship.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-[0.9fr_1.25fr_1.1fr_0.95fr]">
          {GROUPS.map(({ key, label, caption }) => (
            <div
              key={key}
              className={cn(
                "flex flex-col rounded-[10px] border p-5 transition-colors duration-200",
                key === "backend" && "border-white/[0.14] bg-[#151515]",
                key === "ai" && "border-[#3ecf8e]/25 bg-[#102018] shadow-[0_0_34px_rgba(62,207,142,0.07)]",
                key === "frontend" && "border-white/[0.06] bg-[#101010]",
                key === "infra" && "border-white/[0.09] bg-[#121212]",
              )}
            >
              <div className="mb-5 flex items-baseline justify-between gap-3">
                <p
                  className={cn(
                    "font-mono text-[10px] tracking-[0.08em] uppercase",
                    key === "ai" ? "text-[#3ecf8e]" : key === "backend" ? "text-[#a3a3a3]" : "text-[#525252]",
                  )}
                >
                  {label}
                </p>
                <span className="font-mono text-[10px] text-[#3a3a3a]">{caption}</span>
              </div>
              <ul className="flex flex-col gap-3">
                {byGroup(key).map(({ name, role }) => (
                  <li key={name} className="group flex flex-col gap-0.5">
                    <span className={cn("font-sans text-[13px] font-[500] tracking-[-0.01em] transition-colors duration-150",
                      key === "backend" ? "text-[#d4d4d4]" : "text-[#8a8a8a] group-hover:text-[#b8b8b8]",
                      key === "ai" && "text-[#a7f3c8] group-hover:text-[#3ecf8e]",
                      key === "frontend" && "text-[#737373]")}>
                      {name}
                    </span>
                    <span className={cn("font-mono text-[11px] leading-[1.4]", key === "ai" ? "text-[#5f8f74]" : "text-[#525252]")}>{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 font-mono text-[11px] text-[#525252] leading-[1.6]">
          Tooling chosen for clarity and operational simplicity, not to fill a resume.
        </p>
      </div>
    </section>
  );
}
