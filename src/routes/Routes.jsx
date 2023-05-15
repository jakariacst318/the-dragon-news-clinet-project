import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Home/Login/Login/Login";
import Register from "../pages/Home/Login/Login/Register/Register";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import AcceptTerm from "../pages/Shared/AcceptTerm/AcceptTerm";


const router = createBrowserRouter ([
    
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>,
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <AcceptTerm></AcceptTerm>
            }
        ]
    },
    {
        path:'category',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:':id',
                element: <Category></Category>,
                loader:({params}) => fetch(`https://the-dragon-news-server-jakariacst318.vercel.app/categories/${params.id}`)
            },
            
        ]
    },
    {
        path:'/news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element: <PrivetRoute> <News></News> </PrivetRoute>,
                loader:({params}) => fetch(`https://the-dragon-news-server-jakariacst318.vercel.app/news/${params.id}`)
            }
        ]        
    }
])

export default router ;