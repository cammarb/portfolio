import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root'
import Home from './pages/Home'
import { ThemeProvider, BaseStyles } from '@primer/react'
import Music from './pages/Music'
import ErrorPage from './pages/ErrorPage'
import { Projects } from './pages/Projects'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Music />,
        path: 'music',
      },
      {
        element: <Projects />,
        path: 'projects',
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider colorMode="auto">
      <BaseStyles>
        <RouterProvider router={router} />
      </BaseStyles>
    </ThemeProvider>
  </React.StrictMode>
)
