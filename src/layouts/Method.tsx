import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nMethod } from "../i18n/method"
import { MethodLayoutStyle } from "./Method.style"
import leaves1Image from "../../assets/leaves1.png"
import methodImage from "../../assets/method.fr.png"

interface Props extends Kiwi.ComponentProps {
  id: string
}

export const MethodLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { id } = props
    return <Kiwi.Container>
      <Kiwi.Image
        source={leaves1Image}
        style={MethodLayoutStyle.leaves1}
      />
      <Kiwi.Text
        id={id}
        children={i18nMethod.title}
        style={MethodLayoutStyle.title}
      />
      <Kiwi.Image
        source={methodImage}
        style={MethodLayoutStyle.image}
      />
    </Kiwi.Container>
  }

})
