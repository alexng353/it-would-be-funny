/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        open: {
          "0%": { width: "0%" },
          "100%": { width: "30%" },
        },
        close: {
          "0%": { width: "30%" },
          "100%": { width: "0%" },
        },
      },
      animation: {
        "slide-open": "open 0.5s cubic-bezier(.09,.52,.44,.97) 1 forwards",
        "slide-close":
          "open 0.5s cubic-bezier(.09,.52,.44,.97) reverse 1 forwards",
      },

      colors: {
        "edubeyond-blue": "#1B0B43",
      },

      width: {
        128: "32rem",
        160: "40rem",
        192: "48rem",
        256: "64rem",
        320: "80rem",
        384: "96rem",
      },
      height: {
        128: "32rem",
        160: "40rem",
        192: "48rem",
        256: "64rem",
        320: "80rem",
        384: "96rem",
      },
      spacing: {
        128: "32rem",
        160: "40rem",
        192: "48rem",
        256: "64rem",
        320: "80rem",
        384: "96rem",
      },
      borderRadius: {
        custom: "40px",
      },
      inset: {
        "6px": "6px",
      },
      screens: {
        tn: "320px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
