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
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-2">
        <TargetTitleUrl />
        <RelevantTerm />
        <Suggestions />
        <AnchorField />
        <GeneratedParagraph />
        <div className="mt-10">
          {generatedParagraph ? <ArticleHeading /> : null}
        </div>
      </div>
      <div>
        <div className="sticky top-0  ">
          <SelectedProjectDetails />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
