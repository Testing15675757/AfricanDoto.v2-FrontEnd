import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home/Home'
import NotFound from '../pages/NotFound/NotFound'
import Root from '../layouts/Layout'
import Profile from '../pages/Profile/Profile'


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
        element: <Profile />
      }
    ]
  }
])

export default router