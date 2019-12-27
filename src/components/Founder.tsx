import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { FounderComponentStyle } from "./Founder.style"

interface Props extends Kiwi.ComponentProps {}

export const FounderComponent = BlueForest.Component<Props>({

  render: ({ props }) => {
    return <Kiwi.Container style={FounderComponentStyle.container}>
    </Kiwi.Container>
  }

})
