/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { QueryCache, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthState } from "../context/auth-context";
import { useAppState } from "../context/update-post-context";
import { privateClient } from "../lib/api-config";
import ArticleHeadingCard from "./article-headings-card";

const ArticleHeading = () => {
  const queryClient = useQueryClient();
  const { auth } = useAuthState();
  const {
    state: {
      projects,
      chosenTitleUrl,
      selectedProject,
      generatedParagraph,
      generatedHeading,
    },
    dispatch,
  } = useAppState();

  const queryCache = new QueryCache();

  const getArticleHeadings = async (): Promise<{ data: unknown }> => {
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

  //   show above on select card

  return (
    <div className="flex items-center justify-start">
      <div className="mt-5 space-y-3">
        {data?.headings.map((heading, i) => (
          <ArticleHeadingCard key={heading + i} heading={heading} />
        ))}
      </div>
    </div>
  );
};

export default ArticleHeading;
