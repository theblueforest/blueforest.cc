import * as React from "react"
import { BlueForest } from "../bundle"
import { MethodLayout } from "../layouts/Method"
import { TechnologiesLayout } from "../layouts/Technologies"
import { ForestsLayout } from "../layouts/Forests"
import { FooterLayout } from "../layouts/Footer"
import { HeaderLayout } from "../layouts/Header"

interface Params {}

export const HomePage = BlueForest.Page<Params>({
  render: () => [
    <HeaderLayout key={"header"} keyPrefix={"header"}/>,
    <MethodLayout key={"method"} keyPrefix={"method"}/>,
    <TechnologiesLayout key={"techs"} keyPrefix={"techs"}/>,
    <ForestsLayout key={"forests"} keyPrefix={"forests"}/>,
    <FooterLayout key={"footer"} keyPrefix={"footer"}/>,
  ],
})
