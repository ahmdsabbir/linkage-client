/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Key } from "react";
import { useAppState } from "../context/update-post-context";
import SuggestionsCard from "./suggestions-card";

const Suggestions = () => {
  const {
    state: { aiSuggestions },
    dispatch,
  } = useAppState();
  console.log(aiSuggestions);
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
      <div>
        <h2 className="my-3 text-2xl font-semibold capitalize text-gray-800  sm:text-3xl">
          Suggestions
        </h2>
        {aiSuggestions.map(
          (suggestion: {
            post_id: Key | null | undefined;
            title: string;
            url: string;
          }) => (
            <SuggestionsCard
              key={suggestion.post_id}
              sourceTitle={suggestion.title}
              sourceUrl={suggestion.url}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Suggestions;
