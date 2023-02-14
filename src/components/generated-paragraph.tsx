import { forwardRef } from "react";
import { useAppState } from "../context/update-post-context";
import HeadingOrParagraph from "./heading-or-paragraph";

const GeneratedParagraph = ({ paragraphRef, articleHeadingRef }, ref) => {
  const {
    state: { generatedParagraph },
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
          <button
            className="btn-primary btn -mt-10 self-start"
            onClick={() =>
              articleHeadingRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default forwardRef(GeneratedParagraph);
