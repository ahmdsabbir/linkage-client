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
        generatedHeading={generatedHeading}
      />
    </>
  );
};

export default GeneratedHeading;
