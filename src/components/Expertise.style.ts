import { BlueForest } from "../bundle"
import { ServicesValues } from "../values/services"

export const ExpertiseComponentStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  container: (color: string) => [
    { style: ServicesValues.block },
    {
      style: {
        backgroundColor: "white",
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
        fontSize: 24,
        fontWeight: "bold",
        textTransform: "uppercase",
        display: "block",
        marginBottom: 10,
      },
    },
  ],

  description: [
    {
      style: {
        color: colors.BLUE,
      },
    },
  ],

}))
