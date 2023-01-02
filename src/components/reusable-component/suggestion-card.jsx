import React from "react";
import { useAppState } from "../context/AppProvider";

const SuggestionsCard = ({ title, url }) => {
  const { setChooseTitleUrl } = useAppState();

  const handleChosenTitleUrl = () => {
    setChooseTitleUrl({ title, url });
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
        <p>
          <span className="font-medium">Category:</span> wristwatch, handgloves
        </p>
        <div className="card-actions mt-4" onClick={handleChosenTitleUrl}>
          <button className="btn bg-accent-dark text-white border-none rounded">
            choose
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsCard;
