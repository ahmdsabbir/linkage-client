import { useAppState } from "../context/update-post-context";
import HeadingOrParagraph from "./heading-or-paragraph";

const GeneratedParagraph = () => {
  const {
    state: { generatedParagraph },
    dispatch,
  } = useAppState();
  return (
    <>
      <HeadingOrParagraph
        sectionName={"Generated Paragraph"}
        sectionHelperText={`Following Section was Generated. Insert It Wherever You’d like on Your Post`}
        generateParagraph={
          generatedParagraph
            ? generatedParagraph
            : "Generated Paragraph Will be here"
        }
      />
    </>
  );
};

export default GeneratedParagraph;
