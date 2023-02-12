/* eslint-disable @typescript-eslint/no-unsafe-call */
import { QueryCache } from "@tanstack/react-query";
import { useAuthState } from "../context/auth-context";

const useLogout = () => {
  const { clearAppState, setAuth } = useAuthState();
  const queryCache = new QueryCache();
  const logout = () => {
    setAuth({});
    localStorage.clear();
    queryCache.clear();
    clearAppState();
  };

  return logout;
};

export { useLogout };
