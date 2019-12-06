import { BlueForest } from "../bundle"
import { LeavesStyle } from "../styles/leaves"
import { TitlesStyle } from "../styles/titles"

export const MethodLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  leaves1: [
    { style: LeavesStyle.leaves1 },
    {
      style: {
        position: "absolute",
        zIndex: 0,
      },
    },
  ],

  title: [
    { style: TitlesStyle.global },
    { style: TitlesStyle.onLeft },
    {
      style: {
        color: colors.PINK,
      },
    },
  ],

  image: [
    {
      style: {
        width: "60%",
        display: "block",
        margin: "0 auto 70px",
      },
    },
  ],

}))
