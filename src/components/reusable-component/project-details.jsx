import React from "react";
import { useParams } from "react-router-dom";
import { useAppState } from "../context/AppProvider";

const ProjectDetails = ({ postTitle }) => {
  const context = useAppState();
  const { id } = useParams();
  const projectDetails = context?.projects.find((item) => item.id === id);

  return (
    <div className="card flex-shrink-0 w-full max-w-5xl">
      <div className="card-body gap-4  md:text-left ">
        <div className="flex flex-col justi-center gap-4 font-medium">
          <div className="flex items-center gap-4 font-medium">
            <h1 className="text-xl">Project Title:</h1>
            <p className="text-lg">{projectDetails.name}</p>
          </div>

          {projectDetails?.domain && (
            <div className="flex items-center gap-4 font-medium">
              <h1 className="text-xl">Project Domain:</h1>
              <p className="text-lg">{projectDetails.domain}</p>
            </div>
          )}
          {projectDetails?.id && (
            <div className="flex items-center gap-4 font-medium">
              <h1 className="text-xl">Id:</h1>
              <p className="text-lg">{id}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
