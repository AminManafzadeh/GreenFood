/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#53c60b",
        grey: "#808080",
      },
      boxShadow: {
        "green-shadow":
          "0px 4px 16px rgba(92, 245, 115, 0.123), 0px 8px 32px rgba(17, 17, 26, 0.05)",
      },
    },
  },
  plugins: [],
};
