import { BlueForest } from "../bundle"

export const FooterLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  container: [
    {
      style: {
        backgroundColor: colors.GREEN,
      },
    },
  ],

  image: [
    {
      style: {
        width: 200,
      }
    }
  ]

}))
