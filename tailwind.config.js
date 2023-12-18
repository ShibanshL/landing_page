/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": " 0px 10px 25px 0px rgba(31, 41, 55, 0.20)",
      },
    },
  },
  plugins: [],
};
