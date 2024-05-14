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
import UpdatePost from './Components/Forms/PostForm/UpdatePost';
import { Toaster } from 'react-hot-toast';
import Profile from './Components/Profile/Profile';
import JobRequest from './Components/JobRequest/JobRequest';
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BlogDetails from './Components/Blog/BlogDetails';
const queryClient = new QueryClient()


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
        path:"/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      { 
        path:"/blogs",
        element:<Blogs></Blogs>,
        loader:() => fetch("/blog.json")
      },{
        path:"/blog/:blogId",
        element:<BlogDetails></BlogDetails>,
        loader:() => fetch("/blog.json")
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
        path:"/need-volunteer",
        element:<NeedVolunteer></NeedVolunteer>
      },
      {
        path:"/volunteer-details/:id",
        element:<PrivateRoute><VolunteerDetails></VolunteerDetails></PrivateRoute>,
        loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/volunteer-details/${params.id}`)
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
      },
      {
        path:"/update-job/:id",
        element:<PrivateRoute><UpdatePost></UpdatePost>,</PrivateRoute>,
        loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/volunteers-post/${params.id}`)
      },
      {
        path:"/job-request",
        element:<PrivateRoute><JobRequest></JobRequest></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster></Toaster>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
