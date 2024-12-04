import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Mainlayout from './components/Mainlayout.jsx';
import Addcoffe from './components/Addcoffe.jsx';
import Updatecoffee from './components/Updatecoffee.jsx';
import Home from './components/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:3000/coffee')
      },
      {
        path: "/addcoffee",
        element: <Addcoffe></Addcoffe>
      },
      {
        path: "/coffee/:id",
        element: <Updatecoffee></Updatecoffee>,
        loader: ({params}) => fetch(`http://localhost:3000/coffee/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
