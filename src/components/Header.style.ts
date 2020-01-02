import { BlueForest } from "../bundle"

export const HeaderComponentStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

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
      },
    },

    {
      max: sizes.MEDIUM,
      style: {
        display: "block"
      }
    }
  ],

  logo: [
    {
      style: {
        gridArea: "1 / 1 / 3 / 2",
        width: 90,
      },
    },

    {
      max: sizes.MEDIUM,
      style: {
        display: "inline-block",
      }
    }
  ],

  name: [
    {
      style: {
        gridArea: "1 / 2 / 2 / 3",
        alignSelf: "end",
        fontSize: 40,
        fontWeight: "bold",
      },
    },

    {
      max: sizes.MEDIUM,
      style: {
        display: "block"
      }
    }
  ],

  baseline: [
    {
      style: {
        gridArea: "2 / 2 / 3 / 3",
      },
    },
  ],

}))
