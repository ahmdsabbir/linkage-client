/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useAppState } from "../context/update-post-context";

const ArticleHeadingCard = ({ heading }) => {
  const {
    state: { generatedParagraph },
  } = useAppState();
  // update the data above the heading on @{}
  let selectedParagraph = "";

  const handleAbovePost = (head) => {
    if (head.text === heading.text) {
      selectedParagraph = generatedParagraph;
      console.log(selectedParagraph);
    }
  };
  return (
    <div className=" items-center justify-center px-6">
      <div className=" max-w-xl rounded border border-primary/25 bg-white text-gray-600 hover:bg-primary/5 hover:text-gray-900 ">
        {selectedParagraph && selectedParagraph}
        <div className="relative flex items-center justify-between p-6">
          {/* card will have h3 and also h2. H3 will have left margin  */}
          {heading.name === "h2" ? (
            <h2 className=" mr-4 text-lg ">{heading.text}</h2>
          ) : (
            <h3 className=" text-md ml-10 ">{heading.text}</h3>
          )}
          <button
            className="top-3/2 btn-primary btn absolute -right-5 border-primary/20 bg-white p-2 text-primary hover:text-white"
            onClick={() => handleAbovePost(heading)}
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
  );
};

export default ArticleHeadingCard;
