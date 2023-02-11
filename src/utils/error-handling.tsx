/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useAuthState } from "../context/auth-context";

const useErrorHandling = () => {
  const { handleLogout } = useAuthState();
  const errorFunc = async (error: {
    response: { data: { msg: string } };
    message: string;
  }) => {
    if (error?.response?.data?.msg) {
      if (error?.response?.data?.msg == "Token has expired") {
        await handleLogout();
        return error?.response?.data?.msg;
      } else {
        return error?.response?.data?.msg;
      }
    } else if (error?.message == "Network Error") {
      return "something went wrong";
    } else {
      return error.message;
    }
  };
  return errorFunc;
};

export { useErrorHandling };
