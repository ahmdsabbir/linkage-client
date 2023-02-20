/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
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

function useDeleteProject() {
  const queryClient = useQueryClient();
  const { auth } = useAuthState();
  const { dispatch } = useAppState();
  const errorFunc = useErrorHandling();

  const deleteProject = async (id: unknown): Promise<{ data: unknown }> => {
    const response = await privateClient.delete(`api/project/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth.token ? `Bearer ${auth?.token}` : "",
      },
    });

    return response.data;
  };

  return useMutation({
    mutationFn: deleteProject,
    onSuccess: async () => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({ queryKey: ["projects"] });

      toast("Project deleted Successfully");
    },
    onError: async (error) => {
      const errorMsg = await errorFunc(error);
      toast.error(errorMsg);
    },
  });
}

function useStartProject(data) {
  const navigate = useNavigate();
  const { dispatch } = useAppState();
  const handleStartProject = async (id) => {
    const getProject = await data?.projects?.find(
      (project) => project.id == id
    );
    if (getProject.id) {
      await dispatch({
        type: "selectedProject",
        payload: getProject,
      });
      navigate(`/dashboard/basic`);
    }
  };
  return handleStartProject;
}

function useEditProject(data) {
  const navigate = useNavigate();
  const { dispatch } = useAppState();
  const handleEditProject = async (id) => {
    console.log(id);
    const getProject = await data?.projects?.find(
      (project) => project.id == id
    );
    if (getProject.id) {
      await dispatch({
        type: "selectedProject",
        payload: getProject,
      });
      navigate(`/dashboard/edit-project`);
    }
  };
  return handleEditProject;
}

function useRelevantTerm(suggestionsRef, reset) {
  const errorFunc = useErrorHandling();
  const {
    state: { selectedProject, targetTitleUrlTerm },
    dispatch,
  } = useAppState();
  const { auth } = useAuthState();

  // axios post
  const getSuggestions = async (data): Promise<{ data: unknown }> => {
    const postData = JSON.stringify({
      domain: selectedProject.domain,
      relevant_term: data.relevantTerm,
      source_title: targetTitleUrlTerm.target_title,
    });

    const response = await privateClient.post(
      "api/core/suggestions",
      postData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth?.token}` : "",
        },
      }
    );

    return response.data;
  };

  // mutation
  return useMutation({
    mutationFn: getSuggestions,
    onSuccess: async (successData) => {
      // Invalidate and refetch
      await dispatch({
        type: "aiSuggestions",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        payload: [],
      });
      await dispatch({
        type: "generatedHeading",
        payload: "",
      });

      await dispatch({
        type: "generatedParagraph",
        payload: "",
      });
      await dispatch({
        type: "aiSuggestions",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        payload: [...successData?.suggestions],
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      suggestionsRef.current.scrollIntoView({ behavior: "smooth" });
      reset();
    },
    onError: async (error) => {
      const errorMsg = await errorFunc(error);
      toast.warning(errorMsg);
    },
  });
}

function useAnchorField(paragraphRef, reset) {
  const { auth } = useAuthState();
  const errorFunc = useErrorHandling();

  const {
    state: { generatedHeading, targetTitleUrlTerm, chosenTitleUrl },
    dispatch,
  } = useAppState();

  const getParagraph = async (data): Promise<{ data: unknown }> => {
    const postData = JSON.stringify({
      combined_heading: generatedHeading,
      anchor_text: data.anchorText,
      source_url: chosenTitleUrl.url,
    });

    const response = await privateClient.post("api/core/paragraph", postData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth.token ? `Bearer ${auth?.token}` : "",
      },
    });

    return response.data;
  };

  return useMutation({
    mutationFn: getParagraph,
    onSuccess: async (para) => {
      await dispatch({
        type: "generatedParagraph",
        payload: para.paragraph,
      });
      paragraphRef.current.style.visibility = "visible";
      paragraphRef.current.scrollIntoView({ behavior: "smooth" });
      reset();
    },
    onError: async (error) => {
      const errorMsg = await errorFunc(error);
      toast.error(errorMsg);
    },
  });
}

function useArticleHeading() {
  const errorFunc = useErrorHandling();
  const { auth } = useAuthState();
  const {
    state: {
      chosenTitleUrl,
      selectedProject,
      generatedHeading,
      generatedParagraph,
    },
    clearProjectState,
    clearRelevantProject,
    dispatch,
  } = useAppState();

  const getArticleHeadings = async (): Promise<{
    headings(headings: unknown): unknown;
    data: unknown;
  }> => {
    const postData = JSON.stringify({
      post_id: chosenTitleUrl.post_id,
      domain: selectedProject.domain,
    });
    const response = await privateClient.post(
      "api/core/target-headings",
      postData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth?.token}` : "",
        },
      }
    );
    return response.data;
  };

  return useQuery({
    queryKey: ["articleHeadings"],
    queryFn: getArticleHeadings,
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    retry: 2,
    enabled: !!generatedParagraph,

    // refetchOnReconnect: false,
    // staleTime: 5 * 60 * 1000,
    onError: async (error) => {
      const errorMsg = await errorFunc(error);
      toast.error(errorMsg);
    },
  });
}

function useUpdateArticleHeading(setUpdateSuccess) {
  const { auth } = useAuthState();
  const errorFunc = useErrorHandling();
  const {
    state: {
      chosenTitleUrl,
      selectedProject,
      generatedHeading,
      generatedParagraph,
    },
    clearProjectState,
    clearRelevantProject,
    dispatch,
  } = useAppState();

  const queryClient = useQueryClient();

  const postFinalData = async (data): Promise<{ data: unknown }> => {
    const postData = JSON.stringify({
      domain: selectedProject.domain,
      post_id: chosenTitleUrl.post_id,
      combined_heading: generatedHeading,
      paragraph_content: generatedParagraph,
      chosen_heading_text: data?.text,
      chosen_heading_tag: data?.tag,
      chosen_heading_name: data?.name,
    });
    const response = await privateClient.post(
      "api/core/update-content",
      postData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth?.token}` : "",
        },
      }
    );
    return response.data;
  };

  return useMutation({
    mutationFn: postFinalData,
    onSuccess: async (headingData) => {
      await queryClient.invalidateQueries({ queryKey: ["articleHeadings"] });
      toast.success(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${headingData?.msg}.Please go back to make new update to your site.`
      );
      setUpdateSuccess(true);
    },
    onError: async (error) => {
      const errorMsg = await errorFunc(error);
      toast.error(errorMsg);
    },
  });
}

export {
  useProjects,
  useDeleteProject,
  useStartProject,
  useRelevantTerm,
  useAnchorField,
  useArticleHeading,
  useUpdateArticleHeading,
  useEditProject,
};
