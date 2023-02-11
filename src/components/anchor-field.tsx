/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { useAuthState } from "../context/auth-context";
import { useAppState } from "../context/update-post-context";
import { privateClient } from "../lib/api-config";
import { useErrorHandling } from "../utils/error-handling";
import Input from "./input";

const AnchorTextSchema = z.object({
  anchorText: z
    .string()
    .min(4, "relevant term must be more than 4 characters!"),
});

const AnchorField = () => {
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
      reset();
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
    <section>
      <div className=" mx-auto my-10 flex items-center justify-center px-6">
        <form
          className="w-full max-w-md"
          onSubmit={handleSubmit(handleAnchorSubmit)}
        >
          <h1 className="mt-3 text-2xl font-semibold capitalize text-gray-800  sm:text-3xl">
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
              className="btn-primary btn"
              disabled={mutation.isLoading ? true : false}
            >
              {mutation.isLoading
                ? "Generating Paragraph..."
                : "Generate Paragraph"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AnchorField;
