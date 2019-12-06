import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { HeaderLayoutStyle } from "./Header.style"
import { HeaderComponent } from "../components/Header"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const HeaderLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { keyPrefix } = props
    return <Kiwi.Container style={HeaderLayoutStyle.container}>
      <Kiwi.Container style={HeaderLayoutStyle.title}>
        <HeaderComponent keyPrefix={keyPrefix}/>
      </Kiwi.Container>
      <Kiwi.Video
        keyPrefix={`${keyPrefix}-video`}
        sources={[ require("../../assets/header.mp4") ]}
        style={HeaderLayoutStyle.forest}
      />
    </Kiwi.Container>
  }

})
