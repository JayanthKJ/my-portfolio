import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge classNames with proper Tailwind conflict resolution.
 * Uses clsx for conditional classes and tailwind-merge to handle
 * specificity conflicts (e.g., w-full overriding w-1/2).
 *
 * Usage:
 *   cn("px-2 py-1", condition && "px-4", "px-8")
 *   // → "py-1 px-8" (px-8 wins over px-2, px-4)
 */
export function cn(
  ...inputs: Array<string | false | undefined | null>
): string {
  return twMerge(clsx(inputs));
}
