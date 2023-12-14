// react-router package

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'

import RootLayout from '../layouts/RootLayout'

// pages
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import PageNotFound from '../pages/PageNotFound'
import Contact from '../pages/Contact' 
import CreateAnAccount from '../pages/DashBoard'
import Profile from '../pages/Profile'
import ProtectedRoute from '../components/protectedRoutes/ProtectedRoute'
import EditProfileProtectRoute from '../components/protectedRoutes/EditProfileProtectRoute'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home />} />
            <Route path='signup' element={<Signup />} />
            <Route path='signin' element={<Signup />} />
            <Route path='contact' element={<Contact />}/>
            <Route path='create-an-account' element={<ProtectedRoute><CreateAnAccount/></ProtectedRoute>}/>
            <Route path='updateprofile' element={<EditProfileProtectRoute><CreateAnAccount/></EditProfileProtectRoute>}/>
            <Route path='profile' element={<Profile/>}/>
        </Route>
        <Route path='*' element={<PageNotFound />} />         
        </>
    )
)
// to solve git problem
// git branch --unset-upstream
