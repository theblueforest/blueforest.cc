import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nTechnologies } from "../i18n/technologies"
import { TechnologiesLayoutStyle } from "./Technologies.style"

interface Props {
  keyPrefix: string
}

export const TechnologiesLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { keyPrefix } = props
    return <Kiwi.List style={TechnologiesLayoutStyle.test}>
    {i18nTechnologies.dropinDescription(new Date().getFullYear() - 2015).map((desc, index) => {
      return <Kiwi.ListElement key={`${keyPrefix}-desc-${index}`}>
        <Kiwi.Text keyPrefix={`${keyPrefix}-desc-${index}`} i18n={desc}/>
      </Kiwi.ListElement>
    })}
      <Kiwi.ListElement>
        <Kiwi.Text keyPrefix={`${keyPrefix}-cln`} i18n={i18nTechnologies.dropinConclusion}/>
      </Kiwi.ListElement>
    </Kiwi.List>
  }

})
