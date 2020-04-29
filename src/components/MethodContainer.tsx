import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"

interface Props extends Kiwi.ComponentProps {
  title: string
}

export const MethodContainerComponent = BlueForest.Component<Props>({

  render: ({ props, style }) => {
    const {} = props
    return <Kiwi.Container>
    </Kiwi.Container>
  }

})
