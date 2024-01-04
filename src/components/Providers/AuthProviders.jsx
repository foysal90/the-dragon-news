import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const auth = getAuth(app)
  const googleAuth = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleAuth);
  };
  const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email,password)
  }

  const signIn = (email, password)=> {
    return signInWithEmailAndPassword(auth, email,password);
  }

  const logOut = () => {
    return signOut(auth)
  }

  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      setLoading(false)

    })
    return()=> {
      unsubscribe();
    }
  },[])

  const authInfo = {
    user,
    loading,
    googleSignIn,
    setUser,
    signIn,
    createUser,
    logOut
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProviders;
