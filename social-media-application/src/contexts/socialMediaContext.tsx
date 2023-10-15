import { ReactNode, createContext, useContext, useReducer } from "react";
import { UserType } from "../types/userDataTypes";
import { useGetUser } from "../api/users/useGetUser";
import { useGetComments } from "../api/comments/useGetComments";
import { CommentsType } from "../types/commentTypes";
import { useGetPosts } from "../api/posts/useGetPosts";
import { PostType } from "../types/postTypes";

type SocialMediaContextProvider = {
   children: ReactNode
}
type SocialMediaContext = {
   getUserById: (id: number) => UserType | undefined,
   getCommentsById: (postID: number) => CommentsType | undefined,
   getPostById: (postID: number) => PostType | undefined
}

const SocialMediaContext = createContext({} as SocialMediaContext)

export function useSocialMediaContext() {
   return useContext(SocialMediaContext)
}

export function SocialMediaContextProvider({ children }: SocialMediaContextProvider) {

   const userData = useGetUser()
   const comments = useGetComments()
   const posts = useGetPosts()

   function getUserById(id: number) {
      return userData.data?.filter(i => i.id === id)[0]
   }

   function getCommentsById(postID: number) {
      return comments.data?.filter(i => i.post_id === postID)
   }

   function getPostById(postID: number) {
      return posts.data?.filter(i => i.id === postID)[0]
   }

   return (
      <SocialMediaContext.Provider value={{
         getUserById,
         getCommentsById,
         getPostById
      }}>
         {children}
      </SocialMediaContext.Provider>
   )
}