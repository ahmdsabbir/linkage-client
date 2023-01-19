import jwt_decode from "jwt-decode";
import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "./context/AuthProvider";
const RequireAuth = () => {
  const {
    auth: { token },
  } = useAuthState();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(mytoken);

  /* const parseJwt = (token) => {
    try {
      console.log(mytoken);
    } catch (e) {
      return null;
    }
  }; */
  // parseJwt(token);

  useEffect(() => {
    if (token) {
      // console.log(token);
      const { exp } = jwt_decode(token);
      if (!exp > new Date().getTime() / 1000) {
        console.log("hello");
        navigate("/login");
      }
    }
  }, [token]);

  return token ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
