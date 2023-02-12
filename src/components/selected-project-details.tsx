import { useAppState } from "../context/update-post-context";

const SelectedProjectDetails = () => {
  const {
    state: {
      selectedProject,
      targetTitleUrlTerm,
      chosenTitleUrl,
      generatedHeading,
      generatedParagraph,
    },
  } = useAppState();

  return (
    <div className="flex  flex-col  sm:order-2">
      <div className="card w-full flex-shrink-0 break-words rounded bg-[#eaedf2] px-6 text-[#123354] ">
        <div className="card-body gap-4 px-0  md:text-left ">
          <div className="flex flex-col  gap-4 ">
            {selectedProject?.name && (
              <div className="flex flex-col  font-medium ">
                <h1 className="text-lg text-gray-500">Project name:</h1>
                <p className="text-md">{selectedProject.name}</p>
              </div>
            )}

            {selectedProject?.domain && (
              <div className="flex flex-col gap-1   ">
                <span className="font-medium text-gray-500">Domain:</span>
                <span className="">{selectedProject.domain}</span>
              </div>
            )}

            {targetTitleUrlTerm?.target_title && (
              <div className="flex flex-col gap-1 ">
                <span className="font-medium text-gray-500">Target Title:</span>
                <span className="">{targetTitleUrlTerm?.target_title}</span>
              </div>
            )}
            {targetTitleUrlTerm?.target_url && (
              <div className="flex flex-col gap-1 ">
                <span className="font-medium text-gray-500">relevantTerm:</span>
                <span className="">{targetTitleUrlTerm?.target_url}</span>
              </div>
            )}
            {targetTitleUrlTerm?.relevant_term && (
              <div className="flex flex-col gap-1 ">
                <span className="font-medium text-gray-500">relevantTerm:</span>
                <span className="">{targetTitleUrlTerm?.relevant_term}</span>
              </div>
            )}

            {chosenTitleUrl?.title && (
              <div className="flex flex-col gap-1">
                <span className="font-medium text-gray-500">Source Title:</span>
                <span className="">{chosenTitleUrl?.title}</span>
              </div>
            )}
            {chosenTitleUrl?.url && (
              <div className="flex flex-col gap-1 ">
                <span className="font-medium text-gray-500">Source URL:</span>
                <span className="">{chosenTitleUrl?.url}</span>
              </div>
            )}

            {generatedHeading && (
              <div className="flex flex-col gap-1">
                <span className="font-medium text-gray-500">
                  Generated Heading:
                </span>
                <span className="">{generatedHeading}</span>
              </div>
            )}
            {generatedParagraph && (
              <div className="flex flex-col gap-1">
                <span className="font-medium text-gray-500">
                  Generated Heading:
                </span>
                <span className="">{generatedParagraph}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProjectDetails;
