import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading,setLoading] = useState(true)
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  };
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  };
  const signOutUser = () =>{
    return signOut(auth)
  }
  const signInWithGoogle =(provider) => {
    return signInWithPopup(auth,provider)
  }
    const signInWithGithub =(githubProvider) => {
    return signInWithPopup(auth,githubProvider)
  }
  const updateUsers= (userInformation) => {
    setLoading(true)
    return updateProfile(auth.currentUser,userInformation)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    });
    return unSubscribe
  }, [])
  const userInfo = {
    createUser,
    signIn,
    user,
    signOutUser,
    loading,
   signInWithGoogle,
   signInWithGithub,
    updateUsers
  }
  return <AuthContext value={userInfo}>{children}</AuthContext>
}
export default AuthProvider