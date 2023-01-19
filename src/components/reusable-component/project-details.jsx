import React from "react";
import { useAppState } from "../context/AppProvider";

const ProjectDetails = () => {
  // global state context provider
  const {
    state: { selectedProject, postTitleUrlTerm },
  } = useAppState();

  return (
    <div className="card rounded-none flex-shrink-0 w-full bg-[#f0f0f0] px-6 ">
      <div className="card-body px-0 gap-4  md:text-left ">
        <div className="flex flex-col justi-center gap-4 font-medium">
          {selectedProject?.name && (
            <div className="flex items-center gap-4 font-medium">
              <h1 className="text-xl">Project Title:</h1>
              <p className="text-lg">{selectedProject.name}</p>
            </div>
          )}

          {selectedProject?.domain && (
            <div className="flex items-center gap-4 font-medium">
              <h1 className="text-xl">Project Domain:</h1>
              <p className="text-lg">{selectedProject.domain}</p>
            </div>
          )}

          {postTitleUrlTerm?.source_title && (
            <div className="flex items-center gap-4 font-medium">
              <h1 className="text-xl">Post Title:</h1>
              <p className="text-lg">{postTitleUrlTerm?.source_title}</p>
            </div>
          )}
          {postTitleUrlTerm?.source_url && (
            <div className="flex items-center gap-4 font-medium">
              <h1 className="text-xl">Post URL:</h1>
              <p className="text-lg">{postTitleUrlTerm?.source_url}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
