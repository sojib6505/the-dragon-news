import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png"
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "./Loading";
export default function Navbar() {
  const { user, signOutUser,loading } = use(AuthContext)
  const handleLogOut = () => {
    signOutUser().then(() => {
      alert('Sign-out successful')
    }).catch((error) => {
      alert('An error happened.')
    })
  }
  if(loading){
   return <Loading/>
  }
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="flex gap-2 text-accent justify-center">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/career'>Career</NavLink>
      </div>
      <div className="flex items-center gap-2">
        {user.photoURL? <img className="w-12 rounded-full " src={user.photoURL} alt="" />: <img src={userImg} alt="" />}
        {user ? <button onClick={handleLogOut} className="btn bg-primary text-base-100 px-5 ">LogOut</button> : <Link to='/auth/login' className="btn bg-primary text-base-100 px-5 ">Login</Link>}
      </div>
    </div>
  )
}
