import { cn } from "../lib/cn";
import { FOCUS_ITEMS } from "../data/focus";

export default function Focus() {
  return (
    <section id="focus" className="px-6 sm:px-8 lg:px-0 py-24">
      <div className="mx-auto w-full max-w-[720px]">
        <p className="mb-10 font-mono text-[11px] tracking-[0.1em] uppercase text-[#3a3a3a]">Current focus</p>
        <ul className="flex flex-col">
          {FOCUS_ITEMS.map((item, i) => (
            <li key={item.index}
              className={cn("group grid grid-cols-[40px_1fr] gap-x-6 py-5 border-t border-white/[0.06]",
                i === FOCUS_ITEMS.length - 1 && "border-b",
                "transition-colors duration-150 hover:bg-white/[0.02]",
                "-mx-3 px-3 rounded-sm cursor-default")}>
              <span className={cn("font-mono text-[11px] leading-[1.9] tabular-nums transition-colors duration-150",
                item.active ? "text-[#3ecf8e]" : "text-[#3a3a3a] group-hover:text-[#525252]")}>
                {item.index}
              </span>
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-6">
                <h3 className={cn("shrink-0 font-sans text-[0.9375rem] font-[500] tracking-[-0.01em] transition-colors duration-150",
                  item.active ? "text-white" : "text-[#737373] group-hover:text-[#a3a3a3]")}>
                  {item.title}
                </h3>
                <p className={cn("font-sans text-[0.8125rem] leading-[1.65] transition-colors duration-150",
                  item.active ? "text-[#525252]" : "text-[#3a3a3a] group-hover:text-[#525252]")}>
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
