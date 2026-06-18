import type { FocusItem } from "../types";

export const FOCUS_ITEMS: FocusItem[] = [
  {
    index: "01",
    title: "AI systems",
    detail:
      "Integration patterns that hold up in production — context management, latency budgets, and fallback behavior when models don't behave.",
    active: true,
  },
  {
    index: "02",
    title: "Scalable backend architecture",
    detail:
      "Service boundaries, async queues, and data models designed to stay coherent as requirements change.",
  },
  {
    index: "03",
    title: "Deployment engineering",
    detail:
      "CI/CD pipelines, containerized workloads, and infrastructure that makes deploys a non-event.",
  },
  {
    index: "04",
    title: "Production-grade applications",
    detail:
      "Observability, error handling, and the operational discipline that separates a demo from something you'd page someone about.",
  },
  {
    index: "05",
    title: "Health-tech systems",
    detail:
      "Domain-specific correctness constraints — where the cost of a wrong answer is high enough to make the engineering genuinely interesting.",
  },
];
