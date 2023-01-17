import API from "../../api/api-config";
import { useAuthState } from "../context/AuthProvider";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuthState();
  console.log(auth?.token);

  const refresh = async () => {
    const response = await API.post("/auth/refresh", {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth?.token ? `Bearer ${auth?.token}` : "",
      },
      withCredentials: true,
    });

    await setAuth((prev) => {
      console.log(prev);
      console.log(response);
      console.log(response?.data);
      return { ...prev, token: response?.data.access_token };
    });
    return response?.data.access_token;
  };

  return refresh;
};

export default useRefreshToken;
