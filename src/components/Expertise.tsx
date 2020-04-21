import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { i18nData } from "dropin-recipes"
import { BlueForest } from "../bundle"
import { ExpertiseComponentStyle } from "./Expertise.style"

interface Props extends Kiwi.ComponentProps {
  id: string
  color: string
  title: i18nData
  description: i18nData
}

export const ExpertiseComponent = BlueForest.Component<Props>({

  render: ({ props }) => {
    const { id, color, title, description } = props
    return <Kiwi.Container style={ExpertiseComponentStyle.container(color)}>
      <Kiwi.Text
        id={id}
        children={title}
        style={ExpertiseComponentStyle.title(color)}
      />
      <Kiwi.Text
        id={id}
        children={description}
        style={ExpertiseComponentStyle.description}
      />
    </Kiwi.Container>
  }

})
