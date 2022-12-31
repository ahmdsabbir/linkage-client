import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const GenerateHeading = ({ title }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="flex flex-col text-center items-center">
      {title ? (
        <h2 className="text-2xl">{title} </h2>
      ) : (
        "generated heading will be here"
      )}

      {title && (
        <button
          className="btn btn-accent mt-4"
          onClick={() =>
            navigate(`/dashboard/project-starter/${id}/generated-heading`)
          }
        >
          Next Setp
        </button>
      )}
    </div>
  );
};

export default GenerateHeading;
