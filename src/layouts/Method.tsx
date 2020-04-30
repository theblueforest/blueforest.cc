import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nMethod } from "../i18n/method"
import uxImage from "../../assets/ux.png"
import explorationImage from "../../assets/exploration.png"
import { MethodLayoutStyle } from "./Method.style"
import conceptionImage from "../../assets/conception.png"
import realisationImage from "../../assets/realisation.png"
import { TextStyles } from "../styles/text.style"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const MethodLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { keyPrefix } = props
    return <Kiwi.Container style={MethodLayoutStyle.container}>

      <Kiwi.Container style={MethodLayoutStyle.introContainer}>
        <Kiwi.Text id={keyPrefix} children={i18nMethod.title} style={TextStyles.h1}/>

        <Kiwi.Image source={uxImage} alt={i18nMethod.ux} style={MethodLayoutStyle.uxImage}/>

        <Kiwi.Text id={keyPrefix} children={i18nMethod.intro} style={TextStyles.content}/>
        <Kiwi.Text id={keyPrefix} children={i18nMethod.howTitle} style={MethodLayoutStyle.howTitle}/>
        {i18nMethod.howText.map((text, index) => {
          return <Kiwi.Text key={index} id={keyPrefix} children={text} style={TextStyles.content}/>
        })}
      </Kiwi.Container>

      <Kiwi.Container style={MethodLayoutStyle.servicesContainer}>

        <Kiwi.Container style={MethodLayoutStyle.servicesItem}>
          <Kiwi.Image source={explorationImage} alt={i18nMethod.explorationTitle} style={MethodLayoutStyle.image}/>
          <Kiwi.Text id={keyPrefix} children={i18nMethod.explorationTitle} style={MethodLayoutStyle.title}/>
          <Kiwi.Text id={keyPrefix} children={i18nMethod.explorationIntro} style={TextStyles.content}/>
          <Kiwi.Text id={keyPrefix} children={i18nMethod.explorationText} style={TextStyles.content}/>
        </Kiwi.Container>

        <Kiwi.Container style={MethodLayoutStyle.servicesItem}>
          <Kiwi.Image source={conceptionImage} alt={i18nMethod.conceptionTitle} style={MethodLayoutStyle.image}/>
          <Kiwi.Text id={keyPrefix} children={i18nMethod.conceptionTitle} style={MethodLayoutStyle.title}/>
          <Kiwi.Text id={keyPrefix} children={i18nMethod.conceptionIntro} style={TextStyles.content}/>
          <Kiwi.Text id={keyPrefix} children={i18nMethod.conceptionText} style={TextStyles.content}/>
        </Kiwi.Container>

        <Kiwi.Container style={MethodLayoutStyle.servicesItem}>
          <Kiwi.Image source={realisationImage} alt={i18nMethod.realisationTitle} style={MethodLayoutStyle.image}/>
          <Kiwi.Text id={keyPrefix} children={i18nMethod.realisationTitle} style={MethodLayoutStyle.title}/>
          <Kiwi.Text id={keyPrefix} children={i18nMethod.realisationIntro} style={TextStyles.content}/>
          <Kiwi.Text id={keyPrefix} children={i18nMethod.realisationText} style={TextStyles.content}/>
        </Kiwi.Container>

      </Kiwi.Container>

    </Kiwi.Container>
  }

})
