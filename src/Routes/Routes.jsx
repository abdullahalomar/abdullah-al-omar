import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Contact from "../components/Contact/Contact";
import BlogDetails from "../components/BlogDetails/BlogDetails";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "contact",
            element: <Contact></Contact>
        },
        {
            path: "blogDetails",
            element: <BlogDetails></BlogDetails>
        },
      ]
    },
  ]);