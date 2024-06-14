import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase_config';

export const AuthContext = createContext(null)
 const auth = getAuth(app)
 const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loadding , setLoadding] = useState(true)

    const createUser = (email,password)=>{
        setLoadding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =(email,password)=>{
        setLoadding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googgleSignIn=()=>{
        setLoadding(true)
        return signInWithPopup(auth,provider)
    }
    const logOut =()=>{
        setLoadding(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const UnSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            if(currentUser){
                
                setLoadding(false)
            }
            else{
                setLoadding(false)
            }
        })

        return ()=>{
            return UnSubscribe()
        }
    },[])


   



    const authValue ={
createUser,
signIn,
logOut,
googgleSignIn,
loadding,
user
    }
    return (
       <AuthContext.Provider value={authValue}>
{children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;