import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { HeaderLayoutStyle } from "./Header.style"
import { HeaderTitleComponent } from "../components/HeaderTitle"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const HeaderLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { keyPrefix } = props
    return <Kiwi.Container style={HeaderLayoutStyle.container}>
      <Kiwi.Container style={HeaderLayoutStyle.title}>
        <HeaderTitleComponent keyPrefix={keyPrefix}/>
      </Kiwi.Container>
      <Kiwi.Container style={HeaderLayoutStyle.forest}>
        <Kiwi.Video sources={}/>
      </Kiwi.Container>
    </Kiwi.Container>
  }

})
