import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import Register from './Components/Forms/Register';
import AuthProvider from './Providers/AuthProvider';
import Login from './Components/Forms/Login';
import NeedVolunteer from './Components/NeedVolunteer/NeedVolunteer';
import VolunteerDetails from './Components/NeedVolunteer/VolunteerDetails';
import Contact from './Components/Contact/Contact';
import Blogs from './Components/Blog/Blogs';
import VolunteerPost from './Components/Forms/PostForm/VolunteerPost';
import PrivateRoute from './Components/PrivateRoutes/PrivateRoute';
import MyJobPost from './Components/MyJobPost/MyJobPost';
import MyJobApply from './Components/MyJobApply/MyJobApply';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      { 
        path:"/blogs",
        element:<Blogs></Blogs>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/Need-Volunteer",
        element:<NeedVolunteer></NeedVolunteer>,
        loader:() => fetch("http://localhost:5000/volunteers-post")
      },
      {
        path:"/volunteer-details/:id",
        element:<PrivateRoute><VolunteerDetails></VolunteerDetails></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/volunteer-details/${params.id}`)
      },
      {
        path:"/job-post",
        element:<PrivateRoute><VolunteerPost></VolunteerPost></PrivateRoute>
      },
      {
        path:"/my-job-post",
        element:<PrivateRoute><MyJobPost></MyJobPost></PrivateRoute>
      },{
        path:"/my-job-apply",
        element:<PrivateRoute><MyJobApply></MyJobApply></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
