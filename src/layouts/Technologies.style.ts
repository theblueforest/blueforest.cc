import { BlueForest } from "../bundle"
import { TitlesValues } from "../values/titles"

export const TechnologiesLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  container: [
    {
      style: {
        backgroundColor: colors.BLUE,
      },
    },
  ],

  title: [
    { style: TitlesValues.global },
    {
      style: {
        color: "white",
        textAlign: "center",
      },
    }
  ],

  image: [
    {
      style: {
        width: "100%",
      },
    },
  ],


}))
