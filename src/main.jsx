import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './app'
import Home from './pages/home'
import AboutUs from './pages/about-us'
import NotFound from './pages/not-found'
import HousingForm from './pages/housing-form'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/not-found',
        element: <NotFound />,
      },
      {
        path: '/housing-form',
        element: <HousingForm />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
