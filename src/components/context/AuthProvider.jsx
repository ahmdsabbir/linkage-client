import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [authLoading, setAuthLoading] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, authLoading, setAuthLoading, handleLogout }}
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
