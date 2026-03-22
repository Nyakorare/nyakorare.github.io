/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      maxWidth: {
        content: "68rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        portfolio: {
          primary: "#2d4a3e",
          "primary-content": "#fafaf9",
          secondary: "#5c5c56",
          accent: "#8fb8a8",
          neutral: "#1a1a18",
          "base-100": "#fafaf9",
          "base-200": "#f0f0ee",
          "base-300": "#e4e4e0",
          "base-content": "#1a1a18",
          info: "#3b82f6",
          success: "#22c55e",
          warning: "#eab308",
          error: "#ef4444",
        },
      },
      {
        portfolioDark: {
          primary: "#8fb8a8",
          "primary-content": "#111110",
          secondary: "#a3a39c",
          accent: "#2d4a3e",
          neutral: "#f5f5f3",
          "base-100": "#111110",
          "base-200": "#1a1a18",
          "base-300": "#262624",
          "base-content": "#f5f5f3",
          info: "#60a5fa",
          success: "#4ade80",
          warning: "#facc15",
          error: "#f87171",
        },
      },
    ],
  },
};
