import { useAppState } from "../context/update-post-context";

const Progressbar = () => {
  const {
    state: {
      targetTitleUrlTerm,
      chosenTitleUrl,
      generatedHeading,
      generatedParagraph,
    },
  } = useAppState();

  return (
    <ul className="steps steps-horizontal  space-x-2 border-b  bg-white p-2 shadow ">
      <li
        className={` step ${
          targetTitleUrlTerm.target_title
            ? "step-primary text-primary"
            : "text-gray-600"
        }`}
      >
        Target Post
      </li>
      <li
        className={` step ${
          targetTitleUrlTerm.relevant_term
            ? "step-primary text-primary"
            : "text-gray-600"
        }`}
      >
        Suggestion
      </li>
      <li
        className={` step ${
          chosenTitleUrl.title ? "step-primary text-primary" : "text-gray-600"
        }`}
      >
        Source Post
      </li>
      <li
        className={` step ${
          generatedHeading ? "step-primary text-primary" : "text-gray-600"
        }`}
      >
        {" "}
        Heading
      </li>
      <li
        className={` step ${
          generatedParagraph ? "step-primary text-primary" : "text-gray-600"
        }`}
      >
        Paragraph
      </li>
      {/* <li className={` step text-gray-600 `}>Completed</li> */}
    </ul>
  );
};

export default Progressbar;
