/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      boxShadow: {
        menu: "0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1, visibility: "visible" },
        },
        fadeOut: {
          from: { opacity: 1, visibility: "visible" },
          to: { opacity: 0, visibility: "hidden" },
        },
      },
      animation: {
        fadeIn: "fadeIn 200ms ease forwards",
        fadeOut: "fadeOut 200ms ease forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
