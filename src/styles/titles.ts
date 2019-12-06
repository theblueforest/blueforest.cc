import * as Kiwi from "kiwi-bundle-react"
import { LeavesStyle } from "./leaves"

export const TitlesStyle = Kiwi.StyleSheet({

  global: {
    fontSize: 30,
    display: "block",
    fontWeight: "bold",
    paddingTop: 50,
    marginBottom: 30,
  },

  onLeft: {
    marginLeft: LeavesStyle.leaves1.width + 10,
  }

})
