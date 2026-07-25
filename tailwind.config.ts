import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0E11",
          soft: "#12161B",
          border: "#20262E",
        },
        paper: {
          DEFAULT: "#F6F7F5",
          soft: "#ECEEEA",
          border: "#DEE1DB",
        },
        signal: {
          DEFAULT: "#C6FF3D",
          dim: "#9FD62E",
        },
        pulse: {
          DEFAULT: "#5B8CFF",
          dim: "#3A66D6",
        },
        slate: {
          400: "#8B93A1",
          500: "#6B7280",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "signal-gradient": "linear-gradient(120deg, #C6FF3D 0%, #5B8CFF 100%)",
        "signal-gradient-soft":
          "linear-gradient(120deg, rgba(198,255,61,0.16) 0%, rgba(91,140,255,0.16) 100%)",
      },
      keyframes: {
        "pulse-travel": {
          "0%": { offsetDistance: "0%", opacity: "0" },
          "8%": { opacity: "1" },
          "92%": { opacity: "1" },
          "100%": { offsetDistance: "100%", opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "pulse-travel": "pulse-travel 3.2s linear infinite",
        "fade-up": "fade-up 0.6s ease-out both",
        "soft-float": "soft-float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
