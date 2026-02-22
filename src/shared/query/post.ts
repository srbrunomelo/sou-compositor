export const postsForSiteMap = `
  query postsForSiteMap {
    posts(last: 100, orderBy: date_DESC) {
      id
      slug
    }
  }
`;

export const posts = `
  query posts {
    posts(last: 100, orderBy: date_DESC) {
      id
      title
      slug
      excerpt
      date
      image {
        url
      }
      updatedAt
    }
  } 
`;

export const latest = (amount = 3) => `
  query latest {
    posts(first: ${amount}, where: { active: true }, orderBy: date_DESC) {
      id
      title
      excerpt
      date
      slug
      image {
        url
      }
    }
  }
`;

export const postBySlug = (slug: string) => `
  query post {
    post(where: {slug: "${slug}"}) {
      id
      title
      slug
    	excerpt
    	date
    	category
      content {
        raw
      }
      image {
        url
      }
    }
  }
`;
