import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        jungle: {
          50:  "#f0faf4",
          100: "#d8f3e4",
          200: "#b4e7cb",
          300: "#7dd3a8",
          400: "#45b880",
          500: "#219c62",
          600: "#157d4e",
          700: "#11633e",
          800: "#0e4f32",
          900: "#0c4129",
          950: "#062418",
        },
        gold: {
          300: "#f0d080",
          400: "#e8bc4a",
          500: "#d4a017",
          600: "#b8860e",
          700: "#966800",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up":   "fadeUp 0.7s ease-out forwards",
        "fade-in":   "fadeIn 1s ease-out forwards",
        float:       "float 6s ease-in-out infinite",
        "slide-in":  "slideIn 0.4s ease-out forwards",
        "accordion": "accordionOpen 0.3s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        slideIn: {
          "0%":   { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        accordionOpen: {
          "0%":   { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
