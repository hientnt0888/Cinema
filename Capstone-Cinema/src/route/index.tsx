import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/home";
import Detail from "../pages/detail/detail";
import HomeTemplate from "../templates/home/home-template";
import Regis from "../pages/register/test";
import Sign from "../pages/login/test";
import Tickets from "../pages/tickets/tickets";


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
                element: <Detail />

            },
            {
                path: "/detail/:MaPhim",
                element: <Detail />

            }, {
                path: "/Regis",
                element: <Regis />
            },
            {
                path: "/Sign",
                element: <Sign />
            },
            {
                path: "/booktickets",
                element: <Tickets />
            },
        ])

    }

])