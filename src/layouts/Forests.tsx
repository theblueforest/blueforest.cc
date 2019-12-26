import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nForests } from "../i18n/forests"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const ForestsLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { keyPrefix } = props
    return <Kiwi.Container>
      <Kiwi.Text keyPrefix={keyPrefix} i18n={i18nForests.title}/>
      <Kiwi.Text keyPrefix={keyPrefix} i18n={i18nForests.description}/>
      FORESTS
      <Kiwi.Image source={"../../assets/leaves3.png"}/>
      <Kiwi.Image source={"../../assets/leaves4.png"}/>
    </Kiwi.Container>
  }

})
