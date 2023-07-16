import React, {useContext} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Context} from "../index";

import {ROUTES} from "../utils/consts";

import Admin from "../pages/Admin";
import Basket from "../pages/Basket";
import Shop from "../pages/Shop";
import Auth from "../pages/Auth";
import DevicePage from "../pages/DevicePage";

const authRouter = createBrowserRouter([
    {
        path: ROUTES.ADMIN,
        element: <Admin/>
    },
    {
        path: ROUTES.BASKET,
        element: <Basket/>
    },
    {
        path: "*",
        element: <Shop/>
    },
    {
        path: ROUTES.LOGIN,
        element: <Auth/>,
    },
])
const publicRouter = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <Shop/>,
    },
    {
        path: ROUTES.SHOP,
        element: <Shop/>,
    },
    {
        path: ROUTES.LOGIN,
        element: <Auth/>,
    },
    {
        path: ROUTES.REGISTRATION,
        element: <Auth/>,
    },
    {
        path: ROUTES.DEVICE + '/:id',
        element: <DevicePage/>,
    },
    {
        path: "*",
        element: <Shop/>
    }
])

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <>
        {user.isAuth && <RouterProvider router={authRouter}/>}
        {!user.isAuth && <RouterProvider router={publicRouter}/>}

        </>
    );
};

export default AppRouter;