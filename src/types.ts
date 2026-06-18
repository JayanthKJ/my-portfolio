export type TechGroup = "frontend" | "backend" | "ai" | "infra";

export interface Tech {
  name: string;
  role: string;
  group: TechGroup;
}

export interface FocusItem {
  index: string;
  title: string;
  detail: string;
  active?: boolean;
}

export interface Project {
  title: string;
  description: string;
  detail: string;
  stack: string[];
  badge?: string;
  live?: string;
  github?: string;
  featured?: boolean;
}
