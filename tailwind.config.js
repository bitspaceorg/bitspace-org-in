/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/libs/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/libs/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      teal: "#C3E6CD",
      gray: "#555555",
      ylw: "#FFE675",
      nocl: "#00000000",
      blue: "#7FD0C7",
    },
    fontFamily: {
      gla: "glad",
      glb: "gladbold",
      mono: "mono",
      monb: "monobold",
    },
    extend: {
      height: {
        body: "90vh",
        header: "10vh",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
