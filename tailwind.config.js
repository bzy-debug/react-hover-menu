/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      boxShadow: {
        menu: "0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08)",
      },
      keyframes: {},
      animation: {
        fadeIn: "fadeIn 1s ease forwards",
        fadeOut: "fadeOut 1s ease forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
