/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import ShowGeneratedHeading from "./show-genereated-heading";

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const ArticleHeadingCard = ({
  heading,
  handleUpdateAbove,
  generatedHeading,
}) => {
  return (
    <div className=" items-center justify-center px-6">
      {heading.name === "h2" ? (
        <div>
          {heading.generatedParagraph && (
            <ShowGeneratedHeading
              paragraph={heading.generatedParagraph}
              generatedHeading={generatedHeading}
              margin={undefined}
            />
          )}
          <div className=" max-w-xl rounded border border-primary/25 bg-white text-gray-600 hover:bg-primary/5 hover:text-gray-900 ">
            <div className="relative flex items-center justify-between p-6">
              <h2 className=" mr-4 text-base ">{heading.text}</h2>
              <button
                className="top-3/2 btn-primary btn absolute -right-5 border-primary/20 bg-white p-2 text-primary hover:text-white"
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                onClick={() => handleUpdateAbove(heading)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="ml-7 ">
          {heading.generatedParagraph && (
            <ShowGeneratedHeading
              generatedHeading={generatedHeading}
              paragraph={heading.generatedParagraph}
              margin={"ml-7"}
            />
          )}
          <div className=" max-w-xl rounded border border-primary/25 bg-white text-gray-600 hover:bg-primary/5 hover:text-gray-900 ">
            <div className="relative flex items-center justify-between p-6">
              <h3 className=" text-base ">{heading.text}</h3>
              <button
                className="top-3/2 btn-primary btn absolute -right-5 border-primary/20 bg-white p-2 text-primary hover:text-white"
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                onClick={() => handleUpdateAbove(heading)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleHeadingCard;
