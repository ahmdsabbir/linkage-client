import RelevantTerm from "../../components/relevant-term";
import Suggestions from "../../components/suggestions";
import TargetTitleUrl from "../../components/target-title-url";

const SinglePage = () => {
  return (
    <div>
      <h2 className="text-5xl font-extrabold text-gray-800">
        Single page post for user&rsquo;s dashboard
      </h2>
      <TargetTitleUrl />
      <RelevantTerm />
      <Suggestions />
    </div>
  );
};

export default SinglePage;
