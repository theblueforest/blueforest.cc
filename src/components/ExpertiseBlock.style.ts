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
        flex: `1 1 ${
          (ServicesStyle.container.width
            - (ServicesStyle.block.borderWidth * 4)
            - (ServicesStyle.block.margin * 4)
            - (20 * 4)
          ) / 2
        }px`,
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
