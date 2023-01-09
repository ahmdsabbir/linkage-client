import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthState } from "./context/AuthProvider";

const RequireAuth = () => {
  const { auth } = useAuthState();
  const location = useLocation();
  useEffect(() => {
    console.log(auth.accesstoken);
  }, [auth]);

  return auth.accesstoken ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
