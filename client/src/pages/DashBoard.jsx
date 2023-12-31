import { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import defaultProfileImage from '../images/profiledefalt.png'
import { app } from '../utils/firebase/firebase'
import { useDispatch } from 'react-redux'
import { setWorker } from '../redux/features/workerdataSlice'

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'
import {useWorkerUpdateValues} from '../hooks/updateWorkerData'
import { initialWorkerAccountValues,createWorkerSchema } from '../utils/validationSchemas/validationSchemaForWorkerForm'
import { useFormik } from 'formik'
import {api} from '../utils/api'

const CreateAnAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState(null)
  const [imageUrl, setImageUrl] = useState('')
  const [progressbar, setProgressBar] = useState(null)
  const [imageError, setImageError] = useState(false)

  const location = useLocation()
  const [profile, setProfile] = useState(true)
  const workerUpdateHook = useWorkerUpdateValues()


  const uploadFile = (file, app) => {
    const storage = getStorage(app)
    const fileName = uuidv4() + file?.name
    const storageRef = ref(storage, fileName)

    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgressBar(Math.round(progress))

        setImage(null)
      },
      error => {
        console.log(error)
        setImageError(true)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          console.log('File available at', downloadURL)
          setImageUrl(downloadURL)
          setProgressBar(null)
        })
      }
    )
  }



  useEffect(() => {
    setProfile(location.pathname === '/updateprofile')
  }, [location.pathname,profile])

  const createWorkerAccount = async (values) => {
    try {
      if(profile){
      values.profileImageURL = imageUrl
        const response = await api.put(`/api/v1/worker`,values)
        console.log(values);
        const data = response?.data?.data
        console.log(data);
        dispatch(setWorker(data))
        navigate('/')
      }
      else{
        values.profileImageURL = imageUrl
        const response = await api.post(`/api/v1/worker`,values)
        console.log(values);
        const data = response?.data?.data
        dispatch(setWorker(data))
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  }


  const formik =  useFormik({
    initialValues :  profile ? workerUpdateHook : initialWorkerAccountValues,
    validationSchema : createWorkerSchema,
    onSubmit: createWorkerAccount
  })
  console.log(formik.values);
  console.log(profile);

  useEffect(() => {
    if(image){
      uploadFile(image, app)
    }
  }, [image])

  // USEREF HOOK FOR SHOWING HIDDEN INPUT FILE
  const fileRef = useRef(null)

  return (
    <div className=' min-h-[90vh] bg-gray-300'>
      <div className='max-w-[1140px] mx-auto py-5'>
        <form className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-white rounded-md pt-3 pb-10' onSubmit={formik.handleSubmit}>
          <h1 className='sm:col-span-2 text-center text-3xl py-4'>
            {!profile
              ? 'Hello dear Sana please fill the form'
              : 'Update Your Profile'}
          </h1>
          <div className='flex justify-center sm:col-span-2 md:col-span-1 flex-col items-center'>
            <img
              onClick={() => fileRef.current.click()}
              className='w-28 object-cover h-28 bg-white rounded-full inline-block cursor-pointer'
              src={formik.values.profileImageURL || imageUrl || defaultProfileImage}
              alt='your Profile'
            />
            {
              imageError ? <span className='text-sm text-red-500'>Only images accepted and less then 2mb</span>:
              progressbar && <span className='text-sm text-green-500'>{`uploading ${progressbar} %`}</span>
            }
          <input
              type='file'
              ref={fileRef}
              style={{ display: 'none' }}
              onChange={e => setImage(e.target.files[0])}
              className='hidden'
            />
          </div>
          <div className='flex flex-col my-3 mx-1'>
            <label className='text-base sm:text-lg md:text-xl' htmlFor='name'>
              Name:
            </label>
            <input
            name='name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            type='text'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your Name...'
            />
            {/* error span */}
            {formik.touched.name && formik.errors.name ? (
            <span className='text-sm text-red-500'>{formik.errors.name}</span>
            ) : null}
          </div>
          <div className='flex flex-col my-3 mx-1'>
            <label
              className='text-base sm:text-lg md:text-xl'
              htmlFor='lastname'
            >
              LastName:
            </label>
            <input
              name='lastName'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              type='text'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your LastName...'
            />
            {/* error span */}
            {formik.touched.lastName && formik.errors.lastName ? (
            <span className='text-sm text-red-500'>{formik.errors.lastName}</span>
            ) : null}
          </div>
          <div className='flex flex-col my-3 mx-1'>
            <label className='text-base sm:text-lg md:text-xl' htmlFor='Email'>
              Email:
            </label>
            <input
            disabled={profile}
              name='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              type='email'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your Email...'
            />
            {/* error span */}
            {formik.touched.email && formik.errors.email ? (
            <span className='text-sm text-red-500'>{formik.errors.email}</span>
            ) : null}
          </div>
          <div className='flex flex-col my-3 mx-1'>
            <label className='text-base sm:text-lg md:text-xl' htmlFor='job'>
              Job:
            </label>
            <input
              type='text'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your Job...'
              name='job'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.job}
            />
            {/* error span */}
            {formik.touched.job && formik.errors.job ? (
            <span className='text-sm text-red-500'>{formik.errors.job}</span>
            ) : null}
          </div>
          <div className='flex flex-col my-3 mx-1'>
            <label
              className='text-base sm:text-lg md:text-xl'
              htmlFor='experience'
            >
              Experience:
            </label>
            <input
              type='text'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your experience...'
              name='experience'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.experience}
            />
            {formik.touched.experience && formik.errors.experience ? (
            <span className='text-sm text-red-500'>{formik.errors.experience}</span>
            ) : null}
          </div>
          <div className='flex flex-col my-3 mx-1'>
            <label
              className='text-base sm:text-lg md:text-xl'
              htmlFor='phoneNumber1'
            >
              PhoneNumber1:
            </label>
            <input
              name='phoneNumber1'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber1}
              type='text'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your PhoneNumber1...'
            />
            {formik.touched.phoneNumber1 && formik.errors.phoneNumber1 ? (
            <span className='text-sm text-red-500'>{formik.errors.phoneNumber1}</span>
            ) : null}
          </div>
          <div className='flex flex-col my-3 mx-1'>
            <label
              className='text-base sm:text-lg md:text-xl'
              htmlFor='phoneNumber2'
            >
              PhoneNumber2:
            </label>
            <input
              name='phoneNumber2'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber2}
              type='text'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your PhoneNumber2...'
            />
            {formik.touched.phoneNumber2 && formik.errors.phoneNumber2 ? (
            <span className='text-sm text-red-500'>{formik.errors.phoneNumber2}</span>
            ) : null}
          </div>

          <div className='flex flex-col my-3 mx-1'>
            <label
              className='text-base sm:text-lg md:text-xl'
              htmlFor='province'
            >
              Province:
            </label>
            <input
              name='province'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.province}
              type='text'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your Province...'
            />
              {formik.touched.province && formik.errors.province ? (
            <span className='text-sm text-red-500'>{formik.errors.province}</span>
            ) : null}
          </div>
          <div className='md:col-span-3 sm:col-span-2  flex flex-col md: px-1 py-5'>
            <label
              className='text-base sm:text-lg md:text-xl'
              htmlFor='personalInfo'
            >
              PersonalInfo:
            </label>
            <textarea
              name='personalInfo'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.personalInfo}
              placeholder='Enter your PersonalInfo...'
              className='resize-none rounded-md outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
            />
            {formik.touched.personalInfo && formik.errors.personalInfo ? (
            <span className='text-sm text-red-500'>{formik.errors.personalInfo}</span>
            ) : null}
          </div>
          <button className='bg-green-500 py-3 text-xl rounded-md w-fit px-10 text-white mx-1 font-bold' type='submit'>
            {!profile ? 'Create an account ' : 'Update your account'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateAnAccount
