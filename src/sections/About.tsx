import { cn } from "../lib/cn";

const STACK_PILLS = [
  { label: "TypeScript", group: "lang" },
  { label: "Python", group: "lang" },
  { label: "React", group: "frontend" },
  { label: "FastAPI", group: "backend" },
  { label: "PostgreSQL", group: "backend" },
  { label: "Redis", group: "backend" },
  { label: "Docker", group: "infra" },
  { label: "CI/CD", group: "infra" },
  { label: "LLM APIs", group: "ai" },
] as const;

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-8 lg:px-0 py-24">
      <div className="mx-auto w-full max-w-[720px]">
        <p className="mb-10 font-mono text-[11px] tracking-[0.1em] uppercase text-[#4a4a4a]">About</p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_220px]">
          <div className="space-y-5">
            <p className="font-sans text-[0.9375rem] leading-[1.75] text-[#8a8a8a]">
              CS student at <span className="text-[#d4d4d4]">JSS Science and Technology University</span>, focused on the parts of the stack that are hardest to get right: backend systems, deployment pipelines, and AI integration that holds up outside a demo.
            </p>
            <p className="font-sans text-[0.9375rem] leading-[1.75] text-[#8a8a8a]">
              Most of my time goes toward service architecture: clean data models, boring deploys, useful observability, and APIs that stay understandable as the product grows.
            </p>
            <p className="font-sans text-[0.9375rem] leading-[1.75] text-[#8a8a8a]">
              I am especially interested in <span className="text-[#d4d4d4]">health-tech</span>, where correctness matters enough to make the engineering constraints genuinely interesting. <span className="text-[#d4d4d4]">Arogya AI</span> came from that interest.
            </p>
            <p className="font-sans text-[0.9375rem] leading-[1.75] text-[#8a8a8a]">
              I do not have a favorite framework. I have a preference for systems that are easy to reason about when something breaks.
            </p>
          </div>

          <aside className="rounded-[10px] border border-white/[0.09] bg-[#121212] p-5">
            <div className="space-y-4">
              {([
                { key: "based", val: "Mysuru, IN", accent: false },
                { key: "focus", val: "backend · AI · infra", accent: false },
                { key: "status", val: "open to work", accent: true },
              ] as const).map(({ key, val, accent }) => (
                <div key={key} className="flex flex-col gap-0.5">
                  <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-[#525252]">{key}</span>
                  <span className={cn("font-mono text-[12px]", accent ? "text-[#3ecf8e]" : "text-[#a3a3a3]")}>{val}</span>
                </div>
              ))}
            </div>

            <div className="my-6 h-px bg-white/[0.08]" />

            <div>
              <p className="mb-3 font-mono text-[10px] tracking-[0.08em] uppercase text-[#525252]">Working set</p>
              <div className="flex flex-wrap gap-1.5">
                {STACK_PILLS.map(({ label, group }) => (
                  <span
                    key={label}
                    className={cn(
                      "inline-block rounded-[5px] border px-2 py-0.5 font-mono text-[11px] bg-white/[0.025]",
                      group === "ai"
                        ? "border-[#3ecf8e]/35 text-[#3ecf8e]"
                        : group === "backend"
                          ? "border-white/[0.14] text-[#d4d4d4]"
                          : "border-white/[0.09] text-[#8a8a8a]",
                    )}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
