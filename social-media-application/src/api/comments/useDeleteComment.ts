import { useMutation, useQueryClient } from "react-query";
import axiosClient from "../axiosClient/axios";
import { QueryKeys } from "../data-query-keys";

export function useDeleteComment() {
   const queryClient = useQueryClient()
   return useMutation(
      async (id: number) =>
         await axiosClient.delete(`/comments/${id}`),
      {
         onSuccess: () => queryClient.invalidateQueries([QueryKeys.COMMENTS])
      }
   )
}
// 15