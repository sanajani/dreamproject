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
import DashBoard from '../pages/DashBoard'


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home />} />
            <Route path='signup' element={<Signup />} />
            <Route path='signin' element={<Signup />} />
            <Route path='contact' element={<Contact />}/>
            <Route path='dashboard' element={<DashBoard/>}/>
            <Route path='updateprofile' element={<DashBoard/>}/>
            <Route path='profile' element={<DashBoard/>}/>
        </Route>
        <Route path='*' element={<PageNotFound />} />         
        </>
    )
)