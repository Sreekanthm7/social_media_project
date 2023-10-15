import { useMutation, useQueryClient } from "react-query";
import axiosClient from "../axiosClient/axios";
import { QueryKeys } from "../data-query-keys";

type UserUpdateType = {
   name: string,
   email: string,
   gender: string,
   status: string
}

export function useUpdateUserDetails() {
   const queryClient = useQueryClient()
   return useMutation(
      async (value: { data: UserUpdateType, id: number }) => {
         await axiosClient.patch(`/users/${value.id}`, value.data)
      }, {
      onSuccess: () => {
         return queryClient.invalidateQueries([QueryKeys.USERS])
      }
   }
   )
}