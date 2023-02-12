/* eslint-disable @typescript-eslint/no-unsafe-call */
import { QueryCache } from "@tanstack/react-query";
import { useAuthState } from "../context/auth-context";
import { useAppState } from "../context/update-post-context";

const useLogout = () => {
  const { setAuth } = useAuthState();
  const { clearAppState } = useAppState();
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
