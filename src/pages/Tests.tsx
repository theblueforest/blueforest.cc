import React from "react"
import { Page } from "kiwi-bundle-react"
import "./Tests.scss"

export class TestsPage extends Page {
  state = { width: 700, height: 800 }

  getTitle() {
    return "Tests"
  }

  render() {
    return <div>
      <div className="waves"></div>
      <div className="waves reverse"></div>
    </div>
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
