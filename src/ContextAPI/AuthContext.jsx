import React, { createContext,useState } from "react";
import { useNavigate } from "react-router-dom";

export const isLogin = createContext();

export const AuthContextProvider = ({children}) =>{
    const[isAuth, setisAuth] = useState(false);
    const[isGoogle, setGoogle] = useState(false);
    const [user,setUser] = useState(null);
    const navigate = useNavigate();

    const LoginAuth = (isAuth) =>{
        setisAuth(!isAuth);   
    }
    const GoogleAuth = () =>{
        setGoogle(true);
    }
    const StoreUser = (user) =>{
        setUser(user);
        console.log("User Stored");     
    }



    return <isLogin.Provider value={{isAuth, LoginAuth, isGoogle, GoogleAuth}}>{children} </isLogin.Provider>

}