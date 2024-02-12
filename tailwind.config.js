/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          customDark: "#031d2a",
          customMedium: "#042230",
          customMediumLight: "#052b3d",
          customMediumAccent: "#08374d",
          customLight: "#0b2e3e",
          customAccent: "#305768",
        },
      },
    },
  },
  plugins: [],
};
