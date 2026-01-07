import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthenticationLayout from "../Layouts/AuthenticationLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProductDetails from "../Pages/ProductDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import ErrorPage from "../Components/Error";
import Loading from "../Components/Loading";

const router = createBrowserRouter([
    {
        path: '/', element: <HomeLayout />,
        children: [
            { index: true, element: <Home /> },
            {
                path: '/category/:id',
                element: <CategoryNews />,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement:<Loading></Loading>,
                 errorElement:<ErrorPage/>
            }
        ]
    },
    {
        path: '/auth', element: <AuthenticationLayout />,
        children: [
            { path: '/auth/login', element: <Login></Login> },
            { path: '/auth/register', element: <Register></Register> }
        ]
    },
    {
        path: 'details/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: () => fetch('/news.json'),
          hydrateFallbackElement:<Loading></Loading>,
        errorElement:<ErrorPage/>
    },
    { path: '/*', element: <ErrorPage/> }
])
export default router;