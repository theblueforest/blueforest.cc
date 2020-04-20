import { BlueForest } from "../bundle"
import { TitlesValues } from "../values/titles"

export const ExpertiseLayoutStyle = BlueForest.StyleSheet(({ colors, sizes }) => ({

  container: [
    {
      style: {
        background: colors.GREEN,
        paddingBottom: 30,
      },
    },
  ],

  title: [
    { style: TitlesValues.global },
    { max: sizes.MEDIUM, style: {
      marginLeft: "auto",
    marginRight: "auto",
    width: "70%"
    } },
    { style: TitlesValues.onLeft },
    {
      style: {
        color: colors.BLUE,
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        textAlign: "center",
        marginBottom: 28,
        marginLeft: "auto",
        marginRight: "auto",
        width: "80%",
      }
    }
  ],

  services: [
    {
      style: {
        justifyContent: "center",
        margin: "auto",
        display: "flex",
        flexWrap: "wrap"
      },
    },
  ],


}))
