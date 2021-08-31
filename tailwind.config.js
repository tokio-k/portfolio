module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "qiita-green": "#55c500",
      },
      zIndex: {
        "-10": "-10",
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
        ".active-header-radial-gradient": {
          background:
            "radial-gradient(closest-side at center,rgba(255,255,0,1) 0%,rgba(255,255,50,0.5) 70%, rgba(255,255,0, 0) 100%)",
        },
        ".bg-thema": {
          background:
            "radial-gradient(circle farthest-side at center,#ddc 0%,#33f 30%, #33ffff 70%, #80bfff 100%)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
