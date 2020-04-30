import { BlueForest } from "../bundle"
import { TextStyles } from "../styles/text.style"
import { BooleanFieldValidator } from "dropin-recipes"

export const MethodLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  container: [
    {
      style: {
        width: "100%",
        background: "linear-gradient(rgb(255, 255, 255) 40%, rgba(255, 255, 255, 0) 90%), rgba(97, 255, 216, 0.5)",
        textAlign: "center",
        color: colors.BLUE,
        paddingTop: 20,
      },
    },
  ],

  introContainer: [
    {
      style: {
        maxWidth: "55%",
        margin: "auto",
      },
    },
    {
      max: sizes.LARGE,
      style: {
        maxWidth: "75%",
      }
    },
  ],

  uxImage: [
    {
      style: {
        width: "100%",
        maxWidth: 600,
        margin: "10px 0",
      },
    }
  ],

  howTitle: [
    ...TextStyles.h2,
    {
      style: {
        marginTop: 60,
        color: colors.PINK,
        fontWeight: "bold",
      },
    },
  ],

  servicesContainer: [
    {
      style: {
        display: "flex",
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        flexDirection: "column",
      },
    },
  ],

  servicesItem: [
    {
      style: {
        flex: 1,
        padding: 50,
      },
    }
  ],

  image: [
    {
      style: {
        display: "block",
        margin: "auto",
        width: "100%",
        maxWidth: 200,
        marginTop: 100,
        marginBottom: 10,
      },
    }
  ],

  title: [
    ...TextStyles.h2,
    {
      style: {
        color: colors.PINK,
      }
    }
  ],

}))
