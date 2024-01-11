import { UserContainer } from "../../components/users/UserContainer"
import { userImgs } from "../../constants/images"
import "./Users.css"
import { useState } from "react"
import { AddUserForm } from "../../components/users/AddUserForm"
import { useGetUser } from "../../api/users/useGetUser"
import { Loader } from "../../components/Loader"
import { ConfirmationModal } from "../../components/users/ConfirmationModal"
import { EditUserForm } from "../../components/users/EditUserForm"
import { GET_ALL_USERS } from "../../graphql/queries"
import { useQuery } from "@apollo/client"
import { UsersDetails } from "../../graphql/types"
import { NavigationBar } from "../../components/navbar/NavigationBar"

export function Users() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false)
  const [currentUserId, setCurrentUserId] = useState<number>(0)
  const [formOpen, setFormOpen] = useState<boolean>(false)

  const { data: listOfAllUsers, loading } = useQuery(GET_ALL_USERS())

  return (
    <>
      <NavigationBar />
      {isModalOpen ? <AddUserForm setModalFn={setModalOpen} /> : null}
      {formOpen ? (
        <EditUserForm currentUserId={currentUserId} setModalFn={setFormOpen} />
      ) : null}
      {isConfirmModalOpen ? (
        <ConfirmationModal
          modalStatus={setIsConfirmModalOpen}
          userId={currentUserId}
        />
      ) : null}
      <div className="main-user-page">
        {loading ? (
          <Loader />
        ) : (
          <div className="inner-container">
            <button className="add-user" onClick={() => setModalOpen(true)}>
              <p>+ Add User</p>
            </button>
            <UserContainer data={listOfAllUsers} />
          </div>
        )}
      </div>
    </>
  )
}
// 49
