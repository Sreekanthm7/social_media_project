import { useFormik } from "formik"
import { useCreatePost } from "../../api"
import * as Yup from "yup"
import ImageUploader from "../ImageUploader"

type AddPostFormProps = {
  modalCloseFn: () => void
}

const initialValues = {
  title: "",
  body: "",
  tag: "",
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(10).max(50).label("Title"),
  body: Yup.string().required().min(10).label("Body"),
  tag: Yup.string().required().min(10).max(50).label("Tag"),
})

export function AddPostForm({ modalCloseFn }: AddPostFormProps) {
  const { mutateAsync } = useCreatePost()
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      await mutateAsync({
        id: 57457 + Math.floor(Math.random() * 200),
        user_id: 4145633,
        ...values,
      })
      modalCloseFn()
    },
    validationSchema,
  })

  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-20 flex items-center justify-center z-50 ">
      <div className="w-90 h-400 bg-blue-500 text-white flex justify-between p-5 rounded-2xl w-1/2 h-500">
        <div className="hidden md:w-2/5 md:flex md:flex-col md:items-center md:mt-10 md:pr-4 lg:justify-between">
          <p className="md:text-lg lg:text-2xl">
            Give needed details to create a post
          </p>
          {/* .post-left-section .back-button */}
          <div
            className="p-2 md:flex md:justify-between md:items-center md:w-36 md:border-2 md:border-blue-200 md:bg-black md:bg-opacity-10 md:text-white md:mt-16 md:rounded-full md:pl-1 md:hover:shadow-2xl lg:mb-36"
            onClick={modalCloseFn}
          >
            <button className="h-11 w-11 md:text-lg rounded-full bg-opacity-20 bg-black text-white border-0 ">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <span className="font-semibold inline">Back</span>
          </div>
        </div>
        <div className="relative p-10 bg-white text-gray-800 h-full w-full rounded-2xl">
          <p className="text-lg font-semibold lg:text-xl">Add Post</p>
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="my-5 flex flex-col gap-4">
              <label htmlFor="image">Upload Image</label>
              <ImageUploader />
            </div>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                className="w-full h-10 border-b-2 border-gray-500 mb-4 focus:outline-none focus:border-b-2 focus:border-blue-500"
              />

              {formik.errors.body ? (
                <span className="error">{formik.errors.title}</span>
              ) : null}
            </div>
            <div>
              <label htmlFor="body">Body</label>
              <textarea
                name="body"
                id="body"
                value={formik.values.body}
                cols={33}
                rows={6}
                onChange={formik.handleChange}
                className="resize-none border-0 mt-5 w-full h-12 border-b-2 border-gray-500 focus:outline-none focus:h-28 focus:border-2 focus:border-blue-500"
              />
              {formik.errors.body ? (
                <span className="error">{formik.errors.body}</span>
              ) : null}
            </div>
            <div>
              <label htmlFor="title">Tag Friends</label>
              <input
                type="text"
                id="tag"
                name="tag"
                value={formik.values.tag}
                onChange={formik.handleChange}
                className="w-full h-10 border-b-2 border-gray-500 mb-4 focus:outline-none focus:border-b-2 focus:border-blue-500"
              />

              {formik.errors.body ? (
                <span className="error">{formik.errors.tag}</span>
              ) : null}
            </div>
            <div className="py-5 text-center">
              <button
                type="submit"
                className="px-3 py-1 border-0 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-700 focus:outline-none  md:px-40 md:py-4 md:py-15 text-base md:text-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    // 4040727
  )
}

/* 87 */
