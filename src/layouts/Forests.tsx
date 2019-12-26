import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nForests } from "../i18n/forests"
import leaves3Image from "../../assets/leaves3.png"
import leaves4Image from "../../assets/leaves4.png"

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
      <Kiwi.Image source={leaves3Image}/>
      <Kiwi.Image source={leaves4Image}/>
    </Kiwi.Container>
  }

})
