import { BlueForest } from "../bundle"
import { LeavesValues } from "../values/leaves"
import { TitlesValues } from "../values/titles"

export const ForestsLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({
  container: [{
    style: {
      position: "relative",
    }
  }],
  
  leaves1: [
    {
      style: {
        width: LeavesValues.width[1],
        position: "absolute",
        top: "220px",
        zIndex: 0,
      },
    },
  ],

  title: [
    { style: TitlesValues.global },
    { style: TitlesValues.onLeft },
    {
      style: {
        color: colors.PINK,
      },
    },
  ],

  description: [{
    style: {
      display: "block",
      fontFamily: "Raleway",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      lineLeight: "28px",
      color: "#0244C6",
      width: "64%",
      margin: "0 auto 40px auto",
    }
  }],

  image: [
    {
      style: {
        width: "60%",
        display: "block",
        margin: "0 auto 70px",
      },
    },
  ],

  cardsContainer: [{
    style: {
      display: "flex",
      width: "64%",
      margin: "0 auto 70px",
      flexWrap: "wrap",
      justifyContent: "space-around"
    }
  }],

  card: [{
    style: {
      width: "339px",
      height: "374px",
      left: "362px",
      top: "369px",
      background: "#FFFFFF",
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
      borderRadius: "5px",
      flexShrink: 0,
      flexGrow: 0,
      flexBasis: "339px",
      margin: "80px 0"
    }
  }]

}))
