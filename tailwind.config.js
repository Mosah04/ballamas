/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "b-light-gray": "#E5E5E5",
        "b-gray": "#C3C3C3",
        "b-dark-gray": "#7E7E7E",
        "b-black": "#1D1D1D",
        "b-green": "#2D5C43",
        "b-purple": "#393158",
        "b-ocean": "#2A5259",
        "b-olive": "#706947",
      },
    },
  },
  plugins: [],
};
