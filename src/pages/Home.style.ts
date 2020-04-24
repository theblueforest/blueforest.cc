import { BlueForest } from "../bundle"

export const HomePageStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  leaves2: [
    {
      style: {
        marginBottom: -70,
        display: "block",
        marginLeft: "auto",
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        display: "none"
      }
    }
  ],

}))
