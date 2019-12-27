import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nTechnologies } from "../i18n/technologies"
import { TechnologiesLayoutStyle } from "./Technologies.style"
import DROPinImage from "../../assets/DROPin.png"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const TechnologiesLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { keyPrefix } = props
    return <Kiwi.Container style={TechnologiesLayoutStyle.container}>
      <Kiwi.Text keyPrefix={keyPrefix} i18n={i18nTechnologies.title} style={TechnologiesLayoutStyle.title}/>

      <Kiwi.Image source={DROPinImage} style={TechnologiesLayoutStyle.image}/>

      <Kiwi.Text keyPrefix={keyPrefix} i18n={i18nTechnologies.dropinTitle} style={TechnologiesLayoutStyle.subtitle}/>
      <Kiwi.List style={TechnologiesLayoutStyle.list}>
        {i18nTechnologies.dropinDescription(new Date().getFullYear() - 2015).map((desc, index) => {
          return <Kiwi.ListElement key={`${keyPrefix}-dropin-${index}`} style={TechnologiesLayoutStyle.listElement}>
            <Kiwi.Text keyPrefix={`${keyPrefix}-dropin-${index}`} i18n={desc}/>
          </Kiwi.ListElement>
        })}
        <Kiwi.ListElement style={TechnologiesLayoutStyle.listLastElement}>
          <Kiwi.Text keyPrefix={`${keyPrefix}-dropin`} i18n={i18nTechnologies.dropinConclusion} style={TechnologiesLayoutStyle.listLastElementText}/>
        </Kiwi.ListElement>
      </Kiwi.List>

      <Kiwi.Text keyPrefix={keyPrefix} i18n={i18nTechnologies.kiwiBundleTitle} style={TechnologiesLayoutStyle.subtitle}/>
      <Kiwi.List style={TechnologiesLayoutStyle.list}>
        {i18nTechnologies.kiwiBundleDescription.map((desc, index) => {
          return <Kiwi.ListElement key={`${keyPrefix}-desc-${index}`} style={TechnologiesLayoutStyle.listElement}>
            <Kiwi.Text keyPrefix={`${keyPrefix}-desc-${index}`} i18n={desc}/>
          </Kiwi.ListElement>
        })}
        <Kiwi.ListElement style={TechnologiesLayoutStyle.listLastElement}>
          <Kiwi.Text keyPrefix={`${keyPrefix}-cln`} i18n={i18nTechnologies.kiwiBundleConclusion} style={TechnologiesLayoutStyle.listLastElementText}/>
        </Kiwi.ListElement>
      </Kiwi.List>

      <Kiwi.Container style={TechnologiesLayoutStyle.soon}>
        <Kiwi.Text keyPrefix={keyPrefix} i18n={i18nTechnologies.soonTitle} style={TechnologiesLayoutStyle.soonTitle}/>
        <Kiwi.Text keyPrefix={keyPrefix} i18n={i18nTechnologies.soonText} style={TechnologiesLayoutStyle.soonText}/>
        <Kiwi.Container style={TechnologiesLayoutStyle.soonForm}>
          <Kiwi.Container style={TechnologiesLayoutStyle.soonFormField}>
            <Kiwi.Text keyPrefix={keyPrefix} i18n={i18nTechnologies.soonInput}/>
          </Kiwi.Container>
          <Kiwi.Container style={TechnologiesLayoutStyle.soonFormBtn}>S'inscrire</Kiwi.Container>
        </Kiwi.Container>
      </Kiwi.Container>

    </Kiwi.Container>
  }

})
