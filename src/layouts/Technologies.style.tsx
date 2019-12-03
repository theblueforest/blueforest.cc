import { BlueForest } from "../bundle"

export const TechnologiesLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({
  test: [
    { max: sizes.SMALL, style: { backgroundColor: colors.MAGENTA } },
    { max: sizes.MEDIUM, style: { backgroundColor: colors.BLUE } },
    { max: sizes.LARGE, style: { backgroundColor: colors.PURPLE } },
  ],
}))
