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

    {
      max: sizes.MEDIUM,

      style: {
        display: "none"
      }
    }
  ],

  title: [
    { style: TitlesValues.global },
    { style: TitlesValues.onLeft },
    {
      style: {
        color: colors.PINK,
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        textAlign: "center",
        marginBottom: 28,
        marginLeft: 0
      }
    }
  ],

  image: [
    {
      style: {
        width: "60%",
        display: "block",
        margin: "0 auto 70px",
      },
    },

    {
      max: sizes.MEDIUM,
      style: {
        width: "100%",
        marginBottom: 18
      }
    }
  ],

}))
