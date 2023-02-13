/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useRef } from "react";
import AnchorField from "../../components/anchor-field";
import ArticleHeading from "../../components/article-heading";
import GeneratedParagraph from "../../components/generated-paragraph";
import Progressbar from "../../components/progressbar";
import RelevantTerm from "../../components/relevant-term";
import SelectedProjectDetails from "../../components/selected-project-details";
import Suggestions from "../../components/suggestions";
import TargetTitleUrl from "../../components/target-title-url";
import { useAppState } from "../../context/update-post-context";

const Basic = () => {
  const {
    state: { generatedParagraph },
  } = useAppState();

  const relevantTermRef = useRef(null);
  const suggestionsRef = useRef(null);
  const anchorFieldRef = useRef(null);
  // onclick(() => scrollToSection(relevantTerm))

  /*   const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.scrollIntoView({ behavior: "smooth" }),
    });
  }; */
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-2">
        <ol className="0 flex w-full flex-col items-center  text-sm font-medium text-gray-500 sm:text-base">
          <li className=" text-gray-700-600 sticky top-24 flex flex-col items-center  justify-center md:w-full ">
            <Progressbar />
          </li>
          <li className=" after: flex min-h-[60vh] flex-col items-center justify-center  text-blue-600 md:w-full ">
            <span className="flex items-center text-center after:mx-2 after:font-light after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
              <svg
                aria-hidden="true"
                className="mr-2 h-4 w-4 sm:h-5 sm:w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Step
              <span className="hidden sm:ml-2 sm:inline-flex">One</span>
            </span>
            <TargetTitleUrl />
          </li>

          <li className=" flex min-h-[60vh] flex-col items-center justify-center text-blue-600 after:mx-6 after:hidden  after:w-full after:border-gray-200    md:w-full ">
            <span className="flex items-center after:mx-2 after:font-light after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
              <svg
                aria-hidden="true"
                className="mr-2 h-4 w-4 sm:h-5 sm:w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Step
              <span className="hidden sm:ml-2 sm:inline-flex">Two</span>
            </span>

            <RelevantTerm />
          </li>

          <li className=" flex min-h-[60vh] flex-col items-center justify-center text-blue-600 after:mx-6 after:hidden  after:w-full after:border-gray-200    md:w-full ">
            <span className="flex items-center after:mx-2 after:font-light after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
              <svg
                aria-hidden="true"
                className="mr-2 h-4 w-4 sm:h-5 sm:w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Step
              <span className="hidden sm:ml-2 sm:inline-flex">Three</span>
            </span>
            <Suggestions />
          </li>
          <li className=" flex min-h-[50vh] flex-col items-center justify-center text-blue-600 after:mx-6 after:hidden  after:w-full after:border-gray-200    md:w-full ">
            <span className="flex items-center after:mx-2 after:font-light after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
              <svg
                aria-hidden="true"
                className="mr-2 h-4 w-4 sm:h-5 sm:w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Step
              <span className="hidden sm:ml-2 sm:inline-flex">Four</span>
            </span>
            <AnchorField />
          </li>
          <li className=" flex flex-col items-center justify-center text-blue-600 after:mx-6 after:hidden  after:w-full after:border-gray-200    md:w-full ">
            <span className="flex items-center after:mx-2 after:font-light after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
              <svg
                aria-hidden="true"
                className="mr-2 h-4 w-4 sm:h-5 sm:w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Step
              <span className="hidden sm:ml-2 sm:inline-flex">Five</span>
            </span>
            <GeneratedParagraph />
          </li>
          <li
            id="gotoGeneratedParagraph"
            className=" flex flex-col items-center justify-center text-blue-600 after:mx-6 after:hidden  after:w-full after:border-gray-200    md:w-full "
          >
            <span className="flex items-center after:mx-2 after:font-light after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
              <svg
                aria-hidden="true"
                className="mr-2 h-4 w-4 sm:h-5 sm:w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Step
              <span className="hidden sm:ml-2 sm:inline-flex">Six</span>
            </span>
            <div className="mt-10 mb-10 text-left">
              {generatedParagraph ? (
                <ArticleHeading />
              ) : (
                "Paragraph must be generated to go to last step"
              )}
            </div>
          </li>
        </ol>
      </div>
      <div>
        <div className="sticky top-14 ">
          <SelectedProjectDetails />
        </div>
      </div>
    </div>
  );
};

export default Basic;
