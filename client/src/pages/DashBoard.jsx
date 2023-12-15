import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import defaultProfileImage from '../images/profiledefalt.png'
import { app } from '../utils/firebase/firebase'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'




const CreateAnAccount = () => {
  // const [formData,setFormData] = useState({
  //   name: '',
  //   lastName: '',
  //   email:'',
  //   job: '',
  //   experience: '',
  //   phoneNumber1: '',
  //   phoneNumber2: '',
  //   profileImage: '',
  //   province: '',
  //   personalInfo: '',
  // });

  const [image, setImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [progressbar, setProgressBar] = useState(0)

  const location = useLocation()
  const [profile, setProfile] = useState(false)

  // firebase functionality
  const uploadFiles = (file, app) => {
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
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          console.log('File available at', downloadURL)
          setImageUrl(downloadURL)
        })
      }
    )
  }



  useEffect(() => {
    setProfile(location.pathname === '/updateprofile')
  }, [location.pathname])

  useEffect(() => {
    uploadFiles(image, app,setProgressBar,setImage,setImageUrl)
  }, [image])

  // USEREF HOOK FOR SHOWING HIDDEN INPUT FILE
  const fileRef = useRef(null)

  return (
    <div className=' min-h-[90vh] bg-gray-300'>
      <div className='max-w-[1140px] mx-auto py-5'>
        <form className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-white rounded-md pt-3 pb-10'>
          <h1 className='sm:col-span-2 text-center text-3xl py-4'>
            {!profile
              ? 'Hello dear Sana please fill the form'
              : 'Update Your Profile'}
          </h1>
          <div className='flex justify-center sm:col-span-2 md:col-span-1'>
            <img
              onClick={() => fileRef.current.click()}
              className='w-24 h-24 bg-white rounded-full inline-block cursor-pointer'
              src={defaultProfileImage}
              alt='your Profile'
            />
            {progressbar && <span>{progressbar}</span>}

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
              type='text'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your Name...'
            />
          </div>
          <div className='flex flex-col my-3 mx-1'>
            <label
              className='text-base sm:text-lg md:text-xl'
              htmlFor='lastname'
            >
              LastName:
            </label>
            <input
              type='text'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your LastName...'
            />
          </div>
          <div className='flex flex-col my-3 mx-1'>
            <label className='text-base sm:text-lg md:text-xl' htmlFor='Email'>
              Email:
            </label>
            <input
              type='email'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your Email...'
            />
          </div>
          <div className='flex flex-col my-3 mx-1'>
            <label className='text-base sm:text-lg md:text-xl' htmlFor='job'>
              Job:
            </label>
            <input
              type='text'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your Job...'
            />
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
            />
          </div>
          <div className='flex flex-col my-3 mx-1'>
            <label
              className='text-base sm:text-lg md:text-xl'
              htmlFor='phoneNumber1'
            >
              PhoneNumber1:
            </label>
            <input
              type='text'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your PhoneNumber1...'
            />
          </div>
          <div className='flex flex-col my-3 mx-1'>
            <label
              className='text-base sm:text-lg md:text-xl'
              htmlFor='phoneNumber2'
            >
              PhoneNumber2:
            </label>
            <input
              type='text'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your PhoneNumber2...'
            />
          </div>

          <div className='flex flex-col my-3 mx-1'>
            <label
              className='text-base sm:text-lg md:text-xl'
              htmlFor='province'
            >
              Province:
            </label>
            <input
              type='text'
              className='outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
              placeholder='Enter your Province...'
            />
          </div>
          <div className='md:col-span-3 sm:col-span-2  flex flex-col md: px-1 py-5'>
            <label
              className='text-base sm:text-lg md:text-xl'
              htmlFor='personalInfo'
            >
              PersonalInfo:
            </label>
            <textarea
              placeholder='Enter your PersonalInfo...'
              className='resize-none rounded-md outline-none border-2 p-1 text-sm sm:text-base md:text-lg border-gray-300'
            />
          </div>
          <button className='bg-green-500 py-3 text-xl rounded-md w-fit px-10 text-white mx-1 font-bold'>
            {!profile ? 'Create an account ' : 'Update your account'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateAnAccount
