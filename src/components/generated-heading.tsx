import { useAppState } from "../context/update-post-context";
import HeadingOrParagraph from "./heading-or-paragraph";

const GeneratedHeading = ({ anchorFieldRef }) => {
  const {
    state: { generatedHeading },
  } = useAppState();
  return (
    <>
      <HeadingOrParagraph
        sectionName={`Generated Heading`}
        sectionHelperText={`AI Generated Relevant Heading`}
        generatedHeading={
          generatedHeading
            ? generatedHeading
            : "Your generated paragraph will be here"
        }
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
    </>
  );
};

export default GeneratedHeading;
