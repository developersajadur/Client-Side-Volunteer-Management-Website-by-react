import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { Bounce } from "react-toastify";
import Swal from "sweetalert2";
import auth from "../firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const twitterProvider = new TwitterAuthProvider();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const createUser = async (email, password) => {
    if (!passwordRegex.test(password)) { 
      toast.error('Weak password');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      Swal.fire({
        title: "Wow! Account Create successfully",
        icon: "success",
        confirmButtonText: '<a href="/">Say Thanks!</a>',
      });
      return userCredential.user;
    } catch (error) {
      toast.error(`${error.message}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const updateUserProfile = async (image, name) => {
    await updateProfile(auth.currentUser, {
      photoURL: image,
      displayName: name
    });
  }

  const signInUser = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      toast.error(`${error.message}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const googleLogin = async () => {
    setLoading(true);
    try {
          try {
              return await signInWithPopup(auth, googleProvider);
          } catch (error) {
              toast.error(`${error.message}`);
          }
      } finally {
          setLoading(false);
      }
  }

  const twitterLogin = async () => {
    setLoading(true);
    try {
          try {
              return await signInWithPopup(auth, twitterProvider);
          } catch (error) {
              toast.error(`${error.message}`);
          }
      } finally {
          setLoading(false);
      }
  }

  const logOutUser = async () => {
    axios.post("http://localhost:5000/logout", {withCredentials: true})
    .then(res => console.log("token response" , res?.data))
    await signOut(auth);
    toast.success('Log Out Successfully')
    setUser(null);
  }

  useEffect(() => {
    const unSubscribeUser = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      const loggedUser = { email: currentUser?.email}
      if(currentUser){
        axios.post("http://localhost:5000/jwt", loggedUser,{withCredentials:true})
        // .then(res => console.log("token response" , res?.data))
      }
    });

    return () => {
      unSubscribeUser();
    };
  }, []);

  const contextValue = { user, createUser, updateUserProfile, signInUser, logOutUser, googleLogin, twitterLogin, loading };

  return (
    <AuthContext.Provider value={contextValue}> 
      {children}
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
