import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAppState } from "../../../context/AppProvider";

const GeneratedSectionLayout = () => {
  const { generatedHeading, generatedParagraph } = useAppState();

  const location = useLocation();

  return (
    <div className="grid grid-cols-2  gap-4">
      {/* anchor input field */}

      <Outlet />

      {/* generated Section */}
      <div className="  p-4 ">
        <div className="mb-4 p-4 ">
          <h2 className="text-3xl">Generated Section</h2>
          <p className="text-slate-400">
            Following Section was Generated. Insert It Wherever You’d like on
            Your Post
          </p>
        </div>
        <div className="rounded-md bg-slate-700 mb-4 p-4 ">
          <h2 className="text-2xl mb-4">{generatedHeading}</h2>
          {generatedParagraph && generatedParagraph}
        </div>

        {location.pathname ===
          "/dashboard/project-starter/1/generated-heading" && (
          <Link
            to={"/dashboard/project-starter/1/generated-heading/no-name"}
            className="btn bg-accent"
          >
            Yup..Looks Good!
          </Link>
        )}
      </div>
    </div>
  );
};

export default GeneratedSectionLayout;
