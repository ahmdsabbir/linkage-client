import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../../../context/AppProvider";
import SuggestionsCard from "../../../reusable-component/suggestion-card";
import ChosenTitleUrl from "./chosen-title-url";
import GenerateHeading from "./generate-heading";
import RelevantTerm from "./relevant-term";

const Suggestions = () => {
  const { register, handleSubmit } = useForm();
  const { aiSuggestions, generatedHeading } = useAppState();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("generatedHeading", generatedHeading);
  }, [generatedHeading, aiSuggestions]);

  return (
    <div className="">
      <div className="">
        {/* divider */}

        {/* serach for more new term form form */}
        <div className="mb-10">
          <p className="text-xl font-semibold text-center mb-4">
            Not Happy with the suggestions? Try with different Term
          </p>

          {/* relevant term here */}
          <RelevantTerm className="rounded-full" />
        </div>

        <div className="divider"></div>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <div className="card rounded bg-base-100 drop-shadow">
              {/* generate heading */}
              <ChosenTitleUrl />
            </div>
            <div className="car bg-base-100 drop-shadow">
              <GenerateHeading title={generatedHeading} />
            </div>
          </div>

          {/* suggestions generated from api call */}
          <div>
            {aiSuggestions.map((suggestion, i) => (
              <SuggestionsCard
                key={suggestion.url + i}
                title={suggestion.title}
                url={suggestion.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
