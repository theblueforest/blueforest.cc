import { BlueForest } from "../bundle"

export const TextStyles = BlueForest.StyleSheet(({ sizes, colors }) => ({

  h1: [
    {
      style: {
        display: "block",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 38,
        padding: "30px 0",
        marginBottom: 20,
      },
    },
    {
      max: sizes.LARGE,
      style: {
        fontSize: 34,
      }
    },
    {
      max: sizes.MEDIUM,
      style: {
        fontSize: 28,
        marginBottom: 15,
        padding: "20px 0",
      }
    },
    {
      max: sizes.SMALL,
      style: {
        fontSize: 24,
        padding: "15px 0",
        marginBottom: 10,
      }
    },
  ],

  h2: [
    {
      style: {
        display: "block",
        textAlign: "center",
        fontSize: 36,
        padding: "30px 0",
        fontWeight: "bold"
      },
    },
    {
      max: sizes.LARGE,
      style: {
        fontSize: 32,
      }
    },
    {
      max: sizes.MEDIUM,
      style: {
        fontSize: 26,
        padding: "20px 0",
      }
    },
    {
      max: sizes.SMALL,
      style: {
        fontSize: 22,
        padding: "15px 0",
      }
    },





  ],

  h3: [],

  content: [
    {
      style: {
        display: "block",
        textAlign: "justify",
        fontSize: 22,
        margin: "20px 0",
        color: colors.BLUE,
      },
    },
    {
      max: sizes.LARGE,
      style: {
        fontSize: 20,
      }
    },
    {
      max: sizes.MEDIUM,
      style: {
        fontSize: 18,
      }
    },
    {
      max: sizes.SMALL,
      style: {
        fontSize: 16,
      }
    },
  ],

}))
