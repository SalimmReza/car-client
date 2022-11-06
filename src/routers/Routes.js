import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Orders from "../pages/Orders";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([


    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://y-roan-xi.vercel.app/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            }



        ]
    }
]);

export default router;