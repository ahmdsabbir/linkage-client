import { useRef } from "react";
import AnchorField from "../../components/anchor-field";
import ArticleHeading from "../../components/article-heading";
import GeneratedParagraph from "../../components/generated-paragraph";
import RelevantTerm from "../../components/relevant-term";
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

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex">
      <div>
        <TargetTitleUrl />
        <RelevantTerm />
        <Suggestions />
        <AnchorField />
        <GeneratedParagraph />
        {generatedParagraph ? <ArticleHeading /> : null}
      </div>
    </div>
  );
};

export default SinglePage;
