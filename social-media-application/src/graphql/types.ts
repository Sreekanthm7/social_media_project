import { number } from "yup"

export type CommentsDetails = {
  node: {
    content: string
    user_id: string
  }
}

export type CommentsCollectionResponse = {
  commentsCollection: {
    edges: CommentsDetails[]
  }
}

export type FollowingList = {
  friendsCollection: {
    edges: {
      node: {
        following: number
      }
    }
  }
}

export type FriendsDetails = {
  node: {
    username: string
    email: string
  }
}

export type FriendsDetailsList = {
  usersCollection: {
    edges: FriendsDetails[]
  }
}

export type UsersDetails = {
  node: {
    email: string
    username: string
    img?: string | undefined
  }
}

export type UsersList = {
  usersCollection: {
    edges: UsersDetails[]
  }
}