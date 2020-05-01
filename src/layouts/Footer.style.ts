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
        margin: "50px auto 0",
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
      max: sizes.SMALL,
      style: {
        width: "250px",
        flexBasis: "250px",
      },
    }
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
      max: sizes.SMALL,
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
      max: sizes.SMALL,
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
      max: sizes.SMALL,
      style: {
        fontSize: 18,
      },
    },
  ],

  cardIcons: [
    {
      style: {
        display: "flex",
        justifyContent: "center",
        marginTop: "26px",
      },
    },
  ],

  cardIconFirst: [
    {
      style: {
        display: "block",
        width: "30px",
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        width: 30,
      },
    },
  ],

  cardIconNext: [
    {
      style: {
        display: "block",
        width: "30px",
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

  legalInformations: [
    ...TextStyles.content,
    {
      style: {
        fontSize: 22,
        textAlign: "right",
        margin: 0,
        padding: "5px 10px 6px 0",
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        fontSize: 20,
        textAlign: "center",
        padding: 10,
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

  image: [
    {
      style: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "400px",
        maxWidth: "100%",
        pointerEvents: "none",
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
        color: colors.BLUE,
      },
    },
  ],

  legalInformationsTitleFadeIn: [
    {
      style: {
        animation: "fadeIn ease 1s",
        WebkitAnimation: "fadeIn ease 1s",
        MozAnimation: "fadeIn ease 1s",
        OAnimation: "fadeIn ease 1s",
        MsAnimation: "fadeIn ease 1s",
      },
    },
  ],

  legalInformationsTitleFadeOut: [
    {
      style: {
        animation: "fadeOut ease 1s",
        WebkitAnimation: "fadeOut ease 1s",
        MozAnimation: "fadeOut ease 1s",
        OAnimation: "fadeOut ease 1s",
        MsAnimation: "fadeOut ease 1s",
      },
    },
  ],

}))
