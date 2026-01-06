import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-lg text-gray-700 mb-2">
        Something went wrong while loading the news.
      </p>
      <p className="text-md text-red-500 font-semibold">
        {error?.message || "Unknown error occurred"}
      </p>
    </div>
  );
}
