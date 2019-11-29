import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { TechnologiesComponent } from "../components/Technologies"

export class HomePage extends Kiwi.Page {

  render() {
    return [
      <TechnologiesComponent key={"techs"} keyPrefix={"techs"}/>,
    ]
  }

}
