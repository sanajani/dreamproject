import { RouterProvider } from 'react-router-dom'
import { router } from './utils/router'


const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App