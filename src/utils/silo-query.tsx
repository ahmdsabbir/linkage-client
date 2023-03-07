/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useMutation, useQueryClient } from "@tanstack/react-query";
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

export { useSiloPostLinks };
