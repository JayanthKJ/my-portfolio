import { useEffect, useState } from "react";
import { cn } from "../lib/cn";

const COMMANDS = [
  "$ git push origin main",
  "✓ deployed to production",
  "$ docker build --platform linux/amd64 .",
  "✓ image pushed → registry",
  "$ kubectl rollout status deploy/api",
  "✓ rollout complete · 3/3 pods ready",
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let i = 0;
    const tick = () => {
      if (i < COMMANDS.length) {
        setVisibleLines((v) => v + 1);
        i++;
        setTimeout(tick, i % 2 === 0 ? 520 : 340);
      }
    };
    const init = setTimeout(tick, 600);
    return () => clearTimeout(init);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-8 lg:px-0 pt-24 pb-20"
    >
      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[720px]">
        {/* Availability */}
        <div className={cn("mb-10 inline-flex items-center gap-2 rounded-full border border-[#3ecf8e]/20 bg-[#3ecf8e]/[0.045] px-3 py-1 shadow-[0_0_28px_rgba(62,207,142,0.08)] transition-opacity duration-700", mounted ? "opacity-100" : "opacity-0")}>
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#3ecf8e]" style={{ boxShadow: "0 0 10px #3ecf8ecc" }} />
          <span className="font-mono text-[11px] tracking-wide text-[#a3a3a3]">open to work</span>
        </div>

        {/* Name */}
        <h1 className={cn("mb-4 font-sans font-[500] tracking-[-0.035em] leading-[1.08] text-white transition-all duration-700 delay-100", "text-[clamp(2.5rem,6vw,4rem)]", mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2")}>
          Jayanth KJ
        </h1>

        {/* Tagline */}
        <p className={cn("mb-10 max-w-[540px] font-sans text-[1.0625rem] leading-[1.65] text-[#8a8a8a] transition-all duration-700 delay-200", mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2")}>
          Building AI-powered systems, scalable backend architectures, and modern web applications.
        </p>

        {/* CTAs */}
        <div className={cn("mb-16 flex flex-wrap items-center gap-3 transition-all duration-700 delay-300", mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2")}>
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-2 rounded-[7px] bg-white px-4 py-2 font-sans text-[13px] font-[500] tracking-[-0.01em] text-[#0a0a0a] transition-all duration-150 hover:bg-[#e5e5e5] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3ecf8e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
          >
            View projects
            <svg aria-hidden="true" width="13" height="13" viewBox="0 0 13 13" fill="none" className="transition-transform duration-150 group-hover:translate-x-0.5">
              <path d="M2.5 6.5h8M7 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <a
            href="https://arogya.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-[7px] border border-white/[0.1] bg-white/[0.04] px-4 py-2 font-sans text-[13px] font-[400] tracking-[-0.01em] text-[#a3a3a3] transition-all duration-150 hover:border-white/[0.18] hover:bg-white/[0.07] hover:text-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3ecf8e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
          >
            Open Arogya AI
            <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-50 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-px group-hover:-translate-y-px">
              <path d="M2.5 9.5l7-7M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Terminal */}
        <div className={cn("rounded-[10px] border border-white/[0.12] bg-[#131313] shadow-[0_24px_80px_rgba(0,0,0,0.28)] overflow-hidden transition-all duration-700 delay-500", mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")}>
          <div className="flex items-center gap-1.5 border-b border-white/[0.09] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
            <span className="ml-3 font-mono text-[11px] text-[#636363]">jayanth@local ~ deploy</span>
          </div>
          <div className="px-4 py-4 space-y-1" style={{ minHeight: "148px" }}>
            {COMMANDS.slice(0, visibleLines).map((line, i) => (
              <div key={i} className={cn("font-mono text-[12px] leading-[1.75]",
                line.startsWith("✓") ? "text-[#3ecf8e]" : "text-[#a3a3a3]")}>
                {line}
              </div>
            ))}
            {visibleLines < COMMANDS.length && (
              <div className="font-mono text-[12px] text-[#525252]">
                <span className="inline-block w-[7px] h-[13px] bg-[#525252] align-middle animate-[blink_1s_step-end_infinite]" />
              </div>
            )}
          </div>
        </div>

        {/* Scroll hint */}
        <div className={cn("mt-12 flex items-center gap-2 transition-all duration-700 delay-[800ms]", mounted ? "opacity-100" : "opacity-0")}>
          <div className="h-px w-8 bg-white/[0.08]" />
          <span className="font-mono text-[11px] tracking-[0.06em] text-[#3a3a3a] uppercase">scroll</span>
        </div>
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
}
