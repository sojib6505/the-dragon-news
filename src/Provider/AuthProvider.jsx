import { createContext } from "react";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
       const userInfo = {
        name: 'Sojib',
        Email: 'sojibislam@gamil.com'
    }
   return <AuthContext value={userInfo}>{children}</AuthContext>
}
export default AuthProvider