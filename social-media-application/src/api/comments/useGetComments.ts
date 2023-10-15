import { useQuery } from "react-query"
import { CommentsType } from "../../types/commentTypes"
import axiosClient from "../axiosClient/axios"
import { QueryKeys } from "../data-query-keys"

export function useGetComments() {
   return useQuery<CommentsType, unknown>({
      queryKey: [QueryKeys.COMMENTS],
      queryFn: getComments
   })
}

async function getComments() {
   return await axiosClient.get('/comments').then(response => response.data)
}
// 16
// d018ce41166bafbcb168b9df0014e78c0c72fac5141e37347d860b61666bbe96