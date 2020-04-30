import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nFooter } from "../i18n/footer"
import { FooterLayoutStyle } from "./Footer.style"
import footerImage from "../../assets/footer.png"
import LinkedInImage from "../../assets/LinkedIn.png"
import GitHubImage from "../../assets/GitHub.png"
import CrossImage from "../../assets/cross.png"
import { TextStyles } from "../styles/text.style"
import { ClickListener } from "kiwi-bundle-react"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

interface State extends Kiwi.ComponentState {
  isLegalInformationsOpen: boolean
}

export const FooterLayout = BlueForest.Layout<Props, State>({

  state: {
    isLegalInformationsOpen: false,
  },

  render: ({ props, setState, state }) => {
    const { keyPrefix } = props
    return <Kiwi.Container style={FooterLayoutStyle.container}>

      <Kiwi.Text id={keyPrefix} children={i18nFooter.title} style={FooterLayoutStyle.title}/>

      <Kiwi.Text id={keyPrefix} children={i18nFooter.subtitle} style={FooterLayoutStyle.subtitle}/>

      <Kiwi.Container style={FooterLayoutStyle.cardsContainer}>
        <Kiwi.Container style={FooterLayoutStyle.card}>
          <Kiwi.Text id={keyPrefix} style={FooterLayoutStyle.cardTitle}>Ariane Save</Kiwi.Text>
          <Kiwi.Text id={keyPrefix} children={i18nFooter.graphicDesigner} style={FooterLayoutStyle.cardSubtitle}/>
          <Kiwi.Text id={keyPrefix} style={FooterLayoutStyle.cardEmail}>ariane@blueforest.cc</Kiwi.Text>
          <Kiwi.Container style={FooterLayoutStyle.cardLogos}>
            <Kiwi.Image source={LinkedInImage} style={FooterLayoutStyle.cardLogo}/>
          </Kiwi.Container>
        </Kiwi.Container>

        <Kiwi.Container style={FooterLayoutStyle.card}>
          <Kiwi.Text id={keyPrefix} style={FooterLayoutStyle.cardTitle}>Nazim Lachter</Kiwi.Text>
          <Kiwi.Text id={keyPrefix} children={i18nFooter.devNOps} style={FooterLayoutStyle.cardSubtitle}/>
          <Kiwi.Text id={keyPrefix} style={FooterLayoutStyle.cardEmail}>nazim@blueforest.cc</Kiwi.Text>
          <Kiwi.Container style={FooterLayoutStyle.cardLogos}>
            <Kiwi.Link path="https://www.linkedin.com/in/nlachter" target="_blank">
              <Kiwi.Image source={LinkedInImage} style={FooterLayoutStyle.cardLogo}/>
            </Kiwi.Link>
            <Kiwi.Image source={GitHubImage} style={FooterLayoutStyle.cardLogoGithub}/>
          </Kiwi.Container>
        </Kiwi.Container>
      </Kiwi.Container>

      <Kiwi.Link onClick={() => { if(!state.legalsOpen) setState({ isLegalInformationsOpen: true }) }}>
        <Kiwi.Text id={keyPrefix} children={i18nFooter.legalInformations} style={FooterLayoutStyle.openLegalInformations}/>
      </Kiwi.Link>

      <Kiwi.Text id={keyPrefix} style={FooterLayoutStyle.openLegalInformations}>
        Copyright © {new Date().getFullYear()} Blue Forest
      </Kiwi.Text>

      <Kiwi.Image source={footerImage} style={FooterLayoutStyle.image}/>

      {state.isLegalInformationsOpen && <Kiwi.Container style={FooterLayoutStyle.legalInformationsContainer}>
        <ClickListener onOutsideClick={() => { setState({ isLegalInformationsOpen: false }) }}>
          <Kiwi.Container style={state.isLegalInformationsOpen
            ? [ ...FooterLayoutStyle.legalInformationsContent, ...FooterLayoutStyle.legalInformationsTitleFadeOut ]
            : [ ...FooterLayoutStyle.legalInformationsContent, ...FooterLayoutStyle.legalInformationsTitleFadeIn ]
          }>
            <Kiwi.Container style={FooterLayoutStyle.legalInformationsClose}>
              <Kiwi.Link onClick={() => { setState({ isLegalInformationsOpen: false }) }}>
                <Kiwi.Image source={CrossImage} style={FooterLayoutStyle.legalInformationsCloseIcon}/>
              </Kiwi.Link>
            </Kiwi.Container>

            <Kiwi.Text id={keyPrefix} children={i18nFooter.legalInformationsTitle} style={FooterLayoutStyle.legalInformationsTitle}/>

            {i18nFooter.legalInformationsText.map((text, index) => {
              return <Kiwi.Text key={index} id={keyPrefix} children={text} style={TextStyles.content}/>
            })}
          </Kiwi.Container>
        </ClickListener>
      </Kiwi.Container>}

    </Kiwi.Container>
  }

})
