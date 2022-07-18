/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        128: "500px",
        148: "570px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
