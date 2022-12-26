import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <div className="grid place-self-center">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
