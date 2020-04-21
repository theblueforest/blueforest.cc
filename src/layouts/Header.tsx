import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { HeaderLayoutStyle } from "./Header.style"
import { LogoComponent } from "../components/Logo"
import headerVideo from "../../assets/header.mp4"

interface Props extends Kiwi.ComponentProps {
  id: string
}

export const HeaderLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { id } = props
    return <Kiwi.Container style={HeaderLayoutStyle.container}>
      <Kiwi.Container style={HeaderLayoutStyle.title}>
        <LogoComponent id={id}/>
      </Kiwi.Container>
      <Kiwi.Container style={HeaderLayoutStyle.forestContainer}>
        <Kiwi.Video
          id={`${id}-video`}
          sources={[ headerVideo ]}
          style={HeaderLayoutStyle.forestVideo}
        />
      </Kiwi.Container>
    </Kiwi.Container>
  }

})
