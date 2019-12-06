import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { HeaderComponentStyle } from "./Header.style"
import { i18nHeader } from "../i18n/header"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const HeaderComponent = BlueForest.Component<Props>({

  render: ({ props, style }) => {
    const { keyPrefix } = props
    return <Kiwi.Container style={HeaderComponentStyle.container}>
      <Kiwi.Image
        source={require("../../assets/logo.png")}
        alt="Blue Forest"
        style={HeaderComponentStyle.logo}
      />
      <Kiwi.Text
        keyPrefix={keyPrefix}
        i18n={i18nHeader.name}
        style={HeaderComponentStyle.name}
      />
      <Kiwi.Text
        keyPrefix={keyPrefix}
        i18n={i18nHeader.baseline}
        style={HeaderComponentStyle.baseline}
      />
    </Kiwi.Container>
  }

})
