import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthState } from "./context/AuthProvider";

const RequireAuth = () => {
  const { auth, setAuth } = useAuthState();
  const location = useLocation();
   let access = true;
 /*   useEffect(() => {
    console.log(auth["x-access-token"]);
  }, [auth, setAuth]);  */

  return access ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
