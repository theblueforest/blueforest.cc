import { BlueForest } from "../bundle"
import { LeavesValues } from "../values/leaves"
import { TitlesValues } from "../values/titles"

export const MethodLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  leaves1: [
    { style: LeavesValues.leaves1 },
    {
      style: {
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
