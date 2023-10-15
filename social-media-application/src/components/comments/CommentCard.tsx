import { useDeleteComment } from '../../api/comments/useDeleteComment'
import { CommentType } from '../../types/commentTypes'
import './CommentCard.css'

type CommentCardProps = {
   data: CommentType
}

export function CommentCard({ data }: CommentCardProps) {

   const { mutateAsync: deleteComment } = useDeleteComment()
   const handleClick = async () => {
      await deleteComment(data.id, {
         onSuccess: () => alert('comment deleted successfully')
      })
   }

   return (
      <div className="comment-card">
         <div className="comment-left-section">
            <div className="user-icon">
               <i className="fa-solid fa-user"></i>
            </div>
         </div>
         <div className="comment-section">
            <p className='comment-author'>{`${data.name} (${data.email})`}</p>
            <p className='comment'>{data.body}</p>
         </div>
         <button className='remove-comment' onClick={handleClick}>
            <i className="fa-solid fa-trash"></i>
         </button>
      </div>
   )
}
// 34