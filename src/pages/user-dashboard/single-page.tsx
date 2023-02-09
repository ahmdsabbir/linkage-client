import AnchorField from "../../components/anchor-field";
import ArticleHeadingCard from "../../components/article-headings-card";
import GeneratedHeading from "../../components/generated-heading";
import GeneratedParagraph from "../../components/generated-paragraph";
import RelevantTerm from "../../components/relevant-term";
import Suggestions from "../../components/suggestions";
import TargetTitleUrl from "../../components/target-title-url";

const SinglePage = () => {
  return (
    <div className="flex">
      <div>
        <TargetTitleUrl />
        <RelevantTerm />

        <Suggestions />

        <GeneratedHeading />
        <AnchorField />
        <GeneratedParagraph />
        <ArticleHeadingCard />
      </div>
    </div>
  );
};

export default SinglePage;
