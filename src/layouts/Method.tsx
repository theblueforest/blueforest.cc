import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nMethod } from "../i18n/method"
import uxImage from "../../assets/ux.png"
import explorationImage from "../../assets/exploration.png"
import { MethodLayoutStyle } from "./Method.style"
import conceptionImage from "../../assets/conception.png"
import realisationImage from "../../assets/realisation.png"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const MethodLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { keyPrefix } = props
    return <Kiwi.Container style={MethodLayoutStyle.container}>
      <Kiwi.Container style={MethodLayoutStyle.content}>
        <Kiwi.Text id={keyPrefix} children={i18nMethod.title} style={MethodLayoutStyle.title}/>

        <Kiwi.Image source={uxImage} alt={i18nMethod.ux} style={MethodLayoutStyle.uxImg}/>

        <Kiwi.Text id={keyPrefix} children={i18nMethod.intro} style={MethodLayoutStyle.intro}/>
        <Kiwi.Text id={keyPrefix} children={i18nMethod.howTitle} style={MethodLayoutStyle.howTitle}/>

        {i18nMethod.howText.map((text, index) => {
          return <Kiwi.Text key={index} id={keyPrefix} children={text} style={MethodLayoutStyle.howText}/>
        })}

        <Kiwi.Image source={explorationImage} alt={i18nMethod.explorationTitle} style={MethodLayoutStyle.explorationImage}/>
        <Kiwi.Text id={keyPrefix} children={i18nMethod.explorationTitle} style={MethodLayoutStyle.explorationTitle}/>
        <Kiwi.Text id={keyPrefix} children={i18nMethod.explorationIntro} style={MethodLayoutStyle.explorationIntro}/>
        <Kiwi.Text id={keyPrefix} children={i18nMethod.explorationText} style={MethodLayoutStyle.explorationText}/>

        <Kiwi.Image source={conceptionImage} alt={i18nMethod.conceptionTitle} style={MethodLayoutStyle.conceptionImage}/>
        <Kiwi.Text id={keyPrefix} children={i18nMethod.conceptionTitle} style={MethodLayoutStyle.conceptionTitle}/>
        <Kiwi.Text id={keyPrefix} children={i18nMethod.conceptionIntro} style={MethodLayoutStyle.conceptionIntro}/>

        {i18nMethod.conceptionText.map((text, index) => {
          return <Kiwi.Text key={index} id={keyPrefix} children={text} style={MethodLayoutStyle.conceptionText}/>
        })}

        <Kiwi.Image source={realisationImage} alt={i18nMethod.realisationTitle} style={MethodLayoutStyle.realisationImage}/>
        <Kiwi.Text id={keyPrefix} children={i18nMethod.realisationTitle} style={MethodLayoutStyle.realisationTitle}/>

        <Kiwi.Text id={keyPrefix} children={i18nMethod.realisationIntro} style={MethodLayoutStyle.realisationIntro}/>

        {i18nMethod.realisationText.map((text, index) => {
          return <Kiwi.Text key={index} id={keyPrefix} children={text} style={MethodLayoutStyle.realisationText}/>
        })}

      </Kiwi.Container>
    </Kiwi.Container>
  }

})
