import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { ForestComponentStyle } from "./Forest.style"

interface Props extends Kiwi.ComponentProps {}

export const ForestComponent = BlueForest.Component<Props>({

  render: ({ props }) => {
    return <Kiwi.Container style={ForestComponentStyle.container}>
    </Kiwi.Container>
  }

})
