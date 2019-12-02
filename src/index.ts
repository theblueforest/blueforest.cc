import { Router, Route, Theme, Client } from "kiwi-bundle-react"
import { HomePage } from "./pages/Home"

export enum PAGES {
  HOME = "/",
}

export const ROUTER = new Router([
  new Route(PAGES.HOME, HomePage),
])

export const THEME = Theme({
  sizes: {
    SMALL: 360,
    MEDIUM: 900,
    LARGE: 1440,
  },
  colors: {
    ux: "#D31C69",
    storytelling: "#FF6F91",
    bf: "#0244C6",
    ops: "#6355E0",
    dev: "#61FFD8",
  },
})

export const CLIENT = new Client(ROUTER, THEME)
