import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { i18nData } from "dropin-recipes"
import { BlueForest } from "../bundle"
import { ExpertiseComponentStyle } from "./Expertise.style"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
  color: string
  title: i18nData
  description: i18nData
}

export const ExpertiseComponent = BlueForest.Component<Props>({

  render: ({ props }) => {
    const { keyPrefix, color, title, description } = props
    return <Kiwi.Container style={ExpertiseComponentStyle.container(color)}>
      <Kiwi.Text
        keyPrefix={keyPrefix}
        i18n={title}
        style={ExpertiseComponentStyle.title(color)}
      />
      <Kiwi.Text
        keyPrefix={keyPrefix}
        i18n={description}
        style={ExpertiseComponentStyle.description}
      />
    </Kiwi.Container>
  }

})
