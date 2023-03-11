/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useAuthState } from "../context/auth-context";
import { privateClient } from "../lib/api-config";
import { useErrorHandling } from "./error-handling";

function useSiloPostLinks(reset) {
  const queryClient = useQueryClient();
  const errorFunc = useErrorHandling();

  const { auth } = useAuthState();

  // axios post
  const getEditedProjectData = async (data): Promise<{ data: unknown }> => {
    const [item, ...rest] = data.url;

    const supportUrls = rest.map((item) => item.supportPost);

    const postData = JSON.stringify({
      project_name: "Review",
      pillar_url: item.pillarPost,
      support_urls: supportUrls,
    });

    const response = await privateClient.post("api/silo/add", postData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth.token ? `Bearer ${auth?.token}` : "",
      },
    });

    return response.data;
  };

  return useMutation({
    mutationFn: getEditedProjectData,
    onSuccess: async (successData) => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({ queryKey: ["silo"] });
      toast.success("project created successfully");
      reset();
    },
    onError: async (error) => {
      const errorMsg = await errorFunc(error);
      toast.error(errorMsg);
    },
  });
}

function useSiloQuery() {
  const queryClient = useQueryClient();
  const errorFunc = useErrorHandling();

  const { auth } = useAuthState();

  const getSiloProjects = async (): Promise<{ data: unknown }> => {
    const project_name = "AnikYusuf";
    const data = JSON.stringify({ project_name });
    const response = await privateClient.post("api/silo/get", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth.token ? `Bearer ${auth?.token}` : "",
      },
    });
    /* await dispatch({
      type: "projects",
      payload: response?.data?.projects,
    }); */
    return response.data;
  };

  return useQuery({
    queryKey: ["silo"],
    queryFn: getSiloProjects,
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

// table form query
function useSiloTableFormQuery() {
  const queryClient = useQueryClient();
  const errorFunc = useErrorHandling();

  const { auth } = useAuthState();

  const getSiloSelectedProjects = async (): Promise<{ data: unknown }> => {
    const pillar_id = 4;
    const data = JSON.stringify({ pillar_id });
    const response = await privateClient.post("api/silo/targets", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth.token ? `Bearer ${auth?.token}` : "",
      },
    });
    /* await dispatch({
      type: "projects",
      payload: response?.data?.projects,
    }); */
    return response.data;
  };

  return useQuery({
    queryKey: ["pillarTableForm"],
    queryFn: getSiloSelectedProjects,
    // refetchOnWindowFocus: false,
    // refetchOnMount: false,
    retry: 1,
    staleTime: Infinity,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises

    onError: async (error) => {
      const errorMsg = await errorFunc(error);
      toast.error(errorMsg);
    },
  });
}

export { useSiloPostLinks, useSiloQuery, useSiloTableFormQuery };
