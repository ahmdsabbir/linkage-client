import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import API from "../../../../api/api-config";
import { useAppState } from "../../../context/AppProvider";
import { useAuthState } from "../../../context/AuthProvider";

const chosenTitleUrl = z.object({
  title: z.string().min(5, "post title must be more than 5 characters!"),
});

const ChosenTitleUrl = () => {
  const {
    state: { selectedProject, choosenTitleUrl, postTitleUrlTerm },
    dispatch,
  } = useAppState();
  const { auth } = useAuthState();
  // react state
  const [headingLoader, setHeadingLoader] = useState(false);
  const [chosenTitleUrlError, setChosenTitleUrlError] = useState("");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(chosenTitleUrl),
  });

  useEffect(() => {
    // setValue func imported as default value
    let defaultValues = {};
    defaultValues.title = choosenTitleUrl.title;
    defaultValues.url = choosenTitleUrl.url;
    reset({ ...defaultValues });
  }, [choosenTitleUrl]);
  const handleChosenTitleURl = async (data) => {
    const postData = JSON.stringify({
      target_title: postTitleUrlTerm.target_title,
      source_title: data.title,
    });

    try {
      // empty error state
      setChosenTitleUrlError("");
      // set loading state
      setHeadingLoader(true);
      // post data to the api
      const response = await API.post("/core/heading", postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth?.token}` : "",
        },
        withCredentials: "true",
      });

      if (response?.status === 200 && !response?.data?.msg) {
        setHeadingLoader(false);
        await dispatch({
          type: "generatedHeading",
          payload: response?.data?.heading,
        });
        setChosenTitleUrlError("");
      }
    } catch (error) {
      setHeadingLoader(false);
      if (!error?.response) {
        setChosenTitleUrlError(error?.message);
      } else if (error?.status == 400 || error?.status == 401) {
        setChosenTitleUrlError(error?.message);
      } else if (error?.message == "Network Error") {
        setChosenTitleUrlError(error?.message);
      } else {
        setChosenTitleUrlError(error?.message);
      }
    }
  };
  return (
    <>
      <div className="">
        <form
          className="grid grid-cols-1 gap-3 mb-2"
          onSubmit={handleSubmit(handleChosenTitleURl)}
        >
          <div className="form-control md:flex-row gap-2 sm:gap-4 md:gap-6">
            <label
              htmlFor="title"
              className=" font-medium whitespace-nowrap flex-1 sm:min-w-[85px]"
            >
              Chosen Title
            </label>
            <textarea
              type="text"
              required
              autoFocus
              placeholder="Post title"
              {...register("title", { required: true })}
              className="textarea focus:outline-none input-bordered w-full"
            />
          </div>
          {errors.title && (
            <span className="alert alert-error shadow-lg w-auto p-2 mb-2">
              {errors.title?.message}
            </span>
          )}
          <div className="form-control md:flex-row gap-2 sm:gap-4 md:gap-6">
            <label
              htmlFor="url"
              className=" font-medium whitespace-nowrap flex-1 sm:min-w-[85px]"
            >
              Chosen Url
            </label>
            <textarea
              type="text"
              disabled
              placeholder="url"
              {...register("url")}
              className="textarea focus:outline-none input-bordered align-middle w-full"
            />
          </div>

          <div className="md:ml-[110px]">
            <button
              className="btn bg-accent-dark hover:bg-[#1A3353] capitalize text-white border-none rounded"
              disabled={headingLoader ? true : false}
            >
              {headingLoader ? "Generating..." : "Generate Heading"}
            </button>
            <p className="text-black/60 text-sm">
              Remember, You can always regenerate!
            </p>
            {chosenTitleUrlError && (
              <p className="text-red-800">{chosenTitleUrlError}</p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default ChosenTitleUrl;
