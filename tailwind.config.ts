import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        base:    "#0a0a0a",
        surface: "#111111",
        raised:  "#1a1a1a",
        accent:  "#3ecf8e",
      },
      maxWidth: {
        content: "720px",
      },
      borderColor: {
        subtle: "rgba(255,255,255,0.07)",
      },
    },
  },
  plugins: [],
} satisfies Config;
