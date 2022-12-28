import React from "react";
import { Link } from "react-router-dom";

const SuggestionsCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl mb-4">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>Title: If a dog chews shoes whose shoes does he choose?</p>
        <p>URL: https://google.com/python-was-created</p>
        <p>Category: wristwatch, handgloves</p>
        <div className="card-actions ">
          <Link
            className="btn btn-primary border-gray-600"
            to={"/dashboard/project-starter/1/generated-heading"}
          >
            choose
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsCard;
