import { Router, Route } from "kiwi-bundle"
import Home from "./pages/Home"

export enum PAGES {
  HOME = "/",
}

export default new Router([
  new Route(PAGES.HOME, Home),
])
