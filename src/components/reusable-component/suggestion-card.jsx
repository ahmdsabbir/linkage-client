import React from "react";
import { useAppState } from "../context/AppProvider";

const SuggestionsCard = ({ title, url }) => {
  const { setChooseTitleUrl } = useAppState();

  const handleChosenTitleUrl = () => {
    setChooseTitleUrl({ title, url });
  };

  return (
    <div className="card bg-base-100 shadow-xl mb-4">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        {title && <p>{title}</p>}
        {url && <p>{url}</p>}
        <p>Category: wristwatch, handgloves</p>
        <div className="card-actions" onClick={handleChosenTitleUrl}>
          <button className="btn btn-primary border-gray-600">choose</button>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsCard;
