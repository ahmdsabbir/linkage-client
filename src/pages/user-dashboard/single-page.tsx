import AnchorField from "../../components/anchor-field";
import ArticleHeadingCard from "../../components/article-headings-card";
import ChosenTitleUrl from "../../components/chosenTitleUrl";
import GeneratedHeading from "../../components/generated-heading";
import GeneratedParagraph from "../../components/generated-paragraph";
import RelevantTerm from "../../components/relevant-term";
import Suggestions from "../../components/suggestions";
import TargetTitleUrl from "../../components/target-title-url";

const SinglePage = () => {
  return (
    <div>
      <h2 className="text-5xl font-extrabold text-gray-800">
        {`        Single page post for user's dashboard`}
      </h2>
      <TargetTitleUrl />
      <RelevantTerm />
      <Suggestions />
      <ChosenTitleUrl />
      <GeneratedHeading />
      <AnchorField />
      <GeneratedParagraph />
      <ArticleHeadingCard />
    </div>
  );
};

export default SinglePage;
