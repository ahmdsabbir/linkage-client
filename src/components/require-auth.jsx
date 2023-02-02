import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthState } from "./context/AuthProvider";

const RequireAuth = () => {
  const {
    auth: { token },
  } = useAuthState();
  const location = useLocation();

  /*   useBeforeUnload(
    React.useCallback(() => {
      clearAppState();
      localStorage.removeItem("projectData");
    }, [clearAppState])
  );
 */
  return token ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
