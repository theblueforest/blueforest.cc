import { BlueForest } from "../bundle"

export const HeaderLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  container: [
    {
      style: {
        backgroundColor: colors.BLUE,
        minHeight: "100%",
        color: "white",
      },
    },
  ],

  title: [
    {
      style: {
        paddingTop: 50,
      },
    },
  ],

  forest: [
    {
      style: {
      },
    },
  ],

}))
