import { useNavigate, useRouteError } from "react-router";
import { FaHome } from "react-icons/fa";

export default function ErrorPage() {
  const navigate = useNavigate()
  const error = useRouteError();
  const handleGoHome = () => {
    navigate('/')
  }
  // console.log(error)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-lg text-gray-700 mb-2">
        Something went wrong while loading the news.
      </p>
      <p className="text-md text-red-500 font-semibold">
        {error?.message || "Unknown error occurred"}
      </p>
      <button  className="
          flex items-center gap-2
          bg-primary text-white
          px-4 py-3
          rounded-lg
          shadow-md
          hover:bg-primary-focus
          transition" onClick={handleGoHome}>
      <FaHome size={20} />
      Go Home
      </button>
    </div>
  );
}
