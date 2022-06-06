import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [loginDet, setLoginDet] = useState({});

  const {login} = useContext(AuthContext);

  const handleChange= (e) =>{
    const {name, value} = e.target;
    setLoginDet({
      ...loginDet,
      [name]:value,
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    login();
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input data-cy="login-email" type="email" placeholder="email" name="email" onChange={handleChange}/>
      <input data-cy="login-password" type="password" placeholder="password" name="password" onChange={handleChange}/>
      <button data-cy="login-submit" type="submit" >Login</button>
    </form>
     
    </div>
  );
};

export default Login;
