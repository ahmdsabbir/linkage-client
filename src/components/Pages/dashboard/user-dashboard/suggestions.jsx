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
        <div className="">
          <p className="text-xl font-semibold text-center mb-4">
            Not Happy with the suggestions? Try with different Term
          </p>

          {/* relevant term here */}
          <RelevantTerm
            className="rounded-full"
            btnText="generate suggestion again"
            hintText={"Tip: Try to choose relevant terms."}
            label="Search More Suggestions"
          />
        </div>
        <div className="px-6">
          <hr className=" my-6 box-content text-sm h-[0.0625em] bg-gradient-to-r from-transparent via-[#aaaaaa]/20 via-[#aaaaaa]/80 to-transparent"></hr>
        </div>

        <div className="grid grid-cols-2 gap-6 px-6">
          <div className="flex flex-col gap-4">
            <div className="card rounded bg-base-100 ">
              {/* generate heading */}
              <ChosenTitleUrl />
            </div>
            <div className="card bg-base-100 ">
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
