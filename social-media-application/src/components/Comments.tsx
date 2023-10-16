import React from "react"
import { CommentsCollectionResponse } from "../graphql/types"

interface Props {
  data: CommentsCollectionResponse
}

export function Comments({ data }: Props) {

    if(!data || !data.commentsCollection) {
        return <div>Loading...</div>
    }
  return (
    <>
      <h2>Comments</h2>
      {data.commentsCollection.edges.map((item) => (
        <p>{item.node.content}</p>
      ))}
    </>
  )
}

export default Comments
