import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
export default function SocialLogin() {
  return (
    <div>
        <h2 className="font-bold text-xl">Login With</h2>
    <div className="grid gap-5 mt-5"> 
       <div className="btn btn-outline w-full btn-secondary">
        <FcGoogle size={25}></FcGoogle>
        Login With Google</div>
       <div className="btn btn-outline w-full btn-primary">
        <FaGithub size={25}></FaGithub>
        Login With Github</div>
    </div>
    </div>
  )
}
