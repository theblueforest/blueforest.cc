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
    const { keyPrefix: id } = props
    return <Kiwi.Container style={TechnologiesLayoutStyle.container}>
      <Kiwi.Text children={i18nTechnologies.title} id={id} style={TechnologiesLayoutStyle.title}/>
      <Kiwi.Image source={DROPinImage} style={TechnologiesLayoutStyle.DROPinImage}/>

      <Kiwi.Container style={TechnologiesLayoutStyle.content}>
        <Kiwi.Text children={i18nTechnologies.dropinTitle} style={TechnologiesLayoutStyle.subtitle}/>
        {i18nTechnologies.dropinDescription(new Date().getFullYear() - 2015).map((desc, index) => {
          return <Kiwi.Text key={index} id={`${id}-dropin-${index}-text`} children={desc} style={TechnologiesLayoutStyle.listElement}/>
        })}
        <Kiwi.Text id={`${id}-dropin-last-text`} children={i18nTechnologies.dropinConclusion} style={TechnologiesLayoutStyle.listLastElementText}/>

        <Kiwi.Text children={i18nTechnologies.kiwiBundleTitle} id={id} style={TechnologiesLayoutStyle.subtitle}/>
        {i18nTechnologies.kiwiBundleDescription.map((desc, index) => {
          return <Kiwi.Text key={index} id={`${id}-kb-${index}-text`} children={desc} style={TechnologiesLayoutStyle.listElement}/>
        })}
        <Kiwi.Text id={`${id}-dropin-last-text`} children={i18nTechnologies.kiwiBundleConclusion} style={TechnologiesLayoutStyle.listLastElementText}/>

        <Kiwi.Container style={TechnologiesLayoutStyle.soon}>
          <Kiwi.Text children={i18nTechnologies.soonTitle} id={id} style={TechnologiesLayoutStyle.soonTitle}/>
          <Kiwi.Text children={i18nTechnologies.soonText} id={id} style={TechnologiesLayoutStyle.soonText}/>
          <Kiwi.Container style={TechnologiesLayoutStyle.soonForm}>
            <Kiwi.Container style={TechnologiesLayoutStyle.soonFormField}>
              <Kiwi.Text children={i18nTechnologies.soonInput} id={id}/>
            </Kiwi.Container>
            <Kiwi.Container style={TechnologiesLayoutStyle.soonFormBtn}>S'inscrire</Kiwi.Container>
          </Kiwi.Container>
        </Kiwi.Container>

      </Kiwi.Container>
    </Kiwi.Container>
  }

})
