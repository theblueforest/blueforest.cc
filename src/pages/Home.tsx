import { React, WebPage } from "kiwi-bundle"
import { Stack } from "../components/Stack"
import { DROPinStackData } from "../data/recipes"
import "./Home.scss"

export default class Home extends WebPage {
  state = { width: 700, height: 800 }

  getTitle() {
    return "Home"
  }

  render() {
    /*return <div>
      <div className="waves"></div>
      <div className="waves reverse"></div>
    </div>*/
    return <Stack
      data={DROPinStackData}
      width={this.state.width}
      height={this.state.height}
      rackBorders={10}
      rackMargins={20}
      moduleBorders={5}
      moduleMargins={10}
    />
  }

}
