import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { AnatomyComponentStyle } from "./Anatomy.style"

interface Props extends Kiwi.ComponentProps {}

export const ForestComponent = BlueForest.Component<Props>({

render: () => {
    return <Kiwi.Container style={AnatomyComponentStyle.container}>
    </Kiwi.Container>
  }

})