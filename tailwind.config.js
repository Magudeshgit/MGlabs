/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}", './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins"],
        "inter": ['Inter'],
        "proDisplay": ['ProDisplay']
        
      },
    keyframes: {
      width: {
        '0%': {left: '-50%'},
        // '66%': {left: '30%'},
        '100%': {left: '100%'},
      }
    },
    animation: {
      width: 'width 1s infinite'
    }

    },
  },
  plugins: [],
}