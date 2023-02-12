/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  QueryCache,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { Key } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SingleProjectCard from "../../components/single-project-card";
import { useAuthState } from "../../context/auth-context";
import { useAppState } from "../../context/update-post-context";
import { privateClient } from "../../lib/api-config";
import { useErrorHandling } from "../../utils/error-handling";

interface ApiProject {
  id: Key | string | number;
  name: string;
  domain: string;
  wp_username: string;
  wp_password: string;
  date_added: string;
}

const AllProjects = () => {
  const queryClient = useQueryClient();
  const { auth } = useAuthState();
  const {
    state: { projects },
    dispatch,
  } = useAppState();
  const errorFunc = useErrorHandling();
  const navigate = useNavigate();

  const queryCache = new QueryCache();

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

  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    retry: false,
    // refetchOnReconnect: false,
    // staleTime: 5 * 60 * 1000,
  });

  // start project handler
  const handleStartProject = async (id: { id: number | string }) => {
    const selectedProject = projects?.find(
      (project: { id: { id: string | number } }) => project.id == id
    );
    await dispatch({
      type: "selectedProject",
      payload: selectedProject,
    });
    navigate(`/dashboard/single-page`);
  };

  /* const handleEditProject = async (id) => {
    const findProject = projects.find((project) => project.id == id);
    await dispatch({
      type: "selectedProject",
      payload: findProject,
    });

    navigate(
      `/dashboard/project-starter/${name.toLowerCase()}/edit-project-details`
    );
  }; */

  const deleteProject = async (id: unknown): Promise<{ data: unknown }> => {
    const response = await privateClient.post(`api/project/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth.token ? `Bearer ${auth?.token}` : "",
      },
    });

    return response.data;
  };

  const mutation = useMutation({
    mutationFn: deleteProject,
    onSuccess: async () => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast("Project deleted Successfully");
    },
    onError: async (error) => {
      const errorMsg = await errorFunc(error);
      toast.warning(errorMsg);
    },
  });

  const handleDeleteProject = (id) => {
    mutation.mutate(id);
  };

  return (
    <>
      <p className="text-9xl text-gray-800"> All Projects list</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-10">
        {data?.projects.map((project: ApiProject) => (
          <SingleProjectCard
            key={project.id}
            id={project.id}
            projectName={project.name}
            projectURL={project.domain}
            projectUserName={project.wp_username}
            projectAdminPassword={project.wp_password}
            projectCreatedDate={project.date_added}
            handleStartProject={handleStartProject}
            // handleEditProject={handleEditProject}
            handleDeleteProject={handleDeleteProject}
          />
        ))}
      </div>
    </>
  );
};

export default AllProjects;

/* function refetchOnWindowFocus(
  context: QueryFunctionContext<QueryKey, any>
): unknown {
  throw new Error("Function not implemented.");
} */
