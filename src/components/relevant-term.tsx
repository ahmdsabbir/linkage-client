/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAuthState } from "../context/auth-context";
import { useAppState } from "../context/update-post-context";
import { privateClient } from "../lib/api-config";
import Input from "./input";

const RelevantTermSchema = z.object({
  relevantTerm: z
    .string()
    .min(4, "relevant term must be more than 4 characters!"),
});

const RelevantTerm = () => {
  const {
    state: { selectedProject, targetTitleUrlTerm },
    dispatch,
  } = useAppState();
  const { auth } = useAuthState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RelevantTermSchema),
  });

  // axios post
  const getSuggestions = async (data): Promise<{ data: unknown }> => {
    const postData = JSON.stringify({
      domain: selectedProject.domain,
      relevant_term: data.relevantTerm,
      source_title: targetTitleUrlTerm.target_title,
    });
    console.log(postData);

    const response = await privateClient.post(
      "api/core/suggestions",
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
    mutationFn: getSuggestions,
    onSuccess: async (successData) => {
      // Invalidate and refetch
      console.log(successData?.suggestions);
      await dispatch({
        type: "aiSuggestions",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        payload: [...successData?.suggestions],
      });
    },
  });

  const handleRelevantSubmit = async (data) => {
    await dispatch({ type: "relevantTerm", payload: data });
    mutation.mutate(data);
  };

  return (
    <section>
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <form
          className="w-full max-w-md"
          onSubmit={handleSubmit(handleRelevantSubmit)}
        >
          <h1 className="mt-3 text-2xl font-semibold capitalize text-gray-800  sm:text-3xl">
            Input Your Relevant Term
          </h1>
          <Input
            id={"relevantTerm"}
            label={"Relevant Term"}
            infoText={"aka, Target Post"}
            type={"text"}
            placeholder={"relevant term"}
            inputProps={register("relevantTerm")}
            error={errors.relevantTerm?.message as string}
          />

          <div className="mt-4">
            <button className="btn-primary btn">Get Suggestions</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RelevantTerm;
