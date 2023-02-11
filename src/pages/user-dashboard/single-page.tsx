/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useRef } from "react";
import AnchorField from "../../components/anchor-field";
import ArticleHeading from "../../components/article-heading";
import GeneratedParagraph from "../../components/generated-paragraph";
import RelevantTerm from "../../components/relevant-term";
import SelectedProjectDetails from "../../components/selected-project-details";
import Suggestions from "../../components/suggestions";
import TargetTitleUrl from "../../components/target-title-url";
import { useAppState } from "../../context/update-post-context";

const SinglePage = () => {
  const {
    state: { generatedParagraph },
  } = useAppState();

  const relevantTerm = useRef(null);
  const suggestions = useRef(null);
  const anchorField = useRef(null);
  // onclick(() => scrollToSection(relevantTerm))

  /*   const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.scrollIntoView({ behavior: "smooth" }),
    });
  }; */
  return (
    <div className="flex">
      <div>
        <TargetTitleUrl />
        <RelevantTerm />
        <Suggestions />
        <AnchorField />
        <GeneratedParagraph />
        <div className="flex">
          {generatedParagraph ? <ArticleHeading /> : null}
          {generatedParagraph ? <SelectedProjectDetails /> : null}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
