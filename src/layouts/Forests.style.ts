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
        marginTop: 30,
      },
    },
  ],

  image: (selected: boolean = false): StyleSheet => {
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
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "3px",
        },
      })
    }
    return style
  },

  cardContainer: [
    {
      style: {
        margin: "40px 0 50px",
        width: "100%",
      },
    },
  ],

  card: [
    {
      style: {
        width: "55%",
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "3px",
        margin: "auto",
        padding: "30px 50px",
        boxSizing: "border-box",
      },
    },
    {
      max: sizes.LARGE,
      style: {
        width: "75%",
        padding: "30px 50px",
      },
    },

    {
      max: sizes.MEDIUM,
      style: {
        width: "90%",
        padding: "30px 20px",
      }
    }
  ],



  cardImage: [
    {
      style: {
        width: 130,
      },
    },
  ]

}))
