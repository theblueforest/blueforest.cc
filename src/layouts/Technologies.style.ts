import { BlueForest } from "../bundle"
import { TitlesValues } from "../values/titles"

export const TechnologiesLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  container: [
    {
      style: {
        backgroundColor: colors.BLUE,
        padding: "0 0 80px 0"
      },
    },
  ],

  title: [
    { style: TitlesValues.global },
    {
      style: {
        color: "white",
        textAlign: "center",
      },
    }
  ],

  subtitle: [
    { style: TitlesValues.global },
    { style: TitlesValues.onLeft },
    {
      style: {
        color: colors.PINK,
      },
    },
  ],

  list: [{
    style: {
      width: "60%",
      margin: "0 auto 40px auto",
      fontFamily: "Muli",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      lineHeight: "30px",
      color: "#FFFFFF",
      listStyleType: "none"
    }
  }],

  listElement: [{
    style: {
      "margin": "0 0 18px 0"
    }
  }],

  listLastElement: [{
    style: {
      "margin": "0 0 10px 0"
    }
  }],

  listLastElementText: [{
    style: {
      "color": "#61FFD8"
    }
  }],

  image: [
    {
      style: {
        width: "100%",
      },
    },
  ],

  soon: [{
    style: {
      border: "2px solid #61FFD8",
      width: "60%",
      margin: "110px auto 40px auto",
      padding: "0 59px",
      boxSizing: "border-box"
    }
  }],

  soonTitle: [{
    style: {
      padding: "26px 0",
      display: "block",
      fontFamily: "Muli",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "36px",
      lineheight: "45px",
      color: "#61FFD8",
      textAlign: "center"
    }
  }],

  soonText: [{
    style: {
      display: "block",
      fontFamily: "Muli",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      lineHeight: "30px",
      color: "#61FFD8",
    }
  }],

  soonForm: [{
    style: {
      display: "flex",
      paddingTop: "28px",
      paddingBottom: "28px",
      justifyContent: "space-between"
    }
  }],

  soonFormField: [{
    style: {
      border: "1px solid #61FFD8",
      boxSizing: "border-box",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      borderRadius: "12px",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      lineHeight: "46px",
      color: "#61FFD8",
      textAlign: "center",
      flexBasis: "67%",
      flexGrow: 0,
      flexShrink: 1,
    }
  }],

  soonFormBtn: [{
    style: {
      background: "#61FFD8",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      borderRadius: "12px",
      flexBasis: "20%",
      flexGrow: 0,
      flexShrink: 0,
      fontWeight: "bold",
      fontSize: "24px",
      lineHeight: "30px",
      textAlign: "center",
      color: "#0244C6",
      padding: "10px 40px"
    }
  }]

}))
