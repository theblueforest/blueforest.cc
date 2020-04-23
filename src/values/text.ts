import { BlueForest } from "../bundle"
import * as Kiwi from "kiwi-bundle-react"

export const TextValues = BlueForest.Values(() => ({

  block: {
    display: "block",
    textAlign: "justify",
    fontSize: 22,
  } as Kiwi.CSSProperties,

}))
