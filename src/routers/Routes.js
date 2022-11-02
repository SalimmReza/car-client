import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";


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
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }



        ]
    }
]);

export default router;