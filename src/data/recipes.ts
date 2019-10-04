
export const DROPinStackData = {
  recipes: [
    {
      id: "forestry-kit",
      name: {
        fr: { one: "Kit de forêsterie", many: "Kits de forêsterie", article: "m" },
        en: { one: "Forestry Kit", many: "Forestry Kits" },
      },
      collections: [
        {
          id: "company",
          name: {
            fr: { one: "Entreprise", many: "Entreprises", article: "f" },
            en: { one: "Company", many: "Companies" },
          },
          fields: {
            name: { type: "name" },
            type: { type: "collection", options: { id: "company-types", min: 1, max: 1 } },
            address: { type: "location" },
            status: { type: "pipeline", options: { id: "company-status" } },
            contacts: { type: "collection", options: { id: "contacts" } },
          },
        },
        {
          id: "company-types",
          name: {
            fr: { one: "Type d'entreprise", many: "Types d'entreprise", article: "m" },
            en: { one: "Company type", many: "Company types" },
          },
          fields: {
            name: { type: "name" },
          },
        },
        {
          id: "contacts",
          name: {
            fr: { one: "Contact", many: "Contacts", article: "m" },
            en: { one: "Contact", many: "Contacts" },
          },
          fields: {
            name: { type: "name", options: { person: true } },
            email: { type: "email" },
            phone: { type: "phone" },
            companies: { type: "collection", options: { id: "companies" } },
          },
        },
        {
          id: "forests",
          name: {
            fr: { one: "Forêt", many: "Forêts", article: "f" },
            en: { one: "Forest", many: "Forests" },
          },
          fields: {
            name: { type: "name" },
            company: { type: "collection", options: { id: "companies", min: 1, max: 1 } },
            iterations: { type: "collection", options: { id: "iterations" } },
          },
        },
        {
          id: "iterations",
          name: {
            fr: { one: "Itération", many: "Itérations", article: "f" },
            en: { one: "Iteration", many: "Iterations" },
          },
          fields: {
            name: { type: "name" },
            forest: { type: "collection", options: { id: "companies", min: 1, max: 1 } },
            status: { type: "pipeline", options: { id: "workflow" } },
          },
        },
        {
          id: "trees",
          name: {
            fr: { one: "Arbre", many: "Arbres", article: "m" },
            en: { one: "Tree", many: "Trees" },
          },
          fields: {
            forest: { type: "collection", options: { id: "companies", min: 1, max: 1 } },
            version: { type: "version", options: { ranges: 1 } },
            status: { type: "pipeline", options: { id: "workflow" } },
          },
        },
        {
          id: "tree-types",
          name: {
            fr: { one: "Type d'arbre", many: "Types d'arbre", article: "m" },
            en: { one: "Tree type", many: "Tree types" },
          },
          fields: {
            name: { type: "name" },
          },
        },
      ]
    }
  ]
}
