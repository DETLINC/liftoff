/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#3B9EF8",
        darkBlue: "#2C3E50",
        background: "#242C3B",
      },
      fontFamily: {
        "poppins-bold": ["Poppins-Bold"],
        "poppins-extra-light": ["Poppins-ExtraLightItalic"],
        "poppins-medium": ["Poppins-Medium"],
        "poppins-regular": ["Poppins-Regular"],
        "poppins-semibold": ["Poppins-SemiBold"],
      },
    },
  },
  plugins: [],
};
