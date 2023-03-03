/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      cmu: ["CMU", "Helvetica"],
      "cmu-it": ["CMU-IT", "Georgia"],
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },

        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        gradientIn: {
          "0%": { backgroundImage: "linear-gradient(127deg, black,white)" },
          "100%": {
            backgroundImage: "linear-gradient(127deg, transparent,transparent)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in",
        fadeOut: "fadeOut 0.5s ease-out",
        gradientIn: "gradientIn 1s ease-in",
      },
    },
  },
  plugins: [],
};
