// react-router package
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'

import RootLayout from '../layouts/RootLayout'

// pages
import Home from '../pages/Home'
import PageNotFound from '../pages/PageNotFound'
 
export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />         
        </>
    )
)