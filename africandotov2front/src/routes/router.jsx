import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home/Home'
import NotFound from '../pages/NotFound/NotFound'
import Root from '../layouts/Layout'
import Profile from '../pages/Profile/Profile'
import SignUp from '../pages/SignUp/SignUp'
import Login from '../pages/Login/Login'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/',
        element: <SignUp />
      },
      {
        path: '/',
        element: <Login />
      }
    ]
  }
])

export default router