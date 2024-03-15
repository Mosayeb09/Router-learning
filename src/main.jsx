import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
// import Header from './Component/Header/Header.jsx';
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import User from './Component/User/User.jsx';
import UserDetails from './Component/UserDetails/UserDetails.jsx';
import Post from './Component/PuralPost/Post.jsx';
import PostDetails from './Component/postDetails/PostDetails.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/user",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element:<User></User>
      },
      {
        path:"/user/:userId",
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path:"/posts",
        loader:()=> fetch("https://jsonplaceholder.typicode.com/posts"),
        element:<Post></Post>
      },
      {
        path:'/post/:postid',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`),
        element:<PostDetails></PostDetails>
      }
      
    ]
  }
  // {
  //   path:"header",
  //   element:<Header></Header>
  // },
  // {
  //   path:"/about",
  //   element: <div>Now i am in about page</div>
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
