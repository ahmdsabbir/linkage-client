import React from "react";

const ProjectDetails = ({ postTitle, id }) => {
  return (
    <div className="card flex-shrink-0 w-full max-w-5xl">
      <div className="card-body gap-4 text-center md:text-left ">
        <div className="flex items-center gap-4 font-medium">
          <h1 className="text-xl">Project Domain:</h1>
          <p className="py-6 text-lg">google.com</p>
        </div>
        <div className="flex items-center gap-4 font-medium">
          <h1 className="text-xl">Post Title:</h1>
          {postTitle && <p className="py-6 text-lg">{postTitle}</p>}
        </div>
        <div className="flex items-center gap-4 font-medium">
          <h1 className="text-xl">Id:</h1>
          {id && <p className="py-6 text-lg">{id}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
