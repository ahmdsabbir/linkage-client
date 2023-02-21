/* eslint-disable @typescript-eslint/no-unsafe-call */

import { useAppState } from "../context/update-post-context";

interface SingleProjectCardProps {
  id: string | number;
  projectName: string;
  projectURL: string;
  projectUserName: string;
  projectAdminPassword: string;
  projectCreatedDate: string;
  handleStartProject: (id: string | number) => void;
  handleEditProject: (id: string | number) => void;
  setShowModal: (arg0: boolean) => void;
  setProjectId: string | number | null;
}

const SingleProjectCard = ({
  projectName,
  projectURL,
  projectUserName,
  projectAdminPassword,
  projectCreatedDate,
  id,
  handleStartProject,
  setShowModal,
  setProjectId,
  handleEditProject,
}: SingleProjectCardProps) => {
  const { clearAppState } = useAppState();
  return (
    <div className="mt-4 w-full  max-w-sm rounded-md bg-white p-6 shadow-md">
      <div className="space-y-2">
        <div className="flex flex-col space-y-0">
          <span className="text-gray-400 text-xs">Project Name</span>
          <span className=" font-semibold text-gray-600 text-sm ">
            {projectName}
          </span>
        </div>
        <div className="flex flex-col space-y-0">
          <span className="text-gray-400 text-xs">URL</span>
          <span className=" font-semibold text-gray-600 text-sm ">
            {projectURL}
          </span>
        </div>
        <div className="flex flex-col space-y-0">
          <span className="text-gray-400 text-xs">WP Username</span>
          <span className=" font-semibold text-gray-600 text-sm ">
            {projectUserName}
          </span>
        </div>
        <div className="flex flex-col space-y-0">
          <span className="text-sx text-gray-400">WP Application Password</span>
          <span className=" font-semibold text-gray-600 text-sm ">
            {projectAdminPassword}
          </span>
        </div>
        <div className="flex flex-col space-y-0">
          <span className="text-gray-400 text-xs">Project Created At</span>
          <span className=" font-semibold text-gray-600 text-sm ">
            {projectCreatedDate}
          </span>
        </div>
      </div>
      {/* CTA */}
      <div className=" mt-4 flex items-center justify-between  pt-4 ">
        <button
          onClick={() => {
            handleStartProject(id);
            clearAppState();
          }}
          className="hover:text-bold inline-flex space-x-1 rounded border border-primary/25 p-1 font-medium text-primary hover:bg-primary/10 "
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </span>
          <span> Start</span>
        </button>
        <button
          onClick={() => handleEditProject(id)}
          // disabled
          className="hover:text-bold inline-flex space-x-1 rounded border border-warning/25 p-1 font-medium text-warning hover:bg-warning/10"
        >
          <span>
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </span>
          <span> Edit</span>
        </button>
        <button
          onClick={() => {
            setShowModal(true), setProjectId(id);
          }}
          className="hover:text-bold inline-flex space-x-1 rounded border border-error/25 p-1 font-medium text-error hover:bg-error/10 "
        >
          <span>
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
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </span>
          <span> Delete</span>
        </button>
      </div>
    </div>
  );
};

export default SingleProjectCard;
