import { BlueForest } from "../bundle"
import { TextStyles } from "../styles/text.style"

export const TechnologiesLayoutStyle = BlueForest.StyleSheet(({ colors, sizes }) => ({

  container: [
    {
      style: {
        textAlign: "center",
        Width: "100%",
        background: colors.BLUE,
        paddingBottom: 50,
        paddingTop: 20,
      },
    },
  ],

  image: [
    {
      style: {
        width: "100%",
        marginTop: 40,
      },
    },
  ],

  content: [
    {
      style: {
        backgroundColor: colors.BLUE,
        maxWidth: "55%",
        margin: "auto",
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        paddingBottom: "18px",
        maxWidth: "75%",
        overflow: "hidden"
      }
    }
  ],

  title: [
    ...TextStyles.h1,
    {
      style: {
        color: "white",
      },
    }
  ],

  intro: [
    ...TextStyles.content,
    {
      style: {
        color: "white",
        textAlign: "center",
        marginBottom: 50,
      }
    }
  ],

  subtitle: [
    ...TextStyles.h1,
    {
      style: {
        color: "white",
        textAlign: "left",
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        marginBottom: 28,
        marginLeft: 0,
      }
    }
  ],

  list: [
    ...TextStyles.content,
    {
    style: {
      width: "100%",
      margin: "auto",
      fontFamily: "Muli",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "25px",
      lineHeight: "30px",
      color: "#FFFFFF",
      listStyleType: "none"
    }
  },
  {
    max: sizes.MEDIUM,
      style: {
        width: "100%",
        margin: "0 auto 0 auto",
        textAlign: "left",
        fontSize: "18px",
        padding: "0"
      }
    }
  ],

  listElement: [
    ...TextStyles.content,
    {
      style: {
        margin: "0 0 18px 0",
        color: "white",
      }
    }
  ],

  listLastElement: [
    ...TextStyles.content,
    {
      style: {
        "margin": "0 0 10px 0"
      }
    }
  ],

  listLastElementText: [
    ...TextStyles.content,
    {
      style: {
        "color": "#61FFD8"
      }
    }
  ],

  soon: [
    {
      style: {
        border: "2px solid #61FFD8",
        width: "60%",
        margin: "110px auto 50px auto",
        padding: "0 59px",
        boxSizing: "border-box"
      }
    },
    {
      max: sizes.MEDIUM,
      style: {
        width: "100%",
        marginTop: 40,
        textAlign: "left",
        fontSize: "18px",
        padding: "0 18px"
      }
    }
  ],

  soonTitle: [
    {
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
    },
    {
      max: sizes.MEDIUM,
      style: {
        fontSize: "30px"
      }
    }
  ],

  soonText: [
    {
      style: {
        display: "block",
        fontFamily: "Muli",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "30px",
        color: "#61FFD8",
        textAlign: "left",
        fontSize: "18px",
      }
    }
  ],

  soonForm: [
    {
      style: {
        display: "flex",
        paddingTop: "28px",
        paddingBottom: "28px",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }
    }
  ],

  soonFormField: [
    {
      style: {
        border: "1px solid #61FFD8",
        boxSizing: "border-box",
        borderRadius: "12px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "24px",
        lineHeight: "46px",
        color: "#61FFD8",
        textAlign: "center",
        flexBasis: "64%",
        marginRight: "18px",
        flexGrow: 1,
        flexShrink: 1,
      }
    },
    {
      max: sizes.MEDIUM,
      style: {
        marginRight: 0,
        marginBottom: "14px",
        fontSize: 18
      }
    }
  ],

  soonFormBtn: [
    {
      style: {
        background: "#61FFD8",
        borderRadius: "12px",
        flexBasis: "20%",
        flexGrow: 1,
        flexShrink: 1,
        fontWeight: "bold",
        fontSize: "24px",
        lineHeight: "30px",
        textAlign: "center",
        color: "#0244C6",
        padding: "10px 40px"
      }
    },
    {
      max: sizes.MEDIUM,
      style: {
        marginRight: 0,
        marginBottom: "14px",
        fontSize: 18
      }
    }
  ],

}))
