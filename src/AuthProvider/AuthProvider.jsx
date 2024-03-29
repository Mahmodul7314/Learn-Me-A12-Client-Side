/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";  
import { app } from "../Firebase/firebase.config";






export const AuthContext=createContext(null);
const auth=getAuth(app)  

const AuthProvider =({children}) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading] = useState(true)

   



    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth,email,password)
    }
    
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password);
    }
    
    //signIn with google
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    
    
    
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }
    
   
    const updateUserProfile = (name, photo)=>{
        return updateProfile(auth.currentUser, {
             displayName: name, photoURL:photo
           });
           
     }
    
 //observing user
 useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth,currentUser=>{
        console.log('user in the auth state change',currentUser)
        setUser(currentUser)
        setLoading(false);
    });
    return()=>{
        unSubscribe();
    }
},[]);

 
    
 const authInfo ={
        user,
         loading,
        createUser,
         signIn,
        logOut,
        updateUserProfile,
       googleSignIn
        }
    

    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;