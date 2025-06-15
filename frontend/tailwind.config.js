// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 8s infinite ease-in-out",
        "blob-delay-2000": "blob 8s infinite ease-in-out 2s",
        "blob-delay-4000": "blob 8s infinite ease-in-out 4s",
        "fade-in-up": "fade-in-up 1s ease-out forwards",
        "glow-text": "glow-text 2.5s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "glow-text": {
          "0%, 100%": {
            textShadow: "0 0 5px #FFD700, 0 0 15px #FFD700",
          },
          "50%": {
            textShadow: "0 0 15px #FFA500, 0 0 25px #FFD700",
          },
        },
      },
    },
  },
  plugins: [],
}
