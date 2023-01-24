import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import API from "../../../../api/api-config";
import { useAppState } from "../../../context/AppProvider";
import { useAuthState } from "../../../context/AuthProvider";

const chosenTitleUrl = z.object({
  title: z.string().min(5, "post title must be more than 5 characters!"),
});

const ChosenTitleUrl = () => {
  const {
    state: {
      selectedProject,
      choosenTitleUrl,
      postTitleUrlTerm: { source_title },
      generatedHeading,
    },
    dispatch,
  } = useAppState();
  const { auth, handleLogout } = useAuthState();
  const navigate = useNavigate();
  // react state
  const [headingLoader, setHeadingLoader] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(chosenTitleUrl),
  });

  useEffect(() => {
    let defaultValues = {};
    // setValue func imported as default value
    defaultValues.title = choosenTitleUrl.title;
    defaultValues.url = choosenTitleUrl.url;
    reset({ ...defaultValues });
  }, [choosenTitleUrl]);

  const handleChosenTitleURl = async (data) => {
    const postData = JSON.stringify({
      target_title: data.title,
      source_title,
    });

    try {
      // set loading state
      setHeadingLoader(true);
      // post data to the api
      const response = await API.post("core/heading", postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth?.token}` : "",
        },
        // withCredentials: "true",
      });

      if (response?.status == 200 && !response?.data?.msg) {
        setHeadingLoader(false);
        await dispatch({
          type: "generatedHeading",
          payload: response?.data?.heading,
        });
      } else {
        setHeadingLoader(false);
        toast.warning(response?.data?.msg);
      }
    } catch (error) {
      setHeadingLoader(false);
      if (error?.response?.data?.msg) {
        if (error?.response?.data?.msg == "Token has expired") {
          handleLogout();
        } else {
          toast.error(error?.response?.data?.msg);
        }
      } else if (error?.message == "Network Error") {
        toast(error.message);
      } else {
        toast(error.message);
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
          <div className="form-control md:flex-row gap-2 sm:gap-4 md:gap-6 items-center">
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
          <div className="form-control md:flex-row gap-2 sm:gap-4 md:gap-6 items-center">
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
              className="btn bg-accent-dark hover:bg-[#1A3353] w-full sm:w-auto capitalize text-white border-none rounded"
              disabled={headingLoader ? true : false}
            >
              {headingLoader ? (
                <div className="flex items-center">
                  Preparing your heading
                  <div role="status" className="ml-2">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : generatedHeading ? (
                "Re-Generate Heading"
              ) : (
                "Generate Heading"
              )}
            </button>

            <p className="text-black/60 text-sm">
              Remember, You can always regenerate!
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChosenTitleUrl;
