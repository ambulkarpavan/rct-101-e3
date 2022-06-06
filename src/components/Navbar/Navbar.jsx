import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {isAuth , logout} =useContext(AuthContext);

  const navigate = useNavigate();

  const handleOnclick = () => {
    if(isAuth){
      logout();
      navigate("/home")
    }
    else{
      navigate("/login")
    }
  }

  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/" >Home</Link>
      <Link data-cy="navbar-home-link" to="/login" >Login</Link>
      <span data-cy="navbar-cart-items-count">{}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleOnclick}> {isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
