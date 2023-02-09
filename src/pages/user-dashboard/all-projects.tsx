/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Key } from "react";
import SingleProjectCard from "../../components/single-project-card";
import { useAuthState } from "../../context/auth-context";
import { privateClient } from "../../lib/api-config";
const AllProjects = () => {
  const queryClient = useQueryClient();
  const { auth } = useAuthState();

  const getProjects = async () =>
    await privateClient("api/project", {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth.token ? `Bearer ${auth?.token}` : "",
      },
    });

  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    retry: false,
    // refetchOnReconnect: false,
    // staleTime: 5 * 60 * 1000,
  });
  return (
    <>
      <p className="text-9xl text-gray-800"> All Projects list</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-10">
        {data?.data?.projects.map(
          (project: {
            id: Key | null | undefined;
            name: string;
            domain: string;
            wp_username: string;
            wp_password: string;
            date_added: string;
          }) => (
            <SingleProjectCard
              key={project.id}
              projectName={project.name}
              projectURL={project.domain}
              projectUserName={project.wp_username}
              projectAdminPassword={project.wp_password}
              projectCreatedDate={project.date_added}
            />
          )
        )}
      </div>
    </>
  );
};

export default AllProjects;
function refetchOnWindowFocus(
  context: QueryFunctionContext<QueryKey, any>
): unknown {
  throw new Error("Function not implemented.");
}
