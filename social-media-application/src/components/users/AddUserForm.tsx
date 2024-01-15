import { useFormik } from 'formik'
import * as Yup from 'yup'
import './AddUserForm.css'
import { FormikType } from '../../types/FormiKTypes'
import { useCreateUser } from '../../api/users/useCreateUser'
import { Modal } from '../Modal'

type AddUserFormProps = {
   setModalFn: React.Dispatch<React.SetStateAction<boolean>>
}

const initialValues = {
   name: '',
   email: '',
   gender: 'male',
   status: 'active'
}

const validationSchema = Yup.object().shape({
   name: Yup.string().required().label("Name"),
   email: Yup.string().required().email().label("Email")
})

export function AddUserForm({ setModalFn }: AddUserFormProps) {

   const { mutateAsync } = useCreateUser()

   const formik = useFormik({
      initialValues,
      onSubmit: (value: FormikType) => {
         mutateAsync(
            {
               id: 4040728 + Math.floor(Math.random() * 200),
               ...value
            }, {
            onSuccess: () => {
               alert('User Created Successfully')
               setModalFn(false)
            },
            onError: () => alert('Error encountered')
         }
         )

      },
      validationSchema
   })

   return (
      <Modal>
         <div className="add-user-modal">
            <div className="decoration-container">
               <button className='close-add-user' onClick={() => setModalFn(false)}>
                  <i className="fa-solid fa-arrow-left"></i>
               </button>
            </div>
            <p className='add-user-title'>Basic Details</p>
            <form className='add-user-form' onSubmit={formik.handleSubmit}>
               <div className="user-fields">
                  <label htmlFor="">Full Name</label>
                  <input
                     className="text"
                     type="text"
                     name='name'
                     id='name'
                     placeholder='eg. Ansam CD'
                     value={formik.values.name}
                     onChange={formik.handleChange}
                  />
                  {formik.errors.name ? <span className='error'>{formik.errors.name}</span> : null}
               </div>
               <div className="user-fields">
                  <label htmlFor="">Email</label>
                  <input
                     className="text"
                     type="text"
                     name="email"
                     id="email"
                     value={formik.values.email}
                     placeholder='eg. example@gmail.com'
                     onChange={formik.handleChange}
                  />
                  {formik.errors.email ? <span className='error'>{formik.errors.email}</span> : null}
               </div>
               <div className='user-fields'>
                  <label htmlFor="">Gender</label>
                  <span className='gender-hint'>Male</span>
                  <input type="radio" name="gender" id='male' value="male" onChange={formik.handleChange} checked />
                  <span className='gender-hint'>Female</span>
                  <input type="radio" name="gender" id='female' value="female" onChange={formik.handleChange} />
               </div>
               <div className="user-fields">
                  <label htmlFor="status">Status</label>
                  <select name="status" id="status" value={formik.values.status} onChange={formik.handleChange}>
                     <option value="active">Active</option>
                     <option value="inactive">Inactive</option>
                  </select>
               </div>
               <div className="submit-button">
                  <button className='submit' type='submit'>submit</button>
               </div>
            </form>
         </div>
      </Modal>
   )
}