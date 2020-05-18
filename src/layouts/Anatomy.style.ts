import { BlueForest } from "../bundle"
import { StyleSheet, Container } from "kiwi-bundle-react"
import { TextStyles } from "../styles/text.style"

export const AnatomyLayoutStyle = BlueForest.StyleSheet(({ colors, sizes }) => ({


  container: [
    {
      style: {
        textAlign: "center",
        background: "white",
      },
    },
  ],
  
  title:  [
    ...TextStyles.h1,
    {
      style: {
        paddingTop: 60,
        color: colors.PINK,
      },
    },
  ],

  anatomyImage: [
    {
      style: {
        textAlign: "center",
        paddingBottom: "50px",
      },
    },
  ],

}))
