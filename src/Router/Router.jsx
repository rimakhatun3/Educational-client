import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import AddCourse from "../Pages/Dashboard/AddCourse";
import EditCourse from "../Pages/Dashboard/EditCourse";
import Courses from "../Pages/Dashboard/Courses";
import Payment from "../Pages/Dashboard/Payment";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
        ]
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"dashboard",
        element:<Dashboard/>,
        children:[
            {
                path:"addCourse",
                element:<AddCourse/>
            },
            {
                path:"course/editcourse/:id",
                element:<EditCourse/>,
                loader: ({params})=>fetch(`https://education-server-alpha.vercel.app/course/${params.id}`)
            },
            {
                path:"course/payment/:id",
                element:<Payment/>,

                loader: ({params})=>fetch(`https://education-server-alpha.vercel.app/course/${params.id}`)
            },
            {
                path:"course",
                element:<Courses/>,
                loader: ()=>fetch("https://education-server-alpha.vercel.app/course")
            },
        ]
    },
])