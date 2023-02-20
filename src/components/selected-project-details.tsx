import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
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

  const [isCopied, setIsCopied] = useState(false);
  const [isCopiedparagraph, setIsCopiedparagraph] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (isCopied) {
        setIsCopied(false);
      }
      if (isCopiedparagraph) {
        setIsCopiedparagraph(false);
      }
    }, 2000);
  }, [isCopied, isCopiedparagraph]);

  return (
    <>
      {selectedProject ? (
        <div className=" flex  flex-col  sm:order-2">
          <div className="card w-full flex-shrink-0  break-words rounded  px-6 text-[#123354] ">
            <div className="card-body gap-4 px-0  md:text-left ">
              <div className="flex flex-col  gap-4 ">
                {selectedProject?.name && (
                  <div className="flex flex-col  font-medium ">
                    <h1 className="text-gray-500 text-lg">Project name:</h1>
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
                    <span className="font-medium text-gray-500">
                      Target Title:
                    </span>
                    <span className="">{targetTitleUrlTerm?.target_title}</span>
                  </div>
                )}
                {targetTitleUrlTerm?.target_url && (
                  <div className="flex flex-col gap-1 ">
                    <span className="font-medium text-gray-500">
                      Target Url:
                    </span>
                    <span className="">{targetTitleUrlTerm?.target_url}</span>
                  </div>
                )}
                {targetTitleUrlTerm?.relevant_term && (
                  <div className="flex flex-col gap-1 ">
                    <span className="font-medium text-gray-500">
                      Relevant Term:
                    </span>
                    <span className="">
                      {targetTitleUrlTerm?.relevant_term}
                    </span>
                  </div>
                )}

                {chosenTitleUrl?.title && (
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-gray-500">
                      Source Title:
                    </span>
                    <span className="">{chosenTitleUrl?.title}</span>
                  </div>
                )}
                {chosenTitleUrl?.url && (
                  <div className="flex flex-col gap-1 ">
                    <span className="font-medium text-gray-500">
                      Source URL:
                    </span>
                    <span className="">{chosenTitleUrl?.url}</span>
                  </div>
                )}

                {generatedHeading && (
                  <div className="flex flex-col gap-1 ">
                    <div className=" font-medium text-gray-500">
                      Generated Heading
                    </div>
                    <div className="relative  ">
                      <div className="">{generatedHeading}</div>

                      <CopyToClipboard
                        text={generatedHeading}
                        onCopy={() => setIsCopied(true)}
                      >
                        <button className="absolute right-0 -top-8 rounded  border  bg-primary/25  p-1 text-gray-200">
                          {isCopied ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6 text-primary"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6 text-primary "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                              />
                            </svg>
                          )}
                        </button>
                      </CopyToClipboard>
                    </div>
                  </div>
                )}
                {generatedParagraph && (
                  <div className="flex flex-col gap-1 ">
                    <div className=" font-medium text-gray-500">
                      Generated Paragraph
                    </div>
                    <div className="relative  ">
                      <div className="">{generatedParagraph}</div>

                      <CopyToClipboard
                        text={generatedParagraph}
                        onCopy={() => setIsCopiedparagraph(true)}
                      >
                        <button className="absolute right-0 -top-8 rounded  border  bg-primary/25  p-1 text-gray-200">
                          {isCopiedparagraph ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6 text-primary"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6 text-primary "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                              />
                            </svg>
                          )}
                        </button>
                      </CopyToClipboard>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Project Details Not Found</p>
      )}
    </>
  );
};

export default SelectedProjectDetails;
