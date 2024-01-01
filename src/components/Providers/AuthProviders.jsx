import React, { createContext, useState } from "react";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app)
  const googleAuth = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleAuth);
  };

  const authInfo = {
    user,
    googleSignIn,
    setUser,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProviders;
