import React from "react"
import { FriendsDetailsList } from "../../graphql/types"

interface ProfilePageProps {
  data: FriendsDetailsList
}

export default function ProfilePage({ data }: ProfilePageProps) {
  return (
    <>
      {data.usersCollection.edges.map((item) => (
        <>
          <h1>{item.node.username}</h1>
          <h1>{item.node.email}</h1>
        </>
      ))}
    </>
  )
}
