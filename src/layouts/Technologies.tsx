import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nTechnologies } from "../i18n/technologies"
import { TechnologiesLayoutStyle } from "./Technologies.style"
import DROPinImage from "../../assets/DROPin.png"

interface Props extends Kiwi.ComponentProps {
  id: string
}

export const TechnologiesLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { id } = props
    return <Kiwi.Container style={TechnologiesLayoutStyle.container}>
      <Kiwi.Text id={id} children={i18nTechnologies.title} style={TechnologiesLayoutStyle.title}/>

      <Kiwi.Image source={DROPinImage} style={TechnologiesLayoutStyle.image}/>

      <Kiwi.Text id={id} children={i18nTechnologies.dropinTitle} style={TechnologiesLayoutStyle.subtitle}/>
      <Kiwi.List style={TechnologiesLayoutStyle.list}>
        {i18nTechnologies.dropinDescription(new Date().getFullYear() - 2015).map((desc, index) => {
          const childrenId = `${id}-dropin-${index}`
          return <Kiwi.ListElement id={childrenId} style={TechnologiesLayoutStyle.listElement}>
            <Kiwi.Text id={`${childrenId}-text`} children={desc}/>
          </Kiwi.ListElement>
        })}
        <Kiwi.ListElement id={`${id}-dropin-last`} style={TechnologiesLayoutStyle.listLastElement}>
          <Kiwi.Text id={`${id}-dropin-last-text`} children={i18nTechnologies.dropinConclusion} style={TechnologiesLayoutStyle.listLastElementText}/>
        </Kiwi.ListElement>
      </Kiwi.List>

      <Kiwi.Text id={id} children={i18nTechnologies.kiwiBundleTitle} style={TechnologiesLayoutStyle.subtitle}/>
      <Kiwi.List style={TechnologiesLayoutStyle.list}>
        {i18nTechnologies.kiwiBundleDescription.map((desc, index) => {
          const childrenId = `${id}-kb-${index}`
          return <Kiwi.ListElement id={childrenId} style={TechnologiesLayoutStyle.listElement}>
            <Kiwi.Text id={`${childrenId}-text`} children={desc}/>
          </Kiwi.ListElement>
        })}
        <Kiwi.ListElement id={`${id}-kb-last`} style={TechnologiesLayoutStyle.listLastElement}>
          <Kiwi.Text id={`${id}-kb-last-text`} children={i18nTechnologies.kiwiBundleConclusion} style={TechnologiesLayoutStyle.listLastElementText}/>
        </Kiwi.ListElement>
      </Kiwi.List>

      <Kiwi.Container style={TechnologiesLayoutStyle.soon}>
        <Kiwi.Text id={id} children={i18nTechnologies.soonTitle} style={TechnologiesLayoutStyle.soonTitle}/>
        <Kiwi.Text id={id} children={i18nTechnologies.soonText} style={TechnologiesLayoutStyle.soonText}/>
        <Kiwi.Container style={TechnologiesLayoutStyle.soonForm}>
          <Kiwi.Container style={TechnologiesLayoutStyle.soonFormField}>
            <Kiwi.Text id={id} children={i18nTechnologies.soonInput}/>
          </Kiwi.Container>
          <Kiwi.Container style={TechnologiesLayoutStyle.soonFormBtn}>S'inscrire</Kiwi.Container>
        </Kiwi.Container>
      </Kiwi.Container>

    </Kiwi.Container>
  }

})
