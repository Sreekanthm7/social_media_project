import { ChangeEvent } from 'react'
import { useSocialMediaContext } from '../../contexts/socialMediaContext'
import { PostType } from '../../types/postTypes'
import { Loader } from '../Loader'
import '../Loader.css'
import './PostContainer.css'

type PostsContainerProps = {
   imageUrl: string,
   data: PostType,
   postID: number,
   openCommentFn: (postId: number, modalOpen: boolean) => void,
   status: { isError: boolean, isLoading: boolean }
   setIdsFn: (id: number, isChecked: boolean) => void,
   postIds: number[],
   customDeleteState: boolean
}

export function PostsContainer({ imageUrl, data, postID, openCommentFn, status, setIdsFn, customDeleteState }: PostsContainerProps) {

   const { getUserById } = useSocialMediaContext()
   const user = getUserById(data.user_id)

   function openCommentModal() {
      openCommentFn(postID, true)
   }

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setIdsFn(postID, event.target.checked)
   }

   return (
      <div className={`post-container ${customDeleteState ? 'scale' : ''}`}>
         <input type="checkbox" className={`select-multiple ${!customDeleteState ? 'not-display' : ''}`} onChange={handleChange} />
         {status.isLoading
            ? <Loader />
            : <>
               <div className="profile-logo">
                  <img src={imageUrl} alt="" />
               </div>
               <div>
                  <h4>{data.title}</h4>
                  <div className="post-text">
                     {data.body}
                  </div>
               </div>
               <div className="author">
                  <p className='user-name'>{user?.name ? user.name : `Unknown (${data.user_id})`}</p>
                  <p className='email-id'>{user?.email ? user.email : `Unknown (${data?.user_id})`}</p>
                  <button className='comments' onClick={openCommentModal}>
                     <i className="fa-solid fa-comments"></i>
                     <span>Comments</span>
                  </button>
               </div>
            </>
         }
      </div>
   )
}

// 52