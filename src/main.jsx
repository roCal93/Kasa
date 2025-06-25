import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './app'
import Home from './pages/home'
import AboutUs from './pages/about-us'
import NotFound from './pages/not-found'
import HousingPage from './pages/housing-page'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'about-us',
          element: <AboutUs />,
        },
        {
          path: 'housing-page/:id',
          element: <HousingPage />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    basename: '/Kasa', // Ajoutez cette option
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
