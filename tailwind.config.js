module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "qiita-green": "#55c500",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
