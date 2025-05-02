import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import loginLogo from "../../assets/user.png";
import { AuthContext } from "../../Provider/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        alert("Sign-out successful.");
      })
      .catch((error) => {
        alert({ error });
      });
  };
  return (
    <div className="flex justify-between">
      <div>{user ? <h1 className="font-bold">{user.email}</h1> : ""}</div>

      <div className="nav flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img
          className="w-12 rounded-full"
          src={user ? user.photoURL : loginLogo}
          alt=""
        />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
