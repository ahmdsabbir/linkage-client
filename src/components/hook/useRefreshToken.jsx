import API from "../../api/api-config";
import { useAuthState } from "../context/AuthProvider";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuthState();

  const refresh = async () => {
    try {
      const response = await API.get("auth/refresh", {
        /* headers: {
            "Content-Type": "application/json",
            Authorization: auth?.token ? `Bearer ${auth?.token}` : "",
          }, */
        withCredentials: true,
      });
    } catch (error) {}

    await setAuth((prev) => {
      return { ...prev, token: response?.data?.access_token };
    });
    return response?.data.access_token;
  };

  return refresh;
};

export default useRefreshToken;
