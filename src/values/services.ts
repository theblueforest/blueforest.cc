import { BlueForest } from "../bundle"
import * as Kiwi from "kiwi-bundle-react"

export const ServicesValues = BlueForest.Values(() => ({

  block: {
    width: "458px",
    minHeight: "269px",
    boxSizing: "border-box",
    margin: 20,
    padding: "30px 81px",
    borderWidth: 2,
  } as Kiwi.CSSProperties,

}))
