import { i18nData } from "dropin-recipes"

export const i18nTechnologies = i18nData({

  title: {
    fr: "Nos technologies",
  },


  dropinTitle: "DROP'in",

  dropinDescription: (years: number): i18nData[] => [
    {
      fr: [
        "Développée ces ",
        years,
        " dernières années et aujourd'hui destinée aux architectures de nos clients, DROP'in est une technologie capable de **créer**, **organiser** et **déployer** l'ensemble de vos projets.",
      ],
    },
    {
      fr: "De l'**idée** à la **production**, Blue Forest vous accompagne dans l'implémentation de vos produits à travers DROP'in.",
    },
  ],

  dropinConclusion: {
    fr: "Envie d'en savoir plus ? Nous avons dédié un espace à la description de son fonctionnement sur **[dropin.recipes](https://dropin.recipes){target:_blank}**.",
  },


  kiwiBundleTitle: "Kiwi Bundle",

  kiwiBundleDescription: [
    {
      fr: "Suite de librairies TypeScript permettant la création simplifiée d'application cross-platform web, desktop, Android et iOS avec **une unique codebase**.",
    },
    {
      fr: "Cette technologie Open Source comprend la pré-configuration de TypeScript, WebPack, Babel, React, Sass, React Native, Electron, MobX ainsi que toutes les possibilités offertes par l'API de DROP'in."
    },
  ],

  kiwiBundleConclusion: {
    fr: "Retrouvez plus d'informations sur le Kiwi Bundle sur GitHub : **[theblueforest/kiwi-bundle](https://github.com/theblueforest/kiwi-bundle)**."
  },


  callToAction: {
    fr: "En savoir plus",
  },

  soonTitle: {
    fr: "C'est pour bientôt !"
  },

  soonText: {
    fr: "Les technologies développées seront bientôt disponibles, n’hésitez pas à vous inscrire ci-dessous pour être tenu informé :"
  },

  soonInput: {
    fr: "Votre e-mail"
  }
})
