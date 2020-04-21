import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nExpertise } from "../i18n/expertise"
import { ExpertiseLayoutStyle } from "./Expertise.style"
import { ExpertiseComponent } from "../components/Expertise"

interface Props extends Kiwi.ComponentProps {
  id: string
}

export const ExpertiseLayout = BlueForest.Layout<Props>({

  render: ({ props, theme }) => {
    const { id } = props
    return <Kiwi.Container style={ExpertiseLayoutStyle.container}>
      <Kiwi.Text
        id={id}
        children={i18nExpertise.title}
        style={ExpertiseLayoutStyle.title}
      />
      <Kiwi.Container style={ExpertiseLayoutStyle.services}>
        <ExpertiseComponent
          id={id}
          color={theme.colors.PINK}
          title={i18nExpertise.storytellingTitle}
          description={i18nExpertise.storytellingDescription}
        />
        <ExpertiseComponent
          id={id}
          color={theme.colors.MAGENTA}
          title={i18nExpertise.uxTitle}
          description={i18nExpertise.uxDescription}
        />
        <ExpertiseComponent
          id={id}
          color={theme.colors.BLUE}
          title={i18nExpertise.devTitle}
          description={i18nExpertise.devDescription}
        />
        <ExpertiseComponent
          id={id}
          color={theme.colors.PURPLE}
          title={i18nExpertise.devOpsTitle}
          description={i18nExpertise.devOpsDescription}
        />
      </Kiwi.Container>
    </Kiwi.Container>
  }

})
