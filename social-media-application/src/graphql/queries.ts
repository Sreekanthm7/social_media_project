import { gql } from "@apollo/client"

export const GET_COMMENTS = gql`
  {
    commentsCollection {
      edges {
        node {
          content
          user_id
        }
      }
    }
  }
`
export const GET_COMMENTS_USER = (userId: number) => gql`
{
    commentsCollection(filter: { user_id: {eq:${userId}}}) {
      edges {
        node {
          content
        }
      }
    }
  }
`
