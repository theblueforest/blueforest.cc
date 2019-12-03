import { KiwiBundle } from "kiwi-bundle-react"

export const BlueForest = new KiwiBundle({
  routes: {
    HOME: "/",
  },
  theme: {
    sizes: {
      SMALL: 360,
      MEDIUM: 900,
      LARGE: 1440,
    },
    colors: {
      MAGENTA: "#D31C69",
      PINK: "#FF6F91",
      BLUE: "#0244C6",
      PURPLE: "#6355E0",
      GREEN: "#61FFD8",
    },
  },
})
