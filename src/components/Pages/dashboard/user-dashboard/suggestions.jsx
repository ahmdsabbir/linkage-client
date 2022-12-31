import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../../../context/AppProvider";
import SuggestionsCard from "../../../reusable-component/suggestion-card";
import ChosenTitleUrl from "./chosen-title-url";
import RelevantTerm from "./relevant-term";

const Suggestions = () => {
  const { register, handleSubmit } = useForm();
  const { aiSuggestions } = useAppState();
  const navigate = useNavigate();

  // post request
  console.log(aiSuggestions);
  const onSubmit = async (data) => {
    /*  const response = await API.post("/posts", {
      newdata,
    }); */
    await setUserData(response?.data);
    console.log(response);
  };
  return (
    <div className="">
      <div className="hero-content flex-col">
        {/* divider */}

        {/* serach for more new term form form */}
        <div className="mb-10">
          <p className="text-4xl text-center px-6 mb-4">
            Not Happy with the suggestions? Try with different Term
          </p>

          {/* relevant term here */}
          <RelevantTerm />
        </div>

        <div className="divider"></div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="card bg-base-100 shadow-xl">
              {/* generate heading */}
              <ChosenTitleUrl />
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
