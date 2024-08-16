/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      textShadow: {
        'white': '2px 2px 4px rgba(255, 255, 255, 0.8)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-white': {
          textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)',
        },
      });
    },
  ],
}