import React from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useAppState } from "../../../context/AppProvider";
import Spinner from "../../../spinner";

const GeneratedSectionLayout = () => {
  const {
    state: { generatedHeading, generatedParagraph, loading },
  } = useAppState();

  console.log(loading);
  const location = useLocation();
  const { id } = useParams();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-6">
      {/* anchor input field */}

      <div className="lg:col-start-1">
        <Outlet />
      </div>

      {/* generated Section */}
      <div className="lg:col-start-2">
        <div className="mb-4">
          <h2 className="text-3xl">Generated Section</h2>
          <p className="text-slate-400">
            Following Section was Generated. Insert It Wherever You’d like on
            Your Post
          </p>
        </div>
        <div className="rounded text-base-100 bg-slate-500 mb-4 p-4 ">
          <h2 className="text-2xl mb-4">{generatedHeading}</h2>
          {loading ? (
            <Spinner className="h-full w-full" />
          ) : (
            generatedParagraph && generatedParagraph
          )}
        </div>

        {/* <div className="hidden sm:block flex-1  min-w-[117px] max-w-[217px] order-2 md:order-1"></div> */}
        <div className=" self-start flex-1 order-1 md:order-1">
          {location.pathname ===
          `/dashboard/project-starter/${id}/generated-heading` ? (
            <Link
              to={`/dashboard/project-starter/${id}/generated-heading/no-name`}
              className="btn bg-contrast border-none rounded text-white"
            >
              Yup..Looks Good!
            </Link>
          ) : (
            <button
              onClick={() => console.log("update")}
              className="btn bg-contrast border-none rounded text-white"
            >
              Update to the site
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneratedSectionLayout;
