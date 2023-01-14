import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {}, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth({});
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, handleLogout }}>
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
