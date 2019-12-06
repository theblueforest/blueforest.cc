import { BlueForest } from "../bundle"
import { ServicesStyle } from "../styles/services"

export const ExpertiseBlockComponentStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  container: (color: string) => [
    { style: ServicesStyle.block },
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
