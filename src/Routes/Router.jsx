import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter([
    {path:'/',element:<HomeLayout/>},
    {path:'/*',element: <div>Error 404</div>}
])
export default router;