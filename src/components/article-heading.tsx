/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { forwardRef, useEffect, useState } from "react";
import { useAuthState } from "../context/auth-context";
import { useAppState } from "../context/update-post-context";
import { useArticleHeading, useUpdateArticleHeading } from "../utils/projects";
import ArticleHeadingCard from "./article-headings-card";
import ButtonLoader from "./button-loader";

const ArticleHeading = (
  { articleHeadingRef, targetTitleRef, relevantTermRef },
  ref
) => {
  const { auth } = useAuthState();

  const [checkData, setCheckData] = useState([]);
  const [updatePost, setUpdatePost] = useState();
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const {
    state: {
      chosenTitleUrl,
      selectedProject,
      generatedHeading,
      generatedParagraph,
    },
    clearProjectState,
    clearRelevantProject,
    dispatch,
  } = useAppState();

  const { data, isLoading } = useArticleHeading();

  useEffect(() => {
    if (data) {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      setCheckData(data.headings);
    }
  }, [data]);

  //   show paragraph above on select card
  const handleUpdateAbove = (heading) => {
    const myArray = checkData.map(({ generatedParagraph, ...rest }) => rest);

    const newArray = myArray.map((item) =>
      item.tag === heading.tag ? { ...item, generatedParagraph } : item
    );
    setCheckData(newArray);
    setUpdatePost(heading);
  };

  // mutation update to the site
  const mutation = useUpdateArticleHeading(setUpdateSuccess);

  const handleUpdateToTheSite = async (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <div
        ref={articleHeadingRef}
        className="order-1 flex min-h-80v flex-grow flex-col  pt-40 sm:order-1"
      >
        <h2 className="text-center font-medium text-gray-700 text-2xl">
          Article Headings
        </h2>
        <p className="text-center text-gray-700 text-sm">
          {"These are the heading <h2> and <h3> of the source title"}
        </p>
        <p className="text-center text-gray-700 text-sm">
          {"Choose one to add the generated content above the heading"}
        </p>

        {isLoading ? (
          <h3 className="text-gray-700 text-lg">{"Getting article heading"}</h3>
        ) : (
          <>
            <div className=" flex flex-col items-center justify-center">
              <div className="mt-5 space-y-3">
                {checkData?.map((heading, i) => (
                  <ArticleHeadingCard
                    key={i}
                    heading={heading}
                    generatedHeading={generatedHeading}
                    handleUpdateAbove={handleUpdateAbove}
                  />
                ))}
              </div>
              <div className="mt-5 flex flex-col  ">
                <div className="flex flex-col justify-between space-x-2 sm:flex-row">
                  <button
                    className={`btn ml-5 w-72 max-w-6xl ${
                      mutation.isLoading
                        ? "btn-disabled "
                        : mutation.isSuccess
                        ? "btn-disabled"
                        : !updatePost
                        ? "btn-disabled"
                        : "btn-primary "
                    } `}
                    onClick={() => handleUpdateToTheSite(updatePost)}
                    disabled={
                      mutation.isLoading
                        ? true
                        : updatePost
                        ? false
                        : updateSuccess
                        ? true
                        : true
                    }
                  >
                    {mutation.isLoading ? (
                      <ButtonLoader loadingText={"Updating..."} />
                    ) : mutation.isSuccess ? (
                      "Updated"
                    ) : (
                      "Update post"
                    )}
                  </button>

                  <>
                    <button
                      className={` btn self-start ${
                        updateSuccess
                          ? "btn-primary inline-flex"
                          : "btn-disabled hidden"
                      }`}
                      disabled={updateSuccess ? false : true}
                      onClick={() => {
                        relevantTermRef.current.scrollIntoView({
                          behavior: "smooth",
                        });
                        clearRelevantProject();
                      }}
                    >
                      Build link for same post
                    </button>
                    <button
                      className={` btn self-start ${
                        updateSuccess
                          ? "btn-primary inline-flex"
                          : "btn-disabled hidden"
                      }`}
                      disabled={updateSuccess ? false : true}
                      onClick={() => {
                        targetTitleRef.current.scrollIntoView({
                          behavior: "smooth",
                        });
                        clearProjectState();
                      }}
                    >
                      Start new
                    </button>
                  </>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default forwardRef(ArticleHeading);
