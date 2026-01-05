import { Link } from "react-router";


export default function Login() {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-12 px-8">
                <h2 className="font-bold text-2xl text-center">Login your account</h2>
                <div className="divider"></div>
                <div className="card-body ">
                    <fieldset className="fieldset">
                        <label className="label font-semibold text-sm">Email</label>
                        <input type="email" className="input bg-base-200" placeholder="Email" />
                        <label className="label font-semibold  text-sm">Password</label>
                        <input type="password" className="input  bg-base-200" placeholder="Password" />
                        <button className="btn btn-primary mt-4">Login</button>
                        <p className="font-semibold text-sm">Dont’t Have An Account ?
                            <Link to='/auth/register' className="text-secondary hover:underline">Register</Link> </p>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}
