/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { toast } from "react-toastify";
import { useAuthState } from "../context/auth-context";
import { primaryClient } from "../lib/api-config";
import { useErrorHandling } from "../utils/error-handling";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuthState();
  const errorFunc = useErrorHandling();

  const refresh = async () => {
    console.log(auth);
    try {
      const response = await primaryClient("auth/refresh", {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth?.token ? `Bearer ${auth?.token}` : "",
        },
        withCredentials: true,
      });
      console.log(response?.data.access_token);

      await setAuth((prev) => {
        return { ...prev, token: response?.data?.access_token };
      });
      return response?.data.access_token;
    } catch (error) {
      const errorMsg = await errorFunc(error);
      toast.error(errorMsg);
    }
  };

  return refresh;
};

export default useRefreshToken;
