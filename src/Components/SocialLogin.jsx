import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { use } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth"

export default function SocialLogin() {
  const provider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()
  const {signInWithGoogle,signInWithGithub} = use(AuthContext);
  const handleLoginGoogle = () => {
     signInWithGoogle(provider)
     .then((result) => {
       console.log(result.user)
     })
     .catch((error) => {
       alert(error.message)
     })
  }

  const handleLoginGithub = () => {
    signInWithGithub( githubProvider)
    .then((result) => {
      console.log(result.user)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  return (
    <div>
        <h2 className="font-bold text-xl">Login With</h2>
    <div className="grid gap-5 mt-5"> 
       <div onClick={handleLoginGoogle} className="btn btn-outline w-full btn-secondary">
        <FcGoogle size={25}></FcGoogle>
        Login With Google</div>
       <div onClick={handleLoginGithub} className="btn btn-outline w-full btn-primary">
        <FaGithub size={25}></FaGithub>
        Login With Github</div>
    </div>
    </div>
  )
}
