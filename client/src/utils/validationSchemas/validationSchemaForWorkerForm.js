import * as Yup from 'yup'
// import { useSelector } from 'react-redux'

export const createWorkerSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    lastName: Yup.string().required("LastName is required"),
    job: Yup.string().required("Job is required"),
    experience: Yup.string().required("Experience is required"),
    phoneNumber1: Yup.string().required("PhoneNumber1 is required"),
    phoneNumber2: Yup.string().required("PhoneNumber2 is required"),
    province: Yup.string().required("Province is required"),
    personalInfo: Yup.string().required("Tell us about your self")
})

export const initialWorkerAccountValues = {
    name: '',
    lastName: '',
    email:'',
    job: '',
    experience: '',
    phoneNumber1: '',
    phoneNumber2: '',
    profileImage: '',
    province: '',
    personalInfo: '',
}