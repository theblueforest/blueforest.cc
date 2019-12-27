import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nForests } from "../i18n/forests"
import leaves3Image from "../../assets/leaves3.png"
import leaves4Image from "../../assets/leaves4.png"
import { ForestsLayoutStyle } from "./Forests.style"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const ForestsLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { keyPrefix } = props
    return <Kiwi.Container style={ForestsLayoutStyle.container}>
      <Kiwi.Image
        source={leaves3Image}
        style={ForestsLayoutStyle.leaves1}
      />
      <Kiwi.Text
        keyPrefix={keyPrefix}
        i18n={i18nForests.title}
        style={ForestsLayoutStyle.title}
      />
      <Kiwi.Text
        keyPrefix={keyPrefix}
        i18n={i18nForests.description}
        style={ForestsLayoutStyle.description}
      />

      <Kiwi.Container style={ForestsLayoutStyle.cardsContainer}>
        <Kiwi.Container style={ForestsLayoutStyle.card}>
        
        </Kiwi.Container>

        <Kiwi.Container style={ForestsLayoutStyle.card}>
        
        </Kiwi.Container>

        <Kiwi.Container style={ForestsLayoutStyle.card}>
        
        </Kiwi.Container>

        <Kiwi.Container style={ForestsLayoutStyle.card}>
        
        </Kiwi.Container>
      </Kiwi.Container>

      <Kiwi.Image
        source={leaves4Image}
        style={ForestsLayoutStyle.image}
      />
    </Kiwi.Container>
  }

})
