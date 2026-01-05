import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/', element: <HomeLayout />,
        children: [
            { index: true, element: <Home /> },
            {
                path: '/category/:id',
                element: <CategoryNews />,
                loader:()=> fetch('/news.json')
            }
        ]
    },
    { path: '/*', element: <div>Error 404</div> }
])
export default router;