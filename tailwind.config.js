/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#e0eeee",
        background: "#121212",
        semitransparent: "rgba(255,255,255,.08)",
        // background: "#0a1717",
        primary: "#9ddedb",
        secondary: "#248c88",
        accent: "#50dfda",
      },
      backgroundImage: {
        whiteLinear3: "linear-gradient(90deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,.7) 50%, rgba(255,255,255,0.08) 100%)",
        whiteRadial: "radial-gradient(circle closest-corner at 50% 0, rgba(242, 242, 242, .08), rgba(0, 0, 0, 0))",
        navbarLinear: "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        smoothFadeLinear: "linear-gradient(to bottom, rgba(16, 16, 16, 0), #121212 60%)",
        cardHover: "radial-gradient(circle at 50% 0, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0) 80%), radial-gradient(circle at 50% 0, rgb(255, 255, 255, 0.2), rgba(0, 0, 0, 0))",
      },
      screens: {
        xs: "400px",
        xm: "900px",
      },
    },
  },
  plugins: [],
};
