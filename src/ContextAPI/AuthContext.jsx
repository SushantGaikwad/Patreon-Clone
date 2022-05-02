import React, { createContext,useState } from "react";
import { useNavigate } from "react-router-dom";

export const isLogin = createContext();

export const AuthContextProvider = ({children}) =>{
    const[isAuth, setisAuth] = useState(false);

    const navigate = useNavigate();

    const LoginAuth = (isAuth) =>{
        setisAuth(!isAuth);
        console.log("Login Done");
        navigate('/')
        
    }

    return <isLogin.Provider value={{isAuth, LoginAuth}}>{children} </isLogin.Provider>

}