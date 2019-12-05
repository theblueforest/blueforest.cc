import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { MethodLayout } from "../layouts/Method"
import { ExpertiseLayout } from "../layouts/Expertise"
import { TechnologiesLayout } from "../layouts/Technologies"
import { ForestsLayout } from "../layouts/Forests"
import { FooterLayout } from "../layouts/Footer"
import { HeaderLayout } from "../layouts/Header"

interface Params extends Kiwi.ComponentProps {}

export const HomePage = BlueForest.Page<Params>({
  render: () => [
    <HeaderLayout key={"header"} keyPrefix={"header"}/>,
    <MethodLayout key={"method"} keyPrefix={"method"}/>,
    <ExpertiseLayout key={"expertise"} keyPrefix={"expertise"}/>,
    <TechnologiesLayout key={"techs"} keyPrefix={"techs"}/>,
    <ForestsLayout key={"forests"} keyPrefix={"forests"}/>,
    <FooterLayout key={"footer"} keyPrefix={"footer"}/>,
  ],
})
