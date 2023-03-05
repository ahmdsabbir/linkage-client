/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Key, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import SingleProjectCard from "../../components/single-project-card";
import {
  useDeleteProject,
  useEditProjectHandle,
  useProjects,
  useStartProject,
} from "../../utils/projects";

const AllProjects = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [projectId, setProjectId] = useState(null);

  // get all projects hook
  const { data, isLoading } = useProjects();

  // start silo project handler
  const handleSiloProject = () => {
    navigate("/dashboard/silo");
  };
  // start project handler
  const handleStartProject = useStartProject(data);
  // edit project
  const handleEditProject = useEditProjectHandle(data);
  // delete project hook
  const mutation = useDeleteProject();
  const handleDeleteProject = (id: unknown) => {
    if (id) {
      mutation.mutate(id);
      setShowModal(false);
    }
  };

  return (
    <>
      {/* <p className="text-5xl text-gray-800"> All Projects list</p> */}

      <div className="grid grid-cols-1 gap-4 px-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-10">
        {data?.projects?.length == 0 ? (
          <div className="grid max-h-screen place-content-center items-center">
            <p className="text-center text-lg">No project created yet</p>
          </div>
        ) : (
          data?.projects?.map(
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
                id={project.id}
                projectName={project.name}
                projectURL={project.domain}
                projectUserName={project.wp_username}
                projectAdminPassword={project.wp_password}
                projectCreatedDate={project.date_added}
                handleStartProject={handleStartProject}
                handleEditProject={handleEditProject}
                handleSiloProject={handleSiloProject}
                setShowModal={setShowModal}
                setProjectId={setProjectId}
              />
            )
          )
        )}
      </div>
      {showModal ? (
        <Modal>
          <main className="fixed inset-0 overflow-x-hidden bg-gray-200/40 font-sans text-gray-900 antialiased">
            <div className="relative min-h-screen px-4 md:flex md:items-center md:justify-center">
              <div className="absolute inset-0 z-10 h-full w-full bg-black opacity-25"></div>
              <div className="fixed inset-x-0 bottom-0 z-50 mx-4 mb-4 rounded-lg bg-white p-4 md:relative md:mx-auto md:max-w-md">
                <div className="items-center md:flex">
                  <div className="mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                  <div className="mt-4 text-center md:mt-0 md:ml-6 md:text-left">
                    <p className="font-bold">Delete your project?</p>
                    <p className="mt-1 text-gray-700 text-sm">
                      You will lose all of your data by deleting your project.
                      This action cannot be undone.
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-center md:flex md:justify-end md:text-right">
                  <button
                    className="block w-full rounded-lg bg-red-200 px-4 py-3 font-semibold capitalize text-red-700 text-sm md:order-2 md:ml-2 md:inline-block md:w-auto md:py-2"
                    onClick={() => handleDeleteProject(projectId)}
                  >
                    Delete Project
                  </button>
                  <button
                    className="mt-4 block w-full rounded-lg bg-gray-200 px-4 py-3 font-semibold capitalize text-sm md:order-1 md:mt-0
          md:inline-block md:w-auto md:py-2"
                    onClick={() => {
                      setShowModal(false);
                      setProjectId(null);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </main>
        </Modal>
      ) : null}
    </>
  );
};
export default AllProjects;
