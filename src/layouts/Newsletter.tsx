import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import NewsletterImage from "../../assets/newsletter.png"
import { NewsletterLayoutStyle } from "./Newsletter.style"
import { i18nNewsletter } from "../i18n/newsletter"
import { TextStyles } from "../styles/text.style"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const NewsletterLayout = BlueForest.Layout<Props>({

  render: ({ props, options }) => {
    const { keyPrefix } = props
    return <Kiwi.Container style={NewsletterLayoutStyle.container}>
      <Kiwi.Container style={NewsletterLayoutStyle.item}>
        <Kiwi.Image source={NewsletterImage} style={NewsletterLayoutStyle.image}/>
      </Kiwi.Container>
      <Kiwi.Container style={NewsletterLayoutStyle.item}>
        <Kiwi.Text id={keyPrefix} children={i18nNewsletter.title} style={TextStyles.h2}/>
        <Kiwi.Text id={keyPrefix} children={i18nNewsletter.text} style={NewsletterLayoutStyle.text}/>
        <Kiwi.Input placeholder={i18nNewsletter.email} style={NewsletterLayoutStyle.form} placeholderColor={options.theme.colors.BLUE}/>
        <Kiwi.Text id={keyPrefix} children={i18nNewsletter.checkbox} style={NewsletterLayoutStyle.terms}/>
        <Kiwi.Button children={i18nNewsletter.register} style={NewsletterLayoutStyle.button}/>
      </Kiwi.Container>
    </Kiwi.Container>
  }

})
