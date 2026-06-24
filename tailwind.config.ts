import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        paper: "#f4f4ef",
        cyan: "#00d4ff",
        teal: "#00b8a9",
        terminal: "#48ff7b",
        amber: "#ffbf47"
      },
      fontFamily: {
        sans: ["Inter", "Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Consolas", "Liberation Mono", "monospace"]
      },
      animation: {
        blink: "blink 1s steps(2, start) infinite",
        fade: "fade 200ms ease-out"
      },
      keyframes: {
        blink: {
          "0%, 45%": { opacity: "1" },
          "46%, 100%": { opacity: "0" }
        },
        fade: {
          from: { opacity: "0.45" },
          to: { opacity: "1" }
        }
      }
    }
  },
  plugins: []
} satisfies Config;
