export const songForSiteMap = `
  query songForSiteMap {
    songs(last: 100) {
      slug
      categories {
        slug
      }
    }
  }
`;

export const songsByCategory = (categorySlug: string) => `
  query songsByCategory {
    songs(last: 100, where: { categories_some: {slug: "${categorySlug}"} }){
      id
      title
      slug
      active
      duration
      description
      lyrics
      coverUrl {
        url
      }
      audioUrl {
        url
      }
      categories {
        title
        slug
      }
      artist {
        name
        username
      }
    } 
  }
`;

export const songBySlug = (slug: string) => `
  query song {
    song(where: {slug: "${slug}"}) {
      id
      title
      slug
      active
      duration
      description
      lyrics
      coverUrl {
        url
      }
      audioUrl {
        url
      }
      categories {
        title
        slug
      }
      artist {
        name
        username
      }
    }
  }
`