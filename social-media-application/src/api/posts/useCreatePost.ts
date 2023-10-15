import { useMutation, useQueryClient } from "react-query";
import { PostType } from "../../types/postTypes";
import axiosClient from "../axiosClient/axios";
import { QueryKeys } from "../data-query-keys";

export function useCreatePost() {
   const queryClient = useQueryClient()

   return useMutation(
      async (payload: PostType) =>
         await axiosClient.post('/posts', payload),
      {
         onSuccess: () => {
            queryClient.invalidateQueries([QueryKeys.POSTS])
            alert('Post created successfully')
         }
      }
   )
}
// 20