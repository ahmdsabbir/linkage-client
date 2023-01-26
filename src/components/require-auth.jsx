import React from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppState } from "./context/AppProvider";
import { useAuthState } from "./context/AuthProvider";

import { useBeforeUnload } from "react-router-dom";
const RequireAuth = () => {
  const {
    auth: { token },
  } = useAuthState();
  const { clearAppState } = useAppState();
  const location = useLocation();
  const navigate = useNavigate();

  useBeforeUnload(
    React.useCallback(() => {
      clearAppState();
      localStorage.removeItem("projectData");
    }, [clearAppState])
  );

  return token ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
