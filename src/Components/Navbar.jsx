import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png"
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";


export default function Navbar() {
  const {user,signOutUser} = use(AuthContext)
  const handleLogOut = () =>{
    signOutUser().then(()=>{
      alert('Sign-out successful')
    }).catch((error) => {
      alert('An error happened.')
    })
  }
  return (
    <div className="flex justify-between items-center">
        <div>{user?user.email:''}</div>
        <div className="flex gap-2 text-accent justify-center">
            <NavLink to='/'>Home</NavLink>
              <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
        </div>
        <div className="flex items-center gap-2">
            <img src={userImg} alt="" />
            {user? <button onClick={handleLogOut}  className="btn bg-primary text-base-100 px-5 ">LogOut</button>:<Link to='/auth/login' className="btn bg-primary text-base-100 px-5 ">Login</Link>}
        </div>
    </div>
  )
}
