import { BlueForest } from "../bundle"
import { TitlesStyle } from "../styles/titles"

export const TechnologiesLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  container: [
    {
      style: {
        backgroundColor: colors.BLUE,
      },
    },
  ],

  title: [
    { style: TitlesStyle.global },
    {
      style: {
        color: "white",
        textAlign: "center",
      },
    }
  ],

  image: {
    width: "100%",
  },


}))
