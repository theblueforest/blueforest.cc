import { React, WebPage, Text } from "kiwi-bundle-react"
import { i18nTechnologies } from "../i18n/technologies"

export default class Home extends WebPage {

  render() {
    return <div>
      <ul>
        {i18nTechnologies.dropinDescription(new Date().getFullYear() - 2015).map((desc, index) => {
          return <li key={`tech-desc-${index}`}>
            <Text keyPrefix={`tech-desc-${index}`} i18n={desc}/>
          </li>
        })}
        <li>
          <Text keyPrefix={`tech-cln`} i18n={i18nTechnologies.dropinConclusion}/>
        </li>
      </ul>
    </div>
  }

}
