const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  purge: [
    "./static/**/*.html",
    "./partials/**/*.html",
    "./templates/**/*.html",
  ],
  darkMode: false, // or "media" or "class"
  theme: {
    screens: {
      "xxs": "300px",
      "xs": "375px",
      "sm": "640px",
      "md": "768px",
      "portfolio_2_col": "916px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter-Var", "Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "10xl": "10rem",
      },
      spacing: {
        84: "21rem",
        92: "23rem",
        104: "26rem",
        116: "29rem",
        120: "30rem",
        132: "33rem",
        144: "36rem",
        172: "43rem",
        184: "46rem",
        320: "80rem",
        333: "58rem",
      },
      colors: {
        "primary-text-color": "var(--primary-text-color)",
        "secondary-text-color": "var(--secondary-text-color)",
        "tertiary-text-color": "var(--tertiary-text-color)",
        "faded-text-color": "var(--faded-text-color)",

        "accent-lightgrey-color": "var(--accent-lightgrey-color)",
        "accent-slate-color": "var(--accent-slate-color)",
        "accent-purple-color": "var(--accent-purple-color)",
        "accent-mauve-color": "var(--accent-mauve-color)",
        "accent-pink-color": "var(--accent-pink-color)",
        "accent-pink-color-medium": "var(--accent-pink-color-medium)",
        "accent-pink-color-dark": "var(--accent-pink-color-dark)",
        "accent-yellow-color": "var(--accent-yellow-color)",
        "accent-powderblue-color": "var(--accent-powderblue-color)",
        "accent-powderblue-color-medium": "var(--accent-powderblue-color-medium)",
        "accent-powderblue-color-dark": "var(--accent-powderblue-color-dark)",
        "accent-sapphire-color": "var(--accent-sapphire-color)",
        "accent-sapphire-color-dark": "var(--accent-sapphire-color-dark)",
      },
      ringColor: {
        "image": "hsla(0,0%,0%,.1)"
      },
      boxShadow: {
        blue: "0 25px 50px -12px rgba(19, 83, 139, 0.39)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
}
