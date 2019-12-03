import React from "react"
import { BlueForest } from "../bundle"
import { TechnologiesLayout } from "../layouts/Technologies"

interface Params {}

export const HomePage = BlueForest.Page<Params>({
  render: () => [
    <TechnologiesLayout key={"techs"} keyPrefix={"techs"}/>,
  ],
})
