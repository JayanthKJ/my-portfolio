import { cn } from "../lib/cn";
import { PROJECTS } from "../data/projects";
import type { Project } from "../types";

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none" className={className}>
      <path d="M2.5 9.5l7-7M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.021C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const featured = project.featured;
  return (
    <div className={cn("group relative flex flex-col rounded-[10px] border bg-[#111111] transition-all duration-200",
      featured ? "border-white/[0.1] hover:border-white/[0.16]" : "border-white/[0.07] hover:border-white/[0.12]",
      "hover:bg-[#141414]")}>
      {featured && (
        <div className="h-px w-full rounded-t-[10px]" style={{ background: "linear-gradient(90deg, transparent 0%, #3ecf8e40 40%, #3ecf8e60 60%, transparent 100%)" }} />
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            {project.badge && (
              <span className={cn("mb-2 inline-block rounded-[4px] border px-2 py-0.5 font-mono text-[10px] tracking-[0.06em] uppercase",
                featured ? "border-[#3ecf8e]/30 text-[#3ecf8e] bg-[#3ecf8e]/[0.06]" : "border-white/[0.08] text-[#525252] bg-white/[0.02]")}>
                {project.badge}
              </span>
            )}
            <h3 className="font-sans text-[1rem] font-[500] tracking-[-0.015em] text-white">{project.title}</h3>
          </div>
          <div className="flex shrink-0 items-center gap-2 pt-0.5">
            {project.github && (
              <a href={project.github} aria-label={`${project.title} on GitHub`} target="_blank" rel="noopener noreferrer"
                className="text-[#3a3a3a] transition-colors duration-150 hover:text-[#737373]">
                <GithubIcon />
              </a>
            )}
            {project.live && (
              <a href={project.live} aria-label={`${project.title} live demo`} target="_blank" rel="noopener noreferrer"
                className="text-[#3a3a3a] transition-colors duration-150 hover:text-[#737373]">
                <ExternalIcon />
              </a>
            )}
          </div>
        </div>
        <p className="mb-3 font-sans text-[0.875rem] leading-[1.7] text-[#737373]">{project.description}</p>
        <p className="mb-6 font-sans text-[0.8125rem] leading-[1.65] text-[#525252]">{project.detail}</p>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="inline-block rounded-[4px] border border-white/[0.07] bg-white/[0.02] px-2 py-0.5 font-mono text-[11px] text-[#525252]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const [featured, ...rest] = PROJECTS;
  return (
    <section id="work" className="px-6 sm:px-8 lg:px-0 py-24">
      <div className="mx-auto w-full max-w-[720px]">
        <div className="mb-10 flex items-end justify-between">
          <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#3a3a3a]">Work</p>
          <a href="https://github.com/JayanthKJ" target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-mono text-[11px] text-[#3a3a3a] transition-colors duration-150 hover:text-[#737373]">
            All repos
            <svg aria-hidden="true" width="13" height="13" viewBox="0 0 13 13" fill="none" className="transition-transform duration-150 group-hover:translate-x-0.5">
              <path d="M2.5 6.5h8M7 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div className="mb-4"><ProjectCard project={featured} /></div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {rest.map((p) => <ProjectCard key={p.title} project={p} />)}
        </div>
        <p className="mt-8 font-mono text-[11px] text-[#3a3a3a]">
          More on{" "}
          <a href="https://github.com/JayanthKJ" target="_blank" rel="noopener noreferrer"
            className="text-[#525252] underline underline-offset-2 transition-colors duration-150 hover:text-[#737373]">
            github.com/JayanthKJ
          </a>
        </p>
      </div>
    </section>
  );
}
