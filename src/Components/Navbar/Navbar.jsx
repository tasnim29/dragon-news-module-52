import React from "react";
import { NavLink } from "react-router";
import loginLogo from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div></div>
      <div className="nav flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={loginLogo} alt="" />
        <button className="btn btn-primary px-10">LogIn</button>
      </div>
    </div>
  );
};

export default Navbar;
