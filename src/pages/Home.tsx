import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { TechnologiesLayout } from "../layouts/Technologies"

interface Params extends Kiwi.ComponentProps {}

export const HomePage = BlueForest.Page<Params>({
  render: () => [
    <TechnologiesLayout key={"techs"} keyPrefix={"techs"}/>,
  ],
})
