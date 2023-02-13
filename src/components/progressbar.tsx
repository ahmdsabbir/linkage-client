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
  console.log();

  return (
    <ul className="steps steps-horizontal">
      <li
        className={` step ${
          targetTitleUrlTerm.target_title && "step-primary text-primary"
        }`}
      >
        Step 1
      </li>
      <li
        className={` step ${
          targetTitleUrlTerm.relevant_term && "step-primary text-primary"
        }`}
      >
        Step 2
      </li>
      <li
        className={` step ${
          chosenTitleUrl.title && "step-primary text-primary"
        }`}
      >
        Step 3
      </li>
      <li
        className={` step ${generatedHeading && "step-primary text-primary"}`}
      >
        Step 4
      </li>
      <li
        className={` step ${generatedParagraph && "step-primary text-primary"}`}
      >
        Step 5
      </li>
      <li className={` step `}>Completed</li>
    </ul>
  );
};

export default Progressbar;
