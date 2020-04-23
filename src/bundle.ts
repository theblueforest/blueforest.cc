import { KiwiBundle } from "kiwi-bundle-react"

export const BlueForest = new KiwiBundle({
  routes: {
    HOME: "/",
  },
  theme: {
    sizes: {
      SMALL: 360,
      MEDIUM: 800,
      LARGE: 1440,
    },
    colors: {
      MAGENTA: "#D31C69",
      PINK: "#FF6F91",
      BLUE: "#1748C7",
      PURPLE: "#6355E0",
      GREEN: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 33.33%), rgba(97, 255, 216, 0.5)",
    },
    fonts: {
      google: {
        families: [ "Muli:400,700", "sans-serif" ],
      },
    },
    css: {
      "font-family": "'Muli', sans-serif",
    },
  },
})
