import { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/Loading";

export default function PrivateRoute({ children }) {
    const location = useLocation()
    const { user, loading } = use(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate state={{from:location}} to='/auth/login' replace></Navigate>
    }

    if (user) {
        return children
    }

}
