import { BlueForest } from "../bundle"
import { StyleSheet } from "kiwi-bundle-react"
import { TextStyles } from "../styles/text.style"

export const ForestsLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  container: [
    {
      style: {
        textAlign: "center",
      },
    },
  ],

  title: [
    ...TextStyles.h1,
    {
      style: {
        color: colors.PINK,
        marginBottom: 0,
      },
    },
  ],

  image: (selected: boolean): StyleSheet => {
    const style: StyleSheet = [
      {
        style: {
          width: 90,
          margin: 10,
          cursor: "pointer",
        },
      },
    ]
    if(selected) {
      style.push({
        style: {
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
          borderRadius: "3px",
        },
      })
    }
    return style
  },

}))
