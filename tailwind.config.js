/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/libs/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      white: "#F0F0F0",
      accent: "#9482DA",
      lpurple: "#E7E1FF",
      black: "#001001",
      nocl: "#00000000",
      bsprime: "#191919",
      blue: "#6287E7",
      pink: "#E98AB8",
      green: "#8AE9B0",
      yellow: "#E9DF8A",
      red: "#E98A8A",
    },
    fontFamily: {
      inter: "Inter",
      glb: "GlacialBold",
    },

    extend: {
      minHeight: {
        main: "92vh",
      },
      height: {
        header: "8vh",
        main: "92vh",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
