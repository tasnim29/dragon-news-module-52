import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //   register
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   login
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   signout
  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      //   console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authData = {
    user,
    createUser,
    signInUser,
    signOutUser,
  };
  return (
    <div>
      <AuthContext value={authData}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
