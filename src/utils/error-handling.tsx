/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useLogout } from "./log-out-handling";

const useErrorHandling = () => {
  const logout = useLogout();
  const errorFunc = async (error: {
    response: { data: { msg: string } };
    message: string;
  }) => {
    if (error?.response?.data?.msg) {
      if (error?.response?.data?.msg == "Token has expired") {
        await logout();
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
