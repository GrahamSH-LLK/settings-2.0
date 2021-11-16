
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
