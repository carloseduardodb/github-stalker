module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Helvetica Neue"],
      },
      colors: {
        "p-yellow": {
          DEFAULT: "#FFCE00",
          light: "#7E7E86",
        },
        "p-black": {
          DEFAULT: "#1F1F1F",
          light: "#383838",
        },
        "p-gray": {
          DEFAULT: "#A5A5A5",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
