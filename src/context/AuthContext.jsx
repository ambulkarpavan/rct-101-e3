import React, { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  const {state} = useLocation();

  console.log(state)

  const login = () => {

  setIsAuth(true);
  if(state.form){
    navigate(state.form , {replace:true})
  }
  else{
    navigate("/")
  }

  };

  const logout = () =>{
    setIsAuth(false);
    navigate("/login")
  }


  return <AuthContext.Provider value = {{isAuth,login,logout}}>{children}</AuthContext.Provider>;
};
