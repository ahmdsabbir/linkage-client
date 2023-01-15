import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthState } from "./context/AuthProvider";
import Spinner from "./spinner";

const RequireAuth = () => {
  const { auth, authLoading, setAuthLoading } = useAuthState();
  const location = useLocation();

  useEffect(() => {
    if (auth?.token) {
      setAuthLoading(false);
    } else {
      setAuthLoading(true);
    }
  }, [auth?.token]);

  return authLoading ? (
    <Spinner />
  ) : auth?.token ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
