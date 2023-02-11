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
import { useAuthState } from "../context/auth-context";
import { useAppState } from "../context/update-post-context";
import { privateClient } from "../lib/api-config";
import ArticleHeadingCard from "./article-headings-card";

const ArticleHeading = () => {
  const queryClient = useQueryClient();
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

  const queryCache = new QueryCache();

  const getArticleHeadings = async (): Promise<{
    headings(headings: any): unknown;
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

  const { data } = useQuery({
    queryKey: ["articleHeadings"],
    queryFn: getArticleHeadings,
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    retry: false,
    // refetchOnReconnect: false,
    // staleTime: 5 * 60 * 1000,
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
      console.log(headingData);
    },
  });

  const handleUpdateToTheSite = async (data) => {
    mutation.mutate(data);
  };

  return (
    <>
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
        <button
          className="btn-primary btn ml-5 w-72 max-w-6xl"
          onClick={() => handleUpdateToTheSite(updatePost)}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default ArticleHeading;
