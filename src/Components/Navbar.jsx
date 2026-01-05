import { NavLink } from "react-router";
import user from "../assets/user.png"

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
        <div></div>
        <div className="flex gap-2 text-accent justify-center">
            <NavLink to='/'>Home</NavLink>
              <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
        </div>
        <div className="flex items-center gap-2">
            <img src={user} alt="" />
            <div className="btn bg-primary text-base-100 px-5 ">Login</div>
        </div>
    </div>
  )
}
