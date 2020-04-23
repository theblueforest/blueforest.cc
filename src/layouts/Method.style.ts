import { BlueForest } from "../bundle"
import { LeavesValues } from "../values/leaves"
import { TitlesValues } from "../values/titles"
import { TextValues } from "../values/text"

export const MethodLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  container: [
    {
      style: {
        textAlign: "center",
        color: colors.BLUE,
      },
    },
  ],

  title: [
    { style: TextValues.block },
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
        maxWidth: 200,
      },
    }
  ],

  howTitle: [
    { style: TextValues.block },
  ],

  explorationTitle: [
    { style: TextValues.block },
  ],

  explorationIntro: [
    { style: TextValues.block },
  ],

  explorationText: [
    { style: TextValues.block },
  ],

  conceptionTitle: [
    { style: TextValues.block },
  ],

  conceptionIntro: [
    { style: TextValues.block },
  ],

  realisationTitle: [
    { style: TextValues.block },
  ],


}))
