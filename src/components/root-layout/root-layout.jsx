import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      {/* <Navbar /> */}

      <div className="grid place-self-center relative border">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
