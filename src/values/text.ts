import { BlueForest } from "../bundle"
import * as Kiwi from "kiwi-bundle-react"

export const TextValues = BlueForest.Values(({ colors }) => ({

  block: {
    display: "block",
    textAlign: "justify",
    fontSize: 22,
  } as Kiwi.CSSProperties,

  h1: {
    fontSize: 38,
    display: "block",
    fontWeight: "bold",
    paddingTop: 50,
    marginBottom: 50,
    textAlign: "center",
  } as Kiwi.CSSProperties,

  h2: {
    fontSize: 34,
    display: "block",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 30,
    marginBottom: 30,
    color: colors.PINK,
  } as Kiwi.CSSProperties,


}))
