/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Key } from "react";
import { toast } from "react-toastify";
import { useAppState } from "../context/update-post-context";
import ChosenTitleUrl from "./chosenTitleUrl";
import GeneratedHeading from "./generated-heading";
import SuggestionsCard from "./suggestions-card";

const Suggestions = () => {
  const {
    state: { aiSuggestions },
    dispatch,
  } = useAppState();

  const handleSelectSuggestion = async (id) => {
    if (id) {
      const selectedSuggestion = aiSuggestions.find((sug) => sug.post_id == id);
      await dispatch({
        type: "chosenTitleUrl",
        payload: { ...selectedSuggestion },
      });
    } else {
      toast.error("slection failed");
    }
  };

  return (
    <div className=" my-10 grid h-fit  max-h-fit gap-4 px-6 sm:grid-cols-2">
      <div>
        <h2 className="my-3 text-2xl font-semibold capitalize text-gray-800  sm:text-3xl">
          Suggestions
        </h2>
        {aiSuggestions.length <= 0 ? (
          <SuggestionsCard
            key={"id"}
            id={"id"}
            sourceTitle={"suggestion title will be here"}
            sourceUrl={"suggestion url will be here"}
            handleSelectSuggestion={handleSelectSuggestion}
          />
        ) : (
          <div className="space-y-5">
            {aiSuggestions.map(
              (suggestion: {
                post_id: Key | id | undefined;
                title: string;
                url: string;
                id: string | number;
              }) => (
                <SuggestionsCard
                  key={suggestion.post_id}
                  id={suggestion.post_id}
                  sourceTitle={suggestion.title}
                  sourceUrl={suggestion.url}
                  handleSelectSuggestion={handleSelectSuggestion}
                />
              )
            )}
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <ChosenTitleUrl />
        <GeneratedHeading />
      </div>
    </div>
  );
};

export default Suggestions;
