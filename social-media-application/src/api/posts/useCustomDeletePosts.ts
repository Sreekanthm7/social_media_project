import { useMutation, useQueryClient } from "react-query";
import axiosClient from "../axiosClient/axios";
import { QueryKeys } from "../data-query-keys";

export function useCustomDeletePosts() {
   const queryClient = useQueryClient()

   return useMutation(
      async (id: number) => axiosClient.delete(`/posts/${id}`),
      {
         onSuccess: () => queryClient.invalidateQueries([QueryKeys.POSTS])
      }
   )
}
// untracked