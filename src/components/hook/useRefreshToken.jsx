import API from "../../api/api-config";
import { useAuthState } from "../context/AuthProvider";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuthState();

  const refresh = async () => {
    const response = await API.post("/auth/refresh", {
      withCredentials: true,
      /*  headers: {
        'Content-Type': 'application/json',
        Authorization : auth ? `Bearer ${auth}` : "",
      }, */
    });

    await setAuth((prev) => {
      console.log(prev);
      console.log(response);
      console.log(response.data);
      return response?.data.access_token;
    });
    return response?.data.access_token;
  };

  return refresh;
};

export default useRefreshToken;
