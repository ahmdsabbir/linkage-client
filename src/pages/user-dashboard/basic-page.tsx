/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useRef } from "react";
import AnchorField from "../../components/anchor-field";
import ArticleHeading from "../../components/article-heading";
import GeneratedParagraph from "../../components/generated-paragraph";
import Progressbar from "../../components/progressbar";
import RelevantTerm from "../../components/relevant-term";
import SelectedProjectDetails from "../../components/selected-project-details";
import Suggestions from "../../components/suggestions";
import TargetTitleUrl from "../../components/target-title-url";
import { useAppState } from "../../context/update-post-context";

const Basic = () => {
  const {
    state: { generatedParagraph, aiSuggestions },
  } = useAppState();

  const targetTitleRef = useRef(null);
  const relevantTermRef = useRef(null);
  const suggestionsRef = useRef(null);
  const anchorFieldRef = useRef(null);
  const paragraphRef = useRef(null);
  const articleHeadingRef = useRef(null);
  // onclick(() => scrollToSection(relevantTerm))

  /*   const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.scrollIntoView({ behavior: "smooth" }),
    });
  }; */
  return (
    <>
      <div
        className="grid grid-cols-1
      md:grid-cols-3"
      >
        <div className="col-span-2 grid grid-cols-1 ">
          <div className="sticky top-24 z-20 flex items-center justify-center self-center">
            <Progressbar />
          </div>
          <TargetTitleUrl
            targetTitleRef={targetTitleRef}
            relevantTermRef={relevantTermRef}
          />

          <RelevantTerm
            suggestionsRef={suggestionsRef}
            relevantTermRef={relevantTermRef}
          />

          <Suggestions
            anchorFieldRef={anchorFieldRef}
            suggestionsRef={suggestionsRef}
          />

          <AnchorField
            anchorFieldRef={anchorFieldRef}
            paragraphRef={paragraphRef}
          />

          <GeneratedParagraph
            articleHeadingRef={articleHeadingRef}
            paragraphRef={paragraphRef}
            relevantTermRef={relevantTermRef}
            targetTitleRef={targetTitleRef}
          />

          <div className="mt-10 mb-10 text-left">
            {generatedParagraph ? (
              <ArticleHeading
                articleHeadingRef={articleHeadingRef}
                targetTitleRef={targetTitleRef}
                relevantTermRef={relevantTermRef}
              />
            ) : (
              <p className="text-gray-700">
                Paragraph must be generated to go to last step
              </p>
            )}
          </div>
        </div>
        <div>
          <div className="sticky top-14 pt-10 ">
            <SelectedProjectDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default Basic;
