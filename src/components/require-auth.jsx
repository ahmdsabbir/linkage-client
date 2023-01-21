import React from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "./context/AuthProvider";
const RequireAuth = () => {
  const {
    auth: { token },
  } = useAuthState();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(mytoken);

  /* const parseJwt = async(token) => {
    try {
      console.log(mytoken);
    } catch (e) {
      return null;
    }
  }; */
  // parseJwt(token);
  /* 
  useEffect(() => {
    if (token) {
      console.log(token);
      const { exp } = jwt_decode(token);
      // /* console.log("my time", new Date().getTime() / 1000);
      console.log("expiredTime", exp); 
       if (exp < new Date().getTime() / 1000) {
        console.log("hello");
        navigate("/login");
        localStorage.clear();
      }
    }
  }, []); */

  return token ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
