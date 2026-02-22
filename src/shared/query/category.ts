export const categoriesForSiteMap = `
  query categoriesForSiteMap {
    categories {
      slug
    }
  }
`

export const categoriesForNavigator = `
  query categoriesForNavigator {
    categories {
      title
      slug
    }
  }
`