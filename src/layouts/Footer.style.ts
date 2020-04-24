import { BlueForest } from "../bundle"
import { TextValues } from "../values/text"

export const FooterLayoutStyle = BlueForest.StyleSheet(({ colors, sizes }) => ({

  title: [
    { style: TextValues.h1 },
    {
      style: {
        display: "block",
        color: colors.PINK,
        textAlign: "center",
      },
    },
  ],

  subtitle: [
    {
      style: {
        display: "block",
        fontFamily: "Muli",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "24px",
        lineHeight: "45px",
        textAlign: "center",
        color: "#0244C6",
        width: "64%",
        margin: "0 auto 40px auto",
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        fontSize: 20,
        marginBottom: 40,
        lineHeight: "28px",
      },
    },
  ],

  container: [
    {
      style: {
        background: colors.GREEN,
        position: "relative",
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        overflow: "hidden",
      },
    },
  ],

  image: [
    {
      style: {
        position: "absolute",
        bottom: 0,
        left: 0,
        height: "400px",
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        position: "relative",
        bottom: "-4px",
        height: "auto",
        maxWidth: "140%",
      },
    },
  ],

  cardsContainer: [
    {
      style: {
        display: "flex",
        width: "100%",
        margin: "90px auto 100px",
        flexWrap: "wrap",
        justifyContent: "center",
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        marginTop: "10px",
        marginBottom: "0",
      },
    },
  ],

  card: [
    {
      style: {
        width: "360px",
        height: "260px",
        background: "#FFFFFF",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
        borderRadius: "3px",
        flexShrink: 0,
        flexGrow: 0,
        flexBasis: "360px",
        margin: "0 20px 80px 20px",
        padding: "40px 0",
        boxSizing: "border-box",
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        width: "88%",
        flexBasis: "88%",
        marginLeft: "auto",
        marginBottom: "28px",
        marginRight: "auto",
      },
    },
  ],

  cardTitle: [
    {
      style: {
        display: "block",
        fontFamily: "Muli",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "26px",
        lineHeight: "33px",
        textAlign: "center",
        color: "#0244C6",
        marginBottom: "14px",
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        fontSize: 20,
      },
    },
  ],

  cardSubtitle: [
    {
      style: {
        display: "block",
        fontFamily: "Muli",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "22px",
        lineHeight: "28px",
        textAlign: "center",
        color: "#0244C6",
        marginBottom: "14px"
      }
    },
    {
      max: sizes.MEDIUM,
      style: {
        fontSize: 18,
      },
    },
  ],

  cardEmail: [
    {
      style: {
        display: "block",
        fontFamily: "Muli",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "22px",
        lineHeight: "28px",
        textAlign: "center",
        color: "#0244C6",
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        fontSize: 18,
      },
    },
  ],

  cardLogos: [
    {
      style: {
        display: "flex",
        justifyContent: "center",
        marginTop: "26px",
      },
    },
  ],

  cardLogo: [
    {
      style: {
        display: "block",
        width: "40px",
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        width: 30,
      },
    },
  ],

  cardLogoGithub: [
    {
      style: {
        display: "block",
        width: "40px",
        marginLeft: "28px",
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        width: 30,
      },
    },
  ],

  legals: [
    {
      style: {
        fontFamily: "Muli",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "22px",
        lineHeight: 0,
        textAlign: "right",
        display: "block",
        color: "#0244C6",
        paddingRight: "40px",
        paddingBottom: "40px",
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        fontSize: 20,
        paddingRight: 28,
        paddingBottom: 0,
      },
    },
  ],

}))
