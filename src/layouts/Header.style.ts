import { BlueForest } from "../bundle"

export const HeaderLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  container: [
    {
      style: {
        backgroundColor: colors.BLUE,
        minHeight: "100%",
        color: "white",
        textAlign: "center",
      },
    },
  ],

  title: [
    {
      style: {
        paddingTop: 50,
        marginBottom: 30,
      },
    },
  ],

  forest: [
    {
      style: {
        width: 800,
      },
    },
  ],

}))
