/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Anton': 'Anton',
        'Inter': 'Inter',
      },
      backgroundImage: {
        'gradient': ' linear-gradient(306.99deg, #51C8EF -13.72%, #7AF57A 102.02%)'
      },
      backgroundSize: {
        'size': "100% 100%"
      },
    },
  },
  plugins: [],
}