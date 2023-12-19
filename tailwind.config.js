/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": " 0px 10px 25px 0px rgba(31, 41, 55, 0.20)",
        "4xl": " 0px 10.988px 36.628px 0.916px rgba(28, 25, 23, 0.05)",
      },
    },
  },
  plugins: [],
};
