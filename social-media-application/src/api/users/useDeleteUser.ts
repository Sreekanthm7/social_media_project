import { useMutation, useQueryClient } from "react-query";
import axiosClient from "../axiosClient/axios";
import { QueryKeys } from "../data-query-keys";

export function useDeleteUser() {
   const queryClient = useQueryClient()
   return useMutation(
      async (id: number) => axiosClient.delete(`/users/${id}`),
      {
         onSuccess: () => {
            alert('User successfully deleted')
            queryClient.invalidateQueries([QueryKeys.USERS])
         }
      }
   )
}
// 16