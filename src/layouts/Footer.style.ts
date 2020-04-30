import { BlueForest } from "../bundle"
import { TextStyles } from "../styles/text.style"

export const FooterLayoutStyle = BlueForest.StyleSheet(({ colors, sizes }) => ({

  container: [
    {
      style: {
        background: colors.GREEN,
        position: "relative",
        paddingTop: 20,
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        overflow: "hidden",
      },
    },
  ],

  title: [
    ...TextStyles.h1,
    {
      style: {
        color: colors.PINK,
        paddingBottom: 0,
      },
    },
  ],

  subtitle: [
    ...TextStyles.content,
    {
      style: {
        textAlign: "center",
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
        maxWidth: "100%",
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
        margin: "50px auto 170px",
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

  openLegalInformations: [
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

  legalInformationsContainer: [
    {
      style: {
        position: "fixed",
        zIndex: 1,
        paddingTop: "20%",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.4)",
      },
    },
  ],

  legalInformationsContent: [
    {
      style: {
        margin: "auto",
        width: "80%",
        backgroundColor: "white",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
        borderRadius: "3px",
        padding: "30px 50px",
      },
    },
  ],

  legalInformationsClose: [
    {
      style: {
        textAlign: "right",
      },
    },
  ],

  legalInformationsCloseIcon: [
    {
      style: {
        height: 34,
        marginTop: -18,
        marginRight: -34,
      },
    },
  ],

  legalInformationsTitle: [
    ...TextStyles.h2,
    {
      style: {
        padding: 0,
        marginTop: -20,
      },
    },
  ],

  legalInformationsTitleFadeIn: [
    {
      style: {
        animation: "fadeIn ease 2s",
        "-webkit-animation": "fadeIn ease 2s",
        "-moz-animation": "fadeIn ease 2s",
        "-o-animation": "fadeIn ease 2s",
        "-ms-animation": "fadeIn ease 2s",
      },
    },
  ],

  legalInformationsTitleFadeOut: [
    {
      style: {
        animation: "fadeOut ease 2s",
        "-webkit-animation": "fadeOut ease 2s",
        "-moz-animation": "fadeOut ease 2s",
        "-o-animation": "fadeOut ease 2s",
        "-ms-animation": "fadeOut ease 2s",
      },
    },
  ],

}))
