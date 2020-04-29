import { BlueForest } from "../bundle"
import { TextStyles } from "../styles/text.style"

export const ForestsLayoutStyle = BlueForest.StyleSheet(({ sizes, colors }) => ({

  container: [
    {
      style: {
        position: "relative",
        marginTop: "28px"
      },
    },
  ],

  title: [
    ...TextStyles.h1,
    {
      style: {
        color: colors.PINK,
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        color: colors.PINK,
        textAlign: "center",
        marginLeft: "auto",
        width: "80%",
        marginRight: "auto",
        paddingTop: 18
      },
    },
  ],

  description: [{
    style: {
      display: "block",
      fontFamily: "Muli",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      lineLeight: "28px",
      color: "#0244C6",
      width: "64%",
      margin: "0 auto 40px auto",
    }
  }, {
    max: sizes.MEDIUM,
    style: {
      fontSize: 18,
      lineHeight: "30px",
      width: "80%"
    },
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

  cardsContainer: [
    {
      style: {
        display: "flex",
        maxWidth: "860px",
        margin: "90px auto 70px auto",
        flexWrap: "wrap",
        justifyContent: "center",
      }
    },
    {
      max: sizes.MEDIUM,
      style: {
        marginTop: 48,
        marginBottom: -40,
      },
    }
  ],

  card: [
    {
      style: {
        width: "339px",
        height: "374px",
        background: "#FFFFFF",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
        borderRadius: "5px",
        flexShrink: 0,
        flexGrow: 0,
        flexBasis: "339px",
        margin: "0 40px 80px 40px"
      }
    },
    {
      max: sizes.MEDIUM,
      style: {
        width: "88%",
        flexBasis: "88%",
      },
    },
  ],

  emptyCard: [
    {
      style: {
        width: "339px",
        height: "374px",
        flexBasis: "339px",
        margin: "0 40px 80px 40px"
      }
    },
    {
      max: sizes.MEDIUM,
      style: {
        display: "none",
      },
    },
  ],

  cardImage: [
    {
      style: {
        display: "block",
        margin: "48px 81px 0 81px",
      },
    },
    {
      max: sizes.MEDIUM,
      style: {
        marginTop: 28,
        marginLeft: "auto",
        marginRight: "auto",
        width: "60%",
        height: "auto",
      },
    }
  ],

  cardTitle: [{
    style: {
      display: "block",
      fontFamily: "Muli",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "25px",
      textAlign: "center",
      color: "#0244C6",
      padding: "48px 18px"
    }
  }, {
    max: sizes.MEDIUM,
    style: {
      fontSize: "18px",
    }
  }],

  cardBtn: [{
    style: {
      marginLeft: "25%",
      marginTop: "4%",
      display: "inline-block",
      padding: "4px 18px",
      background: "#61FFD8",
      borderRadius: "19px",
      fontFamily: "Muli",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "23px",
      textAlign: "center",
      color: "#0244C6"
    }
  }],

  cardTags: [{
    style: {
      display: "flex",
      listStyleType: "none",
      padding: "0 33px",
      flexWrap: "wrap"
    }
  }],

  cardTag: [{
    style: {
      display: "block",
      width: "50%",
      marginBottom: "14px"
    }
  }],

  cardTagText: [
    {
      style: {
        display: "block",
        fontFamily: "Muli",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "20px",
        lineHeight: "25px",
        color: "#0244C6",
      }
    },
    {
      max: sizes.MEDIUM,
      style: {
        fontSize: "16px",
      },
    },
  ],
}))
