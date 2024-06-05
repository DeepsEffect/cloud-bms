/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
// import { GithubAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

//create context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user with email and password
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //log in user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign in with google
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //sign in with github
  // const githubProvider = new GithubAuthProvider();
  // const signInWithGithub = () => {
  //   setLoading(true);
  //   return signInWithPopup(auth, githubProvider);
  // };

  // save user function
  const saveUser = async (user) => {
    const currentUser = {
      email: user?.email,
      role: "user",
      status: "verified",
    };
    const { data } = axios
      .put(`${import.meta.env.VITE_URL}/user`, currentUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
    return data;
  };

  //observing user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // save user to db
      if (currentUser) {
        saveUser(currentUser);
      }
      setLoading(false);
      console.log("Current User: ", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //signOut user
  const logOut = () => {
    return signOut(auth);
  };

  //passing the data as object
  const authInfo = {
    user,
    loading,
    registerUser,
    signInWithGoogle,
    // signInWithGithub,
    loginUser,
    setUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
