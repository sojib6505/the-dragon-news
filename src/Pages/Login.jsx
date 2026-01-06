import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
export default function Login() {
    const {signIn} = use(AuthContext)
    const navigate = useNavigate()
    const [error,setError] = useState('')
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then((userCredential) =>{
            const user = userCredential.user;
            navigate(from,{replace:true})
        } )
        .catch((error)=>{
            setError(error.message)
        })
        console.log(email,password)
    }
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-12 px-8">
                <h2 className="font-bold text-2xl text-center">Login your account</h2>
                <div className="divider"></div>
                <div className="card-body ">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label font-semibold text-sm">Email</label>
                        <input type="email" name="email" className="input bg-base-200" placeholder="Email" />
                        <label className="label font-semibold  text-sm">Password</label>
                        <input type="password" name="password" className="input  bg-base-200" placeholder="Password" />
                        <p>{error? error: ''}</p>
                        <button type="submit" className="btn btn-primary mt-4">Login</button>
                        <p className="font-semibold text-sm">Dont’t Have An Account ?
                            <Link to='/auth/register' className="text-secondary hover:underline">Register</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
