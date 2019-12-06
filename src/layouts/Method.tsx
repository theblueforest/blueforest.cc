import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nMethod } from "../i18n/method"
import { MethodLayoutStyle } from "./Method.style"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const MethodLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { keyPrefix } = props
    return <Kiwi.Container>
      <Kiwi.Image
        source={require("../../assets/leaves1.png")}
        style={MethodLayoutStyle.leaves1}
      />
      <Kiwi.Text
        keyPrefix={keyPrefix}
        i18n={i18nMethod.title}
        style={MethodLayoutStyle.title}
      />
      <Kiwi.Image
        source={require("../../assets/method.fr.png")}
        style={MethodLayoutStyle.image}
      />
      <Kiwi.Image
        source={require("../../assets/leaves2.png")}
        style={MethodLayoutStyle.leaves2}
      />
    </Kiwi.Container>
  }

})
