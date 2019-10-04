import { React, WebPage } from "kiwi-bundle"
import RackComponent from "../components/Racks"
import "./Home.scss"

export default class Home extends WebPage {
  getTitle() {
    return "Home"
  }

  render() {
    /*return <div>
      <div className="waves"></div>
      <div className="waves reverse"></div>
    </div>*/
    return <Racks
      recipes={{
        ""
      }}
    />
  }

}
