import type { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    title: "Arogya AI",
    description:
      "Conversational health assistant built for reliability, not hype. Handles symptom triage, wellness queries, and follow-up context across sessions.",
    detail:
      "Designed around a strict separation between the LLM layer and the data layer — the model never touches health records directly. Built for async-first load patterns with Redis-backed session state and a FastAPI core that stays under 120ms p99.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Gemini API", "Docker"],
    badge: "Production",
    live: "https://arogya.jaykj.xyz",
    github: "https://github.com/JayanthKJ/arogya-ai",
    featured: true,
  },
  {
    title: "CarbonTrack AI",
    description:
      "Sustainability analytics platform that ingests activity data and surfaces carbon impact with category-level breakdowns and reduction pathways.",
    detail:
      "Built under hackathon constraints — 24hrs from schema design to deployed backend. AI layer handles unit normalization across inconsistent input formats.",
    stack: ["TypeScript", "Next.js", "Python", "Gemini API", "PostgreSQL"],
    badge: "Hackathon",
    github: "https://github.com/JayanthKJ/EcoGridAI",
  },
  {
    title: "JusticeChain AI",
    description:
      "Legal-tech transparency platform that surfaces case law, precedent relationships, and outcome distributions across jurisdictions.",
    detail:
      "AI summarization is scoped to specific document sections with source citations preserved. Audit trail is append-only by design.",
    stack: ["TypeScript", "React", "FastAPI", "Gemini API", "Vector DB"],
    badge: "Hackathon",
    github: "https://github.com/JayanthKJ/5-pillars",
  },
];
