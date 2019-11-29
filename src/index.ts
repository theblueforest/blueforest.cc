import { Router, Route, Client } from "kiwi-bundle-react"
import { HomePage } from "./pages/Home"

export enum PAGES {
  HOME = "/",
}

export const ROUTER = new Router([
  new Route(PAGES.HOME, HomePage),
])

export const CLIENT = new Client(ROUTER)
