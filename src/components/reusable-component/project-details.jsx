import React from "react";
import { useAppState } from "../context/AppProvider";

const ProjectDetails = () => {
  // global state context provider
  const {
    state: {
      selectedProject,
      postTitleUrlTerm,
      choosenTitleUrl,
      generatedHeading,
    },
  } = useAppState();

  return (
    <div className="card rounded flex-shrink-0 w-full bg-[#eaedf2] text-[#123354] px-6 ">
      <div className="card-body px-0 gap-4  md:text-left ">
        <div className="flex flex-col  gap-4 ">
          {selectedProject?.name && (
            <div className="flex gap-2 md:gap-4 font-medium">
              <h1 className="text-xl">Project Title:</h1>
              <p className="text-lg">{selectedProject.name}</p>
            </div>
          )}

          {selectedProject?.domain && (
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 ">
              <span className="font-medium">Project Domain:</span>
              <span className="">{selectedProject.domain}</span>
            </div>
          )}

          {postTitleUrlTerm?.source_title && (
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 ">
              <span className="font-medium">Source Title:</span>
              <span className="">{postTitleUrlTerm?.source_title}</span>
            </div>
          )}
          {postTitleUrlTerm?.source_url && (
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 ">
              <span className="font-medium">Source URL:</span>
              <span className="">{postTitleUrlTerm?.source_url}</span>
            </div>
          )}
          {choosenTitleUrl?.title && (
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <span className="font-medium">Target Title:</span>
              <span className="">{choosenTitleUrl?.title}</span>
            </div>
          )}
          {choosenTitleUrl?.url && (
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 ">
              <span className="font-medium">Target URL:</span>
              <span className="">{choosenTitleUrl?.url}</span>
            </div>
          )}
          {generatedHeading && (
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <span className="font-medium">Generated Heading:</span>
              <span className="">{generatedHeading}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

/* 
  <style type="text/css">
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #e1e1e1;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
</style>


*/
