import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Contact from "../components/Contact/Contact";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import BlogArticles from "../components/BlogArticles/BlogArticles";
import AboutMe from "../components/AboutMe/AboutMe";


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
        {
            path: "blogs",
            element: <BlogArticles></BlogArticles>
        },
        {
            path: "about",
            element: <AboutMe></AboutMe>
        },
      ]
    },
  ]);