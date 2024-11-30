import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './component/Home.jsx'
import Explore from './pages/Explore.jsx'
import Package from './pages/Package.jsx'
import Contact from './pages/Contact.jsx'


const router = createBrowserRouter([
  {
     path:'/',
     element:<App/>
  },
  {
     path:'/explore',
     element:<Explore/>
  },
  {
     path:'/package',
     element:<Package/>
  },
  {
     path:'/contact',
     element:<Contact/>
  },
 {
   path:'*',
   element:<>
   <div className='text-center h-screen my-auto'>
   <h1 className='text-5xl font-bold'>Page Not Found.. try Again..</h1>
   </div>
   </>
   
},

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
