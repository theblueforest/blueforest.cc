import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { LogoComponentStyle } from "./Logo.style"
import { i18nHeader } from "../i18n/header"
import logoImage from "../../assets/logo.white.png"

interface Props extends Kiwi.ComponentProps {
  id: string
}

export const LogoComponent = BlueForest.Component<Props>({

  render: ({ props }) => {
    const { id } = props

    return <Kiwi.Container style={LogoComponentStyle.container}>
      <Kiwi.Image source={logoImage} alt="Blue Forest" style={LogoComponentStyle.logo}/>
      <Kiwi.Container style={LogoComponentStyle.text}>
        <Kiwi.Text children="Blue Forest" style={LogoComponentStyle.name}/>
        <Kiwi.Text children={i18nHeader.baseline} id={id} style={LogoComponentStyle.baseline}/>
      </Kiwi.Container>
    </Kiwi.Container>
  }

})
