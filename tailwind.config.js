/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FBCEB1",
        },
        grey: {
          light: "#ECECEC",
          DEFAULT: "#707070",
        },
        purple: {
          dark: "#842E66",
          DEFAULT: "",
        },
        white: {
          DEFAULT: '#ffff'
        },
        blue: {
          DEFAULT: '#00008B'
        },
        pinkyred: {
          DEFAULT: '#fe2c54'
        }
      },
      screens: {
        xs: "464px",
      },
      fontFamily: {
        sans: ["Arial"],
      },
    },
  },
  plugins: [],
}
