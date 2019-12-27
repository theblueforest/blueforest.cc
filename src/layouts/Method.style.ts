import { BlueForest } from "../bundle"
import { LeavesValues } from "../values/leaves"
import { TitlesValues } from "../values/titles"

export const MethodLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  leaves1: [
    {
      style: {
        width: LeavesValues.width[1],
        position: "absolute",
        zIndex: 0,
      },
    },
  ],

  title: [
    { style: TitlesValues.global },
    { style: TitlesValues.onLeft },
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
