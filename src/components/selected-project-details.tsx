import { useAppState } from "../context/update-post-context";

const SelectedProjectDetails = () => {
  const {
    state: { selectedProject, chosenTitleUrl, generatedHeading, relevantTerm },
  } = useAppState();
  return (
    <div className="felx  flex-col sm:order-2">
      <div className="card w-full flex-shrink-0 rounded bg-[#eaedf2] px-6 text-[#123354] ">
        <div className="card-body gap-4 px-0  md:text-left ">
          <div className="flex flex-col  gap-4 ">
            {selectedProject?.name && (
              <div className="flex gap-2 font-medium md:gap-4">
                <h1 className="text-xl">Project name:</h1>
                <p className="text-lg">{selectedProject.name}</p>
              </div>
            )}

            {selectedProject?.domain && (
              <div className="flex flex-col gap-2 sm:flex-row md:gap-4 ">
                <span className="font-medium">Domain:</span>
                <span className="">{selectedProject.domain}</span>
              </div>
            )}

            {chosenTitleUrl?.title && (
              <div className="flex flex-col gap-2 sm:flex-row md:gap-4">
                <span className="font-medium">Source Title:</span>
                <span className="">{chosenTitleUrl?.title}</span>
              </div>
            )}
            {chosenTitleUrl?.url && (
              <div className="flex flex-col gap-2 sm:flex-row md:gap-4 ">
                <span className="font-medium">Source URL:</span>
                <span className="">{chosenTitleUrl?.url}</span>
              </div>
            )}
            {chosenTitleUrl?.relevantTerm && (
              <div className="flex flex-col gap-2 sm:flex-row md:gap-4 ">
                <span className="font-medium">relevantTerm:</span>
                <span className="">{chosenTitleUrl?.relevantTerm}</span>
              </div>
            )}
            {generatedHeading && (
              <div className="flex flex-col gap-2 sm:flex-row md:gap-4">
                <span className="font-medium">Generated Heading:</span>
                <span className="">{generatedHeading}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProjectDetails;
