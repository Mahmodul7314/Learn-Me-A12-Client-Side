/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";  
import { app } from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";





export const AuthContext=createContext(null);
const auth=getAuth(app)  

const AuthProvider =({children}) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading] = useState(true)

    const axiosPublic = useAxiosPublic();



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
    
     useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
         if(currentUser){
            //send userInfo and get token and store client
        const userInfo = {email:currentUser.email}
        axiosPublic.post('/jwt', userInfo)
        .then(res =>{
            if(res.data.token){
                localStorage.setItem('access-token', res.data.token);
            }
        })
        
        
        }
         else{
            //ToDo: remove token(if token store in client site,local storage, cachin in memory)
            localStorage.removeItem('access-token');
        }
          setLoading(false)
    
        })
         return ()=>{
            return unsubscribe();
         }
     },[axiosPublic])
    
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