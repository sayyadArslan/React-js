import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router'
import Layout from './layout'
import Home from './Home'
import Help from './help';
import About from './About';
import Contact from './Contact';
const router  = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path: '/',
        element:<Home/>
      },
       {
        path: '/about',
        element:<About/>
      },
       {
        path: '/contact',
        element:<Contact/>
      },
       {
        path: '/help',
        element:<Help/>
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
