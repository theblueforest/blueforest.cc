import { KiwiBundleReact } from "kiwi-bundle-react"

export const BlueForest = new KiwiBundleReact({
  routes: {
    HOME: "/",
  },
  theme: {
    sizes: {
      SMALL: 400,
      MEDIUM: 800,
      LARGE: 1200,
    },
    colors: {
      MAGENTA: "#D31C69",
      PINK: "#FF6F91",
      BLUE: "#0244c6",
      PURPLE: "#6355E0",
      GREEN: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 33.33%), rgba(97, 255, 216, 0.5)",
      GREEN2: "#DFFEF7",
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
