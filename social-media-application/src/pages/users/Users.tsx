import { UserContainer } from '../../components/users/UserContainer'
import { userImgs } from '../../constants/images'
import './Users.css'
import { useState } from 'react'
import { AddUserForm } from '../../components/users/AddUserForm'
import { useGetUser } from '../../api/users/useGetUser'
import { Loader } from '../../components/Loader'
import { ConfirmationModal } from '../../components/users/ConfirmationModal'
import { EditUserForm } from '../../components/users/EditUserForm'

export function Users() {

   const [isModalOpen, setModalOpen] = useState<boolean>(false)
   const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false)
   const [currentUserId, setCurrentUserId] = useState<number>(0)
   const [formOpen,setFormOpen] = useState<boolean>(false)

   const { data: userData, isLoading } = useGetUser()

   return (
      <>
         {isModalOpen ? <AddUserForm setModalFn={setModalOpen} /> : null}
         {formOpen?<EditUserForm currentUserId={currentUserId} setModalFn={setFormOpen}/>:null}
         {isConfirmModalOpen ? <ConfirmationModal modalStatus={setIsConfirmModalOpen} userId={currentUserId} /> : null}
         <div className='main-user-page'>
            {
               isLoading ? <Loader /> :
                  <div className="inner-container">
                     <button className='add-user' onClick={() => setModalOpen(true)}>
                        <p>+ Add User</p>
                     </button>
                     {
                        userData?.map((element, index) => (
                           <UserContainer
                              key={element.id}
                              data={element}
                              imgUrl={userImgs[index]}
                              modalStatus={setIsConfirmModalOpen}
                              setUserID={setCurrentUserId}
                              editFormOpenFn={setFormOpen}
                           />
                        ))
                     }
                  </div>
            }
         </div>
      </>
   )
}
// 49