import { useAppState } from "../context/update-post-context";
import HeadingOrParagraph from "./heading-or-paragraph";

const GeneratedParagraph = () => {
  const {
    state: { generatedParagraph },
    dispatch,
  } = useAppState();
  return (
    <div className="flex items-center justify-center">
      <HeadingOrParagraph
        sectionName={"Generated Paragraph"}
        sectionHelperText={`Following Section was Generated. Insert It Wherever You’d like on Your Post`}
        generateParagraph={
          generatedParagraph
            ? generatedParagraph
            : "Generated Paragraph Will be here"
        }
      />
    </div>
  );
};

export default GeneratedParagraph;
