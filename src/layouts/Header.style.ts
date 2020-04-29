import { BlueForest } from "../bundle"

export const HeaderLayoutStyle = BlueForest.StyleSheet(theme => ({

  container: [
    {
      style: {
        backgroundColor: theme.colors.BLUE,
        minHeight: "100%",
        color: "white",
      },
    },
  ],

  forestContainer: [
    {
      style: {
        textAlign: "center",
      },
    },
  ],

  forestVideo: [
    {
      style: {
        width: "80%",
        maxWidth: 550,
        marginTop: 50,
      },
    },
  ],

}))
