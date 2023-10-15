import { useMutation, useQueryClient } from "react-query"
import { CommentType } from "../../types/commentTypes"
import axiosClient from "../axiosClient/axios"
import { QueryKeys } from "../data-query-keys"

export function useCreateComments() {
   const queryClient = useQueryClient()
   return useMutation(
      async (payload: CommentType) =>
         await axiosClient.post(
            '/comments',
            payload
         ),
      {
         onSuccess() {
            queryClient.invalidateQueries([QueryKeys.COMMENTS])
         },
      }
   )
}
// 20