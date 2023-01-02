import React from "react";
import { useAppState } from "../context/AppProvider";

const SuggestionsCard = ({ title, url }) => {
  const { setChooseTitleUrl } = useAppState();

  const handleChosenTitleUrl = () => {
    setChooseTitleUrl({ title, url });
  };

  return (
    <div className="card rounded bg-base-100 drop-shadow mb-4">
      <div className="card-body">
        {title && <p>Title: {title}</p>}
        {url && <p>URL: {url}</p>}
        <p>Category: wristwatch, handgloves</p>
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
