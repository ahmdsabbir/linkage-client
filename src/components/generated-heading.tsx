import { useAppState } from "../context/update-post-context";
import HeadingOrParagraph from "./heading-or-paragraph";

const GeneratedHeading = () => {
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
        <a className="btn-primary btn" href={"#gotoGeneratedParagraph"}>
          Next
        </a>
      )}
    </>
  );
};

export default GeneratedHeading;
