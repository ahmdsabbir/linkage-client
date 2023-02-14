/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { forwardRef } from "react";
import { useAppState } from "../context/update-post-context";
import HeadingOrParagraph from "./heading-or-paragraph";

const GeneratedParagraph = (
  { paragraphRef, articleHeadingRef, relevantTermRef, targetTitleRef },

  ref
) => {
  const {
    state: { generatedParagraph },
    clearRelevantProject,
    clearProjectState,
    dispatch,
  } = useAppState();
  return (
    <div
      ref={paragraphRef}
      className={`mx-auto  min-h-80v max-w-xl items-center justify-center bg-white px-6 pt-40 ${
        !generatedParagraph ? "hidden" : "flex"
      }`}
    >
      <div>
        <HeadingOrParagraph
          sectionName={"Generated Paragraph"}
          sectionHelperText={`Following Section was Generated. Insert It Wherever You’d like on Your Post`}
          generateParagraph={
            generatedParagraph
              ? generatedParagraph
              : "Generated Paragraph Will be here"
          }
        />
        {generatedParagraph && (
          <div className=" -mt-6 flex space-x-2">
            <button
              className="btn-primary btn self-start"
              onClick={() =>
                articleHeadingRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              Next
            </button>
            <button
              className="btn-primary btn self-start"
              onClick={() => {
                relevantTermRef.current.scrollIntoView({ behavior: "smooth" });
                clearRelevantProject();
              }}
            >
              Get More Suggestions
            </button>
            <button
              className="btn-primary btn self-start"
              onClick={() => {
                targetTitleRef.current.scrollIntoView({
                  behavior: "smooth",
                });
                clearProjectState();
              }}
            >
              Start new
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default forwardRef(GeneratedParagraph);
