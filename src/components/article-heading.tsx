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
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuthState } from "../context/auth-context";
import { useAppState } from "../context/update-post-context";
import { privateClient } from "../lib/api-config";
import { useErrorHandling } from "../utils/error-handling";
import ArticleHeadingCard from "./article-headings-card";

const ArticleHeading = () => {
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
    dispatch,
  } = useAppState();
  const errorFunc = useErrorHandling();

  const getArticleHeadings = async (): Promise<{
    headings(headings: unknown): unknown;
    data: unknown;
  }> => {
    if (generatedParagraph) {
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
    }
  };

  const { data } = useQuery({
    queryKey: ["articleHeadings"],
    queryFn: getArticleHeadings,
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    retry: false,
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
      await dispatch({
        type: "aiSuggestions",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        payload: [],
      });
      await dispatch({
        type: "generatedHeading",
        payload: "",
      });

      await dispatch({
        type: "generatedParagraph",
        payload: "",
      });
      await dispatch({
        type: "relevantTerm",
        payload: "data",
      });
      await dispatch({
        type: "aiSuggestions",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        payload: [],
      });
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
      <div className=" order-1 flex flex-grow flex-col sm:order-1 ">
        <div className=" flex items-center justify-start">
          <div className="mt-5 space-y-3">
            {checkData?.map((heading, i) => (
              <ArticleHeadingCard
                key={i}
                heading={heading}
                handleUpdateAbove={handleUpdateAbove}
              />
            ))}
          </div>
        </div>
        <div className="mt-5 flex items-center justify-start">
          {updatePost && (
            <button
              className="btn-primary btn ml-5 w-72 max-w-6xl"
              onClick={() => handleUpdateToTheSite(updatePost)}
              disabled={mutation.isLoading ? true : false}
            >
              {mutation.isLoading
                ? "Updating to the site"
                : mutation.isSuccess
                ? "Updated"
                : "Update to the site"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ArticleHeading;
