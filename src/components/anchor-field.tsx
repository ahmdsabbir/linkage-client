/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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

const AnchorTextSchema = z.object({
  anchorText: z
    .string()
    .min(4, "relevant term must be more than 4 characters!"),
});

const AnchorField = ({ anchorFieldRef, paragraphRef }, ref) => {
  const {
    state: { generatedHeading, targetTitleUrlTerm, chosenTitleUrl },
    dispatch,
  } = useAppState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AnchorTextSchema),
  });
  const { auth } = useAuthState();
  const errorFunc = useErrorHandling();

  // axios post
  const getParagraph = async (data): Promise<{ data: unknown }> => {
    const postData = JSON.stringify({
      combined_heading: generatedHeading,
      anchor_text: data.anchorText,
      source_url: chosenTitleUrl.url,
    });

    const response = await privateClient.post("api/core/paragraph", postData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth.token ? `Bearer ${auth?.token}` : "",
      },
    });

    return response.data;
  };

  // mutation
  const mutation = useMutation({
    mutationFn: getParagraph,
    onSuccess: async (para) => {
      await dispatch({
        type: "generatedParagraph",
        payload: para.paragraph,
      });
      paragraphRef.current.scrollIntoView({ behavior: "smooth" });
    },
    onError: async (error) => {
      const errorMsg = await errorFunc(error);
      toast.error(errorMsg);
    },
  });

  const handleAnchorSubmit = async (data) => {
    mutation.mutate(data);
  };

  return (
    <section ref={anchorFieldRef}>
      <div className=" mx-auto my-10 flex min-h-80v items-center justify-center px-6 pt-40">
        <div className=" flex w-full max-w-lg items-center  justify-center rounded-md py-6  shadow-lg">
          <form
            className="w-full max-w-md"
            onSubmit={handleSubmit(handleAnchorSubmit)}
          >
            <h1 className="mt-3 font-semibold capitalize text-gray-800 text-2xl  sm:text-3xl">
              Input Your Anchor Text
            </h1>
            <Input
              id={"anchorField"}
              label={"Anchor Text"}
              infoText={"aka, Anchor Text"}
              type={"text"}
              placeholder={"Anchor Text"}
              inputProps={register("anchorText")}
              error={errors.anchorText?.message as string}
            />

            <div className="mt-4">
              <button
                className={`btn ${
                  mutation.isLoading ? "btn-disabled " : "btn-primary "
                }`}
                disabled={
                  mutation.isLoading ? true : !generatedHeading ? true : false
                }
              >
                {mutation.isLoading ? (
                  <ButtonLoader loadingText={"Generating Paragraph..."} />
                ) : (
                  "Generate Paragraph"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(AnchorField);
