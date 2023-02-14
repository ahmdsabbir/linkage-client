/* eslint-disable @typescript-eslint/no-unsafe-call */
import { QueryCache } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "../context/auth-context";
import { useAppState } from "../context/update-post-context";

const useLogout = () => {
  const { setAuth } = useAuthState();
  const { clearAppState } = useAppState();
  const navigate = useNavigate();
  const queryCache = new QueryCache();
  const logout = async () => {
    await setAuth({});
    localStorage.clear();
    queryCache.clear();
    await clearAppState();
    navigate("/");
  };

  return logout;
};

export { useLogout };
