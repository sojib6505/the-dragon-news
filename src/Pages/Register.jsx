import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye,FaEyeSlash  } from "react-icons/fa"

export default function Register() {
    const { createUser, updateUsers, emailVerification } = use(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const [show,setShow] = useState(true)
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((result) => {
                return updateUsers({
                    displayName: name,
                    photoURL: photo,
                });
            })
            .then(() => {
                return emailVerification();
            })
            .then(() => {
                alert("Email verification sent. Please check your email.");
                navigate("/");
            })
            .catch((error) => {
                setError(error.message);
            });

    }
    return (
        <div className="flex justify-center min-h-screen items-center ">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-12 px-8">
                <h2 className="font-bold text-2xl text-center"> Register your account</h2>
                <div className="divider"></div>
                <div className="card-body ">
                    <form onSubmit={handleRegister} className="fieldset">
                        {/* Name */}
                        <label className="label font-semibold text-sm">Your Name</label>
                        <input type="text" name="name" required className="input bg-base-200" placeholder="Enter your name" />
                        {/* Photo Url */}
                        <label className="label font-semibold text-sm">Photo URL</label>
                        <input type="text" name="photo" className="input bg-base-200" placeholder="Photo URL" />
                        {/* Email */}
                        <label className="label font-semibold text-sm">Email</label>
                        <input type="email" required name="email" className="input bg-base-200" placeholder="Email" />
                        <label className="label font-semibold  text-sm">Password</label>
                        <div className="relative">
                            <input type={show ? 'password' : 'text'} name="password" className="input  bg-base-200" placeholder="Password" />
                            <div onClick={() => setShow(!show)} className="absolute top-3 right-4 ">
                                {show ? <FaEyeSlash className="size-4"></FaEyeSlash> : <FaEye className="size-4"></FaEye>}

                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-sm " />
                            <p>Accept <Link className="font-bold">Term & Conditions</Link> </p>
                        </div>
                        <p className="text-red-500">{error ? error : ''}</p>
                        <button type="submit" className="btn btn-primary mt-4">Register</button>
                        <p className="font-semibold text-sm"> Have An Account ?
                            <Link to='/auth/login' className="text-secondary hover:underline">Login</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
