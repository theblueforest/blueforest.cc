import { BlueForest } from "../bundle"

export const FooterValues = BlueForest.Values(() => ({

  copyright: () => `Copyright © ${new Date().getFullYear()} Blue Forest`,

}))
