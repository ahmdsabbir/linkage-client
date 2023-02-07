import { createContext, useContext, useState } from "react";

type AuthContextType = {
  auth: object;
};

type ProviderChildren = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType>({ auth: {} });

const AuthProvider = ({ children }: ProviderChildren) => {
  const [auth, setAuth] = useState<AuthContextType>({});

  /*   useEffect(() => {
    const loggedInUser = localStorage.getItem("linkage_token");
    if (loggedInUser) {
      setAuth({ token: loggedInUser });
    }
  }, []); */

  const handleLogout = () => {
    setAuth({});
    localStorage.clear();
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