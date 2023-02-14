/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { forwardRef, Key } from "react";
import { toast } from "react-toastify";
import { useAppState } from "../context/update-post-context";
import ChosenTitleUrl from "./chosenTitleUrl";
import GeneratedHeading from "./generated-heading";
import SuggestionsCard from "./suggestions-card";

// eslint-disable-next-line react/display-name
const Suggestions = ({ suggestionsRef, anchorFieldRef }, ref) => {
  const {
    state: { aiSuggestions, generatedHeading },
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
    <section ref={suggestionsRef} className="pt-40">
      <div
        className={`my-10 grid min-h-80v gap-4 px-6 ${
          aiSuggestions.length !== 0 ? " sm:grid-cols-2" : " place-items-center"
        }`}
      >
        <>
          {aiSuggestions.length !== 0 && (
            <div>
              <h2 className="my-3 text-2xl font-semibold capitalize text-gray-800  sm:text-3xl">
                Suggestions
              </h2>

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
            </div>
          )}
        </>
        <div className="flex flex-col">
          <div className="sticky top-20 ">
            <ChosenTitleUrl />
            {generatedHeading && (
              <GeneratedHeading anchorFieldRef={anchorFieldRef} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(Suggestions);
