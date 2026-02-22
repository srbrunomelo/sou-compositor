
export const playlistBySlug = (slug: string) => `
  query {
    playlist(where: { slug: "${slug}"} ) {
      id
      title
      description
      slug
      artist {
        name
        username 
      }
      image {
        url
      }
      song {
        id
        title
        categories {
          title
          slug
        }
        duration
        coverUrl {
          url
        }
        audioUrl {
          url
        }
        artist {
          name
          username 
        }
      }  
    }
    }
`;
