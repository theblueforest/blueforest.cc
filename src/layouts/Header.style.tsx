import { BlueForest } from "../bundle"

export const HeaderLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({
  logo: [
    { min: sizes.SMALL, style: {} },
    { min: sizes.MEDIUM, style: {} },
    { min: sizes.LARGE, style: {} },
  ],
  forest: [
    { min: sizes.SMALL, style: {} },
    { min: sizes.MEDIUM, style: {} },
    { min: sizes.LARGE, style: {} },
  ],
}))
