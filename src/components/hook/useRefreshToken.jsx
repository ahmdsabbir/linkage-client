import API from "../../api/api-config";
import { useAuthState } from "../context/AuthProvider";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuthState();
  // console.log(auth?.token);

  const refresh = async () => {
    /*  fetch("http://192.168.101.4:5000/auth/refresh", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      
 */

    try {
      const response = await API.get("auth/refresh", {
        /* headers: {
            "Content-Type": "application/json",
            Authorization: auth?.token ? `Bearer ${auth?.token}` : "",
          }, */
        withCredentials: true,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }

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
