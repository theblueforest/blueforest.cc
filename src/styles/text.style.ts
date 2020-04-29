import { BlueForest } from "../bundle"

export const TextStyles = BlueForest.StyleSheet(({ sizes }) => ({

  h1: [
    {
      style: {
        display: "block",
        fontWeight: "bold",
        fontSize: 38,
        marginBottom: 20,
        padding: "30px 0",
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
        marginTop: 50,
        marginBottom: 15,
        padding: "20px 0",
      }
    },
    {
      max: sizes.SMALL,
      style: {
        fontSize: 24,
        padding: "15px 0",
        marginTop: 40,
        marginBottom: 10,
      }
    },
  ],

  content: [
    {
      style: {
        display: "block",
        textAlign: "justify",
        fontSize: 22,
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
