/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  QueryCache,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthState } from "../context/auth-context";
import { useAppState } from "../context/update-post-context";
import { privateClient } from "../lib/api-config";
import { useErrorHandling } from "../utils/error-handling";
import ArticleHeadingCard from "./article-headings-card";
import ButtonLoader from "./button-loader";

const ArticleHeading = ({ articleHeadingRef }, ref) => {
  const queryClient = useQueryClient();
  const queryCache = new QueryCache();
  const { auth } = useAuthState();

  const [checkData, setCheckData] = useState([]);
  const [updatePost, setUpdatePost] = useState();
  const {
    state: {
      chosenTitleUrl,
      selectedProject,
      generatedHeading,
      generatedParagraph,
    },
    clearProjectState,
    dispatch,
  } = useAppState();

  const errorFunc = useErrorHandling();
  const navigate = useNavigate();

  const getArticleHeadings = async (): Promise<{
    headings(headings: unknown): unknown;
    data: unknown;
  }> => {
    const postData = JSON.stringify({
      post_id: chosenTitleUrl.post_id,
      domain: selectedProject.domain,
    });
    const response = await privateClient.post(
      "api/core/target-headings",
      postData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth?.token}` : "",
        },
      }
    );
    return response.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["articleHeadings"],
    queryFn: getArticleHeadings,
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    retry: false,
    enabled: !!generatedParagraph,

    // refetchOnReconnect: false,
    // staleTime: 5 * 60 * 1000,
    onError: async (error) => {
      const errorMsg = await errorFunc(error);
      toast.error(errorMsg);
    },
  });
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

  //   update to the site

  const postFinalData = async (data): Promise<{ data: unknown }> => {
    const postData = JSON.stringify({
      domain: selectedProject.domain,
      post_id: chosenTitleUrl.post_id,
      combined_heading: generatedHeading,
      paragraph_content: generatedParagraph,
      chosen_heading_text: data?.text,
      chosen_heading_tag: data?.tag,
      chosen_heading_name: data?.name,
    });
    const response = await privateClient.post(
      "api/core/update-content",
      postData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth?.token}` : "",
        },
      }
    );
    return response.data;
  };
  // mutation
  const mutation = useMutation({
    mutationFn: postFinalData,
    onSuccess: async (headingData) => {
      await queryClient.invalidateQueries({ queryKey: ["articleHeadings"] });
      toast.success(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${headingData?.msg}.Please go back to make new update to your site.`
      );

      clearProjectState();
    },
    onError: async (error) => {
      const errorMsg = await errorFunc(error);
      toast.error(errorMsg);
    },
  });

  const handleUpdateToTheSite = async (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <div
        ref={articleHeadingRef}
        className="order-1 flex min-h-80v flex-grow flex-col  pt-40 sm:order-1"
      >
        <h2 className="text-center text-2xl font-medium text-gray-700">
          Article Headings
        </h2>
        <p className="text-center text-sm text-gray-700">
          {"These are the heading <h2> and <h3> of the source title"}
        </p>
        <p className="text-center text-sm text-gray-700">
          {"Choose one to add the generated content above the heading"}
        </p>

        {isLoading ? (
          <>{"Getting article heading"}</>
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
              <div className="mt-5 flex flex-col md:mr-64 ">
                <div>
                  {updatePost && (
                    <button
                      className={`btn ml-5 w-72 max-w-6xl ${
                        mutation.isLoading ? "btn-disabled " : "btn-primary "
                      }`}
                      onClick={() => handleUpdateToTheSite(updatePost)}
                      disabled={mutation.isLoading ? true : false}
                    >
                      {mutation.isLoading ? (
                        <ButtonLoader loadingText={"Updating..."} />
                      ) : mutation.isSuccess ? (
                        "Updated"
                      ) : (
                        "Update post"
                      )}
                    </button>
                  )}
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
