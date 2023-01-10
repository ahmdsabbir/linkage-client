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
      console.log(response.data);
      return { ...prev, accessToken: response?.data["x-access-token"] };
    });
    return response?.data["x-access-token"];
  };

  return refresh;
};

export default useRefreshToken;
