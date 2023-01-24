import React from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "./context/AuthProvider";
const RequireAuth = () => {
  const {
    auth: { token },
  } = useAuthState();
  const location = useLocation();
  const navigate = useNavigate();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
