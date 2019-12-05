import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const MethodLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { keyPrefix } = props
    return <div>Method</div>
  }

})
