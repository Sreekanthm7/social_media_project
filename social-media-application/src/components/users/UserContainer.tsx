import { UserType } from "../../types/userDataTypes"
import "./UserContainer.css"
import "../comments/CommentCard.css"
import { UsersDetails, UsersList } from "../../graphql/types"

type UserContainerProps = {
  data: UsersList
}

export function UserContainer({ data }: UserContainerProps) {
  console.log(data, "hahah")

  return (
    <>
      {data.usersCollection.edges.map((item) => (
        <div className="main-user">
          <div className="user-details-container">
            <div className="user-icon">
              <img src={item.node.img} alt="" />
            </div>
            <div className="user-details">
              <p className="user-name">{item.node.username}</p>
              <p className="email">{item.node.email}</p>
            </div>
          </div>
          <button className="edit-user">follow</button>
        </div>
      ))}
    </>
  )
}
// 34 (look)
