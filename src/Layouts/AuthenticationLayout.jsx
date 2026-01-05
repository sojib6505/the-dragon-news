import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";


export default function AuthenticationLayout() {
  return (
    <div className="bg-base-200 min-h-screen">
        <header className="py-5 w-11/12 mx-auto ">
            <Navbar/>
        </header>
        <Outlet/>
    </div>
  )
}
