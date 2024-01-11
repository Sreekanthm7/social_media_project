import { Comments } from "../../components/comments"
import { PostsContainer } from "../../components/posts"
import "./Home.css"
import { useEffect, useState } from "react"
import { useGetPosts } from "../../api/"
import { NavLink, useNavigate } from "react-router-dom"
import { RoutPath } from "../../routes/mainRoutes"
import { AddPostForm } from "../../components/posts"
import { userImgs } from "../../constants/images"
import { useCustomDeletePosts } from "../../api"
import { NavigationBar } from "../../components/navbar/NavigationBar"
import { supabase } from "../.."

export function Home() {
  const { isLoading, isError, data } = useGetPosts()
  const { mutateAsync: customDeletePost } = useCustomDeletePosts()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [postID, setPostID] = useState<number>(0)
  const [isPostModalOpen, setIsPostModalOpen] = useState<boolean>(false)
  const [postIdsArray, setPostIdsArray] = useState<number[]>([])
  const [isCustomDelete, setIsCustomDelete] = useState(false)

  function setPostIds(id: number, isChecked: boolean) {
    if (isChecked) {
      setPostIdsArray([...postIdsArray, id])
    } else {
      const currentSelected = postIdsArray.indexOf(id)
      console.log(currentSelected)
      if (currentSelected > -1) {
        postIdsArray.splice(currentSelected, 1)
        console.log(postIdsArray)
        setPostIdsArray(postIdsArray)
      }
    }
  }

  async function deleteSelectedPosts() {
    if (postIdsArray.length !== 0) {
      let deletePromise = postIdsArray.map(async (itemId) => {
        await customDeletePost(itemId)
      })
      await Promise.all(deletePromise)
      alert("Selected posts deleted")
      setPostIdsArray([])
    } else {
      alert("Select atleast one post")
    }
  }

  function openComment(postId: number, isModalOpen: boolean) {
    setModalIsOpen(isModalOpen)
    setPostID(postId)
  }

  function closeComment(isModalOpen: boolean) {
    setModalIsOpen(isModalOpen)
  }

  function openAddPostModal() {
    setIsPostModalOpen(true)
  }

  function closeAddPostModal() {
    setIsPostModalOpen(false)
  }

  function renderPosts() {
    return data?.map((post, index) => (
      <PostsContainer
        key={post.id}
        customDeleteState={isCustomDelete}
        status={{ isError, isLoading }}
        openCommentFn={openComment}
        imageUrl={userImgs[index]}
        data={post}
        postID={post.id}
        setIdsFn={setPostIds}
        postIds={postIdsArray}
      />
    ))
  }

  const navigate = useNavigate()
  const [user, setUser] = useState({})

  useEffect(() => {
    async function getUserDate() {
      await supabase.auth.getUser().then((value) => {
        if (value?.data?.user) {
          console.log(value.data.user)
          setUser(value.data.user)
        }
      })
    }
    getUserDate()
  }, [])

  async function signOutUser() {
    const { error } = await supabase.auth.signOut()
    navigate("/")
  }

  return (
    <div className="main-home">
      <NavigationBar />
      <button onClick={() => signOutUser()}>signOut</button>
      {modalIsOpen ? (
        <Comments closeCommentFn={closeComment} postID={postID} />
      ) : null}
      {isPostModalOpen ? (
        <AddPostForm modalCloseFn={closeAddPostModal} />
      ) : null}
      <button className="add-user" onClick={openAddPostModal}>
        <p>+ Add Post</p>
      </button>

      <div className="top-section">
        <div className="welcome-text">
          <div className="welcome-message">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="hint">
            Platform to connect people. Lorem ipsum dolor sit amet.
          </div>
          <NavLink to={RoutPath.usersPage}>
            <div className="checkout-user-button">
              <button>Checkout out users</button>
            </div>
          </NavLink>
        </div>
        <div className="social-image">
          <img src="./images/social.png" alt="" />
        </div>
      </div>
      <div className="main-contents">
        <div className="contents-title">
          <h1>New posts for you</h1>
        </div>
        {isCustomDelete ? (
          <button
            className={"delete-all-button"}
            onClick={() => {
              setIsCustomDelete(false)
              deleteSelectedPosts()
            }}
          >
            Delete All
          </button>
        ) : (
          <button
            className="delete-all-button "
            onClick={() => setIsCustomDelete(true)}
          >
            Custom Delete Posts
          </button>
        )}
        <div className="posts">{renderPosts()}</div>
      </div>
    </div>
  )
}
// 99
