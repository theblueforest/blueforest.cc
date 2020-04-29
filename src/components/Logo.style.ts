import { BlueForest } from "../bundle"

export const LogoComponentStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  container: [
    {
      style: {
        width: "fit-content",
        textAlign: "center",
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(2, auto)",
        gridTemplateRows: "repeat(2, auto)",
        gridColumnGap: 0,
        gridRowGap: 0,
        paddingTop: 60,
        marginBottom: 25,
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        display: "block",
        marginBottom: 0,
      },
    },
    {
      max: sizes.SMALL,
      style: {
        paddingTop: 30,
        marginBottom: 0,
      },
    },
  ],

  logo: [
    {
      style: {
        gridArea: "1 / 1 / 3 / 2",
        width: 150,
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        display: "inline-block",
      },
    },
    {
      max: sizes.SMALL,
      style: {
        width: 100,
      },
    },
  ],

  name: [
    {
      style: {
        gridArea: "1 / 2 / 2 / 3",
        alignSelf: "end",
        fontSize: 50,
        fontWeight: "bold",
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        display: "block",
      },
    },
    {
      max: sizes.SMALL,
      style: {
        fontSize: 40,
      },
    },
  ],

  baseline: [
    {
      style: {
        gridArea: "2 / 2 / 3 / 3",
        fontSize: 20,
      },
    },
  ],

}))
