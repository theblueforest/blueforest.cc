import { BlueForest } from "../bundle"
import { TextStyles } from "../styles/text.style"
import { BooleanFieldValidator } from "dropin-recipes"

export const MethodLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  container: [
    {
      style: {
        textAlign: "center",
        width: "100%",
        background: "linear-gradient(rgb(255, 255, 255) 40%, rgba(255, 255, 255, 0) 90%), rgba(97, 255, 216, 0.5)",
      },
    },
  ],

  content: [
    {
      style: {
        color: colors.BLUE,
        maxWidth: "55%",
        margin : "auto",
        paddingTop: 20,
        textAlign: "center",
      },
    },
    {
      max: sizes.LARGE,
      style: {
        maxWidth: "75%",
      }
    },
  ],

  title: [
    ...TextStyles.h1,
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

  intro: [
    ...TextStyles.content,
    {
      style: {
        margin: "20px 0",
      },
    }

  ],

  howTitle: [
    ...TextStyles.h1,
    {
      style: {
        marginTop: 60,
        color: colors.PINK,
      },
    },
  ],

  howText: [
    ...TextStyles.content,
    {
      style: {
        marginBottom: 20,
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        marginBottom: 15,
      }
    },
  ],

  explorationImage: [
    {
      style: {
        maxWidth: 200,
        marginTop: 100,
        marginBottom: 10,
      },
    }
  ],

  explorationTitle: [
    ...TextStyles.content,
  ],

  explorationIntro: [
    ...TextStyles.content,
  ],

  explorationText: [
    ...TextStyles.content,
    {
      style: {
        marginTop: 30,
        marginBottom: 30,

      },
    },
  ],

  conceptionImage: [
    {
      style: {
        maxWidth: 200,
        marginTop: 100,
        marginBottom: 10,
      },
    }
  ],

  conceptionTitle: [
    ...TextStyles.content,
  ],

  conceptionIntro: [
    ...TextStyles.content,
  ],

  conceptionText: [
    ...TextStyles.content,
    {
      style: {
        marginTop: 30,
        marginBottom: 30,

      },
    },
  ],

  realisationImage: [
    {
      style: {
        maxWidth: 200,
        marginTop: 100,
        marginBottom: 10,

      },
    },
  ],

  realisationTitle: [
    ...TextStyles.h1,
  ],

  realisationIntro: [
    ...TextStyles.content,
  ],

  realisationText: [
    ...TextStyles.content,
    {
      style: {
        marginTop: 30,
      },
    },

  ],

}))
