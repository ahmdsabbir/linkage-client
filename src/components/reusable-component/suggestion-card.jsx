import React from "react";
import { useAppState } from "../context/AppProvider";

const SuggestionsCard = ({ title, url, id, pushUp }) => {
  const { dispatch } = useAppState();

  const handleChosenTitleUrl = async () => {
    pushUp;
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
          <a
            href={`#${pushUp}`}
            className="btn bg-accent-dark w-full sm:w-auto text-white capitalize border-none rounded"
          >
            choose
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsCard;
