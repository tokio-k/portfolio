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
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-white": {
          textShadow:
            "0 0 3px #fff,0 0 3px #fff,0 0 3px #fff,0 0 3px #fff,0 0 3px #fff,0 0 3px #fff,0 0 3px #fff,0 0 3px #fff,0 0 3px #fff,0 0 3px #fff,0 0 3px #fff,0 0 3px #fff,0 0 3px #fff,0 0 3px #fff",
        },
        ".text-shadow-black": {
          textShadow:
            "0 0 3px #000,0 0 3px #000,0 0 3px #000,0 0 3px #000,0 0 3px #000,0 0 3px #000,0 0 3px #000,0 0 3px #000,0 0 3px #000,0 0 3px #000,0 0 3px #000,0 0 3px #000,0 0 3px #000,0 0 3px #000",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
