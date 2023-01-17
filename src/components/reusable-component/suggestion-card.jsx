import React from "react";
import { useAppState } from "../context/AppProvider";

const SuggestionsCard = ({ title, url, id }) => {
  const { dispatch } = useAppState();

  const handleChosenTitleUrl = async () => {
    await dispatch({
      type: "choosenTitleUrl",
      payload: { title, url, id },
    });
    await dispatch({
      type: "generatedHeading",
      payload: "",
    });
  };

  return (
    <div className="card rounded bg-base-100 mb-4">
      <div className="card-body p-2">
        {title && (
          <p>
            <span className="font-medium ">Title:</span> {title}
          </p>
        )}
        {url && (
          <p>
            <span className="font-medium ">Url:</span> {url}
          </p>
        )}

        <div className="card-actions mt-4" onClick={handleChosenTitleUrl}>
          <button className="btn bg-accent-dark text-white capitalize border-none rounded">
            choose
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsCard;
