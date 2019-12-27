import { BlueForest } from "../bundle"
import * as Kiwi from "kiwi-bundle-react"
import { LeavesValues } from "./leaves"

export const TitlesValues = BlueForest.Values(() => ({

  global: {
    fontSize: 30,
    display: "block",
    fontWeight: "bold",
    paddingTop: 50,
    marginBottom: 30,
  } as Kiwi.CSSProperties,

  onLeft: {
    marginLeft: LeavesValues.width[1] + 10,
  },

}))
