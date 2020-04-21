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

  title: [
    {
      style: {
        paddingTop: 50,
        marginBottom: 30,
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
        width: 800,
      },
    },
  ],

}))
