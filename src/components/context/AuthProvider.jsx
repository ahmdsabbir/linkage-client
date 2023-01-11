import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState('')

/*   useEffect(() => {

  }, [auth]) */

    
/* 
//  localStorage handle
  () => {
    let currentValue
  
    try {
      currentValue = JSON.parse(localStorage.getItem("accestoken") ||{})
    } catch (error) {
      currentValue = {}
    }
  
    return currentValue
  } */
   // set app state in local storage
/* 
   useEffect(() => {
    // storing input name
    localStorage.setItem("accestoken", JSON.stringify(auth));
  }, [auth]); */

  return <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuthState = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuthState must be used within the AuthProvider");
  }

  return authContext;
};
