import { BlueForest } from "../bundle"
import { TitlesStyle } from "../styles/titles"
import { ServicesStyle } from "../styles/services"

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
    { style: TitlesStyle.global },
    { style: TitlesStyle.onLeft },
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
