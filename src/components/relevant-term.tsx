/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { useAuthState } from "../context/auth-context";
import { useAppState } from "../context/update-post-context";
import { privateClient } from "../lib/api-config";
import { useErrorHandling } from "../utils/error-handling";
import ButtonLoader from "./button-loader";
import Input from "./input";

const RelevantTermSchema = z.object({
  relevantTerm: z
    .string()
    .min(4, "relevant term must be more than 4 characters!"),
});

// eslint-disable-next-line react/display-name
const RelevantTerm = ({ relevantTermRef, suggestionsRef }, ref) => {
  const {
    state: { selectedProject, targetTitleUrlTerm },
    dispatch,
  } = useAppState();
  const { auth } = useAuthState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RelevantTermSchema),
  });

  const errorFunc = useErrorHandling();

  // axios post
  const getSuggestions = async (data): Promise<{ data: unknown }> => {
    const postData = JSON.stringify({
      domain: selectedProject.domain,
      relevant_term: data.relevantTerm,
      source_title: targetTitleUrlTerm.target_title,
    });

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
        type: "aiSuggestions",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        payload: [...successData?.suggestions],
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      suggestionsRef.current.scrollIntoView({ behavior: "smooth" });
      reset();
    },
    onError: async (error) => {
      const errorMsg = await errorFunc(error);
      toast.warning(errorMsg);
    },
  });

  const handleRelevantSubmit = async (data) => {
    await dispatch({ type: "relevantTerm", payload: data });
    mutation.mutate(data);
  };

  return (
    <section ref={relevantTermRef}>
      <div className=" my-10 flex min-h-80v  items-center justify-center px-6 pt-20">
        <div className=" flex w-full max-w-lg items-center  justify-center rounded-md py-6  shadow-lg">
          <form
            className="w-full max-w-md"
            onSubmit={handleSubmit(handleRelevantSubmit)}
          >
            <h1 className="mt-3 font-semibold capitalize text-gray-800 text-2xl  sm:text-3xl">
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
              <button
                className={`btn ${
                  mutation.isLoading ? "btn-disabled " : "btn-primary "
                }`}
                disabled={mutation.isLoading ? true : false}
              >
                {mutation.isLoading ? (
                  <ButtonLoader loadingText={"Getting Suggestions"} />
                ) : (
                  "Get Suggestions"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(RelevantTerm);
