import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { i18nData } from "dropin-recipes"
import { BlueForest } from "../bundle"
import { i18nHeader } from "../i18n/header"
import { ExpertiseBlockComponentStyle } from "./ExpertiseBlock.style"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
  color: string
  title: i18nData
  description: i18nData
}

export const ExpertiseBlockComponent = BlueForest.Component<Props>({

  render: ({ props }) => {
    const { keyPrefix, color, title, description } = props
    return <Kiwi.Container style={ExpertiseBlockComponentStyle.container(color)}>
      <Kiwi.Text
        keyPrefix={keyPrefix}
        i18n={title}
        style={ExpertiseBlockComponentStyle.title(color)}
      />
      <Kiwi.Text
        keyPrefix={keyPrefix}
        i18n={description}
        style={ExpertiseBlockComponentStyle.description}
      />
    </Kiwi.Container>
  }

})
