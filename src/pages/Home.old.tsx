import { React, WebPage } from "kiwi-bundle-react"
import { i18n } from "dropin-recipes"
import { i18nTechnologies } from "../i18n/technologies"
import "./Home.old.scss"

export default class Home extends WebPage {
  state = { width: 700, height: 800 }

  getTitle() {
    return "Home"
  }

  render() {
    console.log(i18nTechnologies.dropinDescription(new Date().getFullYear() - 2015).map(desc => i18n(desc)))
    return <div>Test</div>
    /*return <div>
      <div className="waves"></div>
      <div className="waves reverse"></div>
    </div>*/
    /*return <Stack
      data={DROPinStackData}
      width={this.state.width}
      height={this.state.height}
      rackBorders={10}
      rackMargins={20}
      moduleBorders={5}
      moduleMargins={10}
    />*/
  }

}
