import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { use, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

export default function SocialLogin() {
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const { signInWithGoogle, signInWithGithub, user } = use(AuthContext);
  const [open, setOpen] = useState(false);
  if (user) return null;
  return (
    <>
     <div className={user ? "hidden" : ""}></div>
      {/* Mobile Toggle Button (Left Middle) */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed left-0 top-1/2 -translate-y-1/2
          z-50
          bg-base-200 text-primary font-semibold
          px-2 py-3
          rounded-r-xl
          shadow-lg
          lg:hidden
          border-0
        "
      >
        Login
      </button>

      {/*Social Login Panel */}
      <div
        className={`
          fixed top-1/2 -translate-y-1/2
          left-0
          w-[85%]
          max-w-xs
          z-40
          bg-base-100
          p-4
          rounded-r-2xl
          shadow-2xl
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:static
          lg:translate-x-0
          lg:w-full
          lg:rounded-none
          lg:shadow-none
          lg:border-0
          lg:p-0
        `}
      >
        <h2 className="font-bold  text-xl mb-2">
          Login With
        </h2>

        <div className="grid gap-4">
          <button
            onClick={() => signInWithGoogle(provider)}
            className="btn btn-outline w-full btn-secondary"
          >
            <FcGoogle size={24} />
            Login With Google
          </button>

          <button
            onClick={() => signInWithGithub(githubProvider)}
            className="btn btn-outline w-full btn-primary"
          >
            <FaGithub size={24} />
            Login With Github
          </button>
        </div>
      </div>
    </>
  );
}
