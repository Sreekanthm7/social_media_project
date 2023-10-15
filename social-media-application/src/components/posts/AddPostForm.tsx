import { useFormik } from 'formik'
import './AddPostForm.css'
import { useCreatePost } from '../../api'
import * as Yup from 'yup'

type AddPostFormProps = {
   modalCloseFn: () => void
}

const initialValues = {
   title: '',
   body: ''
}

const validationSchema = Yup.object().shape({
   title: Yup.string().required().min(10).max(50).label("Title"),
   body: Yup.string().required().min(10).label("Body")
})

export function AddPostForm({ modalCloseFn }: AddPostFormProps) {

   const { mutateAsync } = useCreatePost()
   const formik = useFormik({
      initialValues,
      onSubmit: async (values) => {
         await mutateAsync({
            id: 57457 + Math.floor(Math.random() * 200),
            user_id: 4145633,
            ...values
         })
         modalCloseFn()
      },
      validationSchema
   })

   return (
      <div className="post-form-main">
         <div className="post-body">
            <div className="post-left-section">
               <p>Give needed details to create a post</p>
               <div className="back-button" onClick={modalCloseFn}>
                  <button><i className="fa-solid fa-arrow-left"></i></button>
                  <span>Back</span>
               </div>
            </div>
            <div className='post-form'>
               <p>Post form</p>
               <button className="close-add-form" onClick={modalCloseFn}>
                  <i className="fa-solid fa-xmark"></i>
               </button>
               <form action="" onSubmit={formik.handleSubmit}>
                  <div className="post-input">
                     <label htmlFor="title">Title</label>
                     <input
                        type="text"
                        id='title'
                        name='title'
                        value={formik.values.title}
                        onChange={formik.handleChange}
                     />
                     {formik.errors.body ? <span className='error'>{formik.errors.title}</span> : null}
                  </div>
                  <div className="post-input">
                     <label htmlFor="body">Body</label>
                     <textarea
                        name="body"
                        id="body"
                        value={formik.values.body}
                        cols={33}
                        rows={6}
                        onChange={formik.handleChange}
                     />
                     {formik.errors.body ? <span className='error'>{formik.errors.body}</span> : null}
                  </div>
                  <div className='post-submit'>
                     <button type='submit'>Submit</button>
                  </div>
               </form>
            </div>
         </div>
      </div>

      // 4040727
   )
}

/* 87 */