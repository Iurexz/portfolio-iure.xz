/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx,mdx}", "./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-space)", "sans-serif"],
      },
      boxShadow: {
        "navy-glow": "0 18px 50px rgba(37, 99, 235, 0.25)",
      },
      keyframes: {
        driftA: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(18px, -26px) scale(1.08)" },
        },
        driftB: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-22px, 16px) scale(1.1)" },
        },
      },
      animation: {
        driftA: "driftA 18s ease-in-out infinite",
        driftB: "driftB 22s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
