import { BlueForest } from "../bundle"
import { TextValues } from "../values/text"
import { BooleanFieldValidator } from "dropin-recipes"

export const MethodLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  container: [
    {
      style: {
        textAlign: "center",
        Width: "100%",
        background: "linear-gradient(rgb(255, 255, 255) 40%, rgba(255, 255, 255, 0) 90%), rgba(97, 255, 216, 0.5)",
      },
    },
  ],

  content: [
    {
      style: {
        color: colors.BLUE,
        maxWidth: "50%",
        margin : "auto",
        paddingTop: 20,
        textAlign: "center",
      },
    },
  ],

  title: [
    { style: TextValues.h1 },
    {
      max: sizes.MEDIUM,
      style: {
        marginLeft: 0,
      }
    }
  ],

  uxImg: [
    {
      style: {
        maxWidth: 600,
        marginTop: 10,
        marginBottom: 20,
      },
    }
  ],

  intro: [
    { style: TextValues.block },
    {
      style: {
        marginTop: 20,
        marginBottom: 30,
      },
    }

  ],

  howTitle: [
    { style: TextValues.h2 },
  ],

  howText: [
    { style: TextValues.block },
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
    { style: TextValues.h2 },
  ],

  explorationIntro: [
    { style: TextValues.block },
    { style: {
      fontWeight: "bold",
      },
    },
  ],

  explorationText: [
    { style: TextValues.block },
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
    { style: TextValues.h2 },
  ],

  conceptionIntro: [
    { style: TextValues.block},
    { style: {
      fontWeight: "bold",
    },
  }
  ],

  conceptionText: [
    { style: TextValues.block },
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
    { style: TextValues.h2 },
  ],

  realisationIntro: [
    { style: TextValues.block },
    { style: {
    fontWeight: "bold",
      },
    },
  ],

  realisationText: [
    { style: TextValues.block },
    {
      style: {
        marginTop: 30,
        marginBottom: 30,

      },
    },

  ],

}))
