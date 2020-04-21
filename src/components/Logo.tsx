import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { HeaderComponentStyle } from "./Header.style"
import { i18nHeader } from "../i18n/header"
import logoImage from "../../assets/logo.png"

interface Props extends Kiwi.ComponentProps {
  id: string
}

export const LogoComponent = BlueForest.Component<Props>({

  render: ({ props, style }) => {
    const { id } = props
    return <Kiwi.Container style={HeaderComponentStyle.container}>
      <Kiwi.Image source={logoImage} alt="Blue Forest" style={HeaderComponentStyle.logo}/>
      <Kiwi.Text children={i18nHeader.name} style={HeaderComponentStyle.name}/>
      <Kiwi.Text children={i18nHeader.baseline} id={id} style={HeaderComponentStyle.baseline}/>
    </Kiwi.Container>
  }

})
