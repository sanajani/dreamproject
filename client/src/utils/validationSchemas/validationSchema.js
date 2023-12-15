import * as Yup from 'yup'

export const signupValidationSchema = Yup.object({
    firstname: Yup.string().required("FirstName is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
})

export const signinValidationSchema = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
})

export const initialSignupValues = {
    firstname: '',
    email: '',
    password: ''
}

export const initialSigninValues = {
    email: '',
    password: ''
}