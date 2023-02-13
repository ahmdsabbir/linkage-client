import { forwardRef } from "react";
import { useAppState } from "../context/update-post-context";
import HeadingOrParagraph from "./heading-or-paragraph";

const GeneratedParagraph = ({ paragraphRef, articleHeadingRef }, ref) => {
  const {
    state: { generatedParagraph },
    dispatch,
  } = useAppState();
  return (
    <div ref={paragraphRef} className=" max-w-xl    bg-white ">
      <HeadingOrParagraph
        sectionName={"Generated Paragraph"}
        sectionHelperText={`Following Section was Generated. Insert It Wherever You’d like on Your Post`}
        generateParagraph={
          generatedParagraph
            ? generatedParagraph
            : "Generated Paragraph Will be here"
        }
      />
      <button
        className="btn-primary btn self-start"
        onClick={() =>
          articleHeadingRef.current.scrollIntoView({ behavior: "smooth" })
        }
      >
        Next
      </button>
    </div>
  );
};

export default forwardRef(GeneratedParagraph);
