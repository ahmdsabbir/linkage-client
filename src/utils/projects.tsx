/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useAuthState } from "../context/auth-context";
import { useAppState } from "../context/update-post-context";
import { privateClient } from "../lib/api-config";
import { useErrorHandling } from "./error-handling";

// get all projects of the user from the database
function useProjects() {
  const { auth } = useAuthState();
  const { dispatch } = useAppState();
  const errorFunc = useErrorHandling();

  const getProjects = async (): Promise<{ data: unknown }> => {
    const response = await privateClient("api/project", {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth.token ? `Bearer ${auth?.token}` : "",
      },
    });
    await dispatch({
      type: "projects",
      payload: response?.data?.projects,
    });
    return response.data;
  };

  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    refetchOnWindowFocus: false,
    // refetchOnMount: false,
    retry: 2,
    staleTime: Infinity,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises

    onError: async (error) => {
      const errorMsg = await errorFunc(error);
      toast.error(errorMsg);
    },
  });
}

export { useProjects };
