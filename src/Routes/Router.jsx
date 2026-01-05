import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthenticationLayout from "../Layouts/AuthenticationLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path: '/', element: <HomeLayout />,
        children: [
            { index: true, element: <Home /> },
            {
                path: '/category/:id',
                element: <CategoryNews />,
                loader: () => fetch('/news.json')
            }
        ]
    },
    {
        path: '/auth', element: <AuthenticationLayout />,
        children: [
            { path:'/auth/login', element: <Login></Login> },
            {path:'/auth/register', element:<Register></Register>}
        ]
    },
    { path: '/*', element: <div>Error 404</div> }
])
export default router;