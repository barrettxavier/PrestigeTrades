/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          customDark: "#01060a",
          customMedium: "#01090f",
          customMediumLight: "#041422",
          customMediumAccent: "#0a1f31",
          customLight: "#0b2e3e",
          customAccent: "#305768",
        },
      },
    },
  },
  plugins: [],
};
