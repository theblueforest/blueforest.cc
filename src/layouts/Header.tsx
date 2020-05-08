import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { HeaderLayoutStyle } from "./Header.style"
import { LogoComponent } from "../components/Logo"
import headerGif from "../../assets/header.gif"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const HeaderLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { keyPrefix } = props
    return <Kiwi.Container style={HeaderLayoutStyle.container}>

      <LogoComponent id={keyPrefix}/>

      <Kiwi.Container style={HeaderLayoutStyle.forestContainer}>
        <Kiwi.Image source={headerGif} style={HeaderLayoutStyle.forestVideo}/>
      </Kiwi.Container>

    </Kiwi.Container>
  }

})
