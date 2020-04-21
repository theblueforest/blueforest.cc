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

      <Kiwi.Image source={DROPinImage} style={TechnologiesLayoutStyle.image}/>

      <Kiwi.Text children={i18nTechnologies.dropinTitle} style={TechnologiesLayoutStyle.subtitle}/>
      <Kiwi.List style={TechnologiesLayoutStyle.list}>
        {i18nTechnologies.dropinDescription(new Date().getFullYear() - 2015).map((desc, index) => {
          const childrenId = `${id}-dropin-${index}`
          return <Kiwi.ListElement key={childrenId} style={TechnologiesLayoutStyle.listElement}>
            <Kiwi.Text id={`${childrenId}-text`} children={desc}/>
          </Kiwi.ListElement>
        })}
        <Kiwi.ListElement key={`${id}-dropin-last`} style={TechnologiesLayoutStyle.listLastElement}>
          <Kiwi.Text id={`${id}-dropin-last-text`} children={i18nTechnologies.dropinConclusion} style={TechnologiesLayoutStyle.listLastElementText}/>
        </Kiwi.ListElement>
      </Kiwi.List>

      <Kiwi.Text children={i18nTechnologies.kiwiBundleTitle} style={TechnologiesLayoutStyle.subtitle}/>
      <Kiwi.List style={TechnologiesLayoutStyle.list}>
        {i18nTechnologies.kiwiBundleDescription.map((desc, index) => {
          const childrenId = `${id}-kb-${index}`
          return <Kiwi.ListElement key={childrenId} style={TechnologiesLayoutStyle.listElement}>
            <Kiwi.Text id={`${childrenId}-text`} children={desc}/>
          </Kiwi.ListElement>
        })}
        <Kiwi.ListElement key={`${id}-kb-last`} style={TechnologiesLayoutStyle.listLastElement}>
          <Kiwi.Text id={`${id}-kb-last-text`} children={i18nTechnologies.kiwiBundleConclusion} style={TechnologiesLayoutStyle.listLastElementText}/>
        </Kiwi.ListElement>
      </Kiwi.List>

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
  }

})
