module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        palette: {
          "blue-1": "#cbeffb",
          "blue-2": "#92d1e8",
          "blue-3": "#00adef"
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
