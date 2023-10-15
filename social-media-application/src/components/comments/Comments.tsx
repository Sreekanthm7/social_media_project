import { CommentCard } from './CommentCard'
import './Comments.css'
import { useSocialMediaContext } from '../../contexts/socialMediaContext'
import { ChangeEvent, useState } from 'react'
import { useCreateComments } from '../../api'
import { Modal } from '../Modal'

type CommentsModalProps = {
   postID: number,
   closeCommentFn: (isModalOpen: boolean) => void
}

export function Comments({ postID, closeCommentFn }: CommentsModalProps) {

   const [value, setValue] = useState<string>('')

   const { getCommentsById, getPostById, getUserById } = useSocialMediaContext()
   const comments = getCommentsById(postID)
   const posts = getPostById(postID)
   const user = getUserById(posts!.user_id)
   const { mutateAsync: createComment } = useCreateComments()

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
   }

   const handleSubmit = async () => {
      await createComment({
         id: 50000 + Math.floor(Math.random() * 200),
         post_id: postID,
         name: user?.name ? user.name : 'Unknown user',
         email: user?.email ? user.email : 'Unknown@gmail.com',
         body: value
      }, {
         onSuccess: () => {
            setValue('')
            alert('Comment Posted Successfully, Please reload')
         },
         onError: (error) => alert(error)
      })
   }

   function displayComments() {
      return comments?.length !== 0
         ? comments?.map(comment => (
            <CommentCard data={comment} key={comment.id} />
         ))
         : <div className="no-comments">
            <img src="./images/comments.gif"></img>
            <p className='no-comments-text'>No comments found</p>
         </div>
   }

   function closeModal() {
      closeCommentFn(false)
   }

   return (
      <Modal>
         <div className='comments-modal'>
            <div className="comments-title">
               <p>Comments ( {comments?.length} )</p>
               <span onClick={closeModal}>X</span>
            </div>
            <div className="comments-container">
               {
                  displayComments()
               }
            </div>
            <div className='text-message'>
               <input type="text" value={value} placeholder='Type your comment here' onChange={handleChange} />
               <img src="./send-icon.svg" alt="send-icon" onClick={handleSubmit} />
            </div>
         </div>
      </Modal>
   )
}

// 79