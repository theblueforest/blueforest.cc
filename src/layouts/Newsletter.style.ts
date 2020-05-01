import { BlueForest } from "../bundle"
import { TextStyles } from "../styles/text.style"

export const NewsletterLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  container: [
    {
      style: {
        display: "flex",
        maxWidth: "100%",
        backgroundColor: colors.GREEN2,
        color: colors.BLUE,
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        flexDirection: "column",
        padding: "50px 0",
      },
    },
  ],

  item: [
    {
      style: {
        flex: 1,
        margin: 50,
        textAlign: "center",
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        margin: "10px auto",
        maxWidth: "75%",
      },
    },
  ],

  image: [
    {
      style: {
        width: "100%",
        maxWidth: 420,
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        maxWidth: 420,
      },
    },
  ],

  form: [
    {
      style: {
        width: 300,
        borderRadius: 12,
        border: "1px solid " + colors.BLUE,
        color: colors.BLUE,
        background: "transparent",
        padding: "10px 0",
        textAlign: "center",
        fontSize: 18,
      },
    },
  ],

  button: [
    {
      style: {
        width: 300,
        borderRadius: 12,
        border: "1px solid " + colors.BLUE,
        background: colors.BLUE,
        padding: "10px 0",
        textAlign: "center",
        color: "white",
        cursor: "pointer",
        fontSize: 20,
      },
    },
  ],

  text: [
    ...TextStyles.content,
    {
      style: {
        textAlign: "center",
      },
    },
  ],

  terms: [
    ...TextStyles.content,
    {
      style: {
        textAlign: "center",
        fontSize: 13,
      },
    },
  ],

}))
