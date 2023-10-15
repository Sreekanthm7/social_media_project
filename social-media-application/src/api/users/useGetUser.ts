import { useQuery } from "react-query";
import { UsersType } from "../../types/userDataTypes";
import { QueryKeys } from "../data-query-keys";
import axiosClient from "../axiosClient/axios";

export function useGetUser() {
   return useQuery<UsersType, unknown>({
      queryKey: [QueryKeys.USERS],
      queryFn: getUsers
   })
}

async function getUsers() {
   const users: UsersType = await axiosClient.get('/users')
      .then(response => response.data)
   return users
}
// 17