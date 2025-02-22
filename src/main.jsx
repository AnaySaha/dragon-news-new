import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './assets/Layouts/HomeLayout.jsx';

const router = createBrowserRouter([
  {
  path: "/",
  element: <div><HomeLayout></HomeLayout></div>,
  },
  {
    path: "/",
    element: <h1></h1>,
},
{
    path: "/news",
    element: <h1>News Layout</h1>,
},
{
    path: "auth",
    element: <h1>Login</h1>
},
{
    path: "*",
    element: <h1>Error</h1>
},
])

  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
