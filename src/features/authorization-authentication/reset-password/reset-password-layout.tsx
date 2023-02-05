import React from "react";
import { Outlet } from "react-router-dom";

const ResetPasswordLayout = () => {
  return (
    <div className="border ">
      <Outlet />
    </div>
  );
};

export default ResetPasswordLayout;
