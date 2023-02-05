import AnchorField from "../../components/anchor-field";
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
      <GeneratedHeading
        generatedHeading={`All components can be copied and pasted and easily implemented in
       your tailwind css projects. You can choose which language you want
       to copy the desired component and just hover and click on the
       component you need and paste it on your project.`}
      />
      <AnchorField />
      <GeneratedParagraph
        generatedHeading={`All components can be copied and pasted and easily implemented in
       your tailwind css projects. You can choose which language you want
       to copy the desired component and just hover and click on the
       component you need and paste it on your project.`}
      />
    </div>
  );
};

export default SinglePage;
