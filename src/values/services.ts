import { BlueForest } from "../bundle"
import * as Kiwi from "kiwi-bundle-react"

export const ServicesValues = BlueForest.Values(() => ({

  block: {
    width: "calc(50% - 84px)",
    margin: 20,
    padding: 30,
    borderWidth: 2,
  } as Kiwi.CSSProperties,

}))
