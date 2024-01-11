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


export const GET_USER_LIST = (id: number) => gql`
{
usersCollection(filter: {id: {eq: ${id}}}) {
  edges {
  node {
    username
    email
  }
}
`

export const GET_ALL_USERS = () => gql`
  {
    usersCollection {
      edges {
        node {
          username
          email
          profile_image
        }
      }
    }
  }
`
export const GET_FRIENDS_LIST = (follower: number) => gql`
  friendsCollection(filter: {follower: {eq; ${follower}}}) {
  edges {
    node {
      following
    }
  }
  }
`

export const GET_FRIENDS_POSTS = (following: number) => gql`
   {
    postsCollection(filter:{ user_id:{eq: ${following}}}){
      edges{
        node{
          content
          mentions
        }
      }
    }
  }
`