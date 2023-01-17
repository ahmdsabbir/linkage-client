import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("linkage_token");
    if (loggedInUser) {
      setAuth({ token: loggedInUser });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, authLoading, setAuthLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthState = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuthState must be used within the AuthProvider");
  }

  return authContext;
};
