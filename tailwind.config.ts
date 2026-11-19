import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F203E",
          950: "#081527",
          900: "#0F203E",
          800: "#16294B",
          700: "#1D3358",
          600: "#264069",
          500: "#33517E",
          400: "#5A7296",
          300: "#8A9BB5",
          200: "#C3CDDC",
          100: "#E3E8EF",
          50: "#F2F5F9",
        },
        accent: {
          DEFAULT: "#99000B",
          700: "#6E0008",
          600: "#86000A",
          500: "#99000B",
          400: "#B5121E",
          300: "#EE7A80",
          200: "#F3A5A9",
          100: "#F9D5D7",
          50: "#FCEDEE",
        },
        paper: {
          DEFAULT: "#F5F6F9",
          soft: "#EFF1F5",
          line: "#E7EAF0",
        },
        muted: "#5A6472",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-sm": ["2.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["3.5rem", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": ["4.5rem", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        "display-xl": ["5.75rem", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
      },
      borderRadius: {
        xl2: "20px",
        card: "24px",
        panel: "28px",
        hero: "32px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 32, 62, 0.04), 0 8px 24px -14px rgba(15, 32, 62, 0.12)",
        lift: "0 2px 4px rgba(15, 32, 62, 0.04), 0 26px 50px -26px rgba(15, 32, 62, 0.24)",
        card: "0 30px 60px -30px rgba(15, 32, 62, 0.28)",
        glow: "0 0 0 1px rgba(153, 0, 11, 0.2), 0 18px 50px -22px rgba(153, 0, 11, 0.45)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(to right, rgba(15,32,62,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,32,62,0.05) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(60% 60% at 50% 0%, rgba(153,0,11,0.10) 0%, rgba(153,0,11,0) 70%)",
        "brand-panel":
          "linear-gradient(160deg, #16294B 0%, #0F203E 48%, #0A1730 100%)",
        "accent-panel": "linear-gradient(140deg, #B5121E 0%, #99000B 52%, #7A0009 100%)",
      },
      backgroundSize: {
        grid: "56px 56px",
        "grid-sm": "28px 28px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-18px,0) scale(1.03)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "sweep": {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.6s ease both",
        float: "float 6s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        sweep: "sweep 4.5s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
        "reveal-up": "reveal-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        shimmer: "shimmer 2.5s ease-in-out infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
