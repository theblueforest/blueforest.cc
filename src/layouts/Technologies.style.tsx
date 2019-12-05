import { BlueForest } from "../bundle"

export const TechnologiesLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({
  test: [
    { min: sizes.SMALL, style: { backgroundColor: colors.MAGENTA } },
    { min: sizes.MEDIUM, style: { backgroundColor: colors.BLUE } },
    { min: sizes.LARGE, style: { backgroundColor: colors.PURPLE } },
  ],
}))
