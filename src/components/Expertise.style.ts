import { BlueForest } from "../bundle"
import { ServicesValues } from "../values/services"

export const ExpertiseComponentStyle = BlueForest.StyleSheet(({ colors, sizes }) => ({

  container: (color: string) => [
    { style: ServicesValues.block },
    {
      style: {
        borderColor: color,
        borderStyle: "solid",
        padding: 20,
        textAlign: "center",
      },
    },
  ],

  title: (color: string) => [
    {
      style: {
        color,
        fontFamily: "Muli",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "28px",
        lineHeight: "43px",
        textTransform: "uppercase",
        display: "block",
        paddingTop: "40px",
        marginBottom: "27px",
      },
    },

    {
      max: sizes.MEDIUM,
      style: {
        fontSize: 24,
        paddingTop: 20
      }
    }
  ],

  description: [
    {
      style: {
        color: colors.BLUE,
        fontFamily: "Muli",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "28px",
        lineHeight: "35px",
        textAlign: "center"
      },
    },

    {
      max: sizes.MEDIUM,
      style: {
        fontSize: 20
      }
    }
  ],

}))
