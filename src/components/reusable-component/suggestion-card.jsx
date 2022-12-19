import React from "react";

const SuggestionsCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>Title: If a dog chews shoes whose shoes does he choose?</p>
        <p>URL: https://google.com/python-was-created</p>
        <p>Category: wristwatch, handgloves</p>
        <div className="card-actions">
          <button className="btn btn-primary">choose </button>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsCard;
