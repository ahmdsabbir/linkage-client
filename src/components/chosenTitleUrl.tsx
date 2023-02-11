/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "../context/auth-context";
import { useAppState } from "../context/update-post-context";
import { privateClient } from "../lib/api-config";

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
  });

  const handleGenerateHeadingSubmit = async (data) => {
    mutation.mutate(data);
  };

  return (
    <div>
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
            <p className="dark:text-accent-300 mt-3 text-xs text-accent">
              You can edit the post title as your needs before you hit the next
              button !
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
          </div>
        </div>
        {/* button */}
        <div className="mt-6">
          <button className="btn-primary btn">Generate Heading</button>
        </div>
      </form>
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6"></div>
    </div>
  );
};

export default ChosenTitleUrl;
