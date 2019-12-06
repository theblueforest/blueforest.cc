import { BlueForest } from "../bundle"
import { TitlesValues } from "../values/titles"

export const ExpertiseLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  container: [
    {
      style: {
        backgroundColor: colors.GREEN,
        paddingBottom: 30,
      },
    },
  ],

  title: [
    { style: TitlesValues.global },
    { style: TitlesValues.onLeft },
    {
      style: {
        color: colors.BLUE,
      },
    },
  ],

  services: [
    {
      style: {
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
        width: "80%",
      },
    },
  ],


}))
