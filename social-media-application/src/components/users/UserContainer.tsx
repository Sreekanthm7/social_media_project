import { UserType } from '../../types/userDataTypes'
import './UserContainer.css'
import '../comments/CommentCard.css'

type UserContainerProps = {
   data: UserType,
   imgUrl: string,
   setUserID: React.Dispatch<React.SetStateAction<number>>
   modalStatus: React.Dispatch<React.SetStateAction<boolean>>
   editFormOpenFn:React.Dispatch<React.SetStateAction<boolean>>
}

export function UserContainer({ data, imgUrl, setUserID, modalStatus,editFormOpenFn }: UserContainerProps) {

   function removeUser() {
      modalStatus(true)
      setUserID(data.id)
   }
   
   function editUser(){
      editFormOpenFn(true)
      setUserID(data.id)
   }

   return (
      <div className='main-user'>
         <div className={`active-status ${data.status === 'active' ? 'active' : 'not-active'}`}></div>
         <button className="edit-user" onClick={editUser}>
         <i className="fa-solid fa-pen"></i>
         </button>
         <button className='remove-comment' onClick={removeUser}>
            <i className="fa-solid fa-trash"></i>
         </button>
         <div className="user-icon">
            <img src={imgUrl} alt="" />
         </div>
         <div className="user-details">
            <p className='user-name'>{data.name}</p>
            <p className='email'>{data.email}</p>
         </div>
      </div>
   )
}
// 34 (look)