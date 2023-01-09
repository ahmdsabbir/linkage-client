import API from "../../api/api-config";
import { useAuthState } from "../context/AuthProvider";

const useRefreshToken = () => {
  const { setAuth } = useAuthState();

  const refresh = async () => {
    const response = await API.post("/auth/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log(prev);
      console.log(response);
      console.log(response.data.accesstoken);
      return { ...prev, accessToken: response?.data?.accesstoken };
    });
    return response.data.accesstoken;
  };

  return refresh;
};

export default useRefreshToken;
