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
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import User from './components/User.jsx';

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
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/users",
        element: <User></User>,
        loader: () => fetch('http://localhost:3000/users')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </StrictMode>,
)
