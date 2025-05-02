import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";

const AuthLayouts = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="w-11/12 mx-auto py-8 ">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayouts;
