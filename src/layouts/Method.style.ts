import { BlueForest } from "../bundle"
import { TitlesValues } from "../values/titles"
import { TextValues } from "../values/text"
import { BooleanFieldValidator } from "dropin-recipes"

export const MethodLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

container: 
[
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
        textAlign: "center",
      },
    },
  ],

  title: [
    { style: TitlesValues.H1 },
    {
      max: sizes.MEDIUM,
      style: {
        marginBottom: 28,
        marginLeft: 0
      }
    }
  ],

  intro: [
    { style: TextValues.block },
  ],

  uxImg: [
    {
      style: {
        maxWidth: 600,
      },
    }
  ],

  howTitle: [
    { style: TitlesValues.H2 },
  ],

  howText: [
    { style: TextValues.block },
  ],

  explorationImage: 
  [
    {
      style: {
        maxWidth: 200,
        marginTop: 100,
        marginBottom: 10,
      },
    }
  ],

  explorationTitle: [
    { style: TitlesValues.H2 },
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
  ],

  conceptionImage: 
  [
    {
      style: {
        maxWidth: 200,
        marginTop: 100,
        marginBottom: 10,
      },
    }
  ],

  conceptionTitle: [
    { style: TitlesValues.H2 },
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
  ],

  realisationImage: 
  [
    {
      style: {
        maxWidth: 200,
        marginTop: 100,
        marginBottom: 10,

      },
    }
  ],

  realisationTitle: [
    { style: TitlesValues.H2 },
  ],

  realisationText: [
    { style: TextValues.block },
  ],

}))
