/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
      className={`invisible  mx-auto flex min-h-80v max-w-xl items-center justify-center bg-white 
         px-6 pt-40
      `}
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
          <div className=" -mt-6 flex flex-col justify-center space-x-2 sm:flex-row">
            <button
              className="btn-primary btn self-start"
              onClick={() =>
                articleHeadingRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              Continue
            </button>
            <button
              className="btn-primary btn self-start"
              onClick={() => {
                relevantTermRef.current.scrollIntoView({ behavior: "smooth" });
                clearRelevantProject();
              }}
            >
              Build link for same post
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
