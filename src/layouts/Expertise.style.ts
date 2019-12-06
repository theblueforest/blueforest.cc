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
    {
      style: {
        color: colors.BLUE,
      },
    },
  ],

  services: [
    { style: ServicesStyle.container },
    {
      style: {
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
      },
    },
  ],


}))
