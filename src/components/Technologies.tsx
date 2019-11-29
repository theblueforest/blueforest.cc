import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { i18nTechnologies } from "../i18n/technologies"

export interface TechsComponentProps {
  keyPrefix: string
}

export class TechnologiesComponent extends Kiwi.Component<TechsComponentProps> {

  render() {
    const { keyPrefix } = this.props
    return <ul>
      {i18nTechnologies.dropinDescription(new Date().getFullYear() - 2015).map((desc, index) => {
        return <li key={`${keyPrefix}-desc-${index}`}>
          <Kiwi.Text keyPrefix={`${keyPrefix}-desc-${index}`} i18n={desc}/>
        </li>
      })}
      <li>
        <Kiwi.Text keyPrefix={`${keyPrefix}-cln`} i18n={i18nTechnologies.dropinConclusion}/>
      </li>
    </ul>
  }

}
