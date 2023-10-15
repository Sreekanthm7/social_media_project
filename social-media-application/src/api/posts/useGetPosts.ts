import { useQuery } from "react-query";
import { PostsType } from "../../types/postTypes";
import { QueryKeys } from "../data-query-keys";
import axiosClient from "../axiosClient/axios";

export function useGetPosts() {
   return useQuery<PostsType, unknown>({
      queryKey: [QueryKeys.POSTS],
      queryFn: getPosts
   })
}

async function getPosts() {
   const posts = await axiosClient.get('/posts')
      .then(response => response.data)
   return posts
}
// 17
