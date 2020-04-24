import { BlueForest } from "../bundle"
import * as Kiwi from "kiwi-bundle-react"

export const TitlesValues = BlueForest.Values(({ colors }) => ({

  H1: {
    fontSize: 38,
    display: "block",
    fontWeight: "bold",
    paddingTop: 50,
    marginBottom: 50,
    textAlign: "center",
  } as Kiwi.CSSProperties,

  H2: {
    fontSize: 34,
    display: "block",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 30,
    marginBottom: 30,
    color: colors.PINK,
  } as Kiwi.CSSProperties,


}))
