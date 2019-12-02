import React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { i18nTechnologies } from "../i18n/technologies"
import { TechnologiesComponentStyle } from "./Technologies.style"

export interface TechsComponentProps {
  keyPrefix: string
}

export class TechnologiesComponent extends Kiwi.Component<TechsComponentProps> {

  render() {
    const { keyPrefix } = this.props
    return <Kiwi.List style={TechnologiesComponentStyle.test()}>
      {/*{i18nTechnologies.dropinDescription(new Date().getFullYear() - 2015).map((desc, index) => {
        return <Kiwi.ListElement key={`${keyPrefix}-desc-${index}`}>
          <Kiwi.Text keyPrefix={`${keyPrefix}-desc-${index}`} i18n={desc}/>
        </Kiwi.ListElement>
      })}*/}
      <Kiwi.ListElement>
        <Kiwi.Text keyPrefix={`${keyPrefix}-cln`} i18n={i18nTechnologies.dropinConclusion}/>
      </Kiwi.ListElement>
    </Kiwi.List>
  }

}
