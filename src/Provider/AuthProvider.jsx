import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading,setLoading] = useState(true)
  const [newsLoading, setNewsLoading] = useState(true);
  const [data ,setData] = useState([]);
 
  const createUser = (email, password) => { 
    return createUserWithEmailAndPassword(auth, email, password)
  };
  const signIn = (email, password) => {
    
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
     
    return updateProfile(auth.currentUser,userInformation)
  }
  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser)
  }
  const resetPassword = (email) =>{
   return sendPasswordResetEmail(auth,email)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    });
    return unSubscribe
  }, [])
   useEffect(()=>{
    axios
    .get('/news.json')
    .then((res)=>{
      const filterData = res.data.filter(news => news.others.is_trending === true)
      setData(filterData)
    })
    .catch((error)=>{
      alert(error.message)
    })
    .finally(() => setNewsLoading(false));
  },[])
  const userInfo = {
    createUser,
    signIn,
    user,
    signOutUser,
    loading,
   signInWithGoogle,
   signInWithGithub,
    updateUsers,
    data,
    emailVerification,
    newsLoading,
    resetPassword
  }
  return <AuthContext value={userInfo}>{children}</AuthContext>
}
export default AuthProvider