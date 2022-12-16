import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    return signOut(auth);
  };

  const createUser = (email, passwrod) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, passwrod);
  };

  const signIn = (email, passwrod) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, passwrod);
  };

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };
  const updatePrifileUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser == null || currentUser.emailVerified) {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return unsubscribe();
  }, []);

  const authInfo = {
    user,
    providerLogin,
    logOut,
    createUser,
    signIn,
    loading,
    updatePrifileUser,
    verifyEmail,
    setLoading,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
