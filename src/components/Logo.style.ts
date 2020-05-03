import { BlueForest } from "../bundle"
import { CSSProperties } from "kiwi-bundle-react"

export const LogoComponentStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  container: [
    {
      style: {
        width: "fit-content",
        textAlign: "center",
        margin: "auto",
        gridColumnGap: 0,
        gridRowGap: 0,
        paddingTop: 60,
        marginBottom: 25,
      } as CSSProperties,
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
        width: 150,
        display: "inline-block",
        verticalAlign: "middle",
      },
    },
    {
      max: sizes.SMALL,
      style: {
        display: "block",
        margin: "0 auto 10px",
      },
    },
  ],

  text: [
    {
      style: {
        paddingTop: "",
        display: "inline-block",
        verticalAlign: "middle",
      },
    },
  ],

  name: [
    {
      style: {
        fontSize: 50,
        fontWeight: "bold",
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
        fontSize: 40,
      },
    },
  ],

  baseline: [
    {
      style: {
        display: "block",
        fontSize: 20,
      },
    },
  ],

}))
