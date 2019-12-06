import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nTechnologies } from "../i18n/technologies"
import { TechnologiesLayoutStyle } from "./Technologies.style"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const TechnologiesLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { keyPrefix } = props
    return <Kiwi.Container style={TechnologiesLayoutStyle.container}>
      <Kiwi.Text keyPrefix={keyPrefix} i18n={i18nTechnologies.title} style={TechnologiesLayoutStyle.title}/>

      <Kiwi.Image source={require("../../assets/DROPin.png")} style={TechnologiesLayoutStyle.image}/>

      <Kiwi.Text keyPrefix={keyPrefix} i18n={i18nTechnologies.dropinTitle}/>
      <Kiwi.List>
        {i18nTechnologies.dropinDescription(new Date().getFullYear() - 2015).map((desc, index) => {
          return <Kiwi.ListElement key={`${keyPrefix}-dropin-${index}`}>
            <Kiwi.Text keyPrefix={`${keyPrefix}-dropin-${index}`} i18n={desc}/>
          </Kiwi.ListElement>
        })}
        <Kiwi.ListElement>
          <Kiwi.Text keyPrefix={`${keyPrefix}-dropin`} i18n={i18nTechnologies.dropinConclusion}/>
        </Kiwi.ListElement>
      </Kiwi.List>

      <Kiwi.Text keyPrefix={keyPrefix} i18n={i18nTechnologies.kiwiBundleTitle}/>
      <Kiwi.List>
        {i18nTechnologies.kiwiBundleDescription.map((desc, index) => {
          return <Kiwi.ListElement key={`${keyPrefix}-desc-${index}`}>
            <Kiwi.Text keyPrefix={`${keyPrefix}-desc-${index}`} i18n={desc}/>
          </Kiwi.ListElement>
        })}
        <Kiwi.ListElement>
          <Kiwi.Text keyPrefix={`${keyPrefix}-cln`} i18n={i18nTechnologies.kiwiBundleConclusion}/>
        </Kiwi.ListElement>
      </Kiwi.List>

    </Kiwi.Container>
  }

})
