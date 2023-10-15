import { useMutation, useQueryClient } from "react-query";
import { UserType } from "../../types/userDataTypes";
import axiosClient from "../axiosClient/axios";
import { QueryKeys } from "../data-query-keys";

export function useCreateUser() {
   const queryClient = useQueryClient()

   return useMutation(
      async (payload: UserType) =>
         await axiosClient.post('/users', payload
         ),
      {
         onSuccess: (data) => {
            console.log('working', data)
            queryClient.invalidateQueries([QueryKeys.USERS])
         }
      }
   )
}
// 20