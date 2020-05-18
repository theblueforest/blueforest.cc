import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nAnatomy } from "../i18n/anatomy"
import { AnatomyLayoutStyle } from "./Anatomy.style"
import { TextStyles } from "../styles/text.style"
import anatomyImage from "../../assets/anatomy.png"

interface Props extends Kiwi.ComponentProps {
    keyPrefix: string
  }
  
  interface State extends Kiwi.ComponentState {
    selected: number
  }
  
  export const AnatomyLayout = BlueForest.Layout<Props>({
  
    render: ({ props }) => {
        const { keyPrefix } = props
        return <Kiwi.Container style={AnatomyLayoutStyle.container}>

            <Kiwi.Text id={keyPrefix} children={i18nAnatomy.title} style={AnatomyLayoutStyle.title}/>

            <Kiwi.Image source={anatomyImage} style={AnatomyLayoutStyle.anatomyImage}/>
          
        </Kiwi.Container>    
      }
  })