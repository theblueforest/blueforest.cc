import * as React from "react"
import ReactGA from "react-ga"
import { BlueForest } from "../bundle"
import { MethodLayout } from "../layouts/Method"
import { TechnologiesLayout } from "../layouts/Technologies"
import { ForestsLayout } from "../layouts/Forests"
import { FooterLayout } from "../layouts/Footer"
import { HeaderLayout } from "../layouts/Header"
import { NewsletterLayout } from "../layouts/Newsletter"
import { AnatomyLayout } from "../layouts/Anatomy"


interface Params {}

export const HomePage = BlueForest.Page<Params>({

  init: () => {
    ReactGA.initialize("UA-132336786-2")
    ReactGA.pageview(window.location.pathname + window.location.search)
  },

  render: () => [
    <HeaderLayout key="header" keyPrefix="header"/>,
    <MethodLayout key="method" keyPrefix="method"/>,
    <AnatomyLayout key="anatomy" keyPrefix="anatomy"/>,
    <TechnologiesLayout key="techs" keyPrefix="techs"/>,
    <NewsletterLayout key="newsletter" keyPrefix="newsletter"/>,
    <ForestsLayout key="forests" keyPrefix="forests"/>,
    <FooterLayout key="footer" keyPrefix="footer"/>,
  ],
})
