import { BlueForest } from "../bundle"
import { TextStyles } from "../styles/text.style"

export const NewsletterLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  container: [
    {
      style: {
        width: "100%",
        backgroundColor: colors.GREEN2,
        color: colors.BLUE,
        textAlign: "center",
        padding: "50px 0",
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

  imageContainer: [
    {
      style: {
        maxWidth: 420,
        display: "inline-block",
        verticalAlign: "middle",
        margin: 50,
      },
    },
  ],

  image: [
    {
      style: {
        width: "100%",
      },
    },
  ],

  content: [
    {
      style: {
        display: "inline-block",
        verticalAlign: "middle",
        textAlign: "center",
        maxWidth: 420,
        margin: "0 40px 20px",
      },
    },
  ],

  title: [
    ...TextStyles.h2,
    {
      style: {
        padding: "0 0 10px",
      },
    },
  ],

  form: [
    {
      style: {
        width: "90%",
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

  reCaptcha: [
    {
      style: {
        display: "inline-block",
        margin: "0 auto 20px",
      },
    },
  ],

  button: [
    {
      style: {
        width: "90%",
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
