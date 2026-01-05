import { Link } from "react-router";

export default function Register() {
  return (
     <div className="flex justify-center min-h-screen items-center ">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-12 px-8">
                <h2 className="font-bold text-2xl text-center"> Register your account</h2>
                <div className="divider"></div>
                <div className="card-body ">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label font-semibold text-sm">Your Name</label>
                        <input type="text" className="input bg-base-200" placeholder="Enter your name" />
                        {/* Photo Url */}
                        <label className="label font-semibold text-sm">Photo URL</label>
                        <input type="text" className="input bg-base-200" placeholder="Photo URL" />
                        {/* Email */}
                        <label className="label font-semibold text-sm">Email</label>
                        <input type="email" className="input bg-base-200" placeholder="Email" />
                        <label className="label font-semibold  text-sm">Password</label>
                        <input type="password" className="input  bg-base-200" placeholder="Password" />
                        <div className="flex items-center gap-2">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-sm " />
                            <p>Accept <Link className="font-bold">Term & Conditions</Link> </p>
                        </div>
                        <button className="btn btn-primary mt-4">Login</button>
                        <p className="font-semibold text-sm"> Have An Account ?
                            <Link to='/auth/login' className="text-secondary hover:underline">Login</Link> </p>
                    </fieldset>
                </div>
            </div>
        </div>
  )
}
