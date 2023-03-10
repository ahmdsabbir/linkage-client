import { forwardRef } from "react";
import { useAppState } from "../context/update-post-context";
import HeadingOrParagraph from "./heading-or-paragraph";

const GeneratedHeading = ({ anchorFieldRef, articleHeadingRef }, ref) => {
  const {
    state: { generatedHeading },
  } = useAppState();
  return (
    <div ref={articleHeadingRef}>
      <HeadingOrParagraph
        sectionName={`Generated Heading`}
        // sectionHelperText={`AI Generated Relevant Heading`}
        generatedHeading={generatedHeading ? generatedHeading : ""}
      />
      {generatedHeading && (
        <button
          className="btn-primary btn"
          onClick={() =>
            anchorFieldRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Next
        </button>
      )}
    </div>
  );
};

export default forwardRef(GeneratedHeading);

// taile chosen title and url re o emon koirala
