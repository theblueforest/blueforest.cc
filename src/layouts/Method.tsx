import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nMethod } from "../i18n/method"
import uxImage from "../../assets/ux.png"
import { MethodLayoutStyle } from "./Method.style"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const MethodLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { keyPrefix } = props
    return <Kiwi.Container style={MethodLayoutStyle.container}>
      <Kiwi.Text id={keyPrefix} children={i18nMethod.title} style={MethodLayoutStyle.title}/>

      <Kiwi.Image source={uxImage} alt={i18nMethod.uxImgAlt.fr} style={MethodLayoutStyle.uxImg}/>

      <Kiwi.Text id={keyPrefix} children={i18nMethod.intro} style={MethodLayoutStyle.intro}/>
      <Kiwi.Text id={keyPrefix} children={i18nMethod.howTitle} style={MethodLayoutStyle.howTitle}/>
      <Kiwi.Text id={keyPrefix} children={i18nMethod.explorationTitle} style={MethodLayoutStyle.explorationTitle}/>
      <Kiwi.Text id={keyPrefix} children={i18nMethod.explorationIntro} style={MethodLayoutStyle.explorationIntro}/>
      <Kiwi.Text id={keyPrefix} children={i18nMethod.explorationText} style={MethodLayoutStyle.explorationText}/>
      <Kiwi.Text id={keyPrefix} children={i18nMethod.conceptionTitle} style={MethodLayoutStyle.conceptionTitle}/>
      <Kiwi.Text id={keyPrefix} children={i18nMethod.conceptionIntro} style={MethodLayoutStyle.conceptionIntro}/>
      <Kiwi.Text id={keyPrefix} children={i18nMethod.realisationTitle} style={MethodLayoutStyle.realisationTitle}/>
    </Kiwi.Container>
  }

})
