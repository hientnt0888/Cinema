import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Detail from "../pages/detail/detail";
import HomeTemplate from "../templates/home/home-template";


export const router = createBrowserRouter([
    {
        element: <HomeTemplate />,
        children: ([
            {
                path: "/",
                element: <Home />

            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Detail />

            }


        ])

    }

])