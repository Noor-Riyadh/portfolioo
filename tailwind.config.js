/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        primary: "#7C3AED",
        accent: "#A855F7",
        glow: "#C084FC",
        surface: "rgba(255,255,255,0.04)",
        border: "rgba(255,255,255,0.08)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulse_glow: "pulseGlow 2s ease-in-out infinite",
        spin_slow: "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px #7C3AED55" },
          "50%": { boxShadow: "0 0 40px #A855F7AA" },
        },
      },
    },
  },
  plugins: [],
};
