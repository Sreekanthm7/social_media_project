export interface Edge {
  node: {
    content: string
    user_id: string
  }
}


 export interface CommentsCollectionResponse {
    commentsCollection: {
      edges: Edge[];
    };
  }