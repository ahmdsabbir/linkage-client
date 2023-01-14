import React from "react";
import { useParams } from "react-router-dom";
import { useAppState } from "../context/AppProvider";

const ProjectDetails = () => {
  // global state context provider
  const {
    state: { projects, postTitleUrlTerm },
  } = useAppState();
  // react router hook for gettinig the dynamic link id
  const { id: projectId } = useParams();

  const projectDetails = projects.find((item) => item.id == projectId);

  return (
    <div className="card rounded-none flex-shrink-0 w-full bg-[#f0f0f0] px-6 ">
      <div className="card-body px-0 gap-4  md:text-left ">
        <div className="flex flex-col justi-center gap-4 font-medium">
          {projectDetails?.name && (
            <div className="flex items-center gap-4 font-medium">
              <h1 className="text-xl">Project Title:</h1>
              <p className="text-lg">{projectDetails.name}</p>
            </div>
          )}

          {projectDetails?.domain && (
            <div className="flex items-center gap-4 font-medium">
              <h1 className="text-xl">Project Domain:</h1>
              <p className="text-lg">{projectDetails.domain}</p>
            </div>
          )}
          {projectDetails?.id && (
            <div className="flex items-center gap-4 font-medium">
              <h1 className="text-xl">Id:</h1>
              <p className="text-lg">{projectId}</p>
            </div>
          )}
          {postTitleUrlTerm?.target_title && (
            <div className="flex items-center gap-4 font-medium">
              <h1 className="text-xl">Post Title:</h1>
              <p className="text-lg">{postTitleUrlTerm?.target_title}</p>
            </div>
          )}
          {postTitleUrlTerm?.target_url && (
            <div className="flex items-center gap-4 font-medium">
              <h1 className="text-xl">Post URL:</h1>
              <p className="text-lg">{postTitleUrlTerm?.target_url}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
