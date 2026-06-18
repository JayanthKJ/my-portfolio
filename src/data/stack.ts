import type { Tech } from "../types";

export const STACK: Tech[] = [
  { name: "React",       role: "UI layer",             group: "frontend" },
  { name: "Vite",        role: "build tooling",        group: "frontend" },
  { name: "TailwindCSS", role: "styling",              group: "frontend" },
  { name: "FastAPI",     role: "API server",           group: "backend"  },
  { name: "Python",      role: "core language",        group: "backend"  },
  { name: "Java",        role: "systems / coursework", group: "backend"  },
  { name: "Gemini API",  role: "LLM integration",      group: "ai"       },
  { name: "Vercel",      role: "frontend hosting",     group: "infra"    },
  { name: "Render",      role: "backend hosting",      group: "infra"    },
  { name: "Neon",        role: "serverless postgres",  group: "infra"    },
];
