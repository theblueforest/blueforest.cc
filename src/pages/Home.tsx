import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { MethodLayout } from "../layouts/Method"
import { ExpertiseLayout } from "../layouts/Expertise"
import { TechnologiesLayout } from "../layouts/Technologies"
import { ForestsLayout } from "../layouts/Forests"
import { FooterLayout } from "../layouts/Footer"
import { HeaderLayout } from "../layouts/Header"
import { HomePageStyle } from "./Home.style"
import leaves2Image from "../../assets/leaves2.png"

interface Params {}

export const HomePage = BlueForest.Page<Params>({
  render: () => [
    <HeaderLayout key={"header"} id={"header"}/>,
    <MethodLayout key={"method"} id={"method"}/>,
    <Kiwi.Image
      key="leaves2"
      source={leaves2Image}
      style={HomePageStyle.leaves2}
    />,
    <ExpertiseLayout key={"expertise"} id={"expertise"}/>,
    <TechnologiesLayout key={"techs"} id={"techs"}/>,
    <ForestsLayout key={"forests"} id={"forests"}/>,
    <FooterLayout key={"footer"} id={"footer"}/>,
  ],
})
