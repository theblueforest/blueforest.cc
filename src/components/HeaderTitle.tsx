import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { HeaderTitleComponentStyle } from "./HeaderTitle.style"
import { i18nHeader } from "../i18n/header"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const HeaderTitleComponent = BlueForest.Component<Props>({

  render: ({ props, style }) => {
    const { keyPrefix } = props
    console.log(HeaderTitleComponentStyle.container, style)
    return <Kiwi.Container style={HeaderTitleComponentStyle.container}>
      <Kiwi.Image source={require("../../assets/logo.png")} style={HeaderTitleComponentStyle.logo}/>
      <Kiwi.Text keyPrefix={keyPrefix} i18n={i18nHeader.name} style={HeaderTitleComponentStyle.name}/>
      <Kiwi.Text keyPrefix={keyPrefix} i18n={i18nHeader.baseline} style={HeaderTitleComponentStyle.baseline}/>
    </Kiwi.Container>
  }

})
