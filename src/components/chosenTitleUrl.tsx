/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState } from "../context/auth-context";
import { useAppState } from "../context/update-post-context";
import { privateClient } from "../lib/api-config";
import { useErrorHandling } from "../utils/error-handling";
import ButtonLoader from "./button-loader";

type FormValues = {
  title: string;
  url: string;
};

const ChosenTitleUrl = () => {
  const {
    register,
    reset,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: "",
      url: "",
    },
  });

  const {
    state: {
      selectedProject,
      chosenTitleUrl,
      targetTitleUrlTerm: { target_title },
      generatedHeading,
    },
    dispatch,
  } = useAppState();

  const { auth } = useAuthState();
  const errorFunc = useErrorHandling();

  useEffect(() => {
    // setValue func imported as default value
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access

    setValue("title", chosenTitleUrl.title);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    setValue("url", chosenTitleUrl.url);
  }, [chosenTitleUrl, setValue]);

  // post data to the server
  // axios post
  const getHeading = async (data): Promise<{ data: unknown }> => {
    const postData = JSON.stringify({
      source_title: data.title,
      target_title,
    });

    const response = await privateClient.post("api/core/heading", postData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth.token ? `Bearer ${auth?.token}` : "",
      },
    });

    return response.data;
  };

  // mutation
  const mutation = useMutation({
    mutationFn: getHeading,
    onSuccess: async (headingData) => {
      await dispatch({
        type: "generatedHeading",
        payload: headingData?.heading,
      });
      reset();
    },
    onError: async (error) => {
      const errorMsg = await errorFunc(error);
      toast.error(errorMsg);
    },
  });

  const handleGenerateHeadingSubmit = async (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="mb-6">
      <h2 className="my-3 text-2xl font-semibold capitalize text-gray-800  sm:text-3xl">
        Source Title and Url you have chosen
      </h2>
      <form onSubmit={handleSubmit(handleGenerateHeadingSubmit)}>
        <div className="space-y-5">
          <div>
            <label
              htmlFor="ChosenTitle"
              className="label flex-col items-baseline"
            >
              <span className="label-text text-base font-medium text-gray-700">
                ChosenTitle
              </span>
            </label>
            <textarea
              placeholder="chosen title..."
              className="  block h-32 w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-700 placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "
              {...register("title")}
            />
            {errors?.title && (
              <p className="text-error"> {errors.title?.message as string}</p>
            )}

            <p className="dark:text-accent-300 mt-3 text-xs text-accent">
              You can edit the post title as your needs before you hit the
              generate heading button !
            </p>
          </div>
          <div>
            <label
              htmlFor="ChosenURL"
              className="label flex-col items-baseline"
            >
              <span className="label-text text-base font-medium text-gray-700">
                ChosenURL
              </span>
            </label>
            <textarea
              placeholder="chosen title..."
              className="   disabled: block h-32 w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-2.5 text-gray-700 placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              disabled
              {...register("url")}
            />
            {errors?.url && (
              <p className="text-error"> {errors.url?.message as string}</p>
            )}
          </div>
        </div>
        {/* button */}
        <div className="mt-6">
          <button
            className={`btn ${
              mutation.isLoading ? "btn-disabled " : "btn-primary "
            }`}
            disabled={
              mutation.isLoading ||
              !(chosenTitleUrl.title && chosenTitleUrl.url)
                ? true
                : false
            }
          >
            {mutation.isLoading ? (
              <ButtonLoader loadingText={"Generating Heading..."} />
            ) : (
              "Generate Heading"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChosenTitleUrl;
