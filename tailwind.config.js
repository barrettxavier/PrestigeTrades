/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          customDark: "#01090f",
          customMedium: "#001823",
          customMediumLight: "#19485D",
          customMediumAccent: "#00293c",
          customLight: "#0b2e3e",
          customAccent: "#27AEAE",
        },
      },
      breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
