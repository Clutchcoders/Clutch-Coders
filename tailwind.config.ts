import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "space-black": "#050510",
        "deep-black": "#080818",
        "neon-purple": "#7B2FF7",
        "electric-violet": "#9D4EDD",
        "cosmic-blue": "#4CC9F0",
        "neon-pink": "#F72585",
        "dark-surface": "#0D0D1A",
        "card-bg": "rgba(13, 13, 26, 0.8)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-reverse": "spin 15s linear infinite reverse",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "orbit-1": "orbit1 20s linear infinite",
        "orbit-2": "orbit2 15s linear infinite reverse",
        "orbit-3": "orbit3 25s linear infinite",
        marquee: "marquee 30s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(123,47,247,0.5)" },
          "50%": { boxShadow: "0 0 60px rgba(123,47,247,0.9), 0 0 100px rgba(123,47,247,0.4)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        orbit1: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
        orbit2: {
          "0%": { transform: "rotate(0deg) translateX(180px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(180px) rotate(-360deg)" },
        },
        orbit3: {
          "0%": { transform: "rotate(0deg) translateX(240px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(240px) rotate(-360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(rgba(123,47,247,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(123,47,247,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
    },
  },
  plugins: [],
} satisfies Config;
