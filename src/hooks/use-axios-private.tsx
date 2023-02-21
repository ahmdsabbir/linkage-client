/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect } from "react";
import { useAuthState } from "../context/auth-context";
import { privateClient } from "../lib/api-config";
import useRefreshToken from "./use-refresh-token";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuthState();

  useEffect(() => {
    const requestIntercept = privateClient.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = privateClient.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (
          error?.response?.status == 403 ||
          (error?.response?.status == 401 && !prevRequest?.sent)
        ) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return privateClient(prevRequest);
        }

        return Promise.reject(error);
      }
    );

    return () => {
      privateClient.interceptors.request.eject(requestIntercept);
      privateClient.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return privateClient;
};

export default useAxiosPrivate;
