import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nForests } from "../i18n/forests"
import leaves3Image from "../../assets/leaves3.png"
import leaves4Image from "../../assets/leaves4.png"
import LaCloche from "../../assets/LaCloche.png"
import MaoBoa from "../../assets/MaoBoa.png"
import Qapex from "../../assets/Qapex.png"
import Erm from "../../assets/Erm.png"
import Telaqua from "../../assets/Telaqua.png"
import leaves5Image from "../../assets/leaves5.png"
import { ForestsLayoutStyle } from "./Forests.style"

interface Props extends Kiwi.ComponentProps {
  id: string
}

export const ForestsLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { id } = props
    return <Kiwi.Container style={ForestsLayoutStyle.container}>
      <Kiwi.Image
        source={leaves3Image}
        style={ForestsLayoutStyle.leaves1}
      />
      <Kiwi.Text
        id={id}
        children={i18nForests.title}
        style={ForestsLayoutStyle.title}
      />
      <Kiwi.Text
        id={id}
        children={i18nForests.description}
        style={ForestsLayoutStyle.description}
      />

      <Kiwi.Container style={ForestsLayoutStyle.cardsContainer}>
        <Kiwi.Container style={ForestsLayoutStyle.card}>
          <Kiwi.Image
            source={LaCloche}
            style={ForestsLayoutStyle.cardImage}
          />

        <Kiwi.Text
          id={id}
          children={i18nForests.laClocheDescription}
          style={ForestsLayoutStyle.cardTitle}
        />
        </Kiwi.Container>

        <Kiwi.Container style={ForestsLayoutStyle.card}>
          <Kiwi.Image
            source={Erm}
            style={ForestsLayoutStyle.cardImage}
          />

          <Kiwi.List style={ForestsLayoutStyle.cardTags}>
            <Kiwi.ListElement id={id} style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text
                id={id}
                children={i18nForests.ermTag1}
                style={ForestsLayoutStyle.cardTagText}
              />
            </Kiwi.ListElement>

            <Kiwi.ListElement id={id} style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text
                id={id}
                children={i18nForests.ermTag2}
                style={ForestsLayoutStyle.cardTagText}
              />
            </Kiwi.ListElement>

            <Kiwi.ListElement id={id} style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text
                id={id}
                children={i18nForests.ermTag3}
                style={ForestsLayoutStyle.cardTagText}
              />
            </Kiwi.ListElement>

            <Kiwi.ListElement id={id} style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text
                id={id}
                children={i18nForests.ermTag4}
                style={ForestsLayoutStyle.cardTagText}
              />
            </Kiwi.ListElement>

            <Kiwi.ListElement id={id} style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text
                id={id}
                children={i18nForests.ermTag5}
                style={ForestsLayoutStyle.cardTagText}
              />
            </Kiwi.ListElement>

            <Kiwi.ListElement id={id} style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text
                id={id}
                children={i18nForests.ermTag6}
                style={ForestsLayoutStyle.cardTagText}
              />
            </Kiwi.ListElement>
          </Kiwi.List>

          <Kiwi.Container style={ForestsLayoutStyle.cardBtn}>
            <Kiwi.Text
              id={id}
              children={i18nForests.visitErm}
              style={ForestsLayoutStyle.cardTagText}
            />
          </Kiwi.Container>
        </Kiwi.Container>

        <Kiwi.Container style={ForestsLayoutStyle.card}>
          <Kiwi.Image
            source={Qapex}
            style={ForestsLayoutStyle.cardImage}
          />

          <Kiwi.List style={ForestsLayoutStyle.cardTags}>
            <Kiwi.ListElement id={id} style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text
                id={id}
                children={i18nForests.qapexTag1}
                style={ForestsLayoutStyle.cardTagText}
              />
            </Kiwi.ListElement>

            <Kiwi.ListElement id={id} style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text
                id={id}
                children={i18nForests.qapexTag2}
                style={ForestsLayoutStyle.cardTagText}
              />
            </Kiwi.ListElement>

            <Kiwi.ListElement id={id} style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text
                id={id}
                children={i18nForests.qapexTag3}
                style={ForestsLayoutStyle.cardTagText}
              />
            </Kiwi.ListElement>

            <Kiwi.ListElement id={id} style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text
                id={id}
                children={i18nForests.qapexTag4}
                style={ForestsLayoutStyle.cardTagText}
              />
            </Kiwi.ListElement>

            <Kiwi.ListElement id={id} style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text
                id={id}
                children={i18nForests.qapexTag5}
                style={ForestsLayoutStyle.cardTagText}
              />
            </Kiwi.ListElement>

            <Kiwi.ListElement id={id} style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text
                id={id}
                children={i18nForests.qapexTag6}
                style={ForestsLayoutStyle.cardTagText}
              />
            </Kiwi.ListElement>
          </Kiwi.List>

          <Kiwi.Container style={ForestsLayoutStyle.cardBtn}>
            <Kiwi.Text
              id={id}
              children={i18nForests.visitQapex}
              style={ForestsLayoutStyle.cardTagText}
            />
          </Kiwi.Container>
        </Kiwi.Container>

        <Kiwi.Container style={ForestsLayoutStyle.card}>
          <Kiwi.Image
            source={MaoBoa}
            style={ForestsLayoutStyle.cardImage}
          />

          <Kiwi.Text
            id={id}
            children={i18nForests.maoboaDescription}
            style={ForestsLayoutStyle.cardTitle}
          />
        </Kiwi.Container>

        <Kiwi.Container style={ForestsLayoutStyle.card}>
          <Kiwi.Image
            source={Telaqua}
            style={ForestsLayoutStyle.cardImage}
          />
        </Kiwi.Container>

        <Kiwi.Container style={ForestsLayoutStyle.emptyCard}>
        </Kiwi.Container>
      </Kiwi.Container>

      <Kiwi.Image
        source={leaves4Image}
        style={ForestsLayoutStyle.leaves2}
      />

      <Kiwi.Image source={leaves5Image} style={ForestsLayoutStyle.leaves3}/>
    </Kiwi.Container>
  }

})
