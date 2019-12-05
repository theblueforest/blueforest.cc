import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const HeaderLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { keyPrefix } = props
    return [
      <Kiwi.Image source={require("../../assets/logo.png")}/>
    ]
  }

})
