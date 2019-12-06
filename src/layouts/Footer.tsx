import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nFooter } from "../i18n/footer"
import { FooterLayoutStyle } from "./Footer.style"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const FooterLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { keyPrefix } = props
    return <Kiwi.Container style={FooterLayoutStyle.container}>
      <Kiwi.Text keyPrefix={keyPrefix} i18n={i18nFooter.title}/>
      <Kiwi.Text keyPrefix={keyPrefix} i18n={i18nFooter.baseline}/>

      Ariane

      Nazim

      <Kiwi.Image key="leaves5" source={require("../../assets/leaves6.png")}/>,

      <Kiwi.Image
        source={require("../../assets/footer.png")}
        style={FooterLayoutStyle.image}
      />

      <Kiwi.Text keyPrefix={keyPrefix} i18n={i18nFooter.legalInformations}/>
      <Kiwi.Text>
        Copyright © {new Date().getFullYear()} Blue Forest
      </Kiwi.Text>

    </Kiwi.Container>
  }

})
